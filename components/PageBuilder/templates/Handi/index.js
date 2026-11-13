/**
 * Template: Handi Kitchen & Catering.
 *
 * A food delivery and catering service (handi: the cooking pot): home-style
 * biryani, curries, kebabs, bhorta, snacks, desserts and meal boxes
 * delivered hot, weekly tiffin plans, party trays, and full-service
 * catering for weddings, offices, milad and mezban. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from Pauruti/index.js: every page except Home keeps Pauruti's
 * block structure (ids renamed pr- to hd-, palette remapped, copy
 * rewritten for a kitchen); the Header is restyled (a green utility bar, a
 * CSS pot logo - turmeric body, chilli lid - an italic Fraunces wordmark and
 * a ten-item icon menu ending in Today's specials) and Home is built fresh.
 * It is plain data: edit freely.
 *
 * THE HERO: "the tiffin stack"
 *
 *   On cream: a banana-leaf green arch (turmeric dot pattern, a dashed inner
 *   arch) holding a three-tier enamel tiffin carrier
 *   (public/templates/handi-hero.svg), each tier labelled as a course; a
 *   tilted order receipt with a scalloped tear-off edge and a live tracker
 *   (cooked - on the way - delivered); a "rider 6 min away" chip and a
 *   spinning "cooked fresh at 6 am" badge (public/templates/handi-badge.svg).
 *   Beside it: a kitchen-open chip, a Bangla line, "Hot meals today." over
 *   an italic "Feasts for 500 tomorrow.", and an order card with Delivery /
 *   Catering tabs, the address and time. Under it, a green meal-times bar
 *   (breakfast, lunch - ordering now -, snacks, dinner) linking to tags.
 *
 * DESIGN
 *
 *   leaf green  #0E4D3A  primary: arch, bands, prices      #0A3A2C deep  #E3F0E9 tint
 *   chilli      #E4572E  secondary: CTAs, kickers, sale    #C9431D deep  #FDE7DF tint
 *   turmeric    #F4B400  accent: add buttons, ticker, stars              #FFF2CC tint
 *   cream #FFF8EE (page)  cream-2 #FBEBD3  ink #1E1A14  muted #75685A
 *   line #EFE2CF  clay #E8D6BC
 *
 * Fonts (template meta): Fraunces (headings; italic for accents, prices and
 * numbers), DM Sans (body), Space Mono via `font-['Space_Mono']` for the
 * receipt, times and prices-per-head, Hind Siliguri via
 * `font-['Hind_Siliguri']` for the Bangla line in the hero.
 *
 * Product cards: a 4:3 photo well, a chilli "% OFF" pill, the rating, the
 * dish name in Fraunces, one excerpt line (use it for the portion, e.g.
 * "Full plate · serves 1"), and under a dashed rule the price in green and
 * a turmeric "+ Add" pill.
 *
 * HOME
 *
 *   Tiffin-stack hero (#order) with the meal-times bar - turmeric ticker -
 *   cravings as plates (#menu) - today's specials (#today) - how it works
 *   with delivery areas (#how) - tiffin plans (#tiffin) - bestsellers
 *   (#bestsellers) - catering with a guest-count picker, event types,
 *   per-head packages and what's included (#catering) - party trays
 *   (#party-trays) - the kitchen promise (#kitchen) - reviews (#reviews) -
 *   kitchen stories (#journal) - FAQ with a WhatsApp event card (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: biryani-rice, curries, kebab-grill, bhorta-veg,
 *     snacks, desserts, drinks, meal-boxes, party-trays. Tag slugs: today,
 *     bestseller, breakfast, lunch, dinner, snacks, tiffin-plan,
 *     office-lunch, family-dinner, healthy-bowl. product_brand terms are
 *     shown as "kitchens".
 *   - The order card, receipt, tracker and rider chip are visuals, not
 *     forms: the tabs and button link to #menu and #catering.
 *   - Delivery areas and times, the ৳800 free-delivery threshold, plan and
 *     per-head prices, "4.9 from 12,000+ orders", the kitchen stats, the
 *     reviews and the free tasting are sample copy: offer only what you
 *     actually run. The WhatsApp links are https://wa.me/ - add your number.
 */

var template = [
  {
    "name": "Handi Kitchen & Catering",
    "description": "Warm, modern food delivery and catering service in banana-leaf green, chilli and turmeric on cream, with Fraunces (italic accents), DM Sans and Space Mono: a pot-shaped logo, a \"tiffin stack\" hero - an enamel tiffin carrier on a green arch with each tier labelled as a course, a tilted order receipt with a live delivery tracker, a rider chip and a spinning \"cooked fresh\" badge - beside a delivery / catering order card, then a meal-times bar, a turmeric ticker, cravings as plates, today's specials, how it works with delivery areas, weekly tiffin plans, bestsellers, catering with a guest-count picker and per-head packages, party trays, the kitchen promise, reviews, kitchen stories and FAQ. All 16 pages.",
    "thumbnail": "/templates/handi.svg",
    "meta": {
      "fonts": [
        {
          "family": "Fraunces",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "DM Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Space Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Hind Siliguri",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Fraunces",
        "body": "DM Sans"
      },
      "colors": {
        "primary": "#0E4D3A",
        "secondary": "#E4572E",
        "accent": "#F4B400",
        "background": "#FFF8EE",
        "foreground": "#1E1A14",
        "muted": "#75685A"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "hd-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full"
              }
            },
            "children": [
              {
                "id": "hd-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#0E4D3A]"
                  }
                },
                "children": [
                  {
                    "id": "hd-hdr-util",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-9 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-hdr-util-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hdr-util-loc",
                            "type": "button",
                            "options": {
                              "text": "Deliver to: Dhanmondi",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconMapPin",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-white whitespace-nowrap transition-opacity group-hover:opacity-70 underline decoration-dotted underline-offset-4"
                              }
                            }
                          },
                          {
                            "id": "hd-hdr-util-slot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden items-center gap-1.5 sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hdr-util-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-1.5 animate-pulse rounded-full bg-[#F4B400]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-hdr-util-slot-t",
                                "type": "text",
                                "options": {
                                  "text": "Kitchen open · lunch delivered 12–3 pm · order by 11 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-white/75"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-hdr-util-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-5 md:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hdr-util-cater",
                            "type": "button",
                            "options": {
                              "text": "Catering & events",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#catering",
                              "target": "",
                              "icon": "IconToolsKitchen2",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-white whitespace-nowrap transition-opacity group-hover:opacity-70"
                              }
                            }
                          },
                          {
                            "id": "hd-hdr-util-tiffin",
                            "type": "button",
                            "options": {
                              "text": "Tiffin plans",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#tiffin",
                              "target": "",
                              "icon": "IconCalendarEvent",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-white whitespace-nowrap transition-opacity group-hover:opacity-70"
                              }
                            }
                          },
                          {
                            "id": "hd-hdr-util-track",
                            "type": "button",
                            "options": {
                              "text": "Track order",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconTruck",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-white whitespace-nowrap transition-opacity group-hover:opacity-70"
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
                "id": "hd-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-white"
                  }
                },
                "children": [
                  {
                    "id": "hd-hdr-bar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-hdr-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-[72px] items-center justify-between gap-4 lg:gap-8"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hdr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hdr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-[#0E4D3A] transition-transform group-hover:-rotate-6 before:absolute before:inset-x-[9px] before:bottom-[9px] before:top-[18px] before:rounded-b-[14px] before:rounded-t-[4px] before:bg-[#F4B400] before:content-[''] after:absolute after:left-1/2 after:top-[11px] after:h-[5px] after:w-[18px] after:-translate-x-1/2 after:rounded-full after:bg-[#E4572E] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "hd-hdr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hdr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "handi",
                                      "src": "https://placehold.co/200x64?text=Handi",
                                      "altText": "Handi",
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
                                        "classes": "font-heading text-[28px] font-semibold italic leading-none tracking-[-0.03em] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hdr-brand-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Kitchen & catering",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#E4572E]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search biryani, kebab, meal boxes...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden min-w-0 max-w-2xl flex-1 rounded-full bg-[#FBEBD3] py-1.5 pl-5 pr-1.5 ring-1 ring-transparent transition-all focus-within:bg-white focus-within:ring-[#E8D6BC] md:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-1 py-1.5 font-body text-sm text-[#1E1A14] placeholder:text-[#75685A] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "order-last flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E4572E] text-white"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0E4D3A]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#0E4D3A]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0E4D3A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A3A2C]"
                              }
                            }
                          },
                          {
                            "id": "hd-hdr-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hdr-account",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] text-[#0E4D3A] ring-1 ring-[#EFE2CF] transition-colors hover:bg-[#FBEBD3]"
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
                                "id": "hd-hdr-cart",
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
                                  "crossSellsTitle": "Add a side or a drink",
                                  "crossSellsLimit": 4
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  },
                                  "trigger-icon": {
                                    "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#0E4D3A] text-white transition-colors hover:bg-[#E4572E]"
                                  },
                                  "trigger-badge": {
                                    "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#0E4D3A] px-1 text-[10px] font-bold text-white"
                                  },
                                  "header": {
                                    "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFF8EE] px-5 py-4"
                                  },
                                  "title": {
                                    "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#1E1A14]"
                                  },
                                  "title-icon": {
                                    "classes": "text-[#0E4D3A]"
                                  },
                                  "count-badge": {
                                    "classes": "rounded-full bg-[#0E4D3A] px-2 py-0.5 text-xs font-bold text-white"
                                  },
                                  "trigger": {
                                    "classes": "flex items-center gap-2 rounded-lg bg-[#0E4D3A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0A3A2C]"
                                  },
                                  "close-button": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/30"
                                  },
                                  "coupon-code-input": {
                                    "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15"
                                  },
                                  "coupon-apply": {
                                    "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0E4D3A] px-4 py-2 text-sm font-medium text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white disabled:opacity-60"
                                  },
                                  "checkout-button": {
                                    "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0E4D3A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A3A2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "hd-hdr-mobile",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] text-[#0E4D3A] ring-1 ring-[#EFE2CF]"
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
                                    "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFF8EE] p-2 text-[#1E1A14] transition-colors hover:bg-[#0E4D3A] hover:text-white"
                                  },
                                  "popover-content": {
                                    "classes": "flex flex-col gap-6 p-6 pt-16"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hdr-m-brand",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group flex shrink-0 items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hdr-m-brand-mark",
                                        "type": "text",
                                        "options": {
                                          "text": "",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-[#0E4D3A] transition-transform group-hover:-rotate-6 before:absolute before:inset-x-[9px] before:bottom-[9px] before:top-[18px] before:rounded-b-[14px] before:rounded-t-[4px] before:bg-[#F4B400] before:content-[''] after:absolute after:left-1/2 after:top-[11px] after:h-[5px] after:w-[18px] after:-translate-x-1/2 after:rounded-full after:bg-[#E4572E] after:content-['']"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hdr-m-brand-words",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-hdr-m-brand-logo",
                                            "type": "logo",
                                            "options": {
                                              "logoType": "text",
                                              "logoText": "handi",
                                              "src": "https://placehold.co/200x64?text=Handi",
                                              "altText": "Handi",
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
                                                "classes": "font-heading text-[28px] font-semibold italic leading-none tracking-[-0.03em] text-[#0E4D3A]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-hdr-m-brand-tag",
                                            "type": "text",
                                            "options": {
                                              "text": "Kitchen & catering",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#E4572E]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-hdr-m-search",
                                    "type": "quickSearch",
                                    "options": {
                                      "placeholder": "Search dishes...",
                                      "iconPosition": "",
                                      "icon": "IconSearch"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full border border-gray-200 bg-[#FFF8EE] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#E4572E] focus-within:ring-2 focus-within:ring-[#E4572E]/20 w-full"
                                      },
                                      "input-wrapper": {
                                        "classes": "flex items-center gap-2"
                                      },
                                      "input-search": {
                                        "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1E1A14] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#75685A]"
                                      },
                                      "filter-select": {
                                        "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15"
                                      },
                                      "result-title": {
                                        "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0E4D3A]"
                                      },
                                      "result-price": {
                                        "classes": "font-semibold text-[#0E4D3A]"
                                      },
                                      "add-button": {
                                        "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0E4D3A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A3A2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hdr-m-menu",
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
                                        "classes": "group"
                                      },
                                      "sub-menu": {
                                        "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                                      },
                                      "menu-link": {
                                        "classes": "!justify-start !gap-3 border-b border-[#EFE2CF] py-3 font-body text-base font-semibold text-[#1E1A14] transition-colors hover:text-[#E4572E]"
                                      },
                                      "link-label": {
                                        "classes": ""
                                      },
                                      "icon": {
                                        "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#FBEBD3] text-[#0E4D3A]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hdr-m-menu-i1",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Biryani & rice",
                                          "url": "/categories/biryani-rice",
                                          "icon": "IconBowlChopsticks",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i2",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Curries",
                                          "url": "/categories/curries",
                                          "icon": "IconSoup",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i3",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Kebab & grill",
                                          "url": "/categories/kebab-grill",
                                          "icon": "IconMeat",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i4",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Bhorta & veg",
                                          "url": "/categories/bhorta-veg",
                                          "icon": "IconSalad",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i5",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Snacks",
                                          "url": "/categories/snacks",
                                          "icon": "IconBurger",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i6",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Desserts",
                                          "url": "/categories/desserts",
                                          "icon": "IconIceCream2",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i7",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Drinks",
                                          "url": "/categories/drinks",
                                          "icon": "IconCup",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i8",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Meal boxes",
                                          "url": "/categories/meal-boxes",
                                          "icon": "IconPackage",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i9",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Catering",
                                          "url": "/#catering",
                                          "icon": "IconToolsKitchen2",
                                          "iconSize": 18
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
                                        "id": "hd-hdr-m-menu-i10",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Today’s specials",
                                          "url": "/tags/today",
                                          "icon": "IconFlame",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": ""
                                          },
                                          "label": {
                                            "classes": ""
                                          },
                                          "link": {
                                            "classes": "!text-[#E4572E]"
                                          },
                                          "icon": {
                                            "classes": "!bg-[#FDE7DF] !text-[#E4572E]"
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
                "id": "hd-hdr-rail",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden w-full border-t border-[#EFE2CF] bg-white lg:block"
                  }
                },
                "children": [
                  {
                    "id": "hd-hdr-rail-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center py-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-hdr-menu",
                        "type": "menu",
                        "options": {
                          "showFrom": "lg",
                          "label": "Main menu"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "w-full"
                          },
                          "menu": {
                            "classes": "flex items-center justify-between gap-1"
                          },
                          "menu-item": {
                            "classes": "group"
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "!flex-col !gap-1 whitespace-nowrap rounded-2xl px-2.5 py-1.5 font-body text-xs font-semibold text-[#1E1A14] transition-colors hover:bg-[#FFF8EE] xl:px-3"
                          },
                          "link-label": {
                            "classes": ""
                          },
                          "icon": {
                            "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#FBEBD3] text-[#0E4D3A] transition-all group-hover:-translate-y-0.5 group-hover:bg-[#F4B400]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Biryani & rice",
                              "url": "/categories/biryani-rice",
                              "icon": "IconBowlChopsticks",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Curries",
                              "url": "/categories/curries",
                              "icon": "IconSoup",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Kebab & grill",
                              "url": "/categories/kebab-grill",
                              "icon": "IconMeat",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Bhorta & veg",
                              "url": "/categories/bhorta-veg",
                              "icon": "IconSalad",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Snacks",
                              "url": "/categories/snacks",
                              "icon": "IconBurger",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Desserts",
                              "url": "/categories/desserts",
                              "icon": "IconIceCream2",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Drinks",
                              "url": "/categories/drinks",
                              "icon": "IconCup",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Meal boxes",
                              "url": "/categories/meal-boxes",
                              "icon": "IconPackage",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i9",
                            "type": "menuItem",
                            "options": {
                              "label": "Catering",
                              "url": "/#catering",
                              "icon": "IconToolsKitchen2",
                              "iconSize": 20
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
                            "id": "hd-hdr-menu-i10",
                            "type": "menuItem",
                            "options": {
                              "label": "Today’s specials",
                              "url": "/tags/today",
                              "icon": "IconFlame",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "!text-[#E4572E]"
                              },
                              "icon": {
                                "classes": "!bg-[#FDE7DF] !text-[#E4572E]"
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
                "id": "hd-hdr-scallop",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-2 w-full bg-[radial-gradient(circle_at_50%_0,#FFFFFF_7px,transparent_7.5px)] bg-[length:16px_8px] bg-repeat-x drop-shadow-[0_1.5px_0_#E8D6BC]"
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
            "id": "hd-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1E1A14] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "hd-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "hd-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[#F4B400] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Tomorrow’s menu",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                              }
                            }
                          },
                          {
                            "id": "hd-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "The next day’s menu, every evening at 7",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl text-[#1E1A14] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "hd-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "New dishes, tiffin-plan offers and festival catering menus.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-[#0E4D3A]/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconToolsKitchen2",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0E4D3A] px-6 py-3.5 transition-colors hover:bg-[#E4572E]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
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
                "id": "hd-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "hd-ftr-grid",
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
                        "id": "hd-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-white/10 transition-transform group-hover:-rotate-6 before:absolute before:inset-x-[9px] before:bottom-[9px] before:top-[18px] before:rounded-b-[14px] before:rounded-t-[4px] before:bg-[#F4B400] before:content-[''] after:absolute after:left-1/2 after:top-[11px] after:h-[5px] after:w-[18px] after:-translate-x-1/2 after:rounded-full after:bg-[#E4572E] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "hd-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "handi",
                                      "src": "https://placehold.co/200x64?text=Handi",
                                      "altText": "Handi",
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
                                        "classes": "font-heading text-[28px] font-semibold italic leading-none tracking-[-0.03em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "A home-style kitchen in Dhaka: everyday meals delivered hot, weekly tiffin plans for office and home, and full-service catering for 25 to 1,000 guests.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "hd-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E4D3A]"
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
                                "id": "hd-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E4D3A]"
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
                                "id": "hd-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E4D3A]"
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
                                "id": "hd-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E4D3A]"
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
                        "id": "hd-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Biryani & Rice",
                                  "icon": "",
                                  "slug": "/categories/biryani-rice"
                                },
                                {
                                  "text": "Curries",
                                  "icon": "",
                                  "slug": "/categories/curries"
                                },
                                {
                                  "text": "Kebab & Grill",
                                  "icon": "",
                                  "slug": "/categories/kebab-grill"
                                },
                                {
                                  "text": "Meal Boxes",
                                  "icon": "",
                                  "slug": "/categories/meal-boxes"
                                },
                                {
                                  "text": "Desserts",
                                  "icon": "",
                                  "slug": "/categories/desserts"
                                },
                                {
                                  "text": "Party Trays",
                                  "icon": "",
                                  "slug": "/categories/party-trays"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "font-heading text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#F4B400]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#F4B400]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ftr-ll-care",
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
                                  "text": "Delivery Areas",
                                  "icon": "",
                                  "slug": "/#how"
                                },
                                {
                                  "text": "Tiffin Plans",
                                  "icon": "",
                                  "slug": "/#tiffin"
                                },
                                {
                                  "text": "Catering & Events",
                                  "icon": "",
                                  "slug": "/#catering"
                                },
                                {
                                  "text": "Help & FAQ",
                                  "icon": "",
                                  "slug": "/#faq"
                                }
                              ]
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              },
                              "header-text": {
                                "classes": "font-heading text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#F4B400]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#F4B400]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ftr-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "Contact Us",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "hd-ftr-address",
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
                                "label": "Kitchen",
                                "value": "Dhanmondi, Dhaka",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#F4B400]"
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
                                "classes": "shrink-0 text-[#0E4D3A]"
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
                "id": "hd-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "hd-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Handi. All rights reserved. Cooked this morning, at your door.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "hd-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-ftr-pay-txt",
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
            "id": "hd-hero",
            "type": "section",
            "options": {
              "anchor": "order"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF8EE] pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "hd-hero-blob",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#F4B400]/15 blur-3xl"
                  }
                },
                "children": []
              },
              {
                "id": "hd-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-start gap-6 lg:col-span-6 lg:pb-10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hero-chip",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-2.5 pr-4 ring-1 ring-[#EFE2CF]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-live",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-2.5 w-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-live-ping",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FA56B] opacity-75"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-hero-live-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2FA56B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-chip-t",
                                "type": "text",
                                "options": {
                                  "text": "Kitchen open · delivering in ~35 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#1E1A14]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "ঘরের স্বাদ, গরম গরম দরজায়",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Hind_Siliguri'] text-xl font-semibold text-[#E4572E]"
                              }
                            }
                          },
                          {
                            "id": "hd-hero-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Hot meals today.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[46px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#1E1A14] sm:text-7xl xl:text-[84px]"
                                  }
                                }
                              },
                              {
                                "id": "hd-hero-h1-2",
                                "type": "text",
                                "options": {
                                  "text": "Feasts for 500 tomorrow.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[46px] font-medium italic leading-[1.02] tracking-[-0.035em] text-[#0E4D3A] sm:text-7xl xl:text-[84px]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Home-style biryani, curries and meal boxes cooked every morning and delivered hot. Planning a wedding, office lunch or iftar? We cater for 25 to 1,000 guests.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base leading-relaxed text-[#75685A] sm:text-lg"
                              }
                            }
                          },
                          {
                            "id": "hd-hero-order",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full max-w-xl rounded-[28px] bg-white p-2 shadow-[0_30px_60px_-34px_rgba(30,26,20,0.45)] ring-1 ring-[#EFE2CF]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-tabs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-1 rounded-[22px] bg-[#FFF8EE] p-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-tab-1",
                                    "type": "button",
                                    "options": {
                                      "text": "Delivery",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#menu",
                                      "target": "",
                                      "icon": "IconMoped",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[18px] bg-[#0E4D3A] px-4 py-2.5 shadow-sm"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-white"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-tab-2",
                                    "type": "button",
                                    "options": {
                                      "text": "Catering",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#catering",
                                      "target": "",
                                      "icon": "IconToolsKitchen2",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[18px] px-4 py-2.5 transition-colors hover:bg-white"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#E4572E]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-fields",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2 p-2 pt-3 sm:flex-row sm:items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-f1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-1 items-center gap-3 rounded-[18px] px-3 py-2 sm:border-r sm:border-[#EFE2CF]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-f1-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconMapPin",
                                          "size": 18,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FDE7DF] text-[#E4572E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-f1-t",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-hero-f1-k",
                                            "type": "text",
                                            "options": {
                                              "text": "Deliver to",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#75685A]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-hero-f1-v",
                                            "type": "text",
                                            "options": {
                                              "text": "Dhanmondi 27, Dhaka",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-hero-f2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-1 items-center gap-3 rounded-[18px] px-3 py-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-f2-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconClock",
                                          "size": 18,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-f2-t",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-hero-f2-k",
                                            "type": "text",
                                            "options": {
                                              "text": "When",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#75685A]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-hero-f2-v",
                                            "type": "text",
                                            "options": {
                                              "text": "Lunch · 12:30 pm",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-hero-go",
                                    "type": "button",
                                    "options": {
                                      "text": "See menu",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#menu",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E4572E] px-6 py-3.5 shadow-[0_12px_24px_-12px_#E4572E] transition-all hover:-translate-y-0.5 hover:bg-[#C9431D] flex-row-reverse"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-white transition-transform group-hover:translate-x-0.5"
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
                            "id": "hd-hero-proof",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-5 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-rate",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-stars",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#F4B400]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-star-1",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-star-2",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-star-3",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-star-4",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-star-5",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconStarFilled",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-hero-rate-t",
                                    "type": "text",
                                    "options": {
                                      "text": "4.9 from 12,000+ orders",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1E1A14]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-halal",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-halal-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldCheck",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-halal-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Halal · no MSG",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#1E1A14]"
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
                        "id": "hd-hero-stage",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative min-h-[460px] sm:min-h-[580px] lg:col-span-6 lg:min-h-[640px]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-hero-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-0 left-1/2 top-4 w-[92%] max-w-[520px] -translate-x-1/2 overflow-hidden rounded-t-[999px] bg-[#0E4D3A]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-arch-dots",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 opacity-[0.18] bg-[radial-gradient(#F4B400_1.5px,transparent_1.6px)] bg-[size:22px_22px]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-hero-arch-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-[14%] h-[72%] w-[84%] -translate-x-1/2 rounded-t-[999px] border-2 border-dashed border-[#F4B400]/40"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-tiffin",
                            "type": "image",
                            "options": {
                              "src": "/templates/handi-hero.svg",
                              "altText": "A three-tier enamel tiffin carrier in chilli red, turmeric and cream, steaming",
                              "link": "/categories/meal-boxes",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-6 left-1/2 z-10 w-[64%] max-w-[340px] -translate-x-1/2 transition-transform duration-700 ease-out hover:-translate-y-2 hover:-rotate-2 sm:bottom-10"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full drop-shadow-[0_28px_28px_rgba(0,0,0,0.35)]"
                              }
                            }
                          },
                          {
                            "id": "hd-hero-tier-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex left-0 top-[44%] lg:-left-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-tier-1-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_28px_-14px_rgba(30,26,20,0.55)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-tier-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "1",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#F4B400] font-heading text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-tier-1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col leading-tight"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-tier-1-l",
                                        "type": "text",
                                        "options": {
                                          "text": "Kacchi biryani",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[13px] font-bold text-[#1E1A14] whitespace-nowrap"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-tier-1-s",
                                        "type": "text",
                                        "options": {
                                          "text": "tier 1 · full plate",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[10px] text-[#75685A] whitespace-nowrap"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-tier-1-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-6 border-t-2 border-dashed border-white/70 lg:w-10"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-tier-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex left-0 top-[61%] lg:-left-10"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-tier-2-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_28px_-14px_rgba(30,26,20,0.55)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-tier-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "2",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#F4B400] font-heading text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-tier-2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col leading-tight"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-tier-2-l",
                                        "type": "text",
                                        "options": {
                                          "text": "Chicken roast",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[13px] font-bold text-[#1E1A14] whitespace-nowrap"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-tier-2-s",
                                        "type": "text",
                                        "options": {
                                          "text": "tier 2 · 2 pcs",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[10px] text-[#75685A] whitespace-nowrap"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-tier-2-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-6 border-t-2 border-dashed border-white/70 lg:w-10"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-tier-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex left-0 top-[78%] lg:-left-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-tier-3-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_28px_-14px_rgba(30,26,20,0.55)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-tier-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#F4B400] font-heading text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-tier-3-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col leading-tight"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-hero-tier-3-l",
                                        "type": "text",
                                        "options": {
                                          "text": "Firni & borhani",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[13px] font-bold text-[#1E1A14] whitespace-nowrap"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-hero-tier-3-s",
                                        "type": "text",
                                        "options": {
                                          "text": "tier 3 · sweet + drink",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[10px] text-[#75685A] whitespace-nowrap"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "hd-hero-tier-3-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-6 border-t-2 border-dashed border-white/70 lg:w-10"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-badge",
                            "type": "image",
                            "options": {
                              "src": "/templates/handi-badge.svg",
                              "altText": "Cooked fresh at 6 am, no MSG",
                              "link": "/#kitchen",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[6%] top-0 z-20 h-24 w-24 animate-[spin_20s_linear_infinite] sm:h-28 sm:w-28"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "img": {
                                "classes": "h-full w-full"
                              }
                            }
                          },
                          {
                            "id": "hd-hero-rider",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-0 top-[16%] z-20 flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_14px_30px_-14px_rgba(30,26,20,0.5)]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-hero-rider-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoped",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#F4B400] text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-hero-rider-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col leading-tight"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-hero-rider-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Rider on the way",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[13px] font-bold text-[#1E1A14] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-hero-rider-v",
                                    "type": "text",
                                    "options": {
                                      "text": "6 min away",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] text-[#2FA56B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-hero-receipt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-0 right-0 z-30 hidden w-[250px] rotate-[3deg] drop-shadow-[0_24px_30px_rgba(30,26,20,0.35)] transition-transform duration-500 hover:rotate-0 sm:block lg:-right-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rc-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-3 rounded-t-[16px] bg-white px-4 pb-3 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rc-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center justify-between"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-rc-no",
                                        "type": "text",
                                        "options": {
                                          "text": "ORDER #1142",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[11px] font-bold tracking-wider text-[#1E1A14]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-rc-time",
                                        "type": "text",
                                        "options": {
                                          "text": "12:04 PM",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[11px] text-[#75685A]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-rc-lines",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 border-y border-dashed border-[#E8D6BC] py-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-rc-l1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline gap-2"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-l1-q",
                                            "type": "text",
                                            "options": {
                                              "text": "1×",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#E4572E]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l1-n",
                                            "type": "text",
                                            "options": {
                                              "text": "Kacchi biryani",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] text-[#1E1A14] whitespace-nowrap"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l1-dots",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-1 h-px flex-1 border-t border-dotted border-[#75685A]/50"
                                              }
                                            },
                                            "children": []
                                          },
                                          {
                                            "id": "hd-rc-l1-p",
                                            "type": "text",
                                            "options": {
                                              "text": "৳420",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#1E1A14]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "hd-rc-l2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline gap-2"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-l2-q",
                                            "type": "text",
                                            "options": {
                                              "text": "1×",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#E4572E]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l2-n",
                                            "type": "text",
                                            "options": {
                                              "text": "Chicken roast",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] text-[#1E1A14] whitespace-nowrap"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l2-dots",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-1 h-px flex-1 border-t border-dotted border-[#75685A]/50"
                                              }
                                            },
                                            "children": []
                                          },
                                          {
                                            "id": "hd-rc-l2-p",
                                            "type": "text",
                                            "options": {
                                              "text": "৳220",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#1E1A14]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "hd-rc-l3",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline gap-2"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-l3-q",
                                            "type": "text",
                                            "options": {
                                              "text": "2×",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#E4572E]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l3-n",
                                            "type": "text",
                                            "options": {
                                              "text": "Borhani",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] text-[#1E1A14] whitespace-nowrap"
                                              }
                                            }
                                          },
                                          {
                                            "id": "hd-rc-l3-dots",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mb-1 h-px flex-1 border-t border-dotted border-[#75685A]/50"
                                              }
                                            },
                                            "children": []
                                          },
                                          {
                                            "id": "hd-rc-l3-p",
                                            "type": "text",
                                            "options": {
                                              "text": "৳120",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#1E1A14]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-rc-total",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center justify-between"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-rc-total-k",
                                        "type": "text",
                                        "options": {
                                          "text": "TOTAL · COD",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[11px] font-bold text-[#75685A]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-rc-total-v",
                                        "type": "text",
                                        "options": {
                                          "text": "৳760",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-2xl font-semibold text-[#0E4D3A]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-rc-track",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex items-start pt-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-rc-track-line",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "absolute left-[16%] right-[16%] top-[19px] h-1 rounded-full bg-[#FBEBD3]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-track-fill",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "h-full w-[55%] rounded-full bg-[#0E4D3A]"
                                              }
                                            },
                                            "children": []
                                          }
                                        ]
                                      },
                                      {
                                        "id": "hd-rc-step-1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-1 flex-col items-center gap-1.5 text-center"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-step-1-dot",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative flex h-8 w-8 items-center justify-center rounded-full bg-[#0E4D3A] text-white"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "hd-rc-step-1-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconToolsKitchen2",
                                                  "size": 15,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "relative flex"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          {
                                            "id": "hd-rc-step-1-l",
                                            "type": "text",
                                            "options": {
                                              "text": "Cooked",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[10px] font-bold text-[#1E1A14]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "hd-rc-step-2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-1 flex-col items-center gap-1.5 text-center"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-step-2-dot",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative flex h-8 w-8 items-center justify-center rounded-full bg-[#E4572E] text-white"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "hd-rc-step-2-ping",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4572E] opacity-40"
                                                  }
                                                },
                                                "children": []
                                              },
                                              {
                                                "id": "hd-rc-step-2-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconMoped",
                                                  "size": 15,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "relative flex"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          {
                                            "id": "hd-rc-step-2-l",
                                            "type": "text",
                                            "options": {
                                              "text": "On the way",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[10px] font-bold text-[#1E1A14]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "hd-rc-step-3",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-1 flex-col items-center gap-1.5 text-center"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "hd-rc-step-3-dot",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FBEBD3] text-[#75685A]"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "hd-rc-step-3-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconHome",
                                                  "size": 15,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "relative flex"
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          {
                                            "id": "hd-rc-step-3-l",
                                            "type": "text",
                                            "options": {
                                              "text": "Delivered",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[10px] font-bold text-[#75685A]"
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
                                "id": "hd-rc-edge",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-3 w-full bg-[radial-gradient(circle_at_7px_100%,transparent_6px,#FFFFFF_6.5px)] bg-[length:14px_12px] bg-repeat-x"
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
                "id": "hd-meals",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative z-10 w-full bg-[#0E4D3A]"
                  }
                },
                "children": [
                  {
                    "id": "hd-meals-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-px overflow-hidden py-0 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-meal-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 px-2 py-5 sm:px-6 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-meal-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCoffee",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors bg-white/10 text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-meal-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-meal-1-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-meal-1-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Breakfast",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/breakfast",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading text-lg font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-meal-1-time",
                                "type": "text",
                                "options": {
                                  "text": "7–10 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-meal-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 px-2 py-5 sm:px-6 lg:border-l lg:border-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-meal-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSun",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors bg-[#F4B400] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-meal-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-meal-2-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-meal-2-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Lunch",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/lunch",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading text-lg font-semibold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-meal-2-now",
                                    "type": "text",
                                    "options": {
                                      "text": "Ordering now",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden rounded-full bg-[#E4572E] px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wide text-white sm:inline-block"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-meal-2-time",
                                "type": "text",
                                "options": {
                                  "text": "12–3 pm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-meal-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 px-2 py-5 sm:px-6 lg:border-l lg:border-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-meal-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBurger",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors bg-white/10 text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-meal-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-meal-3-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-meal-3-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Snacks",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/snacks",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading text-lg font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-meal-3-time",
                                "type": "text",
                                "options": {
                                  "text": "4–6 pm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-meal-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 px-2 py-5 sm:px-6 lg:border-l lg:border-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-meal-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoon",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors bg-white/10 text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-meal-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-meal-4-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-meal-4-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Dinner",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/dinner",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                      },
                                      "icon": {
                                        "classes": "hidden"
                                      },
                                      "label": {
                                        "classes": "font-heading text-lg font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-meal-4-time",
                                "type": "text",
                                "options": {
                                  "text": "7–10 pm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-white/60"
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
            "id": "hd-ticker",
            "type": "container",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden bg-[#F4B400] py-4"
              }
            },
            "children": [
              {
                "id": "hd-ticker-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex items-center gap-7 overflow-hidden whitespace-nowrap"
                  }
                },
                "children": [
                  {
                    "id": "hd-tick-1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-1-t",
                        "type": "text",
                        "options": {
                          "text": "Cooked fresh every morning",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-1-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-2",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-2-t",
                        "type": "text",
                        "options": {
                          "text": "No MSG, ever",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-2-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-3",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-3-t",
                        "type": "text",
                        "options": {
                          "text": "Halal meat only",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-3-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-4",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-4-t",
                        "type": "text",
                        "options": {
                          "text": "Leak-proof boxes",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-4-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-5",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-5-t",
                        "type": "text",
                        "options": {
                          "text": "Catering for 25 to 1,000 guests",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-5-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-6",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-6-t",
                        "type": "text",
                        "options": {
                          "text": "Cooked fresh every morning",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-6-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-7",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-7-t",
                        "type": "text",
                        "options": {
                          "text": "No MSG, ever",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-7-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-8",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-8-t",
                        "type": "text",
                        "options": {
                          "text": "Halal meat only",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-8-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-9",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-9-t",
                        "type": "text",
                        "options": {
                          "text": "Leak-proof boxes",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-9-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-tick-10",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tick-10-t",
                        "type": "text",
                        "options": {
                          "text": "Catering for 25 to 1,000 guests",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-medium italic text-[#1E1A14] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "hd-tick-10-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconFlame",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#E4572E]"
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
            "id": "hd-crave",
            "type": "section",
            "options": {
              "anchor": "menu"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-crave-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-crave-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-crave-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-crave-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-crave-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-crave-label",
                                "type": "text",
                                "options": {
                                  "text": "The menu",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-crave-h",
                            "type": "heading",
                            "options": {
                              "text": "What are you craving?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-crave-sub",
                            "type": "text",
                            "options": {
                              "text": "Eight counters, one kitchen. Everything is cooked the morning it’s delivered.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-crave-all",
                        "type": "button",
                        "options": {
                          "text": "Full menu",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-crave-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:gap-x-8"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-plate-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-1-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#FFF2CC] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#B98500]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-1-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#B98500]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBowlChopsticks",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#B98500] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Biryani & rice",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/biryani-rice",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-1-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳180",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-2-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#FDE7DF] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#E4572E]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-2-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#E4572E]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSoup",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#E4572E] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Curries",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/curries",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-2-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳160",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-3-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#F6E3D3] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#A5532A]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-3-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#A5532A]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMeat",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#A5532A] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Kebab & grill",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/kebab-grill",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-3-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳220",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-4-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#E3F0E9] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#0E4D3A]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-4-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#0E4D3A]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSalad",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#0E4D3A] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Bhorta & veg",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/bhorta-veg",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-4-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳90",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-5-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#FFF2CC] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#B98500]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-5-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#B98500]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBurger",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#B98500] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Snacks",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/snacks",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-5-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳60",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-6-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#F7E4EC] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#B2456E]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-6-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#B2456E]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-6-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconIceCream2",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#B2456E] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Desserts",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/desserts",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-6-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳80",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-7",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-7-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#E3F0E9] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#0E4D3A]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-7-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#0E4D3A]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-7-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCup",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#0E4D3A] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-7-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-7-btn",
                                "type": "button",
                                "options": {
                                  "text": "Drinks",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/drinks",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-7-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳60",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-plate-8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plate-8-dish",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-[78%] max-w-[180px] items-center justify-center rounded-full bg-[#FDE7DF] shadow-[0_22px_40px_-22px_rgba(30,26,20,0.45)] outline outline-1 outline-offset-[10px] outline-[#EFE2CF] ring-[10px] ring-white transition-all duration-500 group-hover:-translate-y-1.5 group-hover:outline-[#E4572E]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-8-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-[16%] rounded-full border-2 border-dashed border-[#E4572E]/25 transition-transform duration-700 group-hover:rotate-90"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-plate-8-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPackage",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#E4572E] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plate-8-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plate-8-btn",
                                "type": "button",
                                "options": {
                                  "text": "Meal boxes",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/meal-boxes",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-semibold text-[#1E1A14] transition-colors group-hover:text-[#E4572E] sm:text-xl"
                                  }
                                }
                              },
                              {
                                "id": "hd-plate-8-p",
                                "type": "text",
                                "options": {
                                  "text": "from ৳250",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
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
            "id": "hd-today",
            "type": "section",
            "options": {
              "anchor": "today"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-today-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-today-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-today-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-today-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-today-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-today-label",
                                "type": "text",
                                "options": {
                                  "text": "Today’s specials",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-today-h",
                            "type": "heading",
                            "options": {
                              "text": "Cooked this morning",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-today-sub",
                            "type": "text",
                            "options": {
                              "text": "A short list that changes daily. When the handi is empty, it’s gone.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-today-all",
                        "type": "button",
                        "options": {
                          "text": "All specials",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/today",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-today-slider",
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
                                  "today"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-[#0E4D3A] !opacity-100 transition-colors hover:!bg-[#E4572E] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-today-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-today-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-today-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-today-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEBD3]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-today-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-today-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-today-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#75685A]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-today-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg font-semibold leading-snug tracking-[-0.01em] text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-today-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#75685A]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-1"
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
                            "id": "hd-today-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#EFE2CF] px-1.5 pb-0.5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-today-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#75685A]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-today-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] pl-3 pr-4 text-[#1E1A14] transition-colors hover:bg-[#0E4D3A] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold"
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
            "id": "hd-how",
            "type": "section",
            "options": {
              "anchor": "how"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-how-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-how-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-center text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-how-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-how-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-how-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-how-label",
                                "type": "text",
                                "options": {
                                  "text": "How it works",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-how-h",
                            "type": "heading",
                            "options": {
                              "text": "From our handi to your table.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-how-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 md:before:absolute md:before:left-[17%] md:before:right-[17%] md:before:top-12 md:before:border-t-[3px] md:before:border-dashed md:before:border-[#E8D6BC] md:before:content-['']"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-how-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-how-1-ic-wrap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8EE] ring-8 ring-white transition-colors duration-300 group-hover:bg-[#F4B400]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-how-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClick",
                                  "size": 36,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-how-1-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E4572E] font-heading text-sm font-semibold italic text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-how-1-time",
                            "type": "text",
                            "options": {
                              "text": "Before 11:00",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E3F0E9] px-3 py-1 font-['Space_Mono'] text-[11px] font-bold text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Order by 11 am",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-1-p",
                            "type": "text",
                            "options": {
                              "text": "Pick dishes and a delivery time. Lunch closes at 11, dinner at 5.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-how-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-how-2-ic-wrap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8EE] ring-8 ring-white transition-colors duration-300 group-hover:bg-[#F4B400]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-how-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconToolsKitchen2",
                                  "size": 36,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-how-2-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E4572E] font-heading text-sm font-semibold italic text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-how-2-time",
                            "type": "text",
                            "options": {
                              "text": "06:00 – 11:30",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E3F0E9] px-3 py-1 font-['Space_Mono'] text-[11px] font-bold text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-2-h",
                            "type": "heading",
                            "options": {
                              "text": "We cook it fresh",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-2-p",
                            "type": "text",
                            "options": {
                              "text": "Our cooks start at 6 am. Nothing is reheated from yesterday.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-how-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-how-3-ic-wrap",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8EE] ring-8 ring-white transition-colors duration-300 group-hover:bg-[#F4B400]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-how-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoped",
                                  "size": 36,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-how-3-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E4572E] font-heading text-sm font-semibold italic text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-how-3-time",
                            "type": "text",
                            "options": {
                              "text": "12:00 – 15:00",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E3F0E9] px-3 py-1 font-['Space_Mono'] text-[11px] font-bold text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-3-h",
                            "type": "heading",
                            "options": {
                              "text": "At your door, hot",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-how-3-p",
                            "type": "text",
                            "options": {
                              "text": "Packed in sealed, leak-proof boxes and delivered in insulated bags.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xs text-sm leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-areas",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-12 flex flex-wrap items-center justify-center gap-2 rounded-[28px] bg-[#FFF8EE] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-areas-k",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mr-2 flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-areas-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMapPin",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#E4572E]"
                              }
                            }
                          },
                          {
                            "id": "hd-areas-t",
                            "type": "text",
                            "options": {
                              "text": "Delivering in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1E1A14]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-area-1",
                        "type": "text",
                        "options": {
                          "text": "Dhanmondi",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-2",
                        "type": "text",
                        "options": {
                          "text": "Gulshan",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-3",
                        "type": "text",
                        "options": {
                          "text": "Banani",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-4",
                        "type": "text",
                        "options": {
                          "text": "Mohammadpur",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-5",
                        "type": "text",
                        "options": {
                          "text": "Mirpur",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-6",
                        "type": "text",
                        "options": {
                          "text": "Uttara",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-7",
                        "type": "text",
                        "options": {
                          "text": "Bashundhara",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
                          }
                        }
                      },
                      {
                        "id": "hd-area-8",
                        "type": "text",
                        "options": {
                          "text": "Motijheel",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white px-3.5 py-1.5 font-body text-sm font-medium text-[#1E1A14] ring-1 ring-[#EFE2CF]"
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
            "id": "hd-tiffin",
            "type": "section",
            "options": {
              "anchor": "tiffin"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-tiffin-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-tiffin-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tiffin-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-tiffin-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-tiffin-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-tiffin-label",
                                "type": "text",
                                "options": {
                                  "text": "Tiffin plans",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-tiffin-h",
                            "type": "heading",
                            "options": {
                              "text": "Lunch sorted, every weekday.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-tiffin-sub",
                            "type": "text",
                            "options": {
                              "text": "A weekly plan delivered in our steel tiffin carrier. We collect the empty one the next day.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-tiffin-all",
                        "type": "button",
                        "options": {
                          "text": "All plans",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/tiffin-plan",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-plans",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-plan-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-6 rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-white ring-1 ring-[#EFE2CF]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plan-1-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-1-ht",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-name",
                                    "type": "heading",
                                    "options": {
                                      "text": "Office lunch",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-1-freq",
                                    "type": "text",
                                    "options": {
                                      "text": "5 days a week",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-1-tiers",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-t1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#E4572E]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-1-t2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#F4B400]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-1-t3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#0E4D3A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-1-price",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-1-pv",
                                "type": "text",
                                "options": {
                                  "text": "৳1,250",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold tracking-[-0.03em] text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-plan-1-pp",
                                "type": "text",
                                "options": {
                                  "text": "/ week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-1-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-3 border-t border-dashed pt-6 border-[#EFE2CF]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-1-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-1-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Rice or ruti + 1 curry",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-1-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-1-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Daily veg or dal, salad",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-1-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-1-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Delivered 12:30–1:30 pm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-1-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-1-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-1-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Pause any day before 9 am",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Start this plan",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/office-lunch",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFF8EE] px-6 py-3.5 ring-1 ring-[#EFE2CF] transition-colors hover:bg-[#0E4D3A] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-plan-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-6 rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-[#0E4D3A] text-white shadow-[0_34px_60px_-34px_rgba(14,77,58,0.8)] md:-my-4 md:py-11"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plan-2-pop",
                            "type": "text",
                            "options": {
                              "text": "Most loved",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -top-3 left-7 rounded-full bg-[#F4B400] px-3 py-1 font-body text-xs font-bold text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-plan-2-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-2-ht",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-name",
                                    "type": "heading",
                                    "options": {
                                      "text": "Family dinner",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-2-freq",
                                    "type": "text",
                                    "options": {
                                      "text": "7 days · serves 3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-xs text-[#F4B400]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-2-tiers",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-t1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#E4572E]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-2-t2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#F4B400]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-2-t3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#FBEBD3]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-2-price",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-2-pv",
                                "type": "text",
                                "options": {
                                  "text": "৳4,900",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "hd-plan-2-pp",
                                "type": "text",
                                "options": {
                                  "text": "/ week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-white/60"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-2-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-3 border-t border-dashed pt-6 border-white/20"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-2-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-2-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "2 curries, rice, dal and bhorta",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-white/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-2-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-2-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Fish twice a week, mutton on Friday",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-white/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-2-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-2-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Delivered 7:30–9 pm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-white/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-2-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-2-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F4B400] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-2-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Swap any dish you don’t like",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-white/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Start this plan",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/family-dinner",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F4B400] px-6 py-3.5 transition-colors hover:bg-white flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center transition-transform group-hover:translate-x-0.5 text-[#1E1A14]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-plan-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-6 rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-white ring-1 ring-[#EFE2CF]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-plan-3-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-3-ht",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-name",
                                    "type": "heading",
                                    "options": {
                                      "text": "Healthy bowl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-semibold tracking-[-0.02em] text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-3-freq",
                                    "type": "text",
                                    "options": {
                                      "text": "5 days a week",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-xs text-[#75685A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-3-tiers",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-t1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#E4572E]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-3-t2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#F4B400]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-plan-3-t3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2.5 w-8 rounded-full bg-[#0E4D3A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-3-price",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-3-pv",
                                "type": "text",
                                "options": {
                                  "text": "৳1,650",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold tracking-[-0.03em] text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-plan-3-pp",
                                "type": "text",
                                "options": {
                                  "text": "/ week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-3-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-3 border-t border-dashed pt-6 border-[#EFE2CF]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-plan-3-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-3-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Brown rice or quinoa bowls",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-3-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-3-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Grilled protein, no deep-frying",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-3-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-3-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Calories on every box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-plan-3-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-plan-3-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-plan-3-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Pause any day before 9 am",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-plan-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Start this plan",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/healthy-bowl",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFF8EE] px-6 py-3.5 ring-1 ring-[#EFE2CF] transition-colors hover:bg-[#0E4D3A] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
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
            "id": "hd-best",
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
                "id": "hd-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-best-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most ordered",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-best-h",
                            "type": "heading",
                            "options": {
                              "text": "The dishes Dhaka reorders.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-best-sub",
                            "type": "text",
                            "options": {
                              "text": "Our regulars’ go-to plates, in the portions they order them.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEBD3]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#75685A]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg font-semibold leading-snug tracking-[-0.01em] text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#75685A]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-1"
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
                            "id": "hd-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#EFE2CF] px-1.5 pb-0.5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#75685A]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] pl-3 pr-4 text-[#1E1A14] transition-colors hover:bg-[#0E4D3A] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold"
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
            "id": "hd-cater",
            "type": "section",
            "options": {
              "anchor": "catering"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0E4D3A] py-16 text-white lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-cater-dots",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(#F4B400_1.5px,transparent_1.6px)] bg-[size:22px_22px]"
                  }
                },
                "children": []
              },
              {
                "id": "hd-cater-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-cater-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-cater-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-cater-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-cater-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-2xl flex-col gap-3 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-cater-head-k",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-cater-k-mark",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "h-1.5 w-7 rounded-full bg-[#F4B400]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "hd-cater-label",
                                        "type": "text",
                                        "options": {
                                          "text": "Catering & events",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#F4B400]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "hd-cater-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Catering for 25 to 1,000 guests.",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-cater-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Weddings, office lunches, milad and mezban: one kitchen cooks it all, and our team serves it, then cleans up.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-xl text-base leading-relaxed text-white/65"
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
                        "id": "hd-cater-guests",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[28px] bg-white/[0.06] p-5 ring-1 ring-white/15 lg:col-span-5 lg:mb-10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-cater-guests-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-cater-guests-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconUsers",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#F4B400]"
                                  }
                                }
                              },
                              {
                                "id": "hd-cater-guests-t",
                                "type": "text",
                                "options": {
                                  "text": "How many guests?",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-semibold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-cater-guests-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-3 gap-2 sm:grid-cols-6"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-guest-1",
                                "type": "button",
                                "options": {
                                  "text": "25",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex h-11 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-white group-hover:text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-guest-2",
                                "type": "button",
                                "options": {
                                  "text": "50",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex h-11 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-white group-hover:text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-guest-3",
                                "type": "button",
                                "options": {
                                  "text": "100",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#F4B400] transition-transform hover:-translate-y-0.5"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-guest-4",
                                "type": "button",
                                "options": {
                                  "text": "250",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex h-11 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-white group-hover:text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-guest-5",
                                "type": "button",
                                "options": {
                                  "text": "500",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex h-11 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-white group-hover:text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-guest-6",
                                "type": "button",
                                "options": {
                                  "text": "1,000",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex h-11 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-white group-hover:text-[#1E1A14]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-cater-guests-n",
                            "type": "text",
                            "options": {
                              "text": "Per-head prices below. Tell us the number and the date; we reply with a menu and a quote within the hour.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs leading-relaxed text-white/55"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-events",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-event-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 rounded-full bg-white/[0.08] py-2 pl-2 pr-4 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-event-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHeart",
                              "size": 16,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#E4572E] text-white"
                              }
                            }
                          },
                          {
                            "id": "hd-event-1-t",
                            "type": "text",
                            "options": {
                              "text": "Weddings & holud",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-event-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 rounded-full bg-white/[0.08] py-2 pl-2 pr-4 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-event-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBriefcase",
                              "size": 16,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#E4572E] text-white"
                              }
                            }
                          },
                          {
                            "id": "hd-event-2-t",
                            "type": "text",
                            "options": {
                              "text": "Corporate & office",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-event-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 rounded-full bg-white/[0.08] py-2 pl-2 pr-4 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-event-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoon",
                              "size": 16,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#E4572E] text-white"
                              }
                            }
                          },
                          {
                            "id": "hd-event-3-t",
                            "type": "text",
                            "options": {
                              "text": "Milad, iftar & mezban",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-event-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 rounded-full bg-white/[0.08] py-2 pl-2 pr-4 ring-1 ring-white/10"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-event-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconConfetti",
                              "size": 16,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#E4572E] text-white"
                              }
                            }
                          },
                          {
                            "id": "hd-event-4-t",
                            "type": "text",
                            "options": {
                              "text": "Birthdays & home parties",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-packs",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-pack-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-5 overflow-hidden rounded-[30px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-[#FFF8EE] text-[#1E1A14]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pack-1-steam",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F4B400]/20 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hd-pack-1-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex items-end justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-1-name",
                                "type": "heading",
                                "options": {
                                  "text": "Classic",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold italic tracking-[-0.02em]"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-1-p",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-end leading-none"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-pv",
                                    "type": "text",
                                    "options": {
                                      "text": "৳450",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-semibold text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-pp",
                                    "type": "text",
                                    "options": {
                                      "text": "per guest",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] mt-1 text-[10px] text-[#75685A]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-1-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-1 flex-col gap-2.5 border-t border-dashed border-[#1E1A14]/15 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-1-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Chicken polao",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-1-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Chicken roast",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-1-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Beef rezala",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-1-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Salad & borhani",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-1-i5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-1-i5-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-1-i5-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Firni",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-1-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-1-quote",
                                "type": "button",
                                "options": {
                                  "text": "Get a quote",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://wa.me/",
                                  "target": "_blank",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0E4D3A] px-5 py-3 transition-colors hover:bg-[#1E1A14]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-1-menu",
                                "type": "button",
                                "options": {
                                  "text": "Menu",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-white/70 px-5 py-3 transition-colors hover:bg-white flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E4572E] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-pack-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-5 overflow-hidden rounded-[30px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-[#F4B400] text-[#1E1A14]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pack-2-steam",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hd-pack-2-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex items-end justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-2-name",
                                "type": "heading",
                                "options": {
                                  "text": "Royal",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold italic tracking-[-0.02em]"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-2-p",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-end leading-none"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-pv",
                                    "type": "text",
                                    "options": {
                                      "text": "৳750",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-semibold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-pp",
                                    "type": "text",
                                    "options": {
                                      "text": "per guest",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] mt-1 text-[10px] text-[#75685A]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-2-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-1 flex-col gap-2.5 border-t border-dashed border-[#1E1A14]/15 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-2-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Kacchi biryani",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-2-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Chicken roast",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-2-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Beef rezala",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-2-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Jali kebab",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-2-i5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i5-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i5-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Borhani & firni",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-2-i6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-2-i6-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-2-i6-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Soft drink",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-2-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-2-quote",
                                "type": "button",
                                "options": {
                                  "text": "Get a quote",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://wa.me/",
                                  "target": "_blank",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0E4D3A] px-5 py-3 transition-colors hover:bg-[#1E1A14]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-2-menu",
                                "type": "button",
                                "options": {
                                  "text": "Menu",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-white/70 px-5 py-3 transition-colors hover:bg-white flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E4572E] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-pack-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-5 overflow-hidden rounded-[30px] p-7 transition-transform duration-300 hover:-translate-y-1 bg-[#FFF8EE] text-[#1E1A14]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pack-3-steam",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F4B400]/20 transition-transform duration-500 group-hover:scale-125"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "hd-pack-3-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex items-end justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-3-name",
                                "type": "heading",
                                "options": {
                                  "text": "Grand",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold italic tracking-[-0.02em]"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-3-p",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-end leading-none"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-pv",
                                    "type": "text",
                                    "options": {
                                      "text": "৳1,200",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-semibold text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-pp",
                                    "type": "text",
                                    "options": {
                                      "text": "per guest",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] mt-1 text-[10px] text-[#75685A]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-3-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-1 flex-col gap-2.5 border-t border-dashed border-[#1E1A14]/15 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-3-i1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Mutton kacchi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-3-i2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Roast & rezala",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-3-i3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Rui fish fry",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-3-i4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i4-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Shami kebab",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-3-i5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i5-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i5-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Two desserts",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-pack-3-i6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-start gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pack-3-i6-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCheck",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F0E9] text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pack-3-i6-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Live jilapi counter",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-snug text-[#1E1A14]/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "hd-pack-3-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pack-3-quote",
                                "type": "button",
                                "options": {
                                  "text": "Get a quote",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://wa.me/",
                                  "target": "_blank",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0E4D3A] px-5 py-3 transition-colors hover:bg-[#1E1A14]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "hd-pack-3-menu",
                                "type": "button",
                                "options": {
                                  "text": "Menu",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/party-trays",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-white/70 px-5 py-3 transition-colors hover:bg-white flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E4572E] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
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
                    "id": "hd-incl",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-incl-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-incl-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconUsers",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-incl-1-t",
                            "type": "text",
                            "options": {
                              "text": "Cooks & uniformed servers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-incl-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-incl-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconToolsKitchen3",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-incl-2-t",
                            "type": "text",
                            "options": {
                              "text": "Chafing dishes & crockery",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-incl-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-incl-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTruckDelivery",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-incl-3-t",
                            "type": "text",
                            "options": {
                              "text": "Setup, service & clean-up",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white/85"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-incl-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-incl-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconChefHat",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-incl-4-t",
                            "type": "text",
                            "options": {
                              "text": "Free tasting for 250+ guests",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-white/85"
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
            "id": "hd-trays",
            "type": "section",
            "options": {
              "anchor": "party-trays"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-trays-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-trays-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-trays-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-trays-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-trays-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-trays-label",
                                "type": "text",
                                "options": {
                                  "text": "Party trays",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-trays-h",
                            "type": "heading",
                            "options": {
                              "text": "Feeding a crowd at home?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-trays-sub",
                            "type": "text",
                            "options": {
                              "text": "Ready-to-serve trays for 10, 20 or 40. Order a day ahead.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-trays-all",
                        "type": "button",
                        "options": {
                          "text": "All trays",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/party-trays",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-trays-slider",
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
                                  "party-trays"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-[#0E4D3A] !opacity-100 transition-colors hover:!bg-[#E4572E] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-trays-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[26px] bg-white p-3 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-28px_rgba(14,77,58,0.55)] hover:ring-[#0E4D3A]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-trays-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-trays-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-trays-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[20px] bg-[#FBEBD3]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-trays-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-trays-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-trays-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#75685A]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-trays-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg font-semibold leading-snug tracking-[-0.01em] text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-trays-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs font-medium text-[#75685A]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-1"
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
                            "id": "hd-trays-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#EFE2CF] px-1.5 pb-0.5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-trays-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex items-baseline gap-1.5 leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-semibold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#75685A]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-trays-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] pl-3 pr-4 text-[#1E1A14] transition-colors hover:bg-[#0E4D3A] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold"
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
            "id": "hd-kitchen",
            "type": "section",
            "options": {
              "anchor": "kitchen"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-kitchen-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-kitchen-l",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-kitchen-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-kitchen-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "hd-kitchen-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-kitchen-k-mark",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-kitchen-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Our kitchen",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-kitchen-h",
                                "type": "heading",
                                "options": {
                                  "text": "Cooked like it’s for family.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-kitchen-sub",
                                "type": "text",
                                "options": {
                                  "text": "Mustard oil, whole spices ground in-house and meat from the morning bazaar. Our kitchen is inspected monthly and open to visitors on Fridays.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
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
                    "id": "hd-kitchen-r",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-ks-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 bg-white ring-1 ring-[#EFE2CF]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ks-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSunrise",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#E4572E]"
                              }
                            }
                          },
                          {
                            "id": "hd-ks-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ks-1-v",
                                "type": "text",
                                "options": {
                                  "text": "6 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold italic tracking-[-0.03em] text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-ks-1-k",
                                "type": "text",
                                "options": {
                                  "text": "Cooking starts every day",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#1E1A14]/70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-ks-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 bg-[#E4572E] text-white"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ks-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconLeaf",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-ks-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ks-2-v",
                                "type": "text",
                                "options": {
                                  "text": "0 g",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold italic tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "hd-ks-2-k",
                                "type": "text",
                                "options": {
                                  "text": "MSG or artificial colour",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/75"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-ks-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 bg-[#0E4D3A] text-white"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ks-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#F4B400]"
                              }
                            }
                          },
                          {
                            "id": "hd-ks-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ks-3-v",
                                "type": "text",
                                "options": {
                                  "text": "100%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold italic tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "hd-ks-3-k",
                                "type": "text",
                                "options": {
                                  "text": "Halal meat, bought daily",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/75"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-ks-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 bg-[#F4B400]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ks-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconClock",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-ks-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-ks-4-v",
                                "type": "text",
                                "options": {
                                  "text": "4 hrs",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-semibold italic tracking-[-0.03em] text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-ks-4-k",
                                "type": "text",
                                "options": {
                                  "text": "Max time from pot to plate",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#1E1A14]/70"
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
            "id": "hd-reviews",
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
                "id": "hd-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-reviews-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Reviews",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Clean plates, happy guests.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-reviews-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-rev-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col justify-between gap-6 rounded-[30px] bg-[#FFF8EE] p-7 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-rev-1-mark",
                            "type": "text",
                            "options": {
                              "text": "“",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute right-6 top-0 font-heading text-[110px] italic leading-none text-[#E4572E]/20"
                              }
                            }
                          },
                          {
                            "id": "hd-rev-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-1-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#F4B400]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-1-star-1",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-1-star-2",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-1-star-3",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-1-star-4",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-1-star-5",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-rev-1-q",
                                "type": "text",
                                "options": {
                                  "text": "Our team of 14 eats Handi every weekday. Never late, and the tiffins come back clean. The Thursday khichuri is a ritual now.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-medium leading-snug text-[#1E1A14]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-rev-1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E8D6BC] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-1-av",
                                "type": "text",
                                "options": {
                                  "text": "FR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#F4B400] font-heading text-sm font-semibold text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-rev-1-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Farzana R.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-1-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Office lunch plan · 6 months",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[11px] text-[#75685A]"
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
                        "id": "hd-rev-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col justify-between gap-6 rounded-[30px] bg-[#FFF8EE] p-7 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-rev-2-mark",
                            "type": "text",
                            "options": {
                              "text": "“",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute right-6 top-0 font-heading text-[110px] italic leading-none text-[#E4572E]/20"
                              }
                            }
                          },
                          {
                            "id": "hd-rev-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-2-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#F4B400]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-2-star-1",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-2-star-2",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-2-star-3",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-2-star-4",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-2-star-5",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-rev-2-q",
                                "type": "text",
                                "options": {
                                  "text": "They cooked kacchi for 450 at my sister’s wedding. Every plate was hot, the servers were polite, and they left the hall spotless.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-medium leading-snug text-[#1E1A14]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-rev-2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E8D6BC] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-2-av",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#E4572E] font-heading text-sm font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "hd-rev-2-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Imran H.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-2-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Wedding · 450 guests",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[11px] text-[#75685A]"
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
                        "id": "hd-rev-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col justify-between gap-6 rounded-[30px] bg-[#FFF8EE] p-7 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-rev-3-mark",
                            "type": "text",
                            "options": {
                              "text": "“",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute right-6 top-0 font-heading text-[110px] italic leading-none text-[#E4572E]/20"
                              }
                            }
                          },
                          {
                            "id": "hd-rev-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-3-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#F4B400]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-3-star-1",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-3-star-2",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-3-star-3",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-3-star-4",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-3-star-5",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconStarFilled",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-rev-3-q",
                                "type": "text",
                                "options": {
                                  "text": "Tastes like my mother’s kitchen, minus the cooking. The bhorta platter on Fridays is the best thing we eat all week.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-medium leading-snug text-[#1E1A14]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-rev-3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E8D6BC] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-rev-3-av",
                                "type": "text",
                                "options": {
                                  "text": "SK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#E3F0E9] font-heading text-sm font-semibold text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-rev-3-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-rev-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Sadia K.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1E1A14]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-rev-3-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Family dinner · weekly",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[11px] text-[#75685A]"
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
            "id": "hd-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "hd-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "hd-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-journal-k-mark",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "hd-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "From the kitchen",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Recipes & kitchen stories.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#EFE2CF] hover:bg-[#0E4D3A] hover:ring-[#0E4D3A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#E4572E] group-hover:text-[#F4B400]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#1E1A14] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-journal-grid",
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
                        "classes": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-journal-loop",
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
                            "classes": "group flex flex-col"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-t-[160px] rounded-b-[28px] bg-[#FBEBD3]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3.4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "hd-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#E4572E]"
                                  }
                                }
                              },
                              {
                                "id": "hd-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read the story",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#75685A]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex flex-row-reverse items-center justify-end gap-1.5 font-body text-sm font-bold text-[#0E4D3A]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#E4572E] transition-transform group-hover/rm:translate-x-1"
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
            "id": "hd-faq",
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
                "id": "hd-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "hd-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end gap-5 justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "hd-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-faq-k-mark",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-1.5 w-7 rounded-full bg-[#E4572E]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "hd-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.18em] text-[#E4572E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[56px] text-[#1E1A14]"
                                  }
                                }
                              },
                              {
                                "id": "hd-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Delivery, timings, tiffin plans and catering.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base leading-relaxed text-[#75685A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "hd-faq-help",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative -mt-4 flex flex-col gap-3 overflow-hidden rounded-[28px] bg-[#E4572E] p-6 text-white"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-help-bg",
                            "type": "icon",
                            "options": {
                              "iconName": "IconToolsKitchen2",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-6 flex text-white/10"
                              }
                            }
                          },
                          {
                            "id": "hd-faq-help-k",
                            "type": "text",
                            "options": {
                              "text": "Planning an event?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-heading text-2xl font-semibold italic"
                              }
                            }
                          },
                          {
                            "id": "hd-faq-help-p",
                            "type": "text",
                            "options": {
                              "text": "Send the date and guest count on WhatsApp. Our catering manager replies with a menu and a quote within the hour.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-sm leading-relaxed text-white/85"
                              }
                            }
                          },
                          {
                            "id": "hd-faq-help-btn",
                            "type": "button",
                            "options": {
                              "text": "Chat on WhatsApp",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "https://wa.me/",
                              "target": "_blank",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-1 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#0E4D3A]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1E1A14] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "hd-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Where do you deliver?",
                          "classes": ""
                        },
                        {
                          "label": "How late can I order?",
                          "classes": ""
                        },
                        {
                          "label": "Is the food halal and MSG-free?",
                          "classes": ""
                        },
                        {
                          "label": "How do tiffin plans work?",
                          "classes": ""
                        },
                        {
                          "label": "What does catering include?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[22px] bg-[#FFF8EE] px-6 py-5 font-heading text-lg font-semibold text-[#1E1A14] ring-1 ring-[#EFE2CF] transition-colors hover:bg-[#FBEBD3]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#0E4D3A] !text-white !ring-[#0E4D3A]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#E4572E]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Dhanmondi, Gulshan, Banani, Mohammadpur, Mirpur, Uttara, Bashundhara and Motijheel. Enter your address at checkout to see your delivery times.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Order lunch by 11 am and dinner by 5 pm. Specials sell out, so earlier is better. Catering needs at least 3 days’ notice, 2 weeks for 500+ guests.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. All our meat is halal and bought fresh each morning, and we never use MSG, artificial colour or yesterday’s leftovers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Choose a plan and a start date. We deliver in a steel tiffin carrier and collect the empty one the next day. Pause or skip any day before 9 am from your account.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Food, cooks, uniformed servers, chafing dishes, crockery, setup and clean-up. Events of 250 guests or more get a free tasting session.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#75685A]"
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
            "id": "hd-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Today’s kitchen",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Full Menu",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Rice, curries, kebabs, meal boxes and desserts, cooked fresh this morning.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-shop-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
                        "id": "hd-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-shop-promise",
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
                "id": "hd-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cooked today",
                          "description": "Fresh every morning",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "Lunch & dinner",
                          "description": "12-3 pm and 7-10 pm",
                          "icon": "IconClock",
                          "iconSize": ""
                        },
                        {
                          "title": "Halal, no MSG",
                          "description": "Inspected every month",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, cards",
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
                        "classes": "font-heading text-lg font-bold text-[#1E1A14]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2CC] text-[#B9772E]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-shop-promise-fb-ic",
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
                        "id": "hd-shop-promise-fb-t",
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
                        "id": "hd-shop-promise-fb-d",
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
            "id": "hd-pd",
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
                "id": "hd-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-pd-grid",
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
                        "id": "hd-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FDE7DF] via-white to-[#FBEBD3] p-4 shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1E1A14]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1E1A14]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#0E4D3A]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pd-cats",
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
                                "classes": "rounded-full bg-[#FDE7DF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#E4572E] hover:bg-[#E4572E] hover:text-white"
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
                            "id": "hd-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#1E1A14] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "hd-pd-rate",
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
                                "classes": "font-heading font-bold text-[#1E1A14]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "hd-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#1E1A14]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#1E1A14]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#1E1A14]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#0E4D3A] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "hd-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#75685A]"
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
                            "id": "hd-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#1E1A14]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#1E1A14] transition-colors hover:border-[#E4572E] hover:bg-[#FDE7DF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#E4572E] !bg-[#FDE7DF] !text-[#C9431D]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "hd-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out for today · back tomorrow",
                              "inStockText": "Cooking today · choose your delivery time at checkout",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#0E4D3A]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#E4572E]"
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
                            "id": "hd-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1E1A14]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8EE]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8EE]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0E4D3A] px-8 text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#0A3A2C]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "font-heading text-lg font-bold whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "hd-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Cooked today",
                                  "description": "For your delivery time",
                                  "icon": "IconFlame",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Halal, no MSG",
                                  "description": "Inspected monthly",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on delivery",
                                  "description": "Across Dhaka",
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
                                "classes": "font-heading text-base font-bold text-[#1E1A14]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDE7DF] text-[#E4572E]"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-perks-ic",
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
                                "id": "hd-pd-perks-t",
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
                                "id": "hd-pd-perks-d",
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
                            "id": "hd-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-sku",
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
                                    "classes": "font-semibold text-[#1E1A14]"
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
                                "id": "hd-pd-brands",
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
                                    "classes": "font-semibold text-[#1E1A14]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0E4D3A]"
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
                                "id": "hd-pd-tags",
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
                                    "classes": "font-semibold text-[#1E1A14]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0E4D3A]"
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
            "id": "hd-pd-tabs-sec",
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
                "id": "hd-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this dish",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "What’s inside",
                              "icon": "IconLeaf"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8EE] px-5 py-2.5 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1E1A14] !text-white shadow-md"
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
                            "id": "hd-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1E1A14] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1E1A14] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0E4D3A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#F4B400] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconLeaf",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Portion size and how many it serves are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Allergens (nuts, dairy, gluten, egg, shellfish) are listed for every dish",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cooked fresh each morning; eat within 4 hours or refrigerate",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Pick mild, medium or hot at checkout",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#E4572E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Lunch 12-3 pm or dinner 7-10 pm, inside our delivery zones",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Order lunch by 11 am and dinner by 5 pm, so we can cook it fresh",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery over ৳800",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Spilled or wrong orders are refunded or replaced",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#E4572E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "hd-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFF8EE] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFF8EE] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "hd-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3F0E9]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#1E1A14]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "hd-pd-reviews-rate",
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
                                        "id": "hd-pd-reviews-co",
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
                                    "id": "hd-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was it? Hot, on time, well packed?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#1E1A14]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8EE] px-4 py-3 text-sm text-[#1E1A14] placeholder:text-gray-400 focus:border-[#E4572E] focus:outline-none focus:ring-2 focus:ring-[#E4572E]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0E4D3A] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A3A2C] disabled:opacity-50"
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
            "id": "hd-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "hd-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Goes well with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3F0E9] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#0E4D3A]"
                          }
                        }
                      },
                      {
                        "id": "hd-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1E1A14]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-pd-rel-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
            "id": "hd-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by craving",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Biryani and rice, curries, kebab and grill, bhorta and veg, snacks, desserts, drinks and meal boxes.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FDE7DF] transition-transform"
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
                            "id": "hd-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " dishes",
                              "singularSuffix": " dish",
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
                        "id": "hd-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hd-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " dishes",
                      "singularSuffix": " dish"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E4572E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
                        "id": "hd-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group dishes by meal and diet: today’s specials, lunch, dinner, spicy, vegetarian and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0E4D3A]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0E4D3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1E1A14] group-hover:text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF8EE] px-2 py-0.5 text-[10px] font-bold text-[#75685A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "hd-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hd-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " dishes",
                      "singularSuffix": " dish"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E4572E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
                        "id": "hd-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The kitchens",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Kitchens",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Our main kitchen and the partner cooks we work with, every kitchen checked by our team.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF8EE] p-3"
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
                            "id": "hd-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1E1A14] group-hover:text-[#0E4D3A]"
                              }
                            }
                          },
                          {
                            "id": "hd-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " dishes",
                              "singularSuffix": " dish",
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
                        "id": "hd-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "hd-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " dishes",
                      "singularSuffix": " dish"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E4572E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
                        "id": "hd-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "From the kitchen",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Recipes, Menus & Kitchen Stories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Family recipes, festival menus and how we cook for a 500-guest wedding.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FBEBD3]"
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
                            "id": "hd-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#E4572E]"
                                  }
                                }
                              },
                              {
                                "id": "hd-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
                                  }
                                }
                              },
                              {
                                "id": "hd-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#0E4D3A]"
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
                        "id": "hd-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:border-[#0E4D3A] hover:text-[#0E4D3A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0E4D3A] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "hd-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBEBD3] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hd-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-post-k",
                    "type": "text",
                    "options": {
                      "text": "From the kitchen",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDE7DF] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#75685A]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-post-author",
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
                            "classes": "font-heading font-bold text-[#1E1A14]"
                          }
                        }
                      },
                      {
                        "id": "hd-post-dot",
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
                        "id": "hd-post-date",
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
                    "id": "hd-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
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
            "id": "hd-post-body",
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
                "id": "hd-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1E1A14] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1E1A14] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#0E4D3A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#F4B400] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "hd-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1E1A14]"
                      }
                    }
                  },
                  {
                    "id": "hd-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFF8EE] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFF8EE] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3F0E9]"
                              }
                            }
                          },
                          {
                            "id": "hd-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1E1A14]"
                              }
                            }
                          },
                          {
                            "id": "hd-post-cmt-co",
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
                        "id": "hd-post-cmt-form",
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
                            "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#1E1A14]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8EE] px-4 py-3 text-sm text-[#1E1A14] placeholder:text-gray-400 focus:border-[#E4572E] focus:outline-none focus:ring-2 focus:ring-[#E4572E]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0E4D3A] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A3A2C] disabled:opacity-50"
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
            "id": "hd-post-more",
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
                "id": "hd-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Kitchen",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1E1A14]"
                      }
                    }
                  },
                  {
                    "id": "hd-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FBEBD3]"
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
                            "id": "hd-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#E4572E]"
                                  }
                                }
                              },
                              {
                                "id": "hd-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#1E1A14] transition-colors group-hover:text-[#0E4D3A]"
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
            "id": "hd-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FBEBD3] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FBEBD3_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "hd-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "hd-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E4572E]"
                      }
                    }
                  },
                  {
                    "id": "hd-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1E1A14] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "hd-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, reorder favourites and manage your tiffin plan and addresses.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "hd-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-12"
              }
            },
            "children": [
              {
                "id": "hd-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1E1A14] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#F4B400]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#0E4D3A]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#0E4D3A]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#0E4D3A]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "hd-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "hd-acc-3",
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
                                "id": "hd-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0E4D3A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A3A2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "hd-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0E4D3A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A3A2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "hd-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "hd-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8EE] px-5 py-2.5 font-heading text-sm font-semibold text-[#1E1A14] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1E1A14] !text-white shadow-md"
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
                                "id": "hd-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E4D3A]/10 text-[#0E4D3A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "hd-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#0E4D3A] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hd-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E4D3A]/10 text-[#0E4D3A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hd-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#0E4D3A]/40 hover:bg-[#0E4D3A]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E4D3A]/10 text-[#0E4D3A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "hd-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0E4D3A]/10 text-[#0E4D3A]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0E4D3A] focus:outline-none focus:ring-2 focus:ring-[#0E4D3A]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#0E4D3A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A3A2C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D3A]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "hd-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBEBD3] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hd-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FDE7DF] text-[#E4572E]"
                          }
                        }
                      },
                      {
                        "id": "hd-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3F0E9] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#0E4D3A]"
                          }
                        }
                      },
                      {
                        "id": "hd-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! The Handi Is On",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1E1A14] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "hd-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Our cooks are on it. A confirmation is on its way, and you can follow your order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#75685A] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "hd-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order by SMS within minutes",
                              "icon": ""
                            },
                            {
                              "text": "Our cooks prepare it fresh for your delivery time",
                              "icon": ""
                            },
                            {
                              "text": "A rider brings it hot in an insulated bag: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#FFF8EE] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#0E4D3A]"
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
                        "id": "hd-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E4D3A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A3A2C] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "hd-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E4572E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#E4572E] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#E4572E] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#E4572E] whitespace-nowrap group-hover:text-white"
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
            "id": "hd-ty-promise",
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
                "id": "hd-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cooked today",
                          "description": "Fresh every morning",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "Lunch & dinner",
                          "description": "12-3 pm and 7-10 pm",
                          "icon": "IconClock",
                          "iconSize": ""
                        },
                        {
                          "title": "Halal, no MSG",
                          "description": "Inspected every month",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, cards",
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
                        "classes": "font-heading text-lg font-bold text-[#1E1A14]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF2CC] text-[#B9772E]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-ty-promise-fb-ic",
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
                        "id": "hd-ty-promise-fb-t",
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
                        "id": "hd-ty-promise-fb-d",
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
            "id": "hd-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FBEBD3] via-white to-[#FFF8EE] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "hd-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#0E4D3A] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "hd-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBEBD3] text-[#1E1A14]"
                      }
                    }
                  },
                  {
                    "id": "hd-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Plate Is Empty",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#1E1A14] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "hd-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this dish may have sold out for today. Head back home and find something hot.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#75685A] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "hd-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E4D3A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A3A2C] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-white whitespace-nowrap"
                          }
                        }
                      },
                      {
                        "id": "hd-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "See the Full Menu",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E4572E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#E4572E] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#E4572E] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#E4572E] whitespace-nowrap group-hover:text-white"
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
            "id": "hd-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8EE] py-16"
              }
            },
            "children": [
              {
                "id": "hd-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "hd-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F4B400] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1E1A14]"
                          }
                        }
                      },
                      {
                        "id": "hd-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1E1A14] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "hd-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                      }
                    },
                    "children": [
                      {
                        "id": "hd-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#EFE2CF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E8D6BC]"
                          }
                        },
                        "children": [
                          {
                            "id": "hd-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FBEBD3]"
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
                                    "id": "hd-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E4572E] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "hd-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "hd-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#F4B400]"
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
                                    "id": "hd-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#1E1A14] transition-colors group-hover:text-[#E4572E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "hd-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#75685A]"
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
                            "id": "hd-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "hd-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#75685A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#0E4D3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0E4D3A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0E4D3A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "hd-nf-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#F4B400] px-2.5 text-[#0E4D3A] transition-colors hover:bg-[#0E4D3A] hover:text-white sm:px-3.5"
                                  },
                                  "button-label": {
                                    "classes": "sr-only font-body text-xs font-bold sm:not-sr-only"
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
