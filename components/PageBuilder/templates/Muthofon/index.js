/**
 * Template: Muthofon Mobile.
 *
 * A modern marketplace-style phone store (muthofon is Bangla for "mobile
 * phone" - literally a phone in your fist): smartphones from every top brand,
 * tablets, accessories and certified pre-owned, with EMI and trade-in. Like
 * the other complete templates here it carries all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog
 * Archive, Blog Single, Account, Thank you and 404 - so applying it replaces
 * every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to mf-, palette remapped, copy
 * rewritten); the Header is rebuilt and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER (three tiers)
 *
 *   1. An ink utility bar: hotline and delivery promise | Track order, 0% EMI,
 *      Trade-in, Stores (mf-hdr-util).
 *   2. The logo - a tiny CSS phone (gradient screen, island notch) and the
 *      "muthofon" wordmark - then a black pill search styled like a phone's
 *      dynamic island with a purple search button, and compare, account and
 *      cart.
 *   3. A category bar (lg and up): an "All categories" button, the brand menu
 *      as chips (Samsung, Apple, Xiaomi, Realme, Oppo, Vivo, OnePlus, Tablets,
 *      Accessories, Pre-owned) and a coral "Today's deals" link.
 *
 * THE HERO
 *
 * A bento grid. The big ink tile holds the headline and buttons next to a
 * phone built from CSS: bezel, dynamic island, a purple-to-coral wallpaper,
 * the lock-screen time 9:41 and three deal "notifications" (price drop, 0%
 * EMI, trade-in). Four small tiles beside it: trade-in (coral), EMI (purple
 * tint), budget picks (mint tint) and warranty (white).
 *
 * DESIGN
 *
 *   purple  #7B3FF2  primary: buttons, prices, links      #6328D9 hover  #EFE8FF tint
 *   coral   #FF7A59  accent: deals, discount badges       #E8603F dark   #FFE8E1 tint
 *   mint    #2BD9A0  success: EMI, in stock, signals      #DDF8EE tint
 *   sun     #FFC94D  stars, bestseller icon               #FFF3D6 tint
 *   ink #111116 / #1E1E26   iOS grey #F2F2F7   muted #6B6B78   line #E3E3EA
 *
 * Fonts (template meta): Sora (headings), Onest (body), Martian Mono via
 * `font-['Martian_Mono']` for specs, kickers and small data.
 *
 * Product cards (dense, marketplace): white with a hairline ring, the phone
 * on grey (contained and multiplied so white-backed photos blend), a coral
 * discount badge, a two-line name, one mono spec chip from the excerpt (use
 * it for the key specs, e.g. "8/256GB · 5000mAh · 120Hz"), the price in
 * purple Sora and a square ink add-to-cart button.
 *
 * HOME (every section is a white panel on grey, marketplace style)
 *
 *   Bento hero - trust strip - shop by brand (#brands) - today's hot deals
 *   (#deals) - shop by budget as signal bars (#budget) - new launches -
 *   best-selling phones, 12-up grid (#bestsellers) - spec decoder
 *   (#spec-guide) - tablets - trade-in steps + EMI table (#trade-in) -
 *   accessories - all categories (#categories) - certified pre-owned -
 *   reviews - tech tips (#journal) - FAQ (#faq) - price-drop alerts CTA
 *   (#alerts).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: smartphones, tablets, accessories, refurbished. Tag
 *     slugs: deal, bestseller, new-launch, and the budgets budget-under-10k,
 *     budget-10k-20k, budget-20k-40k, budget-40k-80k, budget-80k-plus,
 *     budget-under-15k. Brands are product_brand terms whose slugs match the
 *     menu (samsung, apple, xiaomi, realme, oppo, vivo, oneplus) - edit the
 *     menu to the brands you stock.
 *   - The EMI table is an example on a ৳25,000 phone; check your banks'
 *     actual terms.
 *   - Hotline 09600-000000, the "up to ৳40,000" trade-in figure, "20+ banks",
 *     "50,000+ buyers", next-day delivery, the 7-day replacement and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Muthofon Mobile",
    "description": "Modern marketplace phone store in electric purple, coral and mint on iOS grey; Sora, Onest and Martian Mono: a three-tier marketplace header with a utility bar, a black \"dynamic island\" search and a brand category bar, a bento hero whose CSS phone shows deals as lock-screen notifications, trust strip, brands, coral hot-deals shelf, signal-bar budget picker, new launches, a 12-up bestseller grid, spec decoder, tablets, trade-in and EMI cards, accessories, categories, certified pre-owned, reviews, tech tips, FAQ and price-drop alerts. All 16 pages.",
    "thumbnail": "/templates/muthofon.svg",
    "meta": {
      "fonts": [
        {
          "family": "Sora",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Onest",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Martian Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Sora",
        "body": "Onest"
      },
      "colors": {
        "primary": "#7B3FF2",
        "secondary": "#111116",
        "accent": "#FF7A59",
        "background": "#F2F2F7",
        "foreground": "#111116",
        "muted": "#6B6B78"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "mf-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-white shadow-[0_1px_0_#E3E3EA]"
              }
            },
            "children": [
              {
                "id": "mf-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "w-full bg-[#111116]"
                  }
                },
                "children": [
                  {
                    "id": "mf-hdr-util",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-9 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-hdr-util-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-hdr-util-dot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-1.5 w-1.5 rounded-full bg-[#2BD9A0]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "mf-hdr-util-t",
                            "type": "text",
                            "options": {
                              "text": "Hotline 09600-000000 · Next-day delivery in Dhaka",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "truncate font-body text-xs text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-hdr-util-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden items-center gap-5 md:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-hdr-util-track",
                            "type": "button",
                            "options": {
                              "text": "Track order",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconPackage",
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
                                "classes": "font-body text-xs text-white/70 whitespace-nowrap transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-hdr-util-emi",
                            "type": "button",
                            "options": {
                              "text": "0% EMI",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#emi",
                              "target": "",
                              "icon": "IconCreditCard",
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
                                "classes": "font-body text-xs text-white/70 whitespace-nowrap transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-hdr-util-trade",
                            "type": "button",
                            "options": {
                              "text": "Trade-in",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#trade-in",
                              "target": "",
                              "icon": "IconRecycle",
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
                                "classes": "font-body text-xs text-white/70 whitespace-nowrap transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-hdr-util-store",
                            "type": "button",
                            "options": {
                              "text": "Stores",
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
                                "classes": "font-body text-xs text-white/70 whitespace-nowrap transition-colors group-hover:text-white"
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
                "id": "mf-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[72px] items-center gap-3 lg:gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-9 w-6 shrink-0 rounded-[8px] border-[2.5px] border-[#111116] bg-[linear-gradient(160deg,#7B3FF2,#FF7A59)] before:absolute before:left-1/2 before:top-[3px] before:h-[3px] before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#111116] before:content-[''] "
                              }
                            }
                          },
                          {
                            "id": "mf-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "muthofon",
                                  "src": "https://placehold.co/200x64?text=Muthofon",
                                  "altText": "Muthofon",
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
                                    "classes": "font-heading text-2xl font-bold leading-none tracking-tight text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Phones · Tablets · Gadgets",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 hidden font-['Martian_Mono'] text-[8px] uppercase leading-none tracking-wider text-[#6B6B78] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "mf-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search by model, brand or spec...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "order-last hidden min-w-0 flex-1 rounded-full bg-[#111116] py-1.5 pl-2 pr-1.5 shadow-[0_8px_20px_-12px_rgba(17,17,22,0.7)] transition-all focus-within:ring-4 focus-within:ring-[#7B3FF2]/25 md:order-none md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1.5 font-body text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7B3FF2] text-white"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#7B3FF2]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#7B3FF2]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#7B3FF2] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#6328D9]"
                          }
                        }
                      },
                      {
                        "id": "mf-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-auto flex items-center gap-2 md:ml-0"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-hdr-compare",
                            "type": "button",
                            "options": {
                              "text": "",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowsLeftRight",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F2F2F7] text-[#111116] transition-colors hover:bg-[#EFE8FF] hover:text-[#7B3FF2] sm:flex"
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
                            "id": "mf-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F2F2F7] text-[#111116] transition-colors hover:bg-[#EFE8FF] hover:text-[#7B3FF2]"
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
                            "id": "mf-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#7B3FF2] text-white transition-colors hover:bg-[#6328D9]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#7B3FF2] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F2F2F7] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#111116]"
                              },
                              "title-icon": {
                                "classes": "text-[#7B3FF2]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#7B3FF2] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#7B3FF2] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6328D9]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#7B3FF2] px-4 py-2 text-sm font-medium text-[#7B3FF2] transition-colors hover:bg-[#7B3FF2] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#7B3FF2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6328D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "mf-hdr-mobile",
                            "type": "popoverButton",
                            "options": {
                              "buttonLabel": "",
                              "buttonIcon": "IconMenu2",
                              "position": "fixedLeft"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative lg:hidden"
                              },
                              "button": {
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F2F2F7] text-[#111116]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F2F2F7] p-2 text-[#111116] transition-colors hover:bg-[#7B3FF2] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-9 w-6 shrink-0 rounded-[8px] border-[2.5px] border-[#111116] bg-[linear-gradient(160deg,#7B3FF2,#FF7A59)] before:absolute before:left-1/2 before:top-[3px] before:h-[3px] before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#111116] before:content-[''] "
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "muthofon",
                                          "src": "https://placehold.co/200x64?text=Muthofon",
                                          "altText": "Muthofon",
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
                                            "classes": "font-heading text-2xl font-bold leading-none tracking-tight text-[#111116]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Phones · Tablets · Gadgets",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-0.5 block font-['Martian_Mono'] text-[8px] uppercase leading-none tracking-wider text-[#6B6B78]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "mf-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search phones...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F2F2F7] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#111116] focus-within:ring-2 focus-within:ring-[#111116]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#111116] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B6B78]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#7B3FF2]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#7B3FF2]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#7B3FF2] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#6328D9]"
                                  }
                                }
                              },
                              {
                                "id": "mf-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-[#E3E3EA] py-3 font-body text-base font-semibold text-[#111116] transition-colors hover:text-[#7B3FF2]"
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
                                    "id": "mf-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Samsung",
                                      "url": "/brands/samsung"
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
                                    "id": "mf-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Apple",
                                      "url": "/brands/apple"
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
                                    "id": "mf-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Xiaomi",
                                      "url": "/brands/xiaomi"
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
                                    "id": "mf-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Realme",
                                      "url": "/brands/realme"
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
                                    "id": "mf-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Oppo",
                                      "url": "/brands/oppo"
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
                                    "id": "mf-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Vivo",
                                      "url": "/brands/vivo"
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
                                    "id": "mf-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "OnePlus",
                                      "url": "/brands/oneplus"
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
                                    "id": "mf-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Tablets",
                                      "url": "/categories/tablets"
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
                                    "id": "mf-hdr-m-menu-i9",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Accessories",
                                      "url": "/categories/accessories"
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
                                    "id": "mf-hdr-m-menu-i10",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Pre-owned",
                                      "url": "/categories/refurbished"
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
                "id": "mf-hdr-cats",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden w-full border-t border-[#E3E3EA] lg:block"
                  }
                },
                "children": [
                  {
                    "id": "mf-hdr-cats-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-12 items-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-hdr-allcats",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconLayoutGrid",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-[#EFE8FF] px-3.5 py-2 transition-colors hover:bg-[#7B3FF2]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#7B3FF2] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#7B3FF2] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "mf-hdr-cats-menu",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 flex-1 overflow-hidden"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-hdr-menu",
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
                                "classes": "flex items-center whitespace-nowrap rounded-xl px-3 py-2 font-body text-sm font-medium text-[#111116]/80 transition-colors hover:bg-[#F2F2F7] hover:text-[#7B3FF2]"
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
                                "id": "mf-hdr-menu-i1",
                                "type": "menuItem",
                                "options": {
                                  "label": "Samsung",
                                  "url": "/brands/samsung"
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
                                "id": "mf-hdr-menu-i2",
                                "type": "menuItem",
                                "options": {
                                  "label": "Apple",
                                  "url": "/brands/apple"
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
                                "id": "mf-hdr-menu-i3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Xiaomi",
                                  "url": "/brands/xiaomi"
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
                                "id": "mf-hdr-menu-i4",
                                "type": "menuItem",
                                "options": {
                                  "label": "Realme",
                                  "url": "/brands/realme"
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
                                "id": "mf-hdr-menu-i5",
                                "type": "menuItem",
                                "options": {
                                  "label": "Oppo",
                                  "url": "/brands/oppo"
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
                                "id": "mf-hdr-menu-i6",
                                "type": "menuItem",
                                "options": {
                                  "label": "Vivo",
                                  "url": "/brands/vivo"
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
                                "id": "mf-hdr-menu-i7",
                                "type": "menuItem",
                                "options": {
                                  "label": "OnePlus",
                                  "url": "/brands/oneplus"
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
                                "id": "mf-hdr-menu-i8",
                                "type": "menuItem",
                                "options": {
                                  "label": "Tablets",
                                  "url": "/categories/tablets"
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
                                "id": "mf-hdr-menu-i9",
                                "type": "menuItem",
                                "options": {
                                  "label": "Accessories",
                                  "url": "/categories/accessories"
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
                                "id": "mf-hdr-menu-i10",
                                "type": "menuItem",
                                "options": {
                                  "label": "Pre-owned",
                                  "url": "/categories/refurbished"
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
                      },
                      {
                        "id": "mf-hdr-deals",
                        "type": "button",
                        "options": {
                          "text": "Today’s deals",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/deal",
                          "target": "",
                          "icon": "IconFlame",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF7A59]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#FF7A59] whitespace-nowrap group-hover:underline"
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
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "mf-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#111116] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "mf-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "mf-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-[#7B3FF2] bg-[radial-gradient(circle_at_100%_0%,rgba(255,122,89,0.45),transparent_50%)] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Price-drop alerts",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-full bg-white/15 px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Know the day your phone gets cheaper",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-2xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "mf-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Free account: saved phones, price-drop alerts and launch-day offers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-white/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Turn on alerts",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconBell",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 transition-colors hover:bg-white/85"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#7B3FF2]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "mf-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "mf-ftr-grid",
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
                        "id": "mf-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-9 w-6 shrink-0 rounded-[8px] border-[2.5px] border-[#111116] bg-[linear-gradient(160deg,#7B3FF2,#FF7A59)] before:absolute before:left-1/2 before:top-[3px] before:h-[3px] before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#111116] before:content-[''] !border-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "muthofon",
                                      "src": "https://placehold.co/200x64?text=Muthofon",
                                      "altText": "Muthofon",
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
                                        "classes": "font-heading text-2xl font-bold leading-none tracking-tight text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Genuine smartphones, tablets and accessories from every top brand, with 0% EMI, trade-in, official warranty and next-day delivery across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "mf-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#7B3FF2]"
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
                                "id": "mf-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#7B3FF2]"
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
                                "id": "mf-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#7B3FF2]"
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
                                "id": "mf-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#7B3FF2]"
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
                        "id": "mf-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Smartphones",
                                  "icon": "",
                                  "slug": "/categories/smartphones"
                                },
                                {
                                  "text": "Tablets",
                                  "icon": "",
                                  "slug": "/categories/tablets"
                                },
                                {
                                  "text": "Accessories",
                                  "icon": "",
                                  "slug": "/categories/accessories"
                                },
                                {
                                  "text": "Certified Pre-owned",
                                  "icon": "",
                                  "slug": "/categories/refurbished"
                                },
                                {
                                  "text": "Today’s Deals",
                                  "icon": "",
                                  "slug": "/tags/deal"
                                },
                                {
                                  "text": "All Brands",
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
                                "classes": "font-body text-base font-bold text-white"
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
                        "id": "mf-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ftr-ll-care",
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
                                  "text": "EMI Plans",
                                  "icon": "",
                                  "slug": "/#emi"
                                },
                                {
                                  "text": "Trade-in",
                                  "icon": "",
                                  "slug": "/#trade-in"
                                },
                                {
                                  "text": "Warranty & Replacement",
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
                                "classes": "font-body text-base font-bold text-white"
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
                        "id": "mf-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ftr-contact-h",
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
                            "id": "mf-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "Phone",
                                "value": "09600-000000"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "Email",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconClock",
                                "label": "Hours",
                                "value": "Hotline & stores: 10am - 10pm",
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
                                "classes": "shrink-0 text-[#7B3FF2]"
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
                "id": "mf-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "mf-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Muthofon. All rights reserved. Your phone, your price.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "mf-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards · 0% EMI",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Martian_Mono'] text-[10px]"
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
            "id": "mf-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] pb-4 pt-5 lg:pt-6 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-bento",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-bento-main",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden rounded-[32px] bg-[#111116] bg-[radial-gradient(circle_at_80%_30%,rgba(123,63,242,0.45),transparent_55%),radial-gradient(circle_at_10%_100%,rgba(255,122,89,0.25),transparent_45%)] p-6 sm:col-span-2 sm:p-10 lg:col-span-6 lg:row-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bento-main-grid",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-full flex-col items-center gap-8 md:flex-row md:items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-hero-copy",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col gap-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-hero-k",
                                    "type": "text",
                                    "options": {
                                      "text": "New flagship season",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "w-fit rounded-full bg-white/10 px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#2BD9A0]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-hero-h1",
                                    "type": "heading",
                                    "options": {
                                      "text": "Your next phone, best price in town.",
                                      "tag": "h1"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-4xl leading-[1.05] text-white sm:text-5xl lg:text-4xl xl:text-5xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-hero-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Official and unofficial phones, tablets and accessories from every top brand, with 0% EMI, trade-in and next-day delivery in Dhaka.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-md text-base leading-relaxed text-white/65"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-hero-btns",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap gap-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-hero-btn-1",
                                        "type": "button",
                                        "options": {
                                          "text": "Shop phones",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/categories/smartphones",
                                          "target": "",
                                          "icon": "IconArrowRight",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 transition-all hover:bg-[#6328D9] hover:shadow-[0_12px_24px_-12px_rgba(123,63,242,0.8)]"
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
                                        "id": "mf-hero-btn-2",
                                        "type": "button",
                                        "options": {
                                          "text": "Compare models",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/shop",
                                          "target": "",
                                          "icon": "IconArrowsLeftRight",
                                          "iconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 transition-colors hover:bg-white/10"
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
                              },
                              {
                                "id": "mf-phone",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative mx-auto w-[210px] shrink-0 sm:w-[230px]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-phone-body",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative aspect-[9/19] w-full overflow-hidden rounded-[42px] border-[9px] border-[#0A0A0D] bg-[linear-gradient(160deg,#7B3FF2_0%,#B04BEB_45%,#FF7A59_100%)] shadow-[0_40px_60px_-30px_rgba(0,0,0,0.9),0_0_0_2px_#3A3A44] transition-transform duration-500 hover:-rotate-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-phone-glow",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-white/25 blur-2xl"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "mf-phone-island",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "absolute left-1/2 top-2.5 h-6 w-20 -translate-x-1/2 rounded-full bg-[#0A0A0D]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "mf-phone-lock",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative flex flex-col items-center pt-12 text-white"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "mf-phone-lock-ic",
                                            "type": "icon",
                                            "options": {
                                              "iconName": "IconLock",
                                              "size": 14,
                                              "label": ""
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex text-white/80"
                                              }
                                            }
                                          },
                                          {
                                            "id": "mf-phone-date",
                                            "type": "text",
                                            "options": {
                                              "text": "Friday, 26 June",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "mt-1 font-body text-[11px] font-medium text-white/85"
                                              }
                                            }
                                          },
                                          {
                                            "id": "mf-phone-time",
                                            "type": "text",
                                            "options": {
                                              "text": "9:41",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-heading text-6xl font-semibold leading-none tracking-tight text-white"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "mf-phone-notifs",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "absolute inset-x-2.5 bottom-10 flex flex-col gap-2"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "mf-n1",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex items-start gap-2.5 rounded-[18px] bg-white/20 p-2.5 backdrop-blur-md ring-1 ring-white/25"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "mf-n1-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconRosetteDiscount",
                                                  "size": 16,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FF7A59] text-white"
                                                  }
                                                }
                                              },
                                              {
                                                "id": "mf-n1-t",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex min-w-0 flex-col"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "mf-n1-top",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "flex items-center justify-between gap-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "mf-n1-app",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Muthofon",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] font-semibold uppercase tracking-wide text-white/75"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "mf-n1-now",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "now",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] text-white/60"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "mf-n1-msg",
                                                    "type": "text",
                                                    "options": {
                                                      "text": "Price drop on flagships: up to 15% off today",
                                                      "tag": "span"
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "font-body text-[11px] font-medium leading-snug text-white"
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "id": "mf-n2",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex items-start gap-2.5 rounded-[18px] bg-white/20 p-2.5 backdrop-blur-md ring-1 ring-white/25"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "mf-n2-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconCreditCard",
                                                  "size": 16,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#2BD9A0] text-white"
                                                  }
                                                }
                                              },
                                              {
                                                "id": "mf-n2-t",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex min-w-0 flex-col"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "mf-n2-top",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "flex items-center justify-between gap-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "mf-n2-app",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "EMI",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] font-semibold uppercase tracking-wide text-white/75"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "mf-n2-now",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "now",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] text-white/60"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "mf-n2-msg",
                                                    "type": "text",
                                                    "options": {
                                                      "text": "0% EMI for 12 months from ৳2,499/mo",
                                                      "tag": "span"
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "font-body text-[11px] font-medium leading-snug text-white"
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "id": "mf-n3",
                                            "type": "container",
                                            "options": {},
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "flex items-start gap-2.5 rounded-[18px] bg-white/20 p-2.5 backdrop-blur-md ring-1 ring-white/25"
                                              }
                                            },
                                            "children": [
                                              {
                                                "id": "mf-n3-ic",
                                                "type": "icon",
                                                "options": {
                                                  "iconName": "IconRecycle",
                                                  "size": 16,
                                                  "label": ""
                                                },
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#7B3FF2] text-white"
                                                  }
                                                }
                                              },
                                              {
                                                "id": "mf-n3-t",
                                                "type": "container",
                                                "options": {},
                                                "cssSelectors": {
                                                  "*": {
                                                    "classes": "flex min-w-0 flex-col"
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "id": "mf-n3-top",
                                                    "type": "container",
                                                    "options": {},
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "flex items-center justify-between gap-2"
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "mf-n3-app",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "Trade-in",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] font-semibold uppercase tracking-wide text-white/75"
                                                          }
                                                        }
                                                      },
                                                      {
                                                        "id": "mf-n3-now",
                                                        "type": "text",
                                                        "options": {
                                                          "text": "now",
                                                          "tag": "span"
                                                        },
                                                        "cssSelectors": {
                                                          "*": {
                                                            "classes": "font-body text-[9px] text-white/60"
                                                          }
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "id": "mf-n3-msg",
                                                    "type": "text",
                                                    "options": {
                                                      "text": "Your old phone is worth up to ৳40,000",
                                                      "tag": "span"
                                                    },
                                                    "cssSelectors": {
                                                      "*": {
                                                        "classes": "font-body text-[11px] font-medium leading-snug text-white"
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
                                        "id": "mf-phone-bar",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/80"
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
                        "id": "mf-bento-trade",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#FF7A59] p-6 lg:col-span-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bento-trade-art",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRecycle",
                              "size": 110,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-4 -right-4 flex -rotate-12 text-white/15 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "mf-bento-trade-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bento-trade-k",
                                "type": "text",
                                "options": {
                                  "text": "Trade-in",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-white/70"
                                  }
                                }
                              },
                              {
                                "id": "mf-bento-trade-h",
                                "type": "heading",
                                "options": {
                                  "text": "Swap your old phone for instant credit",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl leading-tight text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bento-trade-btn",
                            "type": "button",
                            "options": {
                              "text": "Get a quote",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#trade-in",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-white text-[#111116] px-4 py-2 transition-transform group-hover:translate-x-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-bento-emi",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#EFE8FF] p-6 lg:col-span-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bento-emi-art",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 110,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-4 -right-4 flex -rotate-12 text-[#111116]/10 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "mf-bento-emi-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bento-emi-k",
                                "type": "text",
                                "options": {
                                  "text": "0% interest",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#111116]/60"
                                  }
                                }
                              },
                              {
                                "id": "mf-bento-emi-h",
                                "type": "heading",
                                "options": {
                                  "text": "EMI up to 12 months on 20+ banks",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl leading-tight text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bento-emi-btn",
                            "type": "button",
                            "options": {
                              "text": "See EMI plans",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#emi",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-[#111116] text-white px-4 py-2 transition-transform group-hover:translate-x-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-bento-budget",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#DDF8EE] p-6 lg:col-span-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bento-budget-art",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCurrencyTaka",
                              "size": 110,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-4 -right-4 flex -rotate-12 text-[#111116]/10 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "mf-bento-budget-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bento-budget-k",
                                "type": "text",
                                "options": {
                                  "text": "Budget picks",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#111116]/60"
                                  }
                                }
                              },
                              {
                                "id": "mf-bento-budget-h",
                                "type": "heading",
                                "options": {
                                  "text": "Great phones under ৳15,000",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl leading-tight text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bento-budget-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop budget",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/budget-under-15k",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-[#111116] text-white px-4 py-2 transition-transform group-hover:translate-x-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-bento-warranty",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-white ring-1 ring-[#E3E3EA] p-6 lg:col-span-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bento-warranty-art",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 110,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-4 -right-4 flex -rotate-12 text-[#111116]/10 transition-transform duration-500 group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "mf-bento-warranty-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bento-warranty-k",
                                "type": "text",
                                "options": {
                                  "text": "Peace of mind",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#111116]/60"
                                  }
                                }
                              },
                              {
                                "id": "mf-bento-warranty-h",
                                "type": "heading",
                                "options": {
                                  "text": "Official warranty & 7-day replacement",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl leading-tight text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bento-warranty-btn",
                            "type": "button",
                            "options": {
                              "text": "How it works",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-[#111116] text-white px-4 py-2 transition-transform group-hover:translate-x-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "mf-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-2 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-trust-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-2 rounded-[22px] bg-white p-2 ring-1 ring-[#E3E3EA] sm:grid-cols-3 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-trust-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 bg-[#F2F2F7]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCertificate",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-1-t",
                            "type": "text",
                            "options": {
                              "text": "100% genuine",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trust-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-2-t",
                            "type": "text",
                            "options": {
                              "text": "Official warranty",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trust-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 bg-[#F2F2F7]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-3-t",
                            "type": "text",
                            "options": {
                              "text": "0% EMI",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trust-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTruckDelivery",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-4-t",
                            "type": "text",
                            "options": {
                              "text": "Next-day in Dhaka",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trust-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 bg-[#F2F2F7]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRefresh",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-5-t",
                            "type": "text",
                            "options": {
                              "text": "7-day replacement",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trust-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2.5 rounded-2xl px-3 py-2.5 "
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trust-6-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRecycle",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-trust-6-t",
                            "type": "text",
                            "options": {
                              "text": "Trade-in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#111116]"
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
            "id": "mf-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-brandsec-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-brandsec-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-brandsec-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-brandsec-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDeviceMobile",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-brandsec-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-brandsec-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Shop by brand",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-brandsec-all",
                            "type": "button",
                            "options": {
                              "text": "All brands",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/brands",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-brands-slider",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[18px] bg-[#F2F2F7] p-4 text-center transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-brands-slider-loop",
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
                                "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[18px] bg-[#F2F2F7] p-4 text-center transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-brands-slider-thumb",
                                "type": "termThumbnail",
                                "options": {
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-full items-center justify-center overflow-hidden"
                                  },
                                  "link": {
                                    "classes": "flex h-full w-full items-center justify-center"
                                  },
                                  "image": {
                                    "classes": "max-h-8 w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
                                  }
                                }
                              },
                              {
                                "id": "mf-brands-slider-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h4",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-brands-slider-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " models",
                                  "singularSuffix": " model",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
            "id": "mf-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-deals-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-[#FF7A59] bg-[radial-gradient(circle_at_90%_0%,rgba(255,201,77,0.45),transparent_45%)] p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-deals-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-deals-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-deals-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlame",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 shrink-0 animate-pulse items-center justify-center rounded-2xl bg-white text-[#FF7A59]"
                                  }
                                }
                              },
                              {
                                "id": "mf-deals-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-deals-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Today’s hot deals",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight text-white sm:text-3xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-deals-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Fresh prices every midnight, while stock lasts.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/80"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-deals-all",
                            "type": "button",
                            "options": {
                              "text": "All deals",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/deal",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 transition-colors hover:bg-[#111116]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#FF7A59]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-deals-slider",
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
                                      "deal"
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
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "gap": "0.5rem",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-deals-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-deals-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-deals-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-deals-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-deals-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-deals-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-deals-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-deals-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-deals-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-deals-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-deals-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-deals-slider-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-budget",
            "type": "section",
            "options": {
              "anchor": "budget"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-budget-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-budget-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-end gap-8 rounded-[28px] bg-[#111116] p-6 sm:p-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-budget-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-budget-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-budget-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconAntennaBars5",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#2BD9A0]"
                                  }
                                }
                              },
                              {
                                "id": "mf-budget-k",
                                "type": "text",
                                "options": {
                                  "text": "Shop by budget",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#2BD9A0]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-budget-h",
                            "type": "heading",
                            "options": {
                              "text": "Full signal at every price.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-3xl leading-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "mf-budget-p",
                            "type": "text",
                            "options": {
                              "text": "Pick your budget and see only the phones that fit it, best value first.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-budget-bars",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-5 items-end gap-2 sm:gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-bud-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bud-1-bar",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/budget-under-10k",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex h-14 w-full cursor-pointer items-end justify-center rounded-t-[14px] rounded-b-md bg-[linear-gradient(180deg,#7B3FF2,#6328D9)] pb-2 transition-all duration-300 hover:bg-[linear-gradient(180deg,#2BD9A0,#14B884)] hover:-translate-y-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white/80"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "mf-bud-1-t",
                                "type": "text",
                                "options": {
                                  "text": "Under ৳10k",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center font-body text-xs font-semibold text-white sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bud-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bud-2-bar",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/budget-10k-20k",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex h-20 w-full cursor-pointer items-end justify-center rounded-t-[14px] rounded-b-md bg-[linear-gradient(180deg,#7B3FF2,#6328D9)] pb-2 transition-all duration-300 hover:bg-[linear-gradient(180deg,#2BD9A0,#14B884)] hover:-translate-y-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white/80"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "mf-bud-2-t",
                                "type": "text",
                                "options": {
                                  "text": "৳10k–20k",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center font-body text-xs font-semibold text-white sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bud-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bud-3-bar",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/budget-20k-40k",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex h-28 w-full cursor-pointer items-end justify-center rounded-t-[14px] rounded-b-md bg-[linear-gradient(180deg,#7B3FF2,#6328D9)] pb-2 transition-all duration-300 hover:bg-[linear-gradient(180deg,#2BD9A0,#14B884)] hover:-translate-y-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white/80"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "mf-bud-3-t",
                                "type": "text",
                                "options": {
                                  "text": "৳20k–40k",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center font-body text-xs font-semibold text-white sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bud-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bud-4-bar",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/budget-40k-80k",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex h-36 w-full cursor-pointer items-end justify-center rounded-t-[14px] rounded-b-md bg-[linear-gradient(180deg,#7B3FF2,#6328D9)] pb-2 transition-all duration-300 hover:bg-[linear-gradient(180deg,#2BD9A0,#14B884)] hover:-translate-y-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white/80"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "mf-bud-4-t",
                                "type": "text",
                                "options": {
                                  "text": "৳40k–80k",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center font-body text-xs font-semibold text-white sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-bud-5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-bud-5-bar",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/budget-80k-plus",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex h-44 w-full cursor-pointer items-end justify-center rounded-t-[14px] rounded-b-md bg-[linear-gradient(180deg,#7B3FF2,#6328D9)] pb-2 transition-all duration-300 hover:bg-[linear-gradient(180deg,#2BD9A0,#14B884)] hover:-translate-y-1"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white/80"
                                  },
                                  "label": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "mf-bud-5-t",
                                "type": "text",
                                "options": {
                                  "text": "৳80k+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center font-body text-xs font-semibold text-white sm:text-sm"
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
            "id": "mf-row-new-launches",
            "type": "section",
            "options": {
              "anchor": "new-launches"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-row-new-launches-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-row-new-launches-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-row-new-launches-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-new-launches-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-new-launches-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBolt",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-row-new-launches-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-new-launches-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "New launches",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-new-launches-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Just landed in Bangladesh.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-row-new-launches-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/new-launch",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-row-new-launches-slider",
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
                                      "new-launch"
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
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "gap": "0.5rem",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-new-launches-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-new-launches-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-new-launches-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-new-launches-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-new-launches-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-row-new-launches-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-new-launches-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-row-new-launches-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-new-launches-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-row-new-launches-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-new-launches-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-new-launches-slider-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-best-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-best-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-best-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-best-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconStarFilled",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFC94D] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-best-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-best-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Best-selling phones",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-best-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "What Bangladesh is buying this week.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-best-all",
                            "type": "button",
                            "options": {
                              "text": "All bestsellers",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/bestseller",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-best-grid",
                        "type": "postGrid",
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
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-best-grid-loop",
                            "type": "postLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-best-grid-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-best-grid-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-best-grid-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-best-grid-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-best-grid-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-best-grid-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-best-grid-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-best-grid-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-best-grid-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-best-grid-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-best-grid-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-specs",
            "type": "section",
            "options": {
              "anchor": "spec-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-specs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-specs-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-specs-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-specs-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-specs-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconChecklist",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-specs-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-specs-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Spec decoder",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-specs-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "What the numbers on the box actually mean.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
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
                        "id": "mf-specs-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-spec-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-[22px] bg-[#EFE8FF] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-spec-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCpu",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#7B3FF2]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Processor",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-xl text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Snapdragon 8-series, Dimensity 9000+ or Apple A-series for gaming and heavy apps; mid-range chips are plenty for daily use.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#111116]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-spec-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-[22px] bg-[#FFE8E1] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-spec-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCamera",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#FF7A59]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "Camera",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-xl text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Megapixels aren’t everything: look for OIS, a bigger sensor and a telephoto lens if you shoot a lot.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#111116]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-spec-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-[22px] bg-[#DDF8EE] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-spec-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBattery4",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2BD9A0]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Battery",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-xl text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-3-p",
                                "type": "text",
                                "options": {
                                  "text": "5,000 mAh lasts a full day for most people; 45W+ charging refills it in under an hour.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#111116]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-spec-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-[22px] bg-[#FFF3D6] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-spec-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDeviceSdCard",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-4-h",
                                "type": "heading",
                                "options": {
                                  "text": "RAM & storage",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-xl text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-spec-4-p",
                                "type": "text",
                                "options": {
                                  "text": "8 GB RAM keeps apps open; 128 GB is the minimum, 256 GB if you keep lots of video.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-[#111116]/70"
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
            "id": "mf-row-tablets",
            "type": "section",
            "options": {
              "anchor": "tablets"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-row-tablets-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-row-tablets-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-row-tablets-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-tablets-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-tablets-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDeviceTablet",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2BD9A0] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-row-tablets-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-tablets-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tablets",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-tablets-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "For study, work and Netflix.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-row-tablets-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/tablets",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-row-tablets-slider",
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
                                      "tablets"
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
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "gap": "0.5rem",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-tablets-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-tablets-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-tablets-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-tablets-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-tablets-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-row-tablets-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-tablets-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-row-tablets-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-tablets-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-row-tablets-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-tablets-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-tablets-slider-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-trade",
            "type": "section",
            "options": {
              "anchor": "trade-in"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-trade-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "mf-trade-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden rounded-[28px] bg-[#7B3FF2] bg-[radial-gradient(circle_at_100%_0%,rgba(43,217,160,0.35),transparent_45%)] p-6 sm:p-10 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-trade-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trade-k",
                            "type": "text",
                            "options": {
                              "text": "Trade-in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-white/15 px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-trade-h",
                            "type": "heading",
                            "options": {
                              "text": "Old phone in, new phone out.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-3xl leading-tight text-white sm:text-4xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-trade-steps",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-step-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-[20px] bg-white/10 p-4 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-step-1-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-xs text-[#2BD9A0]"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Tell us your phone",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Model, storage and condition: get a price in a minute.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-step-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-[20px] bg-white/10 p-4 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-step-2-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-xs text-[#2BD9A0]"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "We check it",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-2-p",
                                "type": "text",
                                "options": {
                                  "text": "In store, or at your door when your new phone arrives.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-step-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-[20px] bg-white/10 p-4 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-step-3-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-xs text-[#2BD9A0]"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Get instant credit",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-step-3-p",
                                "type": "text",
                                "options": {
                                  "text": "The value comes straight off your new phone.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "mf-trade-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-6"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-trade-btn",
                            "type": "button",
                            "options": {
                              "text": "Get my trade-in price",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 transition-colors hover:bg-white/85"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "mf-emi-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-6 ring-1 ring-[#E3E3EA] sm:p-10 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-emi-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-emi-k",
                            "type": "text",
                            "options": {
                              "text": "0% EMI",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-fit rounded-full bg-[#DDF8EE] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#0E8C63]"
                              }
                            }
                          },
                          {
                            "id": "mf-emi-h",
                            "type": "heading",
                            "options": {
                              "text": "Pay in easy monthly instalments.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-3xl leading-tight text-[#111116]"
                              }
                            }
                          },
                          {
                            "id": "mf-emi-p",
                            "type": "text",
                            "options": {
                              "text": "Credit cards from 20+ banks, 3 to 12 months, no interest on most phones over ৳10,000.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#6B6B78]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-emi-calc",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2 rounded-[20px] bg-[#F2F2F7] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-emi-r1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between "
                              }
                            },
                            "children": [
                              {
                                "id": "mf-emi-r1-k",
                                "type": "text",
                                "options": {
                                  "text": "3 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6B78]"
                                  }
                                }
                              },
                              {
                                "id": "mf-emi-r1-v",
                                "type": "text",
                                "options": {
                                  "text": "৳8,333/mo",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-sm font-semibold text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-emi-r2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between border-t border-dashed border-[#E3E3EA] pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-emi-r2-k",
                                "type": "text",
                                "options": {
                                  "text": "6 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6B78]"
                                  }
                                }
                              },
                              {
                                "id": "mf-emi-r2-v",
                                "type": "text",
                                "options": {
                                  "text": "৳4,166/mo",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-sm font-semibold text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-emi-r3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between border-t border-dashed border-[#E3E3EA] pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-emi-r3-k",
                                "type": "text",
                                "options": {
                                  "text": "12 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#6B6B78]"
                                  }
                                }
                              },
                              {
                                "id": "mf-emi-r3-v",
                                "type": "text",
                                "options": {
                                  "text": "৳2,083/mo",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-sm font-semibold text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-emi-note",
                            "type": "text",
                            "options": {
                              "text": "Example on a ৳25,000 phone",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
            "id": "mf-row-accessories",
            "type": "section",
            "options": {
              "anchor": "accessories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-row-accessories-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-row-accessories-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-row-accessories-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-accessories-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-accessories-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHeadphones",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FF7A59] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-row-accessories-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-accessories-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Accessories",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-accessories-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Chargers, cases, earbuds and power banks.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-row-accessories-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/accessories",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-row-accessories-slider",
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
                                      "accessories"
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
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "gap": "0.5rem",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-accessories-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-accessories-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-accessories-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-accessories-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-accessories-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-row-accessories-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-accessories-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-row-accessories-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-accessories-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-row-accessories-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-accessories-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-accessories-slider-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-cats-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-cats-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cats-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-cats-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLayoutGrid",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-cats-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-cats-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "All categories",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-cats-all",
                            "type": "button",
                            "options": {
                              "text": "Browse all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-cats-grid",
                        "type": "termsGrid",
                        "options": {
                          "queryPrams": {
                            "taxonomy": "product_cat",
                            "number": "8",
                            "per_page": "8",
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
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-2 rounded-[20px] bg-[#F2F2F7] p-3 text-center transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cats-grid-loop",
                            "type": "termsLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
                              },
                              "loop-item": {
                                "classes": "group flex flex-col items-center gap-2 rounded-[20px] bg-[#F2F2F7] p-3 text-center transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-cats-grid-thumb",
                                "type": "termThumbnail",
                                "options": {
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block w-full overflow-hidden rounded-2xl"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "image": {
                                    "classes": "aspect-square w-full object-contain p-2 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "mf-cats-grid-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h4",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#111116] group-hover:text-[#7B3FF2]"
                                  }
                                }
                              },
                              {
                                "id": "mf-cats-grid-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "singularSuffix": " item",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
            "id": "mf-row-refurbished",
            "type": "section",
            "options": {
              "anchor": "refurbished"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-row-refurbished-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-row-refurbished-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-row-refurbished-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-refurbished-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-refurbished-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRecycle",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2BD9A0] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-row-refurbished-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-refurbished-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Certified pre-owned",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-refurbished-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Checked, graded and warrantied. Save up to 40%.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-row-refurbished-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/refurbished",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-row-refurbished-slider",
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
                                      "refurbished"
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
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 2,
                                "gap": "0.5rem",
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
                            "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-row-refurbished-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-row-refurbished-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-refurbished-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-refurbished-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "image": {
                                            "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-refurbished-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                    "id": "mf-row-refurbished-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-row-refurbished-slider-c-rate",
                                        "type": "productRatings",
                                        "options": {
                                          "hideIfEmpty": true
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                        "id": "mf-row-refurbished-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-row-refurbished-slider-c-ex",
                                        "type": "postExcerpt",
                                        "options": {
                                          "maxWord": 6,
                                          "readMoreText": "",
                                          "readMoreIcon": "",
                                          "readMoreIconSize": 16
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                                "id": "mf-row-refurbished-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-row-refurbished-slider-c-price",
                                    "type": "productPrice",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "simple-price-wrap": {
                                        "classes": "flex flex-col-reverse items-start"
                                      },
                                      "simple-price-sale": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "font-body text-xs text-[#6B6B78] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#7B3FF2]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-row-refurbished-slider-c-add",
                                    "type": "addToCart",
                                    "options": {
                                      "buttonText": "Add to cart",
                                      "hideQuantity": true,
                                      "hideButton": false,
                                      "icon": "IconShoppingCartPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center"
                                      },
                                      "button-wrapper": {
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            ]
          },
          {
            "id": "mf-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-reviews-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconStarFilled",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFC94D] text-white"
                              }
                            }
                          },
                          {
                            "id": "mf-reviews-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "Rated 4.8 by 50,000+ buyers",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
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
                    "id": "mf-reviews-slider",
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
                        "classes": "!h-10 !w-10 !rounded-full !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(17,17,22,0.35)] transition-colors hover:!bg-[#7B3FF2] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#111116] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#111116]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#7B3FF2]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered at 11 pm, phone at my desk by 2 pm the next day. Sealed box, official warranty card inside.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "TH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7B3FF2] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tanvir Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Bought a flagship",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
                        "id": "mf-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Split the price over 12 months on my card with zero interest. The whole checkout took five minutes.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF7A59] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sadia Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Used 0% EMI",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
                        "id": "mf-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Got a fair price for my 3-year-old phone, checked at the door, and it came straight off the new one.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "RA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111116] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rakibul Alam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Traded in",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
                        "id": "mf-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“The budget filter showed me exactly what fits ৳15,000. Great camera for the price.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2BD9A0] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Budget phone",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
                        "id": "mf-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“The certified pre-owned phone looked brand new and came with 6 months warranty.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "IK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6328D9] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran Kabir",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Pre-owned",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
                        "id": "mf-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E3E3EA]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#FFC94D]"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Original charger and case in the same order, cheaper than the mall. Fast delivery to Chattogram.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-medium leading-relaxed text-[#111116]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-[#E3E3EA] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8603F] font-heading text-sm font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mitu Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Accessories",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Martian_Mono'] text-[10px] text-[#0E8C63]"
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
            "id": "mf-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-journal-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-journal-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-journal-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-journal-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFileDescription",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                  }
                                }
                              },
                              {
                                "id": "mf-journal-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-journal-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tech tips & reviews",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-journal-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Buying guides, comparisons and how-tos.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B78]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "mf-journal-all",
                            "type": "button",
                            "options": {
                              "text": "All articles",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/blog",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 ring-1 ring-[#E3E3EA] transition-colors hover:ring-[#7B3FF2]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#7B3FF2] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#111116] whitespace-nowrap group-hover:text-[#7B3FF2]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-journal-grid",
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
                            "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-[22px] bg-[#F2F2F7] transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-journal-loop",
                            "type": "postLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                              },
                              "loop-item": {
                                "classes": "group flex flex-col overflow-hidden rounded-[22px] bg-[#F2F2F7] transition-all hover:bg-white hover:ring-1 hover:ring-[#7B3FF2]/40"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-journal-thumb",
                                "type": "postThumbnail",
                                "options": {
                                  "linkTo": "postUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block overflow-hidden bg-[#E3E3EA]"
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
                                "id": "mf-journal-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col gap-2 p-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-journal-date",
                                    "type": "postDate",
                                    "options": {
                                      "dateFormat": "MMM DD, YYYY",
                                      "linkTo": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Martian_Mono'] text-[10px] text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-journal-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-lg font-bold leading-snug tracking-tight text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-journal-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "Read",
                                      "readMoreIcon": "IconArrowRight",
                                      "readMoreIconSize": 14
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-1 flex-col justify-between gap-3 text-sm text-[#6B6B78]"
                                      },
                                      "excerpt": {
                                        "classes": "line-clamp-2"
                                      },
                                      "read-more": {
                                        "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-semibold text-[#111116]"
                                      },
                                      "read-more-icon": {
                                        "classes": "flex text-[#7B3FF2] transition-transform group-hover/rm:translate-x-1"
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
              }
            ]
          },
          {
            "id": "mf-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-4 lg:py-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-faq-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-8 rounded-[28px] bg-white p-4 ring-1 ring-[#E3E3EA] sm:p-6 lg:grid-cols-12 lg:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-faq-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-faq-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-6 flex flex-wrap items-center justify-between gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-faq-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconBell",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7B3FF2] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-faq-head-tt",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-faq-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Good to know",
                                          "tag": "h2"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading font-bold tracking-tight text-2xl leading-tight sm:text-3xl text-[#111116]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-faq-sub",
                                        "type": "text",
                                        "options": {
                                          "text": "Genuine, EMI, trade-in, warranty.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm text-[#6B6B78]"
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
                        "id": "mf-faq-acc",
                        "type": "accordion",
                        "options": {
                          "items": [
                            {
                              "label": "Are your phones genuine?",
                              "classes": ""
                            },
                            {
                              "label": "How does 0% EMI work?",
                              "classes": ""
                            },
                            {
                              "label": "How does trade-in work?",
                              "classes": ""
                            },
                            {
                              "label": "What if my phone is faulty?",
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
                            "classes": "flex flex-col gap-2"
                          },
                          "accordion-header": {
                            "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-[#F2F2F7] px-5 py-4 font-body text-base font-semibold text-[#111116] transition-colors hover:bg-[#EFE8FF]"
                          },
                          "accordion-header-open": {
                            "classes": "!bg-[#7B3FF2] !text-white"
                          },
                          "header-label": {
                            "classes": ""
                          },
                          "header-icon": {
                            "classes": "flex shrink-0"
                          },
                          "accordion-content": {
                            "classes": "px-5 pb-2 pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-faq-i1",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-i1-a",
                                "type": "text",
                                "options": {
                                  "text": "Yes. Every phone is sealed and genuine. Official phones carry the brand’s Bangladesh warranty; unofficial ones carry our own service warranty, clearly marked on the page.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6B6B78]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-faq-i2",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-i2-a",
                                "type": "text",
                                "options": {
                                  "text": "Pay with a credit card from a partner bank and choose 3, 6 or 12 months at checkout. Most phones over ৳10,000 qualify with no interest.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6B6B78]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-faq-i3",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-i3-a",
                                "type": "text",
                                "options": {
                                  "text": "Tell us your old phone’s model and condition for a quote. We check it in store or at your door and take the value off your new phone.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6B6B78]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-faq-i4",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-i4-a",
                                "type": "text",
                                "options": {
                                  "text": "Report any manufacturing fault within 7 days for a replacement. After that, the warranty covers repairs at the service centre.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6B6B78]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-faq-i5",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-faq-i5-a",
                                "type": "text",
                                "options": {
                                  "text": "Next day inside Dhaka, 2-4 days elsewhere in Bangladesh, with cash on delivery and open-box checking.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6B6B78]"
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
            "id": "mf-cta",
            "type": "section",
            "options": {
              "anchor": "alerts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full pb-10 pt-4 lg:pb-14 lg:pt-5 bg-[#F2F2F7]"
              }
            },
            "children": [
              {
                "id": "mf-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#111116] p-8 sm:p-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-cta-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#7B3FF2]/40 blur-3xl"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "mf-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cta-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-cta-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 animate-ping rounded-full bg-[#2BD9A0]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "mf-cta-k",
                                "type": "text",
                                "options": {
                                  "text": "Price-drop alerts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#2BD9A0]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Never miss the day your phone gets cheaper.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold tracking-tight text-3xl leading-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "mf-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account to save phones, get price-drop alerts and early access to launch-day offers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-sm text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Turn on alerts",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconBell",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#7B3FF2] px-6 py-3.5 transition-all hover:bg-[#6328D9] hover:shadow-[0_12px_24px_-12px_rgba(123,63,242,0.8)]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "mf-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse phones",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 transition-colors hover:bg-white/10"
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
        ],
        "meta": ""
      },
      {
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "mf-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The marketplace",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Phones & Gadgets",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every phone, tablet and accessory in stock, newest first. Open one for full specs, warranty type and EMI.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
                        "id": "mf-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-shop-promise",
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
                "id": "mf-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "Sealed & verified",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Warranty",
                          "description": "Official or service",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "0% EMI",
                          "description": "20+ banks",
                          "icon": "IconCreditCard",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day replacement",
                          "description": "For any fault",
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
                        "classes": "font-heading text-base font-bold text-[#111116]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE8FF] text-[#7B3FF2]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-shop-promise-fb-ic",
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
                        "id": "mf-shop-promise-fb-t",
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
                        "id": "mf-shop-promise-fb-d",
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
            "id": "mf-pd",
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
                "id": "mf-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-pd-grid",
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
                        "id": "mf-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#EFE8FF] via-white to-[#F2F2F7] p-4 shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#111116]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#111116]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#7B3FF2]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-pd-cats",
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
                                "classes": "rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111116] hover:bg-[#111116] hover:text-white"
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
                            "id": "mf-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#111116] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "mf-pd-rate",
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
                                "classes": "font-body font-bold text-[#111116]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "mf-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-price",
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
                                    "classes": "font-heading text-3xl font-bold text-[#111116] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-bold text-[#111116] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-bold text-[#111116] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#7B3FF2] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "mf-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6B78]"
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
                            "id": "mf-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#111116]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#111116] transition-colors hover:border-[#111116] hover:bg-[#EFE8FF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#111116] !bg-[#EFE8FF] !text-[#1E1E26]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "mf-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · turn on alerts to hear when it’s back",
                              "inStockText": "In stock · next-day delivery in Dhaka",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#7B3FF2]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#111116]"
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
                            "id": "mf-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#111116]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F2F2F7]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F2F2F7]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#7B3FF2] px-8 text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#6328D9]"
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
                            "id": "mf-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Genuine",
                                  "description": "Sealed box",
                                  "icon": "IconCertificate",
                                  "iconSize": ""
                                },
                                {
                                  "title": "0% EMI",
                                  "description": "3-12 months",
                                  "icon": "IconCreditCard",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day replacement",
                                  "description": "For any fault",
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
                                "classes": "font-body text-base font-bold text-[#111116]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE8FF] text-[#111116]"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-perks-ic",
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
                                "id": "mf-pd-perks-t",
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
                                "id": "mf-pd-perks-d",
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
                            "id": "mf-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-sku",
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
                                    "classes": "font-semibold text-[#111116]"
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
                                "id": "mf-pd-brands",
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
                                    "classes": "font-semibold text-[#111116]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#7B3FF2]"
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
                                "id": "mf-pd-tags",
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
                                    "classes": "font-semibold text-[#111116]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#7B3FF2]"
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
            "id": "mf-pd-tabs-sec",
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
                "id": "mf-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,22,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Overview",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Specifications",
                              "icon": "IconCpu"
                            },
                            {
                              "label": "Warranty & EMI",
                              "icon": "IconShieldCheck"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F2F2F7] px-5 py-2.5 font-body text-sm font-semibold text-[#111116] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#111116] !text-white shadow-md"
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
                            "id": "mf-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#111116] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#111116] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#7B3FF2] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC94D] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCpu",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Full specs (chipset, RAM, storage, camera, battery, display) are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Warranty type is marked: official brand warranty or our service warranty",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Network bands are listed so you can check your operator",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Sealed box with all original accessories",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#111116]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Inside Dhaka: next day",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 2-4 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Open the box at delivery and check before you pay (COD)",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Manufacturing fault within 7 days: replacement",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#111116]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "mf-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F2F2F7] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F2F2F7] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "mf-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE8FF]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#111116]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "mf-pd-reviews-rate",
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
                                        "id": "mf-pd-reviews-co",
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
                                    "id": "mf-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How is the battery, camera and performance in daily use?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,22,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#111116]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F2F2F7] px-4 py-3 text-sm text-[#111116] placeholder:text-gray-400 focus:border-[#111116] focus:outline-none focus:ring-2 focus:ring-[#111116]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#7B3FF2] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#6328D9] disabled:opacity-50"
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
            "id": "mf-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-16"
              }
            },
            "children": [
              {
                "id": "mf-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Compare with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#7B3FF2]"
                          }
                        }
                      },
                      {
                        "id": "mf-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Similar Phones",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#111116] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "mf-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
            "id": "mf-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The marketplace",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Smartphones, tablets, accessories and certified pre-owned.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#EFE8FF] transition-transform"
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
                            "id": "mf-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-cat-grid-count",
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
                        "id": "mf-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "mf-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111116] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
                        "id": "mf-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group phones by budget, launch and deal: new launches, bestsellers, deals and every price band.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#7B3FF2]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#7B3FF2]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#111116] group-hover:text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F2F2F7] px-2 py-0.5 text-[10px] font-bold text-[#6B6B78]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "mf-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "mf-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111116] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
                        "id": "mf-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Every brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Brand",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every phone and accessory brand we sell.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F2F2F7] p-3"
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
                            "id": "mf-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#111116] group-hover:text-[#7B3FF2]"
                              }
                            }
                          },
                          {
                            "id": "mf-brand-grid-count",
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
                        "id": "mf-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "mf-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111116] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
                        "id": "mf-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tech tips",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Guides, Comparisons & Reviews",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Which phone to buy at every budget, how to read specs and how to make your battery last.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F2F2F7]"
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
                            "id": "mf-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                  }
                                }
                              },
                              {
                                "id": "mf-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#7B3FF2]"
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
                        "id": "mf-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111116] transition-colors hover:border-[#7B3FF2] hover:text-[#7B3FF2]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#7B3FF2] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "mf-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F2F2F7] via-white to-[#F2F2F7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "mf-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-post-k",
                    "type": "text",
                    "options": {
                      "text": "Tech tips",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111116]"
                      }
                    }
                  },
                  {
                    "id": "mf-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B6B78]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-post-author",
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
                            "classes": "font-body font-bold text-[#111116]"
                          }
                        }
                      },
                      {
                        "id": "mf-post-dot",
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
                        "id": "mf-post-date",
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
                    "id": "mf-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
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
            "id": "mf-post-body",
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
                "id": "mf-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#111116] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#111116] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#7B3FF2] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC94D] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-16"
              }
            },
            "children": [
              {
                "id": "mf-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#111116] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F2F2F7] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F2F2F7] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE8FF]"
                              }
                            }
                          },
                          {
                            "id": "mf-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#111116]"
                              }
                            }
                          },
                          {
                            "id": "mf-post-cmt-co",
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
                        "id": "mf-post-cmt-form",
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
                            "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,22,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#111116]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F2F2F7] px-4 py-3 text-sm text-[#111116] placeholder:text-gray-400 focus:border-[#111116] focus:outline-none focus:ring-2 focus:ring-[#111116]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#7B3FF2] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#6328D9] disabled:opacity-50"
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
            "id": "mf-post-more",
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
                "id": "mf-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Tech Tips",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#111116] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,22,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F2F2F7]"
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
                            "id": "mf-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#111116]"
                                  }
                                }
                              },
                              {
                                "id": "mf-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
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
            "id": "mf-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] bg-[radial-gradient(circle_at_90%_0%,rgba(123,63,242,0.12),transparent_40%)] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "mf-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "mf-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block w-fit rounded-full bg-[#EFE8FF] px-3 py-1.5 font-['Martian_Mono'] text-[10px] uppercase tracking-wider text-[#7B3FF2]"
                      }
                    }
                  },
                  {
                    "id": "mf-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#111116] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, EMI and trade-ins, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "mf-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-12"
              }
            },
            "children": [
              {
                "id": "mf-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#111116] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#FFC94D]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#7B3FF2]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#7B3FF2]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#7B3FF2]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "mf-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "mf-acc-3",
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
                                "id": "mf-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,22,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#7B3FF2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6328D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "mf-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,22,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#7B3FF2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6328D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "mf-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "mf-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F2F2F7] px-5 py-2.5 font-body text-sm font-semibold text-[#111116] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#111116] !text-white shadow-md"
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
                                "id": "mf-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7B3FF2]/10 text-[#7B3FF2]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "mf-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#7B3FF2] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "mf-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7B3FF2]/10 text-[#7B3FF2]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "mf-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#7B3FF2]/40 hover:bg-[#7B3FF2]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7B3FF2]/10 text-[#7B3FF2]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "mf-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7B3FF2]/10 text-[#7B3FF2]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#7B3FF2] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6328D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3FF2]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "mf-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F2F2F7] via-white to-[#F2F2F7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "mf-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(17,17,22,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EFE8FF] text-[#111116]"
                          }
                        }
                      },
                      {
                        "id": "mf-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#7B3FF2]"
                          }
                        }
                      },
                      {
                        "id": "mf-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! Your Order Is Confirmed",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#111116] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "mf-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re checking and packing your order now. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B6B78] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "mf-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order by SMS or a quick call",
                              "icon": ""
                            },
                            {
                              "text": "Your phone is checked, sealed and packed with its warranty card",
                              "icon": ""
                            },
                            {
                              "text": "Delivered next day inside Dhaka: open the box and check before paying if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#F2F2F7] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#7B3FF2]"
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
                        "id": "mf-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B3FF2] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#6328D9] w-full sm:w-auto"
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
                            "id": "mf-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#111116] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#111116] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#111116] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#111116] whitespace-nowrap group-hover:text-white"
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
            "id": "mf-ty-promise",
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
                "id": "mf-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% genuine",
                          "description": "Sealed & verified",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Warranty",
                          "description": "Official or service",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "0% EMI",
                          "description": "20+ banks",
                          "icon": "IconCreditCard",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day replacement",
                          "description": "For any fault",
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
                        "classes": "font-heading text-base font-bold text-[#111116]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE8FF] text-[#7B3FF2]"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-ty-promise-fb-ic",
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
                        "id": "mf-ty-promise-fb-t",
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
                        "id": "mf-ty-promise-fb-d",
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
            "id": "mf-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F2F2F7] via-white to-[#F2F2F7] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "mf-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-bold text-[#7B3FF2] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F2F2F7] text-[#111116]"
                      }
                    }
                  },
                  {
                    "id": "mf-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "No Signal on This Page",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#111116] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "mf-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the phone may have sold out. Head back home or browse the marketplace.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B6B78] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "mf-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7B3FF2] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(123,63,242,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#6328D9] w-full sm:w-auto"
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
                        "id": "mf-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Phones",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#111116] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#111116] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#111116] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#111116] whitespace-nowrap group-hover:text-white"
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
            "id": "mf-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F2F2F7] py-16"
              }
            },
            "children": [
              {
                "id": "mf-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "mf-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFC94D] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111116]"
                          }
                        }
                      },
                      {
                        "id": "mf-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#111116] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "mf-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "mf-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-3 ring-1 ring-[#E3E3EA] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-20px_rgba(17,17,22,0.35)] hover:ring-[#7B3FF2]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "mf-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F2F2F7]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2 top-2 z-[3] flex items-center gap-1 rounded-lg bg-[#FF7A59] px-2 py-1 font-body text-[11px] font-bold text-white"
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
                                "id": "mf-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1.5 px-1 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "mf-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "mf-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5rem] font-body text-sm font-semibold leading-snug text-[#111116] transition-colors group-hover:text-[#7B3FF2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "mf-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 w-fit rounded-md bg-[#F2F2F7] px-1.5 py-0.5 font-['Martian_Mono'] text-[10px] text-[#6B6B78]"
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
                            "id": "mf-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-1 pb-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "mf-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6B6B78] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold leading-none text-[#7B3FF2]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#7B3FF2]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#7B3FF2] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "mf-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#111116] text-white transition-colors hover:bg-[#7B3FF2]"
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
