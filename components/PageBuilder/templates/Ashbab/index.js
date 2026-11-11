/**
 * Template: Ashbab Furniture Market.
 *
 * A blueprint-style furniture marketplace (ashbab: furniture, in Bangla):
 * verified workshops and brands selling living, bedroom, dining, office,
 * kids and outdoor furniture, lighting and decor through one storefront,
 * with 0% EMI, white-glove delivery and free assembly. Makers are
 * product_brand terms. Like the other complete templates here it carries all
 * sixteen page types - Header, Footer, Home, Shop, Product, the six taxonomy
 * archives, Blog Archive, Blog Single, Account, Thank you and 404 - so applying
 * it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to ab-, palette remapped, copy
 * rewritten; inner-page heroes become navy blueprint sheets); the Header is
 * restructured and Home is built fresh from the same block types. It is
 * plain data: edit freely.
 *
 * THE HEADER
 *
 * A navy utility strip (EMI and assembly line, experience centre / sell on
 * Ashbab / track delivery links); a white row with the logo - a floor-plan
 * room with a mustard door swing, in CSS - a search framed in navy with a
 * mustard button, account and a navy cart; a rooms rail (lg and up) with an
 * icon before each label, where hovering draws a mustard dimension line
 * |-----| under the item and Deals sits in a mustard tag; and a centimetre
 * ruler (ab-hdr-ruler, repeating-gradient ticks) along the foot.
 *
 * THE BLUEPRINT SYSTEM
 *
 * Navy grid paper for the hero, the "will it fit?" sheet, how-buying-works
 * and inner-page heroes; light grid paper in product photo wells; dimension
 * lines (border-x plus a 2px centre stripe) on section labels, the rail hover
 * and the bed-size drawings; mono "sheet" and "room" labels; floor-plan room
 * cards with dashed door swings.
 *
 * DESIGN
 *
 *   navy     #1B2B4B  primary: blueprint, buttons, cart, outlines   #121E36 deep  #E6EAF2 tint
 *   teak     #A0643A  secondary: labels, hovers, accents            #F4E8DE tint
 *   mustard  #E8B931  accent: dimension lines, deals, search button  #C99A12 dark  #FBF1D3 tint
 *   paper #F7F6F2   stone #EFEDE7   ink #141B2B   muted #677084   line #E3E1DA
 *
 * Fonts (template meta): Red Hat Display (headings), Red Hat Text (body),
 * Red Hat Mono via `font-['Red_Hat_Mono']` for labels, sizes and the EMI
 * table, and Anek Bangla via `font-['Anek_Bangla']` for the Bangla line.
 *
 * Product cards are spec sheets: a grid-paper photo well (4:3, for
 * furniture), a mustard discount tag, the name, one mono excerpt line (use
 * it for size and material, e.g. "W 210 × D 95 × H 84 cm · Teak"), the price
 * and a navy add-to-cart square.
 *
 * HOME
 *
 *   Blueprint hero (the sofa drawn with its dimensions, public/templates/
 *   ashbab-blueprint.svg; stats; three promise tiles) - shop by room as
 *   floor-plan cards (#rooms) - deal of the week (#deals) - verified makers,
 *   live product_brand terms (#makers) - bestsellers - will it fit?, a
 *   measuring checklist and bed sizes drawn to scale (#will-it-fit) - living
 *   room - materials with CSS wood, metal and cane swatches (#materials) -
 *   bedroom - office - how buying works with an EMI example (#how-it-works) -
 *   lighting & decor - sell on Ashbab (#sell) - reviews - ideas & guides
 *   (#journal) - FAQ (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: living-room, bedroom, dining, office, kids-room,
 *     outdoor, lighting, decor. Tag slugs: deal-of-the-week, bestseller,
 *     teak, mahogany, gamari, engineered-wood, metal, cane. Makers are
 *     product_brand terms; give each a logo.
 *   - EMI terms (0%, 12 months, ৳10,000 minimum, selected cards), free
 *     assembly in Dhaka, delivery times and the return rules are sample
 *     policy: match them to your bank partners and logistics.
 *   - "300+ makers", "12,000 pieces", "64 districts", "18,000+ deliveries",
 *     the ৳84,000 sofa example, the seller stats, contact details and the six
 *     reviews are sample copy. Bed sizes are common Bangladeshi sizes.
 */

var template = [
  {
    "name": "Ashbab Furniture Market",
    "description": "Blueprint-style furniture marketplace in navy, mustard and teak on paper; Red Hat Display, Red Hat Text, Red Hat Mono and Anek Bangla: a utility strip, a framed search, a rooms rail with dimension-line hovers and a ruler edge, a blueprint hero with the sofa drawn to size, shop by room as floor-plan cards, deal of the week, verified makers (live brand terms), bestsellers, a \"will it fit?\" guide with bed sizes to scale, living room, materials with wood swatches, bedroom, office, how buying works with an EMI example, decor, sell on Ashbab, reviews, guides and FAQ. All 16 pages.",
    "thumbnail": "/templates/ashbab.svg",
    "meta": {
      "fonts": [
        {
          "family": "Red Hat Display",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;600;700;800;900&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Red Hat Text",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Red Hat Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;500;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Anek Bangla",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Red Hat Display",
        "body": "Red Hat Text"
      },
      "colors": {
        "primary": "#1B2B4B",
        "secondary": "#A0643A",
        "accent": "#E8B931",
        "background": "#F7F6F2",
        "foreground": "#141B2B",
        "muted": "#677084"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ab-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full"
              }
            },
            "children": [
              {
                "id": "ab-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#1B2B4B]"
                  }
                },
                "children": [
                  {
                    "id": "ab-hdr-util",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-9 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-hdr-util-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hdr-util-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 14,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 text-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-hdr-util-t",
                            "type": "text",
                            "options": {
                              "text": "0% EMI up to 12 months · Free assembly in Dhaka",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "truncate font-body text-xs text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-hdr-util-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-5 md:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hdr-util-show",
                            "type": "button",
                            "options": {
                              "text": "Experience centre",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconMapPin",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-white/50"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium text-white/75 whitespace-nowrap transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "ab-hdr-util-sell",
                            "type": "button",
                            "options": {
                              "text": "Sell on Ashbab",
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
                                "classes": "flex items-center text-white/50"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium text-white/75 whitespace-nowrap transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "ab-hdr-util-track",
                            "type": "button",
                            "options": {
                              "text": "Track delivery",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconTruckDelivery",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-white/50"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium text-white/75 whitespace-nowrap transition-colors group-hover:text-white"
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
                "id": "ab-hdr-main",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-white"
                  }
                },
                "children": [
                  {
                    "id": "ab-hdr-bar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-hdr-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-[72px] items-center justify-between gap-4 lg:gap-8"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hdr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-hdr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-10 w-10 shrink-0 rounded-[4px] border-[2.5px] border-[#1B2B4B] bg-white before:absolute before:bottom-0 before:right-0 before:h-5 before:w-5 before:rounded-tl-full before:border-l-[2.5px] before:border-t-[2.5px] before:border-[#E8B931] before:content-[''] after:absolute after:-bottom-[2.5px] after:right-0 after:h-[2.5px] after:w-5 after:bg-white after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ab-hdr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hdr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "ashbab",
                                      "src": "https://placehold.co/200x64?text=Ashbab",
                                      "altText": "Ashbab",
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
                                        "classes": "font-heading text-[26px] font-black leading-none tracking-[-0.04em] text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hdr-brand-tag",
                                    "type": "text",
                                    "options": {
                                      "text": "Furniture marketplace",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 block font-['Red_Hat_Mono'] text-[9px] font-medium uppercase leading-none tracking-[0.18em] text-[#A0643A]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search sofas, beds, makers...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden min-w-0 max-w-2xl flex-1 rounded-[12px] border-2 border-[#1B2B4B] bg-white py-1 pl-4 pr-1 transition-all focus-within:shadow-[0_0_0_4px_#FBF1D3] md:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-1 py-1.5 font-body text-sm text-[#141B2B] placeholder:text-[#677084] focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "order-last flex h-9 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#E8B931] text-[#1B2B4B]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1B2B4B]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#1B2B4B]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1B2B4B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#121E36]"
                              }
                            }
                          },
                          {
                            "id": "ab-hdr-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-hdr-account",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] text-[#1B2B4B] ring-1 ring-[#E3E1DA] transition-colors hover:bg-[#F7F6F2]"
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
                                "id": "ab-hdr-cart",
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
                                    "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#A0643A]"
                                  },
                                  "trigger-badge": {
                                    "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#1B2B4B] px-1 text-[10px] font-bold text-white"
                                  },
                                  "header": {
                                    "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F7F6F2] px-5 py-4"
                                  },
                                  "title": {
                                    "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#141B2B]"
                                  },
                                  "title-icon": {
                                    "classes": "text-[#1B2B4B]"
                                  },
                                  "count-badge": {
                                    "classes": "rounded-full bg-[#1B2B4B] px-2 py-0.5 text-xs font-bold text-white"
                                  },
                                  "trigger": {
                                    "classes": "flex items-center gap-2 rounded-lg bg-[#1B2B4B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#121E36]"
                                  },
                                  "close-button": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/30"
                                  },
                                  "coupon-code-input": {
                                    "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15"
                                  },
                                  "coupon-apply": {
                                    "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#1B2B4B] px-4 py-2 text-sm font-medium text-[#1B2B4B] transition-colors hover:bg-[#1B2B4B] hover:text-white disabled:opacity-60"
                                  },
                                  "checkout-button": {
                                    "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B2B4B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#121E36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "ab-hdr-mobile",
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
                                    "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-[12px] text-[#1B2B4B] ring-1 ring-[#E3E1DA]"
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
                                    "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F7F6F2] p-2 text-[#141B2B] transition-colors hover:bg-[#1B2B4B] hover:text-white"
                                  },
                                  "popover-content": {
                                    "classes": "flex flex-col gap-6 p-6 pt-16"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hdr-m-brand",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group flex shrink-0 items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ab-hdr-m-brand-mark",
                                        "type": "text",
                                        "options": {
                                          "text": "",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative h-10 w-10 shrink-0 rounded-[4px] border-[2.5px] border-[#1B2B4B] bg-white before:absolute before:bottom-0 before:right-0 before:h-5 before:w-5 before:rounded-tl-full before:border-l-[2.5px] before:border-t-[2.5px] before:border-[#E8B931] before:content-[''] after:absolute after:-bottom-[2.5px] after:right-0 after:h-[2.5px] after:w-5 after:bg-white after:content-['']"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ab-hdr-m-brand-words",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ab-hdr-m-brand-logo",
                                            "type": "logo",
                                            "options": {
                                              "logoType": "text",
                                              "logoText": "ashbab",
                                              "src": "https://placehold.co/200x64?text=Ashbab",
                                              "altText": "Ashbab",
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
                                                "classes": "font-heading text-[26px] font-black leading-none tracking-[-0.04em] text-[#1B2B4B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ab-hdr-m-brand-tag",
                                            "type": "text",
                                            "options": {
                                              "text": "Furniture marketplace",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mt-1 block font-['Red_Hat_Mono'] text-[9px] font-medium uppercase leading-none tracking-[0.18em] text-[#A0643A]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "ab-hdr-m-search",
                                    "type": "quickSearch",
                                    "options": {
                                      "placeholder": "Search furniture...",
                                      "iconPosition": "",
                                      "icon": "IconSearch"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-full border border-gray-200 bg-[#F7F6F2] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#A0643A] focus-within:ring-2 focus-within:ring-[#A0643A]/20 w-full"
                                      },
                                      "input-wrapper": {
                                        "classes": "flex items-center gap-2"
                                      },
                                      "input-search": {
                                        "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#141B2B] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#677084]"
                                      },
                                      "filter-select": {
                                        "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15"
                                      },
                                      "result-title": {
                                        "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1B2B4B]"
                                      },
                                      "result-price": {
                                        "classes": "font-semibold text-[#1B2B4B]"
                                      },
                                      "add-button": {
                                        "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1B2B4B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#121E36]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hdr-m-menu",
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
                                        "classes": "min-w-52 rounded-[12px] border border-gray-100 bg-white py-2 shadow-lg"
                                      },
                                      "menu-link": {
                                        "classes": "!justify-start !gap-3 border-b border-dashed border-[#E3E1DA] py-3 font-body text-base font-semibold text-[#141B2B] transition-colors hover:text-[#A0643A]"
                                      },
                                      "link-label": {
                                        "classes": ""
                                      },
                                      "icon": {
                                        "classes": "flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#E6EAF2] text-[#1B2B4B]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ab-hdr-m-menu-i1",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Living",
                                          "url": "/categories/living-room",
                                          "icon": "IconSofa",
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
                                        "id": "ab-hdr-m-menu-i2",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Bedroom",
                                          "url": "/categories/bedroom",
                                          "icon": "IconBed",
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
                                        "id": "ab-hdr-m-menu-i3",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Dining",
                                          "url": "/categories/dining",
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
                                        "id": "ab-hdr-m-menu-i4",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Office",
                                          "url": "/categories/office",
                                          "icon": "IconDesk",
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
                                        "id": "ab-hdr-m-menu-i5",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Kids",
                                          "url": "/categories/kids-room",
                                          "icon": "IconBabyCarriage",
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
                                        "id": "ab-hdr-m-menu-i6",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Outdoor",
                                          "url": "/categories/outdoor",
                                          "icon": "IconPlant2",
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
                                        "id": "ab-hdr-m-menu-i7",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Lighting",
                                          "url": "/categories/lighting",
                                          "icon": "IconLamp",
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
                                        "id": "ab-hdr-m-menu-i8",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Decor",
                                          "url": "/categories/decor",
                                          "icon": "IconArmchair2",
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
                                        "id": "ab-hdr-m-menu-i9",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Makers",
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
                                        "id": "ab-hdr-m-menu-i10",
                                        "type": "menuItem",
                                        "options": {
                                          "label": "Deals",
                                          "url": "/tags/deal-of-the-week",
                                          "icon": "IconDiscount",
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
                "id": "ab-hdr-rail",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden w-full border-t border-[#E3E1DA] bg-white lg:block"
                  }
                },
                "children": [
                  {
                    "id": "ab-hdr-rail-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-12 items-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-hdr-menu",
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
                            "classes": "min-w-52 rounded-[12px] border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "relative !gap-1.5 whitespace-nowrap px-2.5 py-1.5 font-body text-sm font-semibold text-[#141B2B] transition-colors hover:text-[#A0643A] after:pointer-events-none after:absolute after:inset-x-2 after:-bottom-[7px] after:h-2.5 after:border-x-2 after:border-[#E8B931] after:bg-[linear-gradient(#E8B931,#E8B931)] after:bg-[length:100%_2px] after:bg-center after:bg-no-repeat after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-100"
                          },
                          "link-label": {
                            "classes": ""
                          },
                          "icon": {
                            "classes": "flex items-center text-[#A0643A]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Living",
                              "url": "/categories/living-room",
                              "icon": "IconSofa",
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
                            "id": "ab-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Bedroom",
                              "url": "/categories/bedroom",
                              "icon": "IconBed",
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
                            "id": "ab-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Dining",
                              "url": "/categories/dining",
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
                            "id": "ab-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Office",
                              "url": "/categories/office",
                              "icon": "IconDesk",
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
                            "id": "ab-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Kids",
                              "url": "/categories/kids-room",
                              "icon": "IconBabyCarriage",
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
                            "id": "ab-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Outdoor",
                              "url": "/categories/outdoor",
                              "icon": "IconPlant2",
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
                            "id": "ab-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Lighting",
                              "url": "/categories/lighting",
                              "icon": "IconLamp",
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
                            "id": "ab-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Decor",
                              "url": "/categories/decor",
                              "icon": "IconArmchair2",
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
                            "id": "ab-hdr-menu-i9",
                            "type": "menuItem",
                            "options": {
                              "label": "Makers",
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
                            "id": "ab-hdr-menu-i10",
                            "type": "menuItem",
                            "options": {
                              "label": "Deals",
                              "url": "/tags/deal-of-the-week",
                              "icon": "IconDiscount",
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
                                "classes": "!bg-[#E8B931] !text-[#1B2B4B] !rounded-[8px]"
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
                "id": "ab-hdr-ruler",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none h-2.5 w-full border-t border-[#E3E1DA] bg-white bg-[repeating-linear-gradient(90deg,#1B2B4B_0_1px,transparent_1px_10px),repeating-linear-gradient(90deg,#1B2B4B_0_1.5px,transparent_1.5px_50px)] bg-[length:100%_4px,100%_9px] bg-no-repeat opacity-95"
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
            "id": "ab-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#141B2B] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "ab-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "ab-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[16px] bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Deal of the week",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "New deals every Saturday morning",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ab-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Floor models, overstock and new makers, before anyone else.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-ftr-news-btn",
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
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#E8B931] px-6 py-3.5 transition-colors hover:bg-white"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#1B2B4B]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ab-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "ab-ftr-grid",
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
                        "id": "ab-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative h-10 w-10 shrink-0 rounded-[4px] border-[2.5px] border-[#1B2B4B] bg-white before:absolute before:bottom-0 before:right-0 before:h-5 before:w-5 before:rounded-tl-full before:border-l-[2.5px] before:border-t-[2.5px] before:border-[#E8B931] before:content-[''] after:absolute after:-bottom-[2.5px] after:right-0 after:h-[2.5px] after:w-5 after:bg-white after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ab-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "ashbab",
                                      "src": "https://placehold.co/200x64?text=Ashbab",
                                      "altText": "Ashbab",
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
                                        "classes": "font-heading text-[26px] font-black leading-none tracking-[-0.04em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "A furniture marketplace for Bangladesh: verified workshops and brands, real dimensions on every listing, 0% EMI, white-glove delivery and free assembly.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "ab-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1B2B4B]"
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
                                "id": "ab-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1B2B4B]"
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
                                "id": "ab-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1B2B4B]"
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
                                "id": "ab-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1B2B4B]"
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
                        "id": "ab-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Rooms",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Living Room",
                                  "icon": "",
                                  "slug": "/categories/living-room"
                                },
                                {
                                  "text": "Bedroom",
                                  "icon": "",
                                  "slug": "/categories/bedroom"
                                },
                                {
                                  "text": "Dining",
                                  "icon": "",
                                  "slug": "/categories/dining"
                                },
                                {
                                  "text": "Home Office",
                                  "icon": "",
                                  "slug": "/categories/office"
                                },
                                {
                                  "text": "Kids Room",
                                  "icon": "",
                                  "slug": "/categories/kids-room"
                                },
                                {
                                  "text": "Lighting & Decor",
                                  "icon": "",
                                  "slug": "/categories/decor"
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
                                "classes": "transition-colors hover:text-[#E8B931]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E8B931]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ftr-ll-care",
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
                                  "text": "Will It Fit?",
                                  "icon": "",
                                  "slug": "/#will-it-fit"
                                },
                                {
                                  "text": "EMI & Delivery",
                                  "icon": "",
                                  "slug": "/#how-it-works"
                                },
                                {
                                  "text": "Sell on Ashbab",
                                  "icon": "",
                                  "slug": "/#sell"
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
                                "classes": "transition-colors hover:text-[#E8B931]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E8B931]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ftr-contact-h",
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
                            "id": "ab-ftr-address",
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
                                "label": "Experience centre",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E8B931]"
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
                                "classes": "shrink-0 text-[#1B2B4B]"
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
                "id": "ab-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "ab-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Ashbab. All rights reserved. Every room, measured.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "ab-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards · 0% EMI",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Red_Hat_Mono'] text-xs"
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
            "id": "ab-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-0 pt-12 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-6 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hero-sheet",
                            "type": "text",
                            "options": {
                              "text": "Sheet A-01 · Living room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-[6px] border border-dashed border-white/30 px-3 py-1.5 font-['Red_Hat_Mono'] text-[11px] uppercase tracking-[0.18em] text-white/70"
                              }
                            }
                          },
                          {
                            "id": "ab-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "ঘর সাজান মনের মতো",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Anek_Bangla'] text-2xl font-medium text-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Every room. 300 makers. One marketplace.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-5xl leading-[1.02] text-white sm:text-6xl xl:text-[68px]"
                              }
                            }
                          },
                          {
                            "id": "ab-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Sofas, beds, dining sets and desks from Bangladesh’s best workshops and brands, with real dimensions on every listing, 0% EMI and free assembly.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-lg leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "ab-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop by room",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#rooms",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#E8B931] px-6 py-3.5 transition-colors hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B2B4B] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "ab-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Will it fit?",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#will-it-fit",
                                  "target": "",
                                  "icon": "IconRulerMeasure",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] px-6 py-3 ring-2 ring-white/30 transition-colors hover:ring-white"
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
                            "id": "ab-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid w-full max-w-md grid-cols-3 gap-4 border-t border-dashed border-white/20 pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "300+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.025em] text-3xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hero-stat-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified makers",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/55"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "12,000",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.025em] text-3xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hero-stat-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Pieces listed",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/55"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-hero-stat-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hero-stat-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "64",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.025em] text-3xl text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hero-stat-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Districts delivered",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.14em] text-white/55"
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
                        "id": "ab-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-hero-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/ashbab-blueprint.svg",
                              "altText": "A three-seat sofa drawn as a blueprint with its width, depth and height marked",
                              "link": "/categories/living-room",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto w-full max-w-[680px]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full"
                              }
                            }
                          },
                          {
                            "id": "ab-hero-note",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-0 top-0 hidden rotate-2 flex-col gap-1 rounded-[10px] bg-white px-4 py-3 shadow-xl sm:flex sm:right-4 lg:-top-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-hero-note-k",
                                "type": "text",
                                "options": {
                                  "text": "Ruposhi 3-seater · Teak",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-hero-note-r",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-hero-note-v",
                                    "type": "text",
                                    "options": {
                                      "text": "৳84,000",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-[-0.025em] text-2xl text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-hero-note-e",
                                    "type": "text",
                                    "options": {
                                      "text": "or ৳7,000/mo",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold text-[#A0643A]"
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
                    "id": "ab-hero-promos",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-14"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-promo-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex items-center gap-4 rounded-t-[16px] bg-white p-5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-promo-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#FBF1D3] text-[#1B2B4B] transition-colors group-hover:bg-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-promo-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-promo-1-h",
                                "type": "button",
                                "options": {
                                  "text": "0% EMI up to 12 months",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#how-it-works",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-[15px] font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-promo-1-p",
                                "type": "text",
                                "options": {
                                  "text": "On selected bank cards, from ৳10,000",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-promo-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex items-center gap-4 rounded-t-[16px] bg-white p-5 hidden sm:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-promo-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTool",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#FBF1D3] text-[#1B2B4B] transition-colors group-hover:bg-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-promo-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-promo-2-h",
                                "type": "button",
                                "options": {
                                  "text": "Free assembly in Dhaka",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#how-it-works",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-[15px] font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-promo-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Delivered, unboxed and set up in your room",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-promo-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex items-center gap-4 rounded-t-[16px] bg-white p-5 hidden sm:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-promo-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRulerMeasure",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#FBF1D3] text-[#1B2B4B] transition-colors group-hover:bg-[#E8B931]"
                              }
                            }
                          },
                          {
                            "id": "ab-promo-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-promo-3-h",
                                "type": "button",
                                "options": {
                                  "text": "Made to your size",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/brands",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-[15px] font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-promo-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Many makers build to custom measurements",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#677084]"
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
            "id": "ab-rooms",
            "type": "section",
            "options": {
              "anchor": "rooms"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-rooms-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-rooms-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-rooms-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-rooms-label",
                            "type": "text",
                            "options": {
                              "text": "Shop by room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-rooms-h",
                            "type": "heading",
                            "options": {
                              "text": "Start with the room",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-rooms-sub",
                            "type": "text",
                            "options": {
                              "text": "Every piece is filed by the room it belongs in, so you can furnish one space at a time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-rooms-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-rooms-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-room-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-1-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-1-a",
                                "type": "text",
                                "options": {
                                  "text": "18 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSofa",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Living room",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/living-room",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-2-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-2-a",
                                "type": "text",
                                "options": {
                                  "text": "14 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBed",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Bedroom",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/bedroom",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-3-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-3-a",
                                "type": "text",
                                "options": {
                                  "text": "12 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconToolsKitchen2",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Dining",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/dining",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-4-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 04",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-4-a",
                                "type": "text",
                                "options": {
                                  "text": "9 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDesk",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Home office",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/office",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-5-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 05",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-5-a",
                                "type": "text",
                                "options": {
                                  "text": "10 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyCarriage",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Kids room",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kids-room",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-6-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 06",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-6-a",
                                "type": "text",
                                "options": {
                                  "text": "6 m²",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-6-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPlant2",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-6-btn",
                            "type": "button",
                            "options": {
                              "text": "Balcony & outdoor",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/outdoor",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-7",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-7-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-7-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 07",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-7-a",
                                "type": "text",
                                "options": {
                                  "text": "Every room",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-7-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconLamp",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-7-btn",
                            "type": "button",
                            "options": {
                              "text": "Lighting",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/lighting",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-room-8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[6px] border-2 border-[#1B2B4B] bg-[#F7F6F2] p-4 transition-colors hover:bg-[#FBF1D3] sm:p-5 before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:h-10 before:w-10 before:-translate-y-1/2 before:rounded-bl-full before:border-b-2 before:border-l-2 before:border-dashed before:border-[#1B2B4B]/30 before:content-[''] after:pointer-events-none after:absolute after:-right-[2px] after:top-1/2 after:h-10 after:w-[2px] after:-translate-y-1/2 after:bg-[#F7F6F2] after:content-[''] hover:after:bg-[#FBF1D3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-room-8-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-room-8-n",
                                "type": "text",
                                "options": {
                                  "text": "Room 08",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#677084]"
                                  }
                                }
                              },
                              {
                                "id": "ab-room-8-a",
                                "type": "text",
                                "options": {
                                  "text": "Every room",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] font-medium text-[#A0643A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-room-8-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconArmchair2",
                              "size": 40,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#1B2B4B] transition-transform duration-300 group-hover:-translate-y-1"
                              }
                            }
                          },
                          {
                            "id": "ab-room-8-btn",
                            "type": "button",
                            "options": {
                              "text": "Decor",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/decor",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center gap-1.5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] opacity-0 transition-opacity group-hover:opacity-100"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#141B2B] sm:text-xl"
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
            "id": "ab-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#E8B931] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-deals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-deals-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-deals-k",
                            "type": "text",
                            "options": {
                              "text": "Deal of the week",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#1B2B4B]/70"
                              }
                            }
                          },
                          {
                            "id": "ab-deals-h",
                            "type": "heading",
                            "options": {
                              "text": "Up to 35% off, this week only",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] text-[#1B2B4B] sm:text-4xl lg:text-[44px]"
                              }
                            }
                          },
                          {
                            "id": "ab-deals-p",
                            "type": "text",
                            "options": {
                              "text": "Floor models, overstock and maker specials. New deals every Saturday.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#1B2B4B]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-deals-all",
                        "type": "button",
                        "options": {
                          "text": "All deals",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/deal-of-the-week",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#1B2B4B] px-6 py-3.5 transition-colors hover:bg-[#121E36]"
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
                    "id": "ab-deals-slider",
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
                                  "deal-of-the-week"
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-deals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-deals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-deals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-deals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-deals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-deals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-deals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-deals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-deals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-deals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-deals-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-deals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-makers",
            "type": "section",
            "options": {
              "anchor": "makers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-makers-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-makers-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-makers-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-makers-label",
                            "type": "text",
                            "options": {
                              "text": "The makers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-makers-h",
                            "type": "heading",
                            "options": {
                              "text": "Workshops & brands you can trust",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-makers-sub",
                            "type": "text",
                            "options": {
                              "text": "From Hatirpool teak workshops to modern flat-pack brands, every maker is visited and verified.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-makers-all",
                        "type": "button",
                        "options": {
                          "text": "All makers",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-mk-grid",
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
                        "classes": "group flex flex-col items-start gap-2 rounded-[14px] bg-white p-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30 hover:shadow-[0_18px_30px_-22px_rgba(27,43,75,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-mk-grid-loop",
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
                            "classes": "group flex flex-col items-start gap-2 rounded-[14px] bg-white p-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30 hover:shadow-[0_18px_30px_-22px_rgba(27,43,75,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mk-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-2 flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px] p-4"
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
                            "id": "ab-mk-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                              }
                            }
                          },
                          {
                            "id": "ab-mk-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pieces",
                              "singularSuffix": " piece",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
            "id": "ab-best",
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
                "id": "ab-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-best-label",
                            "type": "text",
                            "options": {
                              "text": "Most ordered",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Bestsellers this month",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The pieces that sell out first, across every maker.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-best-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-best-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-fit",
            "type": "section",
            "options": {
              "anchor": "will-it-fit"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-fit-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ab-fit-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-fit-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-fit-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "ab-fit-label",
                                "type": "text",
                                "options": {
                                  "text": "Will it fit?",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-h",
                                "type": "heading",
                                "options": {
                                  "text": "Measure twice, order once.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-sub",
                                "type": "text",
                                "options": {
                                  "text": "Every listing shows width × depth × height in centimetres. Before you order, check these four things.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-fit-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-fit-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[12px] bg-white p-4 ring-1 ring-[#E3E1DA]"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-fit-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDoor",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E6EAF2] text-[#1B2B4B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-fit-1-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Doorways",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-fit-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Measure the narrowest door on the way in. Sofas need about 5 cm spare on the depth.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-relaxed text-[#677084]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-fit-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[12px] bg-white p-4 ring-1 ring-[#E3E1DA]"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-fit-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconStairs",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E6EAF2] text-[#1B2B4B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-fit-2-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Stairs & turns",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-fit-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Check the tightest turn and ceiling height on the stairs, not just the width.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-relaxed text-[#677084]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-fit-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[12px] bg-white p-4 ring-1 ring-[#E3E1DA]"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-fit-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconElevator",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E6EAF2] text-[#1B2B4B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-fit-3-h",
                                    "type": "text",
                                    "options": {
                                      "text": "The lift",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-fit-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Measure the lift door and the inside diagonal; tall wardrobes often ride standing.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-relaxed text-[#677084]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-fit-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[12px] bg-white p-4 ring-1 ring-[#E3E1DA]"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-fit-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRuler2",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E6EAF2] text-[#1B2B4B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-fit-4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-fit-4-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Room to walk",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-fit-4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Leave about 60 cm around beds and 90 cm behind dining chairs.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm leading-relaxed text-[#677084]"
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
                    "id": "ab-fit-sheet",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col gap-6 overflow-hidden rounded-[16px] bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] p-6 sm:p-8 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-fit-sheet-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center justify-between gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-fit-sheet-t",
                            "type": "text",
                            "options": {
                              "text": "Bed sizes, drawn to scale",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-2xl text-white"
                              }
                            }
                          },
                          {
                            "id": "ab-fit-sheet-k",
                            "type": "text",
                            "options": {
                              "text": "Sheet B-02 · cm",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.16em] text-white/55"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-fit-beds",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-end justify-center gap-4 sm:justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-bed-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-bed-1-dim",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-[81px] h-2.5 border-x-2 border-[#E8B931] bg-[linear-gradient(#E8B931,#E8B931)] bg-[length:100%_2px] bg-center bg-no-repeat"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-1-bed",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative w-[81px] h-[171px] rounded-[6px] border-2 border-white/80 bg-white/5 before:absolute before:inset-x-2 before:top-2 before:h-6 before:rounded-[4px] before:border-2 before:border-white/50 before:content-[''] after:absolute after:inset-x-0 after:top-12 after:border-t-2 after:border-dashed after:border-white/25 after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-1-t",
                                "type": "text",
                                "options": {
                                  "text": "Single",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-bed-1-s",
                                "type": "text",
                                "options": {
                                  "text": "90 × 190",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#E8B931]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-bed-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-bed-2-dim",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-[126px] h-2.5 border-x-2 border-[#E8B931] bg-[linear-gradient(#E8B931,#E8B931)] bg-[length:100%_2px] bg-center bg-no-repeat"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-2-bed",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative w-[126px] h-[171px] rounded-[6px] border-2 border-white/80 bg-white/5 before:absolute before:inset-x-2 before:top-2 before:h-6 before:rounded-[4px] before:border-2 before:border-white/50 before:content-[''] after:absolute after:inset-x-0 after:top-12 after:border-t-2 after:border-dashed after:border-white/25 after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-2-t",
                                "type": "text",
                                "options": {
                                  "text": "Double",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-bed-2-s",
                                "type": "text",
                                "options": {
                                  "text": "140 × 190",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#E8B931]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-bed-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-bed-3-dim",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-[137px] h-2.5 border-x-2 border-[#E8B931] bg-[linear-gradient(#E8B931,#E8B931)] bg-[length:100%_2px] bg-center bg-no-repeat"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-3-bed",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative w-[137px] h-[178px] rounded-[6px] border-2 border-white/80 bg-white/5 before:absolute before:inset-x-2 before:top-2 before:h-6 before:rounded-[4px] before:border-2 before:border-white/50 before:content-[''] after:absolute after:inset-x-0 after:top-12 after:border-t-2 after:border-dashed after:border-white/25 after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-3-t",
                                "type": "text",
                                "options": {
                                  "text": "Queen",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-bed-3-s",
                                "type": "text",
                                "options": {
                                  "text": "152 × 198",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#E8B931]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-bed-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-bed-4-dim",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-[165px] h-2.5 border-x-2 border-[#E8B931] bg-[linear-gradient(#E8B931,#E8B931)] bg-[length:100%_2px] bg-center bg-no-repeat"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-4-bed",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative w-[165px] h-[178px] rounded-[6px] border-2 border-white/80 bg-white/5 before:absolute before:inset-x-2 before:top-2 before:h-6 before:rounded-[4px] before:border-2 before:border-white/50 before:content-[''] after:absolute after:inset-x-0 after:top-12 after:border-t-2 after:border-dashed after:border-white/25 after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ab-bed-4-t",
                                "type": "text",
                                "options": {
                                  "text": "King",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-bed-4-s",
                                "type": "text",
                                "options": {
                                  "text": "183 × 198",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#E8B931]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-fit-sheet-foot",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-white/20 pt-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-fit-sheet-p",
                            "type": "text",
                            "options": {
                              "text": "Sizes vary by maker: always check the listing.",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "ab-fit-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop beds",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/bedroom",
                              "target": "",
                              "icon": "IconBed",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#E8B931] px-5 py-2.5 transition-colors hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1B2B4B]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap"
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
            "id": "ab-row-living",
            "type": "section",
            "options": {
              "anchor": "living"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-row-living-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-row-living-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-living-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-living-label",
                            "type": "text",
                            "options": {
                              "text": "Living room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-row-living-h",
                            "type": "heading",
                            "options": {
                              "text": "Sofas, armchairs & tables",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-row-living-sub",
                            "type": "text",
                            "options": {
                              "text": "Three-seaters, sectionals, sofa-cum-beds and centre tables.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-row-living-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/living-room",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-row-living-slider",
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
                                  "living-room"
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-living-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-living-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-living-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-living-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-row-living-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-row-living-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-living-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-row-living-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-row-living-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-row-living-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-living-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-row-living-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-materials",
            "type": "section",
            "options": {
              "anchor": "materials"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-materials-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-materials-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-materials-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-materials-label",
                            "type": "text",
                            "options": {
                              "text": "Shop by material",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-materials-h",
                            "type": "heading",
                            "options": {
                              "text": "Know your wood",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-materials-sub",
                            "type": "text",
                            "options": {
                              "text": "Solid teak or engineered board? Here’s what you’re paying for.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ab-materials-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-mat-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-1-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#9A5B32] bg-[repeating-linear-gradient(100deg,rgba(0,0,0,0.10)_0_2px,transparent_2px_9px),repeating-linear-gradient(95deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_23px)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Segun (teak)",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/teak",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Hard, golden, lasts generations",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-mat-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-2-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#6E2F1F] bg-[repeating-linear-gradient(97deg,rgba(0,0,0,0.14)_0_2px,transparent_2px_7px),repeating-linear-gradient(92deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_19px)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Mahogany",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/mahogany",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Deep red-brown, fine grain",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-mat-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-3-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#C9A06B] bg-[repeating-linear-gradient(102deg,rgba(0,0,0,0.08)_0_1.5px,transparent_1.5px_11px)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Gamari",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/gamari",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Light, affordable, carves well",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-mat-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-4-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#D8C3A0] bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[length:100%_100%,40px_100%] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Engineered wood",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/engineered-wood",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Budget-friendly, modern finishes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-mat-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-5-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#5C6670] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_3px)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Metal",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/metal",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-5-p",
                                "type": "text",
                                "options": {
                                  "text": "Powder-coated steel frames",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-mat-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col gap-3 rounded-[14px] bg-white p-2.5 pb-4 ring-1 ring-[#E3E1DA] transition-all hover:-translate-y-1 hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-mat-6-sw",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-[4/3] w-full rounded-[10px] bg-[#C7A26A] bg-[repeating-linear-gradient(45deg,rgba(90,60,20,0.35)_0_3px,transparent_3px_12px),repeating-linear-gradient(-45deg,rgba(90,60,20,0.35)_0_3px,transparent_3px_12px)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ab-mat-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 px-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-mat-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Cane & rattan",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/cane",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-mat-6-p",
                                "type": "text",
                                "options": {
                                  "text": "Light, breathable, handwoven",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#677084]"
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
            "id": "ab-row-bedroom",
            "type": "section",
            "options": {
              "anchor": "bedroom"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-row-bedroom-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-row-bedroom-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-bedroom-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-bedroom-label",
                            "type": "text",
                            "options": {
                              "text": "Bedroom",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-row-bedroom-h",
                            "type": "heading",
                            "options": {
                              "text": "Beds, wardrobes & dressers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-row-bedroom-sub",
                            "type": "text",
                            "options": {
                              "text": "Khats, storage beds, almirahs and dressing tables.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-row-bedroom-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bedroom",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-row-bedroom-slider",
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
                                  "bedroom"
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-bedroom-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-bedroom-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-bedroom-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-bedroom-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-row-bedroom-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-row-bedroom-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-bedroom-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-row-bedroom-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-row-bedroom-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-row-bedroom-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-bedroom-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-row-bedroom-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-row-office",
            "type": "section",
            "options": {
              "anchor": "office"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-row-office-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-row-office-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-office-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-office-label",
                            "type": "text",
                            "options": {
                              "text": "Work from home",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-row-office-h",
                            "type": "heading",
                            "options": {
                              "text": "Desks & office chairs",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-row-office-sub",
                            "type": "text",
                            "options": {
                              "text": "Study tables, ergonomic chairs and bookshelves.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-row-office-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/office",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-row-office-slider",
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
                                  "office"
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-office-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-office-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-office-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-office-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-row-office-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-row-office-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-office-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-row-office-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-row-office-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-row-office-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-office-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-row-office-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-how",
            "type": "section",
            "options": {
              "anchor": "how-it-works"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-how-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ab-how-l",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-how-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-how-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "ab-how-label",
                                "type": "text",
                                "options": {
                                  "text": "How buying works",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ab-how-h",
                                "type": "heading",
                                "options": {
                                  "text": "Big furniture, made easy.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-white"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ab-how-steps",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-how-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[14px] bg-white/[0.06] p-5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-how-1-n",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative shrink-0"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconSearch",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8B931] text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-1-num",
                                    "type": "text",
                                    "options": {
                                      "text": "1",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-how-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-1-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Choose",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Compare makers, materials and real dimensions.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/65"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-how-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[14px] bg-white/[0.06] p-5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-how-2-n",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative shrink-0"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCreditCard",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8B931] text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-2-num",
                                    "type": "text",
                                    "options": {
                                      "text": "2",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-how-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-2-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Pay your way",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "0% EMI, bKash, card or cash on delivery.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/65"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-how-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[14px] bg-white/[0.06] p-5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-how-3-n",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative shrink-0"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTruckDelivery",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8B931] text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-3-num",
                                    "type": "text",
                                    "options": {
                                      "text": "3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-how-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-3-h",
                                    "type": "text",
                                    "options": {
                                      "text": "White-glove delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Carried in and unwrapped, up the stairs.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/65"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ab-how-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 rounded-[14px] bg-white/[0.06] p-5 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-how-4-n",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative shrink-0"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconTool",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8B931] text-[#1B2B4B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-4-num",
                                    "type": "text",
                                    "options": {
                                      "text": "4",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-how-4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-how-4-h",
                                    "type": "text",
                                    "options": {
                                      "text": "Free assembly",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-how-4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Set up in your room, packaging taken away.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/65"
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
                    "id": "ab-emi",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-4 rounded-[16px] bg-white p-6 sm:p-7 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-emi-k",
                        "type": "text",
                        "options": {
                          "text": "EMI example",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A]"
                          }
                        }
                      },
                      {
                        "id": "ab-emi-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-baseline justify-between border-b border-dashed border-[#E3E1DA] pb-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-emi-r1-k",
                            "type": "text",
                            "options": {
                              "text": "Sofa price",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#677084]"
                              }
                            }
                          },
                          {
                            "id": "ab-emi-r1-v",
                            "type": "text",
                            "options": {
                              "text": "৳84,000",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-base font-medium text-[#141B2B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-emi-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-baseline justify-between border-b border-dashed border-[#E3E1DA] pb-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-emi-r2-k",
                            "type": "text",
                            "options": {
                              "text": "Tenure",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#677084]"
                              }
                            }
                          },
                          {
                            "id": "ab-emi-r2-v",
                            "type": "text",
                            "options": {
                              "text": "12 months",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-base font-medium text-[#141B2B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-emi-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-baseline justify-between border-b border-dashed border-[#E3E1DA] pb-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-emi-r3-k",
                            "type": "text",
                            "options": {
                              "text": "Interest",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#677084]"
                              }
                            }
                          },
                          {
                            "id": "ab-emi-r3-v",
                            "type": "text",
                            "options": {
                              "text": "0%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-base font-medium text-[#141B2B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-emi-total",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-baseline justify-between gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-emi-total-k",
                            "type": "text",
                            "options": {
                              "text": "You pay",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-emi-total-v",
                            "type": "text",
                            "options": {
                              "text": "৳7,000/mo",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl text-[#1B2B4B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-emi-note",
                        "type": "text",
                        "options": {
                          "text": "On selected bank credit cards. Bank terms apply.",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Red_Hat_Mono'] text-[10px] text-[#677084]"
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
            "id": "ab-row-decor",
            "type": "section",
            "options": {
              "anchor": "decor"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-row-decor-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-row-decor-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-decor-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-decor-label",
                            "type": "text",
                            "options": {
                              "text": "Finishing touches",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-row-decor-h",
                            "type": "heading",
                            "options": {
                              "text": "Lighting & decor",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-row-decor-sub",
                            "type": "text",
                            "options": {
                              "text": "Lamps, mirrors, rugs, nakshi kantha and wall art.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-row-decor-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/decor",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-row-decor-slider",
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
                                  "decor"
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-row-decor-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-row-decor-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-decor-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-decor-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-row-decor-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-row-decor-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-row-decor-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-row-decor-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-row-decor-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-row-decor-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-row-decor-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-row-decor-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-sell",
            "type": "section",
            "options": {
              "anchor": "sell"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-sell-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-sell-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[16px] border-2 border-[#1B2B4B] bg-white p-8 sm:p-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-sell-ruler",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 top-0 h-2.5 bg-[repeating-linear-gradient(90deg,#1B2B4B_0_1px,transparent_1px_10px),repeating-linear-gradient(90deg,#1B2B4B_0_1.5px,transparent_1.5px_50px)] bg-[length:100%_4px,100%_9px] bg-no-repeat opacity-40"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ab-sell-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-sell-k",
                            "type": "text",
                            "options": {
                              "text": "For makers & brands",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A]"
                              }
                            }
                          },
                          {
                            "id": "ab-sell-h",
                            "type": "heading",
                            "options": {
                              "text": "Your workshop, in every home in Bangladesh.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] text-[#141B2B] sm:text-[42px]"
                              }
                            }
                          },
                          {
                            "id": "ab-sell-p",
                            "type": "text",
                            "options": {
                              "text": "List your furniture free. We handle the storefront, EMI, delivery and assembly; you get paid every week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base text-[#677084]"
                              }
                            }
                          },
                          {
                            "id": "ab-sell-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-sell-btn",
                                "type": "button",
                                "options": {
                                  "text": "Become a seller",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/register",
                                  "target": "",
                                  "icon": "IconBuildingStore",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#1B2B4B] px-6 py-3.5 transition-colors hover:bg-[#121E36]"
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
                          }
                        ]
                      },
                      {
                        "id": "ab-sell-stats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-3 gap-3 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-sell-stat-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[12px] bg-[#F7F6F2] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px] p-4 ring-1 ring-[#E3E1DA] sm:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-sell-stat-1-v",
                                "type": "text",
                                "options": {
                                  "text": "৳0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-2xl text-[#1B2B4B] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "ab-sell-stat-1-k",
                                "type": "text",
                                "options": {
                                  "text": "To list",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#677084]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-sell-stat-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[12px] bg-[#F7F6F2] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px] p-4 ring-1 ring-[#E3E1DA] sm:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-sell-stat-2-v",
                                "type": "text",
                                "options": {
                                  "text": "7 days",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-2xl text-[#1B2B4B] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "ab-sell-stat-2-k",
                                "type": "text",
                                "options": {
                                  "text": "Payout cycle",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#677084]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-sell-stat-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[12px] bg-[#F7F6F2] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px] p-4 ring-1 ring-[#E3E1DA] sm:p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-sell-stat-3-v",
                                "type": "text",
                                "options": {
                                  "text": "64",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-2xl text-[#1B2B4B] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "ab-sell-stat-3-k",
                                "type": "text",
                                "options": {
                                  "text": "Districts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[10px] uppercase tracking-[0.12em] text-[#677084]"
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
            "id": "ab-reviews",
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
                "id": "ab-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "Verified buyers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Homes furnished with Ashbab",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 from 18,000+ deliveries.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#677084]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ab-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-[10px] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1B2B4B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#141B2B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#1B2B4B]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#1B2B4B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The dimensions on the listing were exact. It came up four floors without a scratch and was set up in 20 minutes.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "MH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1B2B4B] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mahmud Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Teak sofa · Hatirpool maker",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
                        "id": "ab-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Paid in 12 instalments at 0%. The bed is solid and the drawers glide. Better than the showroom I visited.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#A0643A] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tasnim Ara",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Storage bed",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
                        "id": "ab-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“I compared three makers side by side, picked mahogany, and the delivery team even took the packaging away.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "RU",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#5C6670] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rafiq Uddin",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dining set",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
                        "id": "ab-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“My back thanks me. Free assembly, and they showed me how to adjust everything.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "LC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#1B2B4B] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lamia Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Office chair",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
                        "id": "ab-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“The maker built it 5 cm narrower to fit my alcove. Messaged them through the listing, no extra charge.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "SD",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#A0643A] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Shuvo Das",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Custom wardrobe",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
                        "id": "ab-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[16px] bg-[#F7F6F2] p-7 ring-1 ring-[#E3E1DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#C99A12]"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Beautiful handwoven chairs for my balcony. Packed like treasure and delivered to Rajshahi in three days.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[17px] font-medium leading-snug text-[#141B2B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E1DA] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "NK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#5C6670] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ab-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadia Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#141B2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Cane armchairs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Red_Hat_Mono'] text-[11px] text-[#A0643A]"
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
            "id": "ab-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ab-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "ab-journal-label",
                            "type": "text",
                            "options": {
                              "text": "Ideas & guides",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ab-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Room ideas and buying guides",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] px-4 py-2 ring-1 ring-[#E3E1DA] bg-white transition-colors hover:bg-[#1B2B4B] hover:ring-[#1B2B4B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1B2B4B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B2B4B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-journal-grid",
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
                        "id": "ab-journal-loop",
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
                            "id": "ab-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[14px] bg-[#EFEDE7]"
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
                            "id": "ab-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[10px] text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#677084]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#1B2B4B]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#A0643A] transition-transform group-hover/rm:translate-x-1"
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
            "id": "ab-faq",
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
                "id": "ab-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ab-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2.5 "
                              }
                            },
                            "children": [
                              {
                                "id": "ab-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "Questions",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#A0643A] before:h-2.5 before:w-6 before:border-x-2 before:border-current before:bg-[linear-gradient(currentColor,currentColor)] before:bg-[length:100%_2px] before:bg-center before:bg-no-repeat before:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ab-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-[-0.025em] text-3xl leading-[1.08] sm:text-4xl lg:text-[44px] text-[#141B2B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Makers, EMI, delivery, custom sizes and returns.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#677084]"
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
                    "id": "ab-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Who sells on Ashbab?",
                          "classes": ""
                        },
                        {
                          "label": "How does 0% EMI work?",
                          "classes": ""
                        },
                        {
                          "label": "Is delivery and assembly included?",
                          "classes": ""
                        },
                        {
                          "label": "Can I order a custom size?",
                          "classes": ""
                        },
                        {
                          "label": "What if it doesn’t fit or arrives damaged?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[12px] bg-[#F7F6F2] px-6 py-5 font-body text-base font-semibold text-[#141B2B] ring-1 ring-[#E3E1DA] transition-colors hover:bg-[#E6EAF2]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#1B2B4B] !text-white !ring-[#1B2B4B]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#E8B931]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Verified furniture workshops and brands across Bangladesh. We visit every maker before they go live and check quality on returns.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "On orders over ৳10,000 with selected bank credit cards, split the price into 3, 6 or 12 months at 0% interest. Choose it at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Free assembly in Dhaka on most pieces. Delivery is carried into your room, including stairs; fees depend on size and district.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Many makers build to measure. Look for the \"Made to order\" tag and message the maker from the listing.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Report damage at delivery for a free repair or replacement. For fit, check dimensions first: returns on made-to-order pieces are limited.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#677084]"
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
            "id": "ab-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Every maker, one cart",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Furniture",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every piece from every maker on Ashbab, with real dimensions, materials and EMI on each listing.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-shop-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
                        "id": "ab-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-shop-promise",
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
                "id": "ab-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Verified makers",
                          "description": "Every workshop visited",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "0% EMI",
                          "description": "Up to 12 months",
                          "icon": "IconCreditCard",
                          "iconSize": ""
                        },
                        {
                          "title": "Free assembly",
                          "description": "Inside Dhaka",
                          "icon": "IconTool",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Across Bangladesh",
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
                        "classes": "font-heading text-lg font-bold text-[#141B2B]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FBF1D3] text-[#1B2B4B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-shop-promise-fb-ic",
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
                        "id": "ab-shop-promise-fb-t",
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
                        "id": "ab-shop-promise-fb-d",
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
            "id": "ab-pd",
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
                "id": "ab-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-pd-grid",
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
                        "id": "ab-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#F4E8DE] via-white to-[#F7F6F2] p-4 shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[16px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#141B2B]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#141B2B]!"
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
                                "classes": "overflow-hidden rounded-[12px] border-2 border-transparent hover:border-[#1B2B4B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-pd-cats",
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
                                "classes": "rounded-full bg-[#F4E8DE] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#A0643A] hover:bg-[#A0643A] hover:text-white"
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
                            "id": "ab-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#141B2B] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ab-pd-rate",
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
                                "classes": "font-heading font-bold text-[#141B2B]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "ab-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#141B2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#141B2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#141B2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#1B2B4B] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "ab-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#677084]"
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
                            "id": "ab-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#141B2B]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-[12px] border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#141B2B] transition-colors hover:border-[#A0643A] hover:bg-[#F4E8DE]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#A0643A] !bg-[#F4E8DE] !text-[#86512D]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "ab-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · ask the maker about made-to-order",
                              "inStockText": "In stock · delivered in 3-7 days",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#1B2B4B]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#A0643A]"
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
                            "id": "ab-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Cart",
                              "hideQuantity": false,
                              "hideButton": false,
                              "icon": "IconShoppingCartPlus",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-stretch gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-[12px] border-2 border-gray-200 bg-white px-3 text-[#141B2B]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F6F2]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F6F2]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[12px] bg-[#1B2B4B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#121E36]"
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
                            "id": "ab-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "0% EMI",
                                  "description": "Up to 12 months",
                                  "icon": "IconCreditCard",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free assembly",
                                  "description": "Inside Dhaka",
                                  "icon": "IconTool",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Verified maker",
                                  "description": "Workshop visited",
                                  "icon": "IconShieldCheck",
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
                                "classes": "font-heading text-base font-bold text-[#141B2B]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#F4E8DE] text-[#A0643A]"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-perks-ic",
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
                                "id": "ab-pd-perks-t",
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
                                "id": "ab-pd-perks-d",
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
                            "id": "ab-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-sku",
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
                                    "classes": "font-semibold text-[#141B2B]"
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
                                "id": "ab-pd-brands",
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
                                    "classes": "font-semibold text-[#141B2B]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1B2B4B]"
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
                                "id": "ab-pd-tags",
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
                                    "classes": "font-semibold text-[#141B2B]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1B2B4B]"
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
            "id": "ab-pd-tabs-sec",
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
                "id": "ab-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,27,43,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Dimensions & materials",
                              "icon": "IconRulerMeasure"
                            },
                            {
                              "label": "Delivery & assembly",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F6F2] px-5 py-2.5 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#141B2B] !text-white shadow-md"
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
                            "id": "ab-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#141B2B] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#141B2B] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#1B2B4B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[16px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E8B931] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconRulerMeasure",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Width × depth × height (cm) and weight are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Material, finish and the maker’s workshop are listed for every piece",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Measure doorways, stairs and lifts before ordering",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Made-to-order pieces can often be built to custom sizes",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A0643A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Delivered in 3-7 days; made-to-order in 2-4 weeks",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Carried into your room, including stairs",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free assembly inside Dhaka on most pieces",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Report damage at delivery for a free repair or replacement",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A0643A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ab-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[16px] border border-gray-100 bg-[#F7F6F2] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[16px] border border-gray-100 bg-[#F7F6F2] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ab-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E6EAF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ab-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#141B2B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ab-pd-reviews-rate",
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
                                        "id": "ab-pd-reviews-co",
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
                                    "id": "ab-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How is the build, finish and delivery?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[16px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,27,43,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#141B2B]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-[12px] border border-gray-200 bg-[#F7F6F2] px-4 py-3 text-sm text-[#141B2B] placeholder:text-gray-400 focus:border-[#A0643A] focus:outline-none focus:ring-2 focus:ring-[#A0643A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-[12px] bg-[#1B2B4B] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#121E36] disabled:opacity-50"
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
            "id": "ab-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-16"
              }
            },
            "children": [
              {
                "id": "ab-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the room",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E6EAF2] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1B2B4B]"
                          }
                        }
                      },
                      {
                        "id": "ab-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Goes Well With",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#141B2B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-pd-rel-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
            "id": "ab-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by room",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Rooms & Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Living room, bedroom, dining, office, kids, outdoor, lighting and decor.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[16px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[16px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-[12px] bg-[#F4E8DE] transition-transform"
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
                            "id": "ab-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#1B2B4B]"
                              }
                            }
                          },
                          {
                            "id": "ab-cat-grid-count",
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
                        "id": "ab-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ab-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#A0643A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-cat1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
                        "id": "ab-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group furniture by material, style and offer: teak, cane, made to order, deal of the week and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1B2B4B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1B2B4B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#141B2B] group-hover:text-[#1B2B4B]"
                              }
                            }
                          },
                          {
                            "id": "ab-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F7F6F2] px-2 py-0.5 text-[10px] font-bold text-[#677084]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ab-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ab-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#A0643A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-tag1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
                        "id": "ab-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The makers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Workshops & Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every verified maker on Ashbab, from teak workshops to modern brands.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[16px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[16px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#F7F6F2] p-3"
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
                            "id": "ab-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#141B2B] group-hover:text-[#1B2B4B]"
                              }
                            }
                          },
                          {
                            "id": "ab-brand-grid-count",
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
                        "id": "ab-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ab-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#A0643A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-brand1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
                        "id": "ab-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Ideas & guides",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Room Ideas & Buying Guides",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Small-flat layouts, wood care, choosing a mattress and visits to the makers.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F7F6F2]"
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
                            "id": "ab-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#141B2B] transition-colors group-hover:text-[#1B2B4B]"
                                  }
                                }
                              },
                              {
                                "id": "ab-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#1B2B4B]"
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
                        "id": "ab-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:border-[#1B2B4B] hover:text-[#1B2B4B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1B2B4B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ab-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F6F2] via-white to-[#F7F6F2] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ab-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-post-k",
                    "type": "text",
                    "options": {
                      "text": "Ideas & guides",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F4E8DE] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#A0643A]"
                      }
                    }
                  },
                  {
                    "id": "ab-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#141B2B] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#677084]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-post-author",
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
                            "classes": "font-heading font-bold text-[#141B2B]"
                          }
                        }
                      },
                      {
                        "id": "ab-post-dot",
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
                        "id": "ab-post-date",
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
                    "id": "ab-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
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
            "id": "ab-post-body",
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
                "id": "ab-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#141B2B] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#141B2B] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#1B2B4B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[16px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E8B931] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-16"
              }
            },
            "children": [
              {
                "id": "ab-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#141B2B]"
                      }
                    }
                  },
                  {
                    "id": "ab-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[16px] border border-gray-100 bg-[#F7F6F2] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[16px] border border-gray-100 bg-[#F7F6F2] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E6EAF2]"
                              }
                            }
                          },
                          {
                            "id": "ab-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#141B2B]"
                              }
                            }
                          },
                          {
                            "id": "ab-post-cmt-co",
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
                        "id": "ab-post-cmt-form",
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
                            "classes": "rounded-[16px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,27,43,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#141B2B]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-[12px] border border-gray-200 bg-[#F7F6F2] px-4 py-3 text-sm text-[#141B2B] placeholder:text-gray-400 focus:border-[#A0643A] focus:outline-none focus:ring-2 focus:ring-[#A0643A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-[12px] bg-[#1B2B4B] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#121E36] disabled:opacity-50"
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
            "id": "ab-post-more",
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
                "id": "ab-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Ideas & Guides",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#141B2B]"
                      }
                    }
                  },
                  {
                    "id": "ab-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[16px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,27,43,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F7F6F2]"
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
                            "id": "ab-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#A0643A]"
                                  }
                                }
                              },
                              {
                                "id": "ab-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#141B2B] transition-colors group-hover:text-[#1B2B4B]"
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
            "id": "ab-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#1B2B4B] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:32px_32px] pb-14 pt-14 sm:pb-16 sm:pt-16"
              }
            },
            "children": [
              {
                "id": "ab-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ab-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Red_Hat_Mono'] text-[11px] font-medium uppercase tracking-[0.18em] text-[#E8B931]"
                      }
                    }
                  },
                  {
                    "id": "ab-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-white sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ab-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track deliveries, manage EMI orders, book assembly and keep your addresses up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-white/70 sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ab-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-12"
              }
            },
            "children": [
              {
                "id": "ab-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#141B2B] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#E8B931]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-[12px] bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#1B2B4B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#1B2B4B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#1B2B4B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "ab-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ab-acc-3",
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
                                "id": "ab-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,27,43,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B2B4B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#121E36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "ab-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,27,43,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B2B4B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#121E36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "ab-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "ab-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F6F2] px-5 py-2.5 font-heading text-sm font-semibold text-[#141B2B] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#141B2B] !text-white shadow-md"
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
                                "id": "ab-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B2B4B]/10 text-[#1B2B4B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ab-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#1B2B4B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ab-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B2B4B]/10 text-[#1B2B4B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ab-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#1B2B4B]/40 hover:bg-[#1B2B4B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B2B4B]/10 text-[#1B2B4B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ab-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1B2B4B]/10 text-[#1B2B4B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1B2B4B] focus:outline-none focus:ring-2 focus:ring-[#1B2B4B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B2B4B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#121E36] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2B4B]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "ab-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F6F2] via-white to-[#F7F6F2] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ab-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(20,27,43,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#F4E8DE] text-[#A0643A]"
                          }
                        }
                      },
                      {
                        "id": "ab-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E6EAF2] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1B2B4B]"
                          }
                        }
                      },
                      {
                        "id": "ab-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Room Is on Its Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#141B2B] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "ab-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your makers are preparing your order. A confirmation is on its way, and you can follow delivery from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#677084] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "ab-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "Each maker confirms your order by SMS",
                              "icon": ""
                            },
                            {
                              "text": "We schedule delivery and assembly with you by phone",
                              "icon": ""
                            },
                            {
                              "text": "Your furniture is carried in and set up: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[16px] bg-[#F7F6F2] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#1B2B4B]"
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
                        "id": "ab-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#1B2B4B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#121E36] w-full sm:w-auto"
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
                            "id": "ab-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-[#A0643A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A0643A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0643A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#A0643A] whitespace-nowrap group-hover:text-white"
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
            "id": "ab-ty-promise",
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
                "id": "ab-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Verified makers",
                          "description": "Every workshop visited",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "0% EMI",
                          "description": "Up to 12 months",
                          "icon": "IconCreditCard",
                          "iconSize": ""
                        },
                        {
                          "title": "Free assembly",
                          "description": "Inside Dhaka",
                          "icon": "IconTool",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Across Bangladesh",
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
                        "classes": "font-heading text-lg font-bold text-[#141B2B]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FBF1D3] text-[#1B2B4B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-ty-promise-fb-ic",
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
                        "id": "ab-ty-promise-fb-t",
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
                        "id": "ab-ty-promise-fb-d",
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
            "id": "ab-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F6F2] via-white to-[#F7F6F2] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ab-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#1B2B4B] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "ab-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#F7F6F2] text-[#141B2B]"
                      }
                    }
                  },
                  {
                    "id": "ab-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Room Doesn’t Exist",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#141B2B] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "ab-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this piece may have sold out. Head back home and keep furnishing.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#677084] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "ab-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#1B2B4B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(27,43,75,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#121E36] w-full sm:w-auto"
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
                        "id": "ab-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Furniture",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-[#A0643A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A0643A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0643A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#A0643A] whitespace-nowrap group-hover:text-white"
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
            "id": "ab-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F6F2] py-16"
              }
            },
            "children": [
              {
                "id": "ab-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ab-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E8B931] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#141B2B]"
                          }
                        }
                      },
                      {
                        "id": "ab-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#141B2B] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ab-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                      }
                    },
                    "children": [
                      {
                        "id": "ab-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[14px] bg-white p-2.5 ring-1 ring-[#E3E1DA] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_34px_-24px_rgba(27,43,75,0.55)] hover:ring-[#1B2B4B]/30"
                          }
                        },
                        "children": [
                          {
                            "id": "ab-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[10px] bg-[#EFEDE7] bg-[linear-gradient(rgba(27,43,75,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,43,75,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"
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
                                    "id": "ab-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-[6px] bg-[#E8B931] px-2 py-1 font-['Red_Hat_Mono'] text-[11px] font-bold text-[#1B2B4B]"
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
                                "id": "ab-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ab-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8B931]"
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
                                    "id": "ab-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#141B2B] transition-colors group-hover:text-[#A0643A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ab-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 9,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Red_Hat_Mono'] text-[11px] text-[#677084]"
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
                            "id": "ab-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 border-t border-dashed border-[#E3E1DA] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ab-nf-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Red_Hat_Mono'] text-xs text-[#677084] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B2B4B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1B2B4B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1B2B4B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ab-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#1B2B4B] text-white transition-colors hover:bg-[#E8B931] hover:text-[#1B2B4B]"
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
