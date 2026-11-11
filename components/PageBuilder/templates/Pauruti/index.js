/**
 * Template: Pauruti Bakery Market.
 *
 * A modern bakery marketplace (pauruti: the everyday Bengali word for a loaf
 * of bread): many neighbourhood bakeries and home bakers selling breads,
 * cakes, pastries, cookies, pitha, savoury bakes and party boxes through one
 * storefront, delivered in 3-hour slots. Bakeries are product_brand terms.
 * Like the other complete templates here it carries all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive,
 * Blog Single, Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to pr-, palette remapped, copy
 * rewritten); the Header is restructured and Home is built fresh from the
 * same block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * Marketplace-style, in four layers: a butter delivery strip (deliver-to
 * location, a pulsing "next slot" line, custom cakes / sell on Pauruti / track
 * order links); a white main row with the logo (a CSS slice of bread - crust
 * and crumb - on a butter tile), a wide pill search with a strawberry search
 * button, account and a cocoa cart; a category rail (lg and up) where each
 * item stacks an icon in a cream circle over its label, like a food app, with
 * Tonight's deals picked out in strawberry; and a scalloped edge like a
 * cupcake liner (pr-hdr-scallop) hanging over the page. The menu link has
 * `flex gap-2 items-center justify-between` hard-coded, so the rail
 * overrides it with `!flex-col !gap-1`.
 *
 * DESIGN
 *
 *   cocoa       #3B2416  primary: buttons, cart, dark bands      #2A190F deep  #F3E7DC tint
 *   strawberry  #E8505B  secondary: badges, search, accents      #CC3B47 dark  #FDE6E7 tint
 *   butter      #FFC94D  accent: hero banner, add buttons, strip  #FFF3D1 tint
 *   pistachio   #6FA14E  "fresh today" signals                    #E9F4E0 tint
 *   flour #FFFBF5   cream #FFF1DC   ink #2B1B12   muted #7D6B5D   line #F0E4D4
 *
 * Fonts (template meta): Gabarito (headings, extrabold), Rethink Sans (body),
 * Hind Siliguri via `font-['Hind_Siliguri']` for the Bangla lines.
 *
 * Product cards are marketplace cards: the rating on top, the name, one
 * excerpt line (use it for the bakery and pack size, e.g. "by Mou's Kitchen
 * · 6 pcs"), the price in Gabarito and a butter "Add" pill.
 *
 * HOME
 *
 *   Bento hero (butter banner with cake art and the bakers, tonight's-deals
 *   and birthday-cake tiles, trust strip) - shop by craving (#categories) -
 *   tonight's deals band (#deals) - top bakeries, live product_brand terms
 *   (#bakeries) - this week's favourites (#bestsellers) - custom cake studio
 *   with a CSS cake (#custom-cakes) - breads - delivery slots (#delivery) -
 *   cakes - pastries & cookies - pitha & mishti - sell on Pauruti (#sell) -
 *   reviews - from the bakers (#journal) - FAQ (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: breads, cakes, pastries, cookies, pitha, savoury,
 *     healthy, party-boxes. Tag slugs: tonight-deal, bestseller. Bakeries are
 *     product_brand terms; give each a logo for the bakeries grid.
 *   - Delivery slots, cut-off times, the 8-10 pm deal window, the ৳800
 *     free-delivery rule and the custom-cake sizes and prices are sample
 *     policy: match them to how you actually operate.
 *   - "Deliver to: Dhanmondi", "120 bakeries", "30,000+ orders", the seller
 *     stats, contact details and the six reviews are sample copy.
 */

var template = [
  {
    "name": "Pauruti Bakery Market",
    "description": "Modern bakery marketplace in cocoa, strawberry and butter on flour white; Gabarito, Rethink Sans and Hind Siliguri: a delivery-slot strip, a wide pill search, an icon category rail and a scalloped cupcake-liner edge, a bento hero with the cake art and promo tiles, craving categories, tonight’s deals, top bakeries (live brand terms), favourites, a custom cake studio, breads, delivery slots, cakes, pastries, pitha, a sell-on-Pauruti pitch, reviews, the bakers’ blog and FAQ. All 16 pages.",
    "thumbnail": "/templates/pauruti.svg",
    "meta": {
      "fonts": [
        {
          "family": "Gabarito",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Rethink Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
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
        "heading": "Gabarito",
        "body": "Rethink Sans"
      },
      "colors": {
        "primary": "#3B2416",
        "secondary": "#E8505B",
        "accent": "#FFC94D",
        "background": "#FFFBF5",
        "foreground": "#2B1B12",
        "muted": "#7D6B5D"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "pr-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full"
              }
            },
            "children": [
              {
                "id": "pr-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#FFC94D]"
                  }
                },
                "children": [
                  {
                    "id": "pr-hdr-util",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-9 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-hdr-util-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hdr-util-loc",
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
                                "classes": "flex items-center text-[#E8505B]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-[#3B2416] whitespace-nowrap transition-opacity group-hover:opacity-70 underline decoration-dotted underline-offset-4"
                              }
                            }
                          },
                          {
                            "id": "pr-hdr-util-slot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden items-center gap-1.5 sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hdr-util-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-1.5 animate-pulse rounded-full bg-[#6FA14E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "pr-hdr-util-slot-t",
                                "type": "text",
                                "options": {
                                  "text": "Next slot 11 am – 2 pm · order by 9 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-[#3B2416]/80"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-hdr-util-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-5 md:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hdr-util-cake",
                            "type": "button",
                            "options": {
                              "text": "Custom cakes",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#custom-cakes",
                              "target": "",
                              "icon": "IconCake",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#3B2416]/60"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-[#3B2416] whitespace-nowrap transition-opacity group-hover:opacity-70"
                              }
                            }
                          },
                          {
                            "id": "pr-hdr-util-sell",
                            "type": "button",
                            "options": {
                              "text": "Sell on Pauruti",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#sell",
                              "target": "",
                              "icon": "IconBuildingStore",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#3B2416]/60"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-[#3B2416] whitespace-nowrap transition-opacity group-hover:opacity-70"
                              }
                            }
                          },
                          {
                            "id": "pr-hdr-util-track",
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
                                "classes": "flex items-center text-[#3B2416]/60"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold text-[#3B2416] whitespace-nowrap transition-opacity group-hover:opacity-70"
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
                "id": "pr-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-white"
                  }
                },
                "children": [
                  {
                    "id": "pr-hdr-bar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-hdr-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-[72px] items-center justify-between gap-4 lg:gap-8"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hdr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hdr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-[#FFC94D] before:absolute before:inset-x-[8px] before:bottom-[9px] before:top-[9px] before:rounded-t-[13px] before:rounded-b-[4px] before:bg-[#C8823F] before:content-[''] after:absolute after:inset-x-[12px] after:bottom-[13px] after:top-[13px] after:rounded-t-[9px] after:rounded-b-[2px] after:bg-[#FFE7B8] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "pr-hdr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-hdr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "pauruti",
                                      "src": "https://placehold.co/200x64?text=Pauruti",
                                      "altText": "Pauruti",
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
                                        "classes": "font-heading text-[26px] font-extrabold leading-none tracking-[-0.03em] text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hdr-brand-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Bakery marketplace",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#E8505B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "pr-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search cakes, breads, bakeries...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden min-w-0 max-w-2xl flex-1 rounded-full bg-[#FFF1DC] py-1.5 pl-5 pr-1.5 ring-1 ring-transparent transition-all focus-within:bg-white focus-within:ring-[#E6D4BD] md:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-1 py-1.5 font-body text-sm text-[#2B1B12] placeholder:text-[#7D6B5D] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "order-last flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8505B] text-white"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#3B2416]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#3B2416]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#3B2416] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2A190F]"
                              }
                            }
                          },
                          {
                            "id": "pr-hdr-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hdr-account",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFFBF5] text-[#3B2416] ring-1 ring-[#F0E4D4] transition-colors hover:bg-[#FFF1DC]"
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
                                "id": "pr-hdr-cart",
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
                                    "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#3B2416] text-white transition-colors hover:bg-[#E8505B]"
                                  },
                                  "trigger-badge": {
                                    "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#3B2416] px-1 text-[10px] font-bold text-white"
                                  },
                                  "header": {
                                    "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFFBF5] px-5 py-4"
                                  },
                                  "title": {
                                    "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#2B1B12]"
                                  },
                                  "title-icon": {
                                    "classes": "text-[#3B2416]"
                                  },
                                  "count-badge": {
                                    "classes": "rounded-full bg-[#3B2416] px-2 py-0.5 text-xs font-bold text-white"
                                  },
                                  "trigger": {
                                    "classes": "flex items-center gap-2 rounded-lg bg-[#3B2416] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#2A190F]"
                                  },
                                  "close-button": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/30"
                                  },
                                  "coupon-code-input": {
                                    "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15"
                                  },
                                  "coupon-apply": {
                                    "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#3B2416] px-4 py-2 text-sm font-medium text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white disabled:opacity-60"
                                  },
                                  "checkout-button": {
                                    "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B2416] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2A190F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "pr-hdr-mobile",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFFBF5] text-[#3B2416] ring-1 ring-[#F0E4D4]"
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
                                    "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFFBF5] p-2 text-[#2B1B12] transition-colors hover:bg-[#3B2416] hover:text-white"
                                  },
                                  "popover-content": {
                                    "classes": "flex flex-col gap-6 p-6 pt-16"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-hdr-m-brand",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group flex shrink-0 items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-hdr-m-brand-mark",
                                        "type": "text",
                                        "options": {
                                          "text": "",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-[#FFC94D] before:absolute before:inset-x-[8px] before:bottom-[9px] before:top-[9px] before:rounded-t-[13px] before:rounded-b-[4px] before:bg-[#C8823F] before:content-[''] after:absolute after:inset-x-[12px] after:bottom-[13px] after:top-[13px] after:rounded-t-[9px] after:rounded-b-[2px] after:bg-[#FFE7B8] after:content-['']"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pr-hdr-m-brand-words",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "pr-hdr-m-brand-logo",
                                            "type": "logo",
                                            "options": {
                                              "logoType": "text",
                                              "logoText": "pauruti",
                                              "src": "https://placehold.co/200x64?text=Pauruti",
                                              "altText": "Pauruti",
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
                                                "classes": "font-heading text-[26px] font-extrabold leading-none tracking-[-0.03em] text-[#3B2416]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "pr-hdr-m-brand-tag",
                                            "type": "text",
                                            "options": {
                                              "text": "Bakery marketplace",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mt-0.5 block font-body text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-[#E8505B]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "pr-hdr-m-search",
                                    "type": "quickSearch",
                                    "options": {
                                      "placeholder": "Search bakes...",
                                      "iconPosition": "",
                                      "icon": "IconSearch"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full border border-gray-200 bg-[#FFFBF5] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#E8505B] focus-within:ring-2 focus-within:ring-[#E8505B]/20 w-full"
                                      },
                                      "input-wrapper": {
                                        "classes": "flex items-center gap-2"
                                      },
                                      "input-search": {
                                        "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B1B12] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#7D6B5D]"
                                      },
                                      "filter-select": {
                                        "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15"
                                      },
                                      "result-title": {
                                        "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#3B2416]"
                                      },
                                      "result-price": {
                                        "classes": "font-semibold text-[#3B2416]"
                                      },
                                      "add-button": {
                                        "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#3B2416] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2A190F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hdr-m-menu",
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
                                        "classes": "!justify-start !gap-3 border-b border-[#F0E4D4] py-3 font-body text-base font-semibold text-[#2B1B12] transition-colors hover:text-[#E8505B]"
                                      },
                                      "link-label": {
                                        "classes": ""
                                      },
                                      "icon": {
                                        "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF1DC] text-[#3B2416]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-hdr-m-menu-i1",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Breads",
                                          "url": "/categories/breads",
                                          "icon": "IconBread",
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
                                        "id": "pr-hdr-m-menu-i2",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Cakes",
                                          "url": "/categories/cakes",
                                          "icon": "IconCake",
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
                                        "id": "pr-hdr-m-menu-i3",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Pastries",
                                          "url": "/categories/pastries",
                                          "icon": "IconBaguette",
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
                                        "id": "pr-hdr-m-menu-i4",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Cookies",
                                          "url": "/categories/cookies",
                                          "icon": "IconCookie",
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
                                        "id": "pr-hdr-m-menu-i5",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Pitha",
                                          "url": "/categories/pitha",
                                          "icon": "IconCandy",
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
                                        "id": "pr-hdr-m-menu-i6",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Savoury",
                                          "url": "/categories/savoury",
                                          "icon": "IconPizza",
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
                                        "id": "pr-hdr-m-menu-i7",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Healthy",
                                          "url": "/categories/healthy",
                                          "icon": "IconWheat",
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
                                        "id": "pr-hdr-m-menu-i8",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Party boxes",
                                          "url": "/categories/party-boxes",
                                          "icon": "IconConfetti",
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
                                        "id": "pr-hdr-m-menu-i9",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Bakeries",
                                          "url": "/brands",
                                          "icon": "IconBuildingStore",
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
                                        "id": "pr-hdr-m-menu-i10",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Tonight’s deals",
                                          "url": "/tags/tonight-deal",
                                          "icon": "IconMoon",
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
                                            "classes": "!text-[#E8505B]"
                                          },
                                          "icon": {
                                            "classes": "!bg-[#FDE6E7] !text-[#E8505B]"
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
                "id": "pr-hdr-rail",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden w-full border-t border-[#F0E4D4] bg-white lg:block"
                  }
                },
                "children": [
                  {
                    "id": "pr-hdr-rail-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center py-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-hdr-menu",
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
                            "classes": "!flex-col !gap-1 whitespace-nowrap rounded-2xl px-2.5 py-1.5 font-body text-xs font-semibold text-[#2B1B12] transition-colors hover:bg-[#FFFBF5] xl:px-3"
                          },
                          "link-label": {
                            "classes": ""
                          },
                          "icon": {
                            "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1DC] text-[#3B2416] transition-all group-hover:-translate-y-0.5 group-hover:bg-[#FFC94D]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Breads",
                              "url": "/categories/breads",
                              "icon": "IconBread",
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
                            "id": "pr-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Cakes",
                              "url": "/categories/cakes",
                              "icon": "IconCake",
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
                            "id": "pr-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Pastries",
                              "url": "/categories/pastries",
                              "icon": "IconBaguette",
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
                            "id": "pr-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Cookies",
                              "url": "/categories/cookies",
                              "icon": "IconCookie",
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
                            "id": "pr-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Pitha",
                              "url": "/categories/pitha",
                              "icon": "IconCandy",
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
                            "id": "pr-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Savoury",
                              "url": "/categories/savoury",
                              "icon": "IconPizza",
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
                            "id": "pr-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Healthy",
                              "url": "/categories/healthy",
                              "icon": "IconWheat",
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
                            "id": "pr-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Party boxes",
                              "url": "/categories/party-boxes",
                              "icon": "IconConfetti",
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
                            "id": "pr-hdr-menu-i9",
                            "type": "menuItem",
                            "options": {
                              "label": "Bakeries",
                              "url": "/brands",
                              "icon": "IconBuildingStore",
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
                            "id": "pr-hdr-menu-i10",
                            "type": "menuItem",
                            "options": {
                              "label": "Tonight’s deals",
                              "url": "/tags/tonight-deal",
                              "icon": "IconMoon",
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
                                "classes": "!text-[#E8505B]"
                              },
                              "icon": {
                                "classes": "!bg-[#FDE6E7] !text-[#E8505B]"
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
                "id": "pr-hdr-scallop",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-2 w-full bg-[radial-gradient(circle_at_50%_0,#FFFFFF_7px,transparent_7.5px)] bg-[length:16px_8px] bg-repeat-x drop-shadow-[0_1.5px_0_#E6D4BD]"
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
            "id": "pr-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2B1B12] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "pr-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "pr-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[#FFC94D] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Fresh in your inbox",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                              }
                            }
                          },
                          {
                            "id": "pr-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Tonight’s deals, every evening at 8",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl text-[#2B1B12] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "pr-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "New bakeries, seasonal bakes and the best markdowns near you.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-[#3B2416]/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconBell",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#3B2416] px-6 py-3.5 transition-colors hover:bg-[#E8505B]"
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
                "id": "pr-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "pr-ftr-grid",
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
                        "id": "pr-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-11 w-11 shrink-0 rounded-[14px] bg-[#FFC94D] before:absolute before:inset-x-[8px] before:bottom-[9px] before:top-[9px] before:rounded-t-[13px] before:rounded-b-[4px] before:bg-[#C8823F] before:content-[''] after:absolute after:inset-x-[12px] after:bottom-[13px] after:top-[13px] after:rounded-t-[9px] after:rounded-b-[2px] after:bg-[#FFE7B8] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "pr-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "pauruti",
                                      "src": "https://placehold.co/200x64?text=Pauruti",
                                      "altText": "Pauruti",
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
                                        "classes": "font-heading text-[26px] font-extrabold leading-none tracking-[-0.03em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "pr-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "A marketplace for neighbourhood bakeries and home bakers: breads, cakes, pastries and pitha, baked today and delivered in a 3-hour slot.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "pr-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#3B2416]"
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
                                "id": "pr-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#3B2416]"
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
                                "id": "pr-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#3B2416]"
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
                                "id": "pr-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#3B2416]"
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
                        "id": "pr-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Breads & Buns",
                                  "icon": "",
                                  "slug": "/categories/breads"
                                },
                                {
                                  "text": "Cakes",
                                  "icon": "",
                                  "slug": "/categories/cakes"
                                },
                                {
                                  "text": "Pastries & Cookies",
                                  "icon": "",
                                  "slug": "/categories/pastries"
                                },
                                {
                                  "text": "Pitha & Mishti",
                                  "icon": "",
                                  "slug": "/categories/pitha"
                                },
                                {
                                  "text": "Party Boxes",
                                  "icon": "",
                                  "slug": "/categories/party-boxes"
                                },
                                {
                                  "text": "All Bakeries",
                                  "icon": "",
                                  "slug": "/brands"
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
                                "classes": "transition-colors hover:text-[#FFC94D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC94D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ftr-ll-care",
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
                                  "text": "Delivery Slots",
                                  "icon": "",
                                  "slug": "/#delivery"
                                },
                                {
                                  "text": "Sell on Pauruti",
                                  "icon": "",
                                  "slug": "/#sell"
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
                                "classes": "transition-colors hover:text-[#FFC94D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC94D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ftr-contact-h",
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
                            "id": "pr-ftr-address",
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
                                "label": "Office",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFC94D]"
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
                                "classes": "shrink-0 text-[#3B2416]"
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
                "id": "pr-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "pr-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Pauruti. All rights reserved. Baked today, at your door.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "pr-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-ftr-pay-txt",
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
            "id": "pr-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFFBF5] pb-10 pt-6 lg:pb-14 lg:pt-8"
              }
            },
            "children": [
              {
                "id": "pr-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-hero-main",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden rounded-[32px] bg-[#FFC94D] lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-dots",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(59,36,22,0.12)_1.5px,transparent_2px)] bg-[length:20px_20px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "pr-hero-main-grid",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative grid grid-cols-1 items-center gap-2 p-7 sm:p-10 md:grid-cols-[1.25fr_1fr] lg:p-12"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-copy",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-start gap-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-hero-live",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-hero-live-dot",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "h-2 w-2 animate-pulse rounded-full bg-[#6FA14E]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "pr-hero-live-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Ovens on · delivering today",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-bold text-[#3B2416]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "pr-hero-bn",
                                    "type": "text",
                                    "options": {
                                      "text": "পাড়ার বেকারির টাটকা স্বাদ",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Hind_Siliguri'] text-xl font-semibold text-[#3B2416]/80"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-h1",
                                    "type": "heading",
                                    "options": {
                                      "text": "Fresh from 120 neighbourhood bakeries.",
                                      "tag": "h1"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] text-[40px] leading-[0.98] text-[#2B1B12] sm:text-5xl lg:text-[44px] xl:text-[56px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Breads at sunrise, cakes for tonight, pitha for the weekend: order from the best home bakers and bakeries in your area, delivered in a 3-hour slot.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-md text-base leading-relaxed text-[#3B2416]/80"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-btns",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap gap-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-hero-btn-1",
                                        "type": "button",
                                        "options": {
                                          "text": "Order for today",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/shop",
                                          "target": "",
                                          "icon": "IconArrowRight",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#3B2416] px-6 py-3.5 transition-colors hover:bg-[#E8505B]"
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
                                        "id": "pr-hero-btn-2",
                                        "type": "button",
                                        "options": {
                                          "text": "Custom cakes",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/#custom-cakes",
                                          "target": "",
                                          "icon": "IconCake",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 transition-colors hover:ring-[#3B2416]"
                                          },
                                          "icon": {
                                            "classes": "flex items-center shrink-0 text-[#E8505B]"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "pr-hero-bakers",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-3 pt-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-hero-avs",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex -space-x-2"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "pr-hero-av-1",
                                            "type": "text",
                                            "options": {
                                              "text": "MB",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#E8505B] font-body text-[11px] font-bold text-white ring-2 ring-[#FFC94D]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "pr-hero-av-2",
                                            "type": "text",
                                            "options": {
                                              "text": "CH",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#3B2416] font-body text-[11px] font-bold text-white ring-2 ring-[#FFC94D]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "pr-hero-av-3",
                                            "type": "text",
                                            "options": {
                                              "text": "RK",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#6FA14E] font-body text-[11px] font-bold text-white ring-2 ring-[#FFC94D]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "pr-hero-av-4",
                                            "type": "text",
                                            "options": {
                                              "text": "SF",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-[#C8823F] font-body text-[11px] font-bold text-white ring-2 ring-[#FFC94D]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "pr-hero-av-more",
                                            "type": "text",
                                            "options": {
                                              "text": "+116",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-white font-body text-[10px] font-bold text-[#3B2416] ring-2 ring-[#FFC94D]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "pr-hero-bakers-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Verified local bakeries",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-semibold text-[#3B2416]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "pr-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/pauruti-bakes.svg",
                                  "altText": "A two-tier strawberry cake on a stand beside a croissant, a loaf of bread and a cupcake",
                                  "link": "/categories/cakes",
                                  "newTab": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative mx-auto w-full max-w-[420px] md:max-w-none"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "img": {
                                    "classes": "h-auto w-full transition-transform duration-700 hover:-rotate-2 hover:scale-[1.03]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-hero-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-deals",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[200px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#3B2416] p-6 sm:p-7"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-deals-art",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMoon",
                                  "size": 150,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-6 -right-6 flex text-[#FFC94D]/25 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-deals-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-hero-deals-k",
                                    "type": "text",
                                    "options": {
                                      "text": "After 8 pm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#FFC94D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-deals-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tonight’s deals: up to 40% off",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] max-w-[15rem] text-2xl leading-tight sm:text-3xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-deals-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Today’s unsold bakes, marked down before closing.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[16rem] text-sm text-white/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-hero-deals-btn",
                                "type": "button",
                                "options": {
                                  "text": "Order now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/tonight-deal",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#3B2416]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap text-[#3B2416]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-hero-cakes",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[200px] flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#FDE6E7] p-6 sm:p-7"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-cakes-art",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCake",
                                  "size": 150,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-6 -right-6 flex text-[#E8505B]/20 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-cakes-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-hero-cakes-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Birthday cakes",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-cakes-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "From ৳1,200, with your message",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] max-w-[15rem] text-2xl leading-tight sm:text-3xl text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-hero-cakes-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Order 24 hours ahead; delivered with candles.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[16rem] text-sm text-[#7D6B5D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-hero-cakes-btn",
                                "type": "button",
                                "options": {
                                  "text": "Order now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/cakes",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-[#3B2416] px-4 py-2"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap text-white"
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
                    "id": "pr-hero-trust",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 grid grid-cols-2 gap-3 rounded-[24px] bg-white p-4 ring-1 ring-[#F0E4D4] lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-hero-trust-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 p-1"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-trust-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconFlame",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDE6E7] text-[#E8505B]"
                              }
                            }
                          },
                          {
                            "id": "pr-hero-trust-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-trust-1-h",
                                "type": "text",
                                "options": {
                                  "text": "Baked today",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-trust-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Every order, every day",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-hero-trust-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 p-1"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-trust-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconClock",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF3D1] text-[#C8823F]"
                              }
                            }
                          },
                          {
                            "id": "pr-hero-trust-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-trust-2-h",
                                "type": "text",
                                "options": {
                                  "text": "3-hour slots",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-trust-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Morning, midday, evening",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-hero-trust-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 p-1"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-trust-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E9F4E0] text-[#6FA14E]"
                              }
                            }
                          },
                          {
                            "id": "pr-hero-trust-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-trust-3-h",
                                "type": "text",
                                "options": {
                                  "text": "Verified bakeries",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-trust-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Kitchens checked by us",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-hero-trust-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 p-1"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-hero-trust-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCash",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F3E7DC] text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-hero-trust-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-hero-trust-4-h",
                                "type": "text",
                                "options": {
                                  "text": "Cash on delivery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-hero-trust-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Or bKash, Nagad, cards",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "truncate font-body text-xs text-[#7D6B5D]"
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
            "id": "pr-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cats-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cats-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCookie",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-cats-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by craving",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "What are you craving?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-cats-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-5 lg:grid-cols-8"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-cat-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-1-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FFF3D1] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#C8823F]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBread",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#C8823F] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Breads",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/breads",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-2-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FDE6E7] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#E8505B]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCake",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E8505B] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Cakes",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/cakes",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-3-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FFF1DC] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#C8823F]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBaguette",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#C8823F] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Pastries",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pastries",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-4-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#F3E7DC] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#3B2416]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCookie",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#3B2416] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Cookies",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/cookies",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-5-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FDE6E7] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#CC3B47]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCandy",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#CC3B47] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Pitha & mishti",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pitha",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-6-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FFF3D1] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#E8505B]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-6-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPizza",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E8505B] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-6-btn",
                            "type": "button",
                            "options": {
                              "text": "Savoury",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/savoury",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-7",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-7-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#E9F4E0] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#6FA14E]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-7-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconWheat",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#6FA14E] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-7-btn",
                            "type": "button",
                            "options": {
                              "text": "Healthy",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/healthy",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-cat-8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat-8-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[112px] items-center justify-center rounded-full bg-[#FFF1DC] transition-transform duration-300 group-hover:-translate-y-1 after:pointer-events-none after:absolute after:-inset-1.5 after:rounded-full after:border-2 after:border-dashed after:border-transparent after:transition-colors after:content-[''] group-hover:after:border-[#E8505B]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat-8-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconConfetti",
                                  "size": 40,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E8505B] transition-transform duration-500 group-hover:rotate-12"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-cat-8-btn",
                            "type": "button",
                            "options": {
                              "text": "Party boxes",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/party-boxes",
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
                                "classes": "font-body text-xs font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B] sm:text-sm"
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
            "id": "pr-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#3B2416] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-deals-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-deals-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-deals-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "pr-deals-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-deals-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconMoon",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC94D] text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-deals-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Tonight’s deals",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#FFC94D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-deals-h",
                                "type": "heading",
                                "options": {
                                  "text": "Fresh today, cheaper tonight",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-deals-sub",
                                "type": "text",
                                "options": {
                                  "text": "Bakeries mark down what’s left before closing. Same bakes, up to 40% off.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-white/65"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-deals-window",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-deals-w1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center rounded-2xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-deals-w1-k",
                                "type": "text",
                                "options": {
                                  "text": "Starts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-deals-w1-t",
                                "type": "text",
                                "options": {
                                  "text": "8:00 PM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-xl text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-deals-w2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center rounded-2xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-deals-w2-k",
                                "type": "text",
                                "options": {
                                  "text": "Ends",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-deals-w2-t",
                                "type": "text",
                                "options": {
                                  "text": "10:00 PM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-xl text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-deals-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/tonight-deal",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#FFC94D] px-4 py-3 transition-colors hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#3B2416]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pr-deals-slider",
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
                                  "tonight-deal"
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1rem",
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
                          },
                          "1279": {
                            "perPage": 4
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-deals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-deals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-deals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-deals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-deals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-deals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-deals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-deals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-deals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-deals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-deals-slider-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-deals-slider-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-bakeries",
            "type": "section",
            "options": {
              "anchor": "bakeries"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-bakeries-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-bakeries-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-bakeries-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-bakeries-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-bakeries-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBuildingStore",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-bakeries-label",
                                "type": "text",
                                "options": {
                                  "text": "The bakers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-bakeries-h",
                            "type": "heading",
                            "options": {
                              "text": "Top bakeries near you",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-bakeries-sub",
                            "type": "text",
                            "options": {
                              "text": "Home bakers and neighbourhood bakeries, every kitchen checked by our team.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-bakeries-all",
                        "type": "button",
                        "options": {
                          "text": "All bakeries",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-bk-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "10",
                        "per_page": "10",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col items-center gap-2 overflow-hidden rounded-[24px] bg-white px-4 pb-5 pt-0 text-center ring-1 ring-[#F0E4D4] transition-all hover:-translate-y-1 hover:shadow-[0_18px_30px_-22px_rgba(59,36,22,0.5)] before:mb-2 before:block before:h-10 before:w-[calc(100%+2rem)] before:bg-[#FFF1DC] before:content-['']"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-bk-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex flex-col items-center gap-2 overflow-hidden rounded-[24px] bg-white px-4 pb-5 pt-0 text-center ring-1 ring-[#F0E4D4] transition-all hover:-translate-y-1 hover:shadow-[0_18px_30px_-22px_rgba(59,36,22,0.5)] before:mb-2 before:block before:h-10 before:w-[calc(100%+2rem)] before:bg-[#FFF1DC] before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-bk-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-1 ring-4 ring-white shadow-[0_6px_14px_-6px_rgba(59,36,22,0.4)]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full rounded-full object-cover transition-transform group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "pr-bk-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                              }
                            }
                          },
                          {
                            "id": "pr-bk-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bakes",
                              "singularSuffix": " bake",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#E9F4E0] px-2.5 py-0.5 font-body text-[11px] font-bold text-[#6FA14E]"
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
            "id": "pr-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-best-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHeart",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most loved",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-best-h",
                            "type": "heading",
                            "options": {
                              "text": "This week’s favourites",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The most-ordered bakes across every bakery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-best-grid",
                    "type": "postGrid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-best-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-best-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-studio",
            "type": "section",
            "options": {
              "anchor": "custom-cakes"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2A190F] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-studio-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "pr-studio-cake",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-studio-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8505B]/25 blur-3xl"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-candle",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto h-12 w-3 rounded-t-[3px] bg-[repeating-linear-gradient(135deg,#E8505B_0_6px,#FFFFFF_6px_12px)] before:absolute before:-top-6 before:left-1/2 before:h-6 before:w-4 before:-translate-x-1/2 before:animate-pulse before:rounded-[50%_50%_50%_50%/60%_60%_40%_40%] before:bg-[#FFC94D] before:shadow-[0_0_20px_#FFC94D] before:content-['']"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-t1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-40 h-20 rounded-[18px] bg-[#FFFFFF] shadow-[inset_0_-10px_0_rgba(0,0,0,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-5 before:rounded-t-[18px] before:bg-[#E8505B] before:content-[''] after:absolute after:inset-x-2 after:top-5 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#E8505B_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-t2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-60 h-24 rounded-[18px] bg-[#FFF1DC] shadow-[inset_0_-10px_0_rgba(0,0,0,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-5 before:rounded-t-[18px] before:bg-[#E8505B] before:content-[''] after:absolute after:inset-x-2 after:top-5 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#E8505B_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-t3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-80 max-w-full h-28 rounded-[18px] bg-[#FFFFFF] shadow-[inset_0_-10px_0_rgba(0,0,0,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-5 before:rounded-t-[18px] before:bg-[#F7B9BE] before:content-[''] after:absolute after:inset-x-2 after:top-5 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#F7B9BE_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-stand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto h-4 w-[22rem] max-w-full rounded-full bg-[#FFC94D] after:absolute after:left-1/2 after:top-full after:h-10 after:w-10 after:-translate-x-1/2 after:rounded-b-[10px] after:bg-[#FFC94D]/80 after:content-['']"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-studio-msg",
                        "type": "text",
                        "options": {
                          "text": "“Happy birthday, Nusrat!”",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-14 rotate-[-3deg] rounded-full bg-white px-5 py-2 font-body text-sm font-bold text-[#E8505B] shadow-lg"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-studio-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-7 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-studio-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-studio-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "pr-studio-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-studio-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCake",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC94D] text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Cake studio",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#FFC94D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-studio-h",
                                "type": "heading",
                                "options": {
                                  "text": "Design a cake, we’ll find the baker.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-sub",
                                "type": "text",
                                "options": {
                                  "text": "Pick a size, a flavour and the message. A verified bakery near you bakes it fresh with 24 hours’ notice.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-white/65"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-studio-s1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-studio-s1-k",
                            "type": "text",
                            "options": {
                              "text": "1 · Size",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "pr-studio-sizes",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-3 gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-studio-size-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 rounded-2xl p-3.5 bg-white/10 ring-1 ring-white/15"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-studio-size-1-s",
                                    "type": "text",
                                    "options": {
                                      "text": "½ kg",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳1,200",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#FFC94D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Serves 4-6",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-white/55"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-studio-size-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 rounded-2xl p-3.5 bg-[#FFC94D]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-studio-size-2-s",
                                    "type": "text",
                                    "options": {
                                      "text": "1 kg",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳2,100",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#3B2416]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Serves 8-10",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#3B2416]/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-studio-size-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 rounded-2xl p-3.5 bg-white/10 ring-1 ring-white/15"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-studio-size-3-s",
                                    "type": "text",
                                    "options": {
                                      "text": "2 kg",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳3,900",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#FFC94D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-studio-size-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Serves 16-20",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-white/55"
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
                        "id": "pr-studio-s2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-studio-s2-k",
                            "type": "text",
                            "options": {
                              "text": "2 · Flavour",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "pr-studio-flavours",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-studio-fl-1",
                                "type": "text",
                                "options": {
                                  "text": "Chocolate",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-white/10 text-white/85 ring-1 ring-white/15"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-fl-2",
                                "type": "text",
                                "options": {
                                  "text": "Red velvet",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-[#E8505B] text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-fl-3",
                                "type": "text",
                                "options": {
                                  "text": "Vanilla",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-white/10 text-white/85 ring-1 ring-white/15"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-fl-4",
                                "type": "text",
                                "options": {
                                  "text": "Mango",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-white/10 text-white/85 ring-1 ring-white/15"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-fl-5",
                                "type": "text",
                                "options": {
                                  "text": "Black forest",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-white/10 text-white/85 ring-1 ring-white/15"
                                  }
                                }
                              },
                              {
                                "id": "pr-studio-fl-6",
                                "type": "text",
                                "options": {
                                  "text": "Pistachio",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full px-3.5 py-2 font-body text-sm font-semibold bg-white/10 text-white/85 ring-1 ring-white/15"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-studio-s3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-studio-btn",
                            "type": "button",
                            "options": {
                              "text": "Start a custom cake",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/cakes",
                              "target": "",
                              "icon": "IconCake",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E8505B] px-6 py-3.5 transition-colors hover:bg-[#CC3B47]"
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
                            "id": "pr-studio-note",
                            "type": "text",
                            "options": {
                              "text": "3 · Write your message at checkout",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-white/60"
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
            "id": "pr-row-breads",
            "type": "section",
            "options": {
              "anchor": "breads"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-row-breads-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-row-breads-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-breads-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-breads-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-breads-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBread",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-breads-label",
                                "type": "text",
                                "options": {
                                  "text": "Morning bakes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-row-breads-h",
                            "type": "heading",
                            "options": {
                              "text": "Breads & buns",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-row-breads-sub",
                            "type": "text",
                            "options": {
                              "text": "Milk bread, sourdough, brioche and the classic pauruti.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-row-breads-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/breads",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-row-breads-slider",
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
                                  "breads"
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1rem",
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
                          },
                          "1279": {
                            "perPage": 4
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-breads-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-breads-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-breads-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-breads-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-row-breads-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-row-breads-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-breads-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-row-breads-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-row-breads-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-row-breads-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-breads-slider-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-breads-slider-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-slots",
            "type": "section",
            "options": {
              "anchor": "delivery"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-slots-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "pr-slots-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-slots-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-slots-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "pr-slots-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-slots-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconMoped",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-slots-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Delivery slots",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-slots-h",
                                "type": "heading",
                                "options": {
                                  "text": "Pick a slot, get it warm.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-slots-sub",
                                "type": "text",
                                "options": {
                                  "text": "Each bakery bakes to your slot, and our riders pick up straight from the oven.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-slots-tip",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-3 rounded-2xl bg-[#E9F4E0] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-slots-tip-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconLeaf",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 text-[#6FA14E]"
                              }
                            }
                          },
                          {
                            "id": "pr-slots-tip-t",
                            "type": "text",
                            "options": {
                              "text": "Free delivery over ৳800 from one bakery. Mix bakeries for a small extra fee.",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#2B1B12]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pr-slots-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-slot-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 overflow-hidden rounded-[24px] bg-[#FFF3D1] p-6 pb-8 after:absolute after:inset-x-0 after:bottom-0 after:h-2 after:rotate-180 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFFFFF_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-slot-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSun",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#C8823F]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-1-k",
                            "type": "text",
                            "options": {
                              "text": "Morning",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C8823F]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-1-t",
                            "type": "text",
                            "options": {
                              "text": "7 – 10 am",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-1-cut",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-slot-1-cut-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClock",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#7D6B5D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-slot-1-cut-t",
                                "type": "text",
                                "options": {
                                  "text": "Order by 10 pm the night before",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-slot-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 overflow-hidden rounded-[24px] bg-[#FDE6E7] p-6 pb-8 after:absolute after:inset-x-0 after:bottom-0 after:h-2 after:rotate-180 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFFFFF_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-slot-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSunHigh",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#E8505B]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-2-k",
                            "type": "text",
                            "options": {
                              "text": "Midday",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-2-t",
                            "type": "text",
                            "options": {
                              "text": "11 am – 2 pm",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-2-cut",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-slot-2-cut-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClock",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#7D6B5D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-slot-2-cut-t",
                                "type": "text",
                                "options": {
                                  "text": "Order by 9 am",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7D6B5D]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "pr-slot-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 overflow-hidden rounded-[24px] bg-[#F3E7DC] p-6 pb-8 after:absolute after:inset-x-0 after:bottom-0 after:h-2 after:rotate-180 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFFFFF_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-slot-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSunset",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-3-k",
                            "type": "text",
                            "options": {
                              "text": "Evening",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-3-t",
                            "type": "text",
                            "options": {
                              "text": "4 – 8 pm",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-slot-3-cut",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-slot-3-cut-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconClock",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#7D6B5D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-slot-3-cut-t",
                                "type": "text",
                                "options": {
                                  "text": "Order by 1 pm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7D6B5D]"
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
            "id": "pr-row-cakes",
            "type": "section",
            "options": {
              "anchor": "cakes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-row-cakes-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-row-cakes-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-cakes-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-cakes-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-cakes-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCake",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-cakes-label",
                                "type": "text",
                                "options": {
                                  "text": "For every celebration",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-row-cakes-h",
                            "type": "heading",
                            "options": {
                              "text": "Cakes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-row-cakes-sub",
                            "type": "text",
                            "options": {
                              "text": "Birthday, anniversary, bento and jar cakes.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-row-cakes-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/cakes",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-row-cakes-slider",
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
                                  "cakes"
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1rem",
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
                          },
                          "1279": {
                            "perPage": 4
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-cakes-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-cakes-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-cakes-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-cakes-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-row-cakes-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-row-cakes-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-cakes-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-row-cakes-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-row-cakes-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-row-cakes-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-cakes-slider-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-cakes-slider-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-row-pastries",
            "type": "section",
            "options": {
              "anchor": "pastries"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-row-pastries-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-row-pastries-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-pastries-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-pastries-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pastries-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCookie",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-pastries-label",
                                "type": "text",
                                "options": {
                                  "text": "Flaky & buttery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-row-pastries-h",
                            "type": "heading",
                            "options": {
                              "text": "Pastries & cookies",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-row-pastries-sub",
                            "type": "text",
                            "options": {
                              "text": "Croissants, danishes, puffs, brownies and cookies.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-row-pastries-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/pastries",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-row-pastries-slider",
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
                                  "pastries"
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1rem",
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
                          },
                          "1279": {
                            "perPage": 4
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-pastries-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-pastries-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pastries-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-pastries-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-row-pastries-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-row-pastries-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-pastries-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-row-pastries-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-row-pastries-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-row-pastries-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pastries-slider-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-pastries-slider-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-row-pitha",
            "type": "section",
            "options": {
              "anchor": "pitha"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF1DC] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-row-pitha-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-row-pitha-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-pitha-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-pitha-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pitha-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCandy",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-pitha-label",
                                "type": "text",
                                "options": {
                                  "text": "পিঠা-পুলি",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-row-pitha-h",
                            "type": "heading",
                            "options": {
                              "text": "Pitha & mishti",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-row-pitha-sub",
                            "type": "text",
                            "options": {
                              "text": "Bhapa, patishapta, chitoi and sweets from home kitchens.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-row-pitha-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/pitha",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-row-pitha-slider",
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
                                  "pitha"
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1rem",
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
                          },
                          "1279": {
                            "perPage": 4
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-row-pitha-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-row-pitha-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pitha-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-pitha-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-row-pitha-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-row-pitha-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-row-pitha-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-row-pitha-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-row-pitha-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-row-pitha-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-row-pitha-slider-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-row-pitha-slider-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
          },
          {
            "id": "pr-sell",
            "type": "section",
            "options": {
              "anchor": "sell"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-sell-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-sell-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#E8505B] p-8 sm:p-12 lg:grid-cols-12 lg:p-14"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-sell-scallop",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 top-0 h-2 bg-[radial-gradient(circle_at_50%_0,#FFFBF5_7px,transparent_7.5px)] bg-[length:16px_8px] bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "pr-sell-art",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBuildingStore",
                          "size": 260,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-12 -right-10 hidden text-white/10 lg:flex"
                          }
                        }
                      },
                      {
                        "id": "pr-sell-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-sell-k",
                            "type": "text",
                            "options": {
                              "text": "For bakers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#FFC94D]"
                              }
                            }
                          },
                          {
                            "id": "pr-sell-h",
                            "type": "heading",
                            "options": {
                              "text": "You bake it. We’ll sell and deliver it.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-4xl leading-[1.02] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "pr-sell-p",
                            "type": "text",
                            "options": {
                              "text": "Home bakers and bakeries join free. List your bakes, set your slots and we handle orders, riders and payments.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base text-white/80"
                              }
                            }
                          },
                          {
                            "id": "pr-sell-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-sell-btn",
                                "type": "button",
                                "options": {
                                  "text": "Become a seller",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/register",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 transition-colors hover:bg-[#FFC94D]"
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
                      },
                      {
                        "id": "pr-sell-stats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-3 gap-3 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-sell-stat-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/12 p-4 ring-1 ring-white/20 backdrop-blur sm:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-sell-stat-1-v",
                                "type": "text",
                                "options": {
                                  "text": "৳0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-white sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "pr-sell-stat-1-k",
                                "type": "text",
                                "options": {
                                  "text": "Setup fee",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/75 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-sell-stat-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/12 p-4 ring-1 ring-white/20 backdrop-blur sm:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-sell-stat-2-v",
                                "type": "text",
                                "options": {
                                  "text": "Weekly",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-white sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "pr-sell-stat-2-k",
                                "type": "text",
                                "options": {
                                  "text": "Payouts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/75 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-sell-stat-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[22px] bg-white/12 p-4 ring-1 ring-white/20 backdrop-blur sm:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-sell-stat-3-v",
                                "type": "text",
                                "options": {
                                  "text": "120+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-2xl text-white sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "pr-sell-stat-3-k",
                                "type": "text",
                                "options": {
                                  "text": "Bakeries live",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/75 sm:text-sm"
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
            "id": "pr-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-reviews-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconStar",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Happy customers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Crumbs of praise",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 from 30,000+ orders.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "pr-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#3B2416] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B12] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#3B2416]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#E8505B]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The chocolate cake arrived exactly at 6 pm with candles and my message piped perfectly. Total lifesaver.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8505B] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farhana Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Ordered from Mou’s Kitchen",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
                        "id": "pr-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Warm milk bread at my door by 8 am, three days a week. My kids think it’s magic.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "RH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C8823F] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rakib Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Morning slot regular",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
                        "id": "pr-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Got a box of croissants for 40% off at 9 pm. Same bakery, same taste, half the price.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "SR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3B2416] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumaiya Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Tonight’s deals",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
                        "id": "pr-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bhapa and patishapta from a home kitchen in Mirpur. Tasted like my nani made it.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6FA14E] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tahmid Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Pitha box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
                        "id": "pr-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“I bake from home and now get 30 orders a week. They handle delivery, I just bake.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "NI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8505B] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nabila Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Seller on Pauruti",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
                        "id": "pr-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-[#FFFBF5] p-7 ring-1 ring-[#F0E4D4]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered 40 mixed pastries for a meeting. On time, well packed, everyone asked where from.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#2B1B12]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#F0E4D4] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "IA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C8823F] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "pr-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imtiaz Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B12]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Office party box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#E8505B]"
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
            "id": "pr-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "pr-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-journal-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBread",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "From the bakers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Recipes, stories & bakery visits",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E6D4BD] transition-colors hover:bg-[#3B2416] hover:ring-[#3B2416]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#3B2416] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#3B2416] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-journal-grid",
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
                        "id": "pr-journal-loop",
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
                            "id": "pr-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[24px] bg-[#FFF1DC]"
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
                            "id": "pr-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#7D6B5D]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#3B2416]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#E8505B] transition-transform group-hover/rm:translate-x-1"
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
            "id": "pr-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "pr-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "pr-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "pr-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-faq-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHelpCircle",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-extrabold tracking-[-0.02em] text-3xl leading-[1.05] sm:text-4xl lg:text-[44px] text-[#2B1B12]"
                                  }
                                }
                              },
                              {
                                "id": "pr-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Freshness, mixing bakeries, custom cakes and slots.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#7D6B5D]"
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
                    "id": "pr-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Is everything baked on the day?",
                          "classes": ""
                        },
                        {
                          "label": "Can I order from more than one bakery?",
                          "classes": ""
                        },
                        {
                          "label": "How early should I order a custom cake?",
                          "classes": ""
                        },
                        {
                          "label": "How are bakeries checked?",
                          "classes": ""
                        },
                        {
                          "label": "What are the delivery areas and slots?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-[#FFFBF5] px-6 py-5 font-body text-base font-semibold text-[#2B1B12] ring-1 ring-[#F0E4D4] transition-colors hover:bg-[#FFF1DC]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#FFC94D] !ring-[#FFC94D]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#E8505B]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Bakeries bake to your delivery slot, and anything left at closing goes into Tonight’s deals, never into tomorrow’s orders.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Your cart can mix bakeries; each one is delivered in the same slot, with a small extra fee per additional bakery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "24 hours ahead for most cakes, 48 hours for tiered or photo cakes. Write your message at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Our team visits every kitchen before it goes live, and ratings from real orders keep the best ones on top.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Most of Dhaka in three slots: morning, midday and evening. Slots close a few hours before so bakers have time to bake.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7D6B5D]"
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
            "id": "pr-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Every bakery, one cart",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Bakes",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Breads, cakes, pastries and pitha from every bakery on Pauruti, freshest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-shop-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-shop-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
                        "id": "pr-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-shop-promise",
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
                "id": "pr-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Baked today",
                          "description": "Every order, every day",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "3-hour slots",
                          "description": "Morning, midday, evening",
                          "icon": "IconClock",
                          "iconSize": ""
                        },
                        {
                          "title": "Verified bakeries",
                          "description": "Kitchens checked by us",
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
                        "classes": "font-heading text-lg font-bold text-[#2B1B12]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3D1] text-[#C8823F]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-shop-promise-fb-ic",
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
                        "id": "pr-shop-promise-fb-t",
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
                        "id": "pr-shop-promise-fb-d",
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
            "id": "pr-pd",
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
                "id": "pr-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-pd-grid",
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
                        "id": "pr-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FDE6E7] via-white to-[#FFF1DC] p-4 shadow-[0_12px_30px_rgba(43,27,18,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B1B12]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B1B12]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#3B2416]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-pd-cats",
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
                                "classes": "rounded-full bg-[#FDE6E7] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#E8505B] hover:bg-[#E8505B] hover:text-white"
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
                            "id": "pr-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#2B1B12] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "pr-pd-rate",
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
                                "classes": "font-heading font-bold text-[#2B1B12]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "pr-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#2B1B12]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#2B1B12]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#2B1B12]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#3B2416] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "pr-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#7D6B5D]"
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
                            "id": "pr-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#2B1B12]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#2B1B12] transition-colors hover:border-[#E8505B] hover:bg-[#FDE6E7]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#E8505B] !bg-[#FDE6E7] !text-[#CC3B47]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "pr-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out for today · back tomorrow",
                              "inStockText": "Baking today · choose your slot at checkout",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#3B2416]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#E8505B]"
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
                            "id": "pr-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#2B1B12]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFFBF5]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFFBF5]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#3B2416] px-8 text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#2A190F]"
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
                            "id": "pr-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Baked today",
                                  "description": "For your slot",
                                  "icon": "IconFlame",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Verified bakery",
                                  "description": "Kitchen checked",
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
                                "classes": "font-heading text-base font-bold text-[#2B1B12]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDE6E7] text-[#E8505B]"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-perks-ic",
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
                                "id": "pr-pd-perks-t",
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
                                "id": "pr-pd-perks-d",
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
                            "id": "pr-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-sku",
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
                                    "classes": "font-semibold text-[#2B1B12]"
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
                                "id": "pr-pd-brands",
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
                                    "classes": "font-semibold text-[#2B1B12]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#3B2416]"
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
                                "id": "pr-pd-tags",
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
                                    "classes": "font-semibold text-[#2B1B12]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#3B2416]"
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
            "id": "pr-pd-tabs-sec",
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
                "id": "pr-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this bake",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Ingredients",
                              "icon": "IconWheat"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFFBF5] px-5 py-2.5 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2B1B12] !text-white shadow-md"
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
                            "id": "pr-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2B1B12] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2B1B12] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#3B2416] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC94D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconWheat",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "The bakery, pack size and serving size are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Allergens (gluten, eggs, dairy, nuts) are listed by the baker",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Best eaten on the day; keep cream cakes refrigerated",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Custom messages and candles can be added at checkout",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#E8505B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Morning 7-10 am, midday 11 am-2 pm or evening 4-8 pm",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Slots close a few hours before, so bakers can bake fresh",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery over ৳800 from one bakery",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged or wrong items are refunded or replaced",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#E8505B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "pr-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFFBF5] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFFBF5] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "pr-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3E7DC]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pr-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#2B1B12]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "pr-pd-reviews-rate",
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
                                        "id": "pr-pd-reviews-co",
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
                                    "id": "pr-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was it? Fresh, on time, well packed?",
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
                                        "classes": "font-heading text-sm font-bold text-[#2B1B12]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFFBF5] px-4 py-3 text-sm text-[#2B1B12] placeholder:text-gray-400 focus:border-[#E8505B] focus:outline-none focus:ring-2 focus:ring-[#E8505B]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#3B2416] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#2A190F] disabled:opacity-50"
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
            "id": "pr-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-16"
              }
            },
            "children": [
              {
                "id": "pr-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Goes well with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3E7DC] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#3B2416]"
                          }
                        }
                      },
                      {
                        "id": "pr-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B1B12]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-pd-rel-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-pd-rel-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
            "id": "pr-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by craving",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Breads, cakes, pastries, cookies, pitha, savoury, healthy bakes and party boxes.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-cat-grid",
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
                        "id": "pr-cat-grid-loop",
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
                            "id": "pr-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FDE6E7] transition-transform"
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
                            "id": "pr-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#2B1B12] transition-colors group-hover:text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bakes",
                              "singularSuffix": " bake",
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
                        "id": "pr-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pr-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bakes",
                      "singularSuffix": " bake"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E8505B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-cat1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
                        "id": "pr-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group bakes by occasion and diet: tonight’s deals, bestsellers, eggless, sugar-free and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#3B2416]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#3B2416]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#2B1B12] group-hover:text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFFBF5] px-2 py-0.5 text-[10px] font-bold text-[#7D6B5D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "pr-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pr-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bakes",
                      "singularSuffix": " bake"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E8505B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-tag1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
                        "id": "pr-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The bakers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Bakeries",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Neighbourhood bakeries and home bakers, every kitchen checked by our team.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-brand-grid",
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
                        "id": "pr-brand-grid-loop",
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
                            "id": "pr-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFFBF5] p-3"
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
                            "id": "pr-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#2B1B12] group-hover:text-[#3B2416]"
                              }
                            }
                          },
                          {
                            "id": "pr-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " bakes",
                              "singularSuffix": " bake",
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
                        "id": "pr-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "pr-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " bakes",
                      "singularSuffix": " bake"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#E8505B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-brand1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
                        "id": "pr-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "From the bakers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Recipes, Stories & Bakery Visits",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Meet the bakers, learn their recipes and find what’s in season.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-blog-grid",
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
                        "id": "pr-blog-grid-loop",
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
                            "id": "pr-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF1DC]"
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
                            "id": "pr-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#2B1B12] transition-colors group-hover:text-[#3B2416]"
                                  }
                                }
                              },
                              {
                                "id": "pr-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#3B2416]"
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
                        "id": "pr-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:border-[#3B2416] hover:text-[#3B2416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#3B2416] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "pr-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1DC] via-white to-[#FFFBF5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pr-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-post-k",
                    "type": "text",
                    "options": {
                      "text": "From the bakers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDE6E7] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#7D6B5D]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-post-author",
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
                            "classes": "font-heading font-bold text-[#2B1B12]"
                          }
                        }
                      },
                      {
                        "id": "pr-post-dot",
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
                        "id": "pr-post-date",
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
                    "id": "pr-post-thumb",
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
            "id": "pr-post-body",
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
                "id": "pr-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2B1B12] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2B1B12] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#3B2416] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC94D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-16"
              }
            },
            "children": [
              {
                "id": "pr-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2B1B12]"
                      }
                    }
                  },
                  {
                    "id": "pr-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFFBF5] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FFFBF5] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3E7DC]"
                              }
                            }
                          },
                          {
                            "id": "pr-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#2B1B12]"
                              }
                            }
                          },
                          {
                            "id": "pr-post-cmt-co",
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
                        "id": "pr-post-cmt-form",
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
                            "classes": "font-heading text-sm font-bold text-[#2B1B12]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFFBF5] px-4 py-3 text-sm text-[#2B1B12] placeholder:text-gray-400 focus:border-[#E8505B] focus:outline-none focus:ring-2 focus:ring-[#E8505B]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#3B2416] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#2A190F] disabled:opacity-50"
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
            "id": "pr-post-more",
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
                "id": "pr-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Bakers",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2B1B12]"
                      }
                    }
                  },
                  {
                    "id": "pr-post-more-grid",
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
                        "id": "pr-post-more-grid-loop",
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
                            "id": "pr-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF1DC]"
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
                            "id": "pr-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#E8505B]"
                                  }
                                }
                              },
                              {
                                "id": "pr-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#2B1B12] transition-colors group-hover:text-[#3B2416]"
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
            "id": "pr-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FFF1DC] pb-14 pt-14 sm:pb-16 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:z-10 after:h-2 after:content-[''] after:bg-[radial-gradient(circle_at_50%_0,#FFF1DC_7px,transparent_7.5px)] after:bg-[length:16px_8px] after:bg-repeat-x"
              }
            },
            "children": [
              {
                "id": "pr-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "pr-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-bold uppercase tracking-[0.16em] text-[#E8505B]"
                      }
                    }
                  },
                  {
                    "id": "pr-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2B1B12] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "pr-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, reorder your favourites and manage your addresses and slots.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "pr-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-12"
              }
            },
            "children": [
              {
                "id": "pr-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#2B1B12] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#FFC94D]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#3B2416]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#3B2416]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#3B2416]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "pr-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "pr-acc-3",
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
                                "id": "pr-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3B2416] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2A190F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "pr-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3B2416] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2A190F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "pr-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "pr-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFFBF5] px-5 py-2.5 font-heading text-sm font-semibold text-[#2B1B12] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2B1B12] !text-white shadow-md"
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
                                "id": "pr-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3B2416]/10 text-[#3B2416]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "pr-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#3B2416] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pr-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3B2416]/10 text-[#3B2416]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pr-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#3B2416]/40 hover:bg-[#3B2416]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3B2416]/10 text-[#3B2416]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "pr-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3B2416]/10 text-[#3B2416]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#3B2416] focus:outline-none focus:ring-2 focus:ring-[#3B2416]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B2416] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2A190F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2416]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "pr-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1DC] via-white to-[#FFFBF5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pr-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(43,27,18,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FDE6E7] text-[#E8505B]"
                          }
                        }
                      },
                      {
                        "id": "pr-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3E7DC] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#3B2416]"
                          }
                        }
                      },
                      {
                        "id": "pr-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! The Ovens Are On",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B1B12] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "pr-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your bakeries are getting ready. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#7D6B5D] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "pr-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "Each bakery confirms your order by SMS",
                              "icon": ""
                            },
                            {
                              "text": "Your bakes come out of the oven for your slot",
                              "icon": ""
                            },
                            {
                              "text": "A rider delivers in your 3-hour slot: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#FFFBF5] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#3B2416]"
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
                        "id": "pr-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3B2416] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#2A190F] w-full sm:w-auto"
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
                            "id": "pr-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E8505B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#E8505B] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#E8505B] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#E8505B] whitespace-nowrap group-hover:text-white"
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
            "id": "pr-ty-promise",
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
                "id": "pr-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Baked today",
                          "description": "Every order, every day",
                          "icon": "IconFlame",
                          "iconSize": ""
                        },
                        {
                          "title": "3-hour slots",
                          "description": "Morning, midday, evening",
                          "icon": "IconClock",
                          "iconSize": ""
                        },
                        {
                          "title": "Verified bakeries",
                          "description": "Kitchens checked by us",
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
                        "classes": "font-heading text-lg font-bold text-[#2B1B12]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3D1] text-[#C8823F]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-ty-promise-fb-ic",
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
                        "id": "pr-ty-promise-fb-t",
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
                        "id": "pr-ty-promise-fb-d",
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
            "id": "pr-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1DC] via-white to-[#FFFBF5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "pr-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#3B2416] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "pr-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF1DC] text-[#2B1B12]"
                      }
                    }
                  },
                  {
                    "id": "pr-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Is All Crumbs",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#2B1B12] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "pr-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this bake may have sold out for today. Head back home and find something fresh.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#7D6B5D] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "pr-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3B2416] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(59,36,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#2A190F] w-full sm:w-auto"
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
                        "id": "pr-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Bakes",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E8505B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#E8505B] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#E8505B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#E8505B] whitespace-nowrap group-hover:text-white"
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
            "id": "pr-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFFBF5] py-16"
              }
            },
            "children": [
              {
                "id": "pr-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "pr-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFC94D] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#2B1B12]"
                          }
                        }
                      },
                      {
                        "id": "pr-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2B1B12] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "pr-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                      }
                    },
                    "children": [
                      {
                        "id": "pr-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#F0E4D4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_-22px_rgba(59,36,22,0.45)] hover:ring-[#E6D4BD]"
                          }
                        },
                        "children": [
                          {
                            "id": "pr-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#FFF1DC]"
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
                                    "id": "pr-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#E8505B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "pr-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "pr-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-first flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#FFC94D]"
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
                                    "id": "pr-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#2B1B12] transition-colors group-hover:text-[#E8505B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "pr-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 7,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-xs text-[#7D6B5D]"
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
                            "id": "pr-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "pr-nf-grid-c-price",
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
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7D6B5D] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#3B2416]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#3B2416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#3B2416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "pr-nf-grid-c-add",
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
                                    "classes": "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#FFC94D] px-2.5 text-[#3B2416] transition-colors hover:bg-[#3B2416] hover:text-white sm:px-3.5"
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
