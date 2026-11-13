/**
 * Template: Juta Sneaker Store.
 *
 * A modern sneaker and shoe store (juta: "shoe"): sneakers, running,
 * formal, sandals and slides, boots and kids, for men and women, sold by EU
 * size. Like the other complete templates here it carries all sixteen page
 * types - Header, Footer, Home, Shop, Product, the six taxonomy archives,
 * Blog Archive, Blog Single, Account, Thank you and 404 - so applying it
 * replaces every page.
 *
 * GENERATED from Fashora/index.js: every page except Home keeps Fashora's
 * block structure (ids renamed fs- to jt-, palette remapped, copy
 * rewritten for shoes); the Header is restyled (rotated orange "J" mark,
 * pill search, uppercase menu with a Sale pill) and Home is built fresh. It
 * is plain data: edit freely.
 *
 * THE HERO: "the drop stage"
 *
 *   On ink, behind a faint grid: a huge outlined JUTA wordmark, a glowing
 *   volt disc inside a slowly spinning dashed orbit, the sneaker
 *   (public/templates/juta-hero.svg) tilted -12deg that straightens on
 *   hover, three numbered spec callouts (upper, midsole, outsole), a
 *   spinning "new drop" badge (public/templates/juta-badge.svg) and a
 *   product chip. The copy side has a live "Drop 07" chip, a Bangla line,
 *   "Built to move." over an outlined "Made to be seen.", two CTAs and a
 *   three-stat strip. Under it, a size run: EU 38-46, each linking to its
 *   tag, EU 42 marked HOT.
 *
 * DESIGN
 *
 *   ink        #121212  hero, buttons, cards on dark      #2A2A2A hover
 *   orange     #FF5B1F  primary: accents, ticker, promise #E2470F deep  #FFEDE4 tint
 *   volt lime  #D4FF3F  accent: disc, CTAs, sale chips, size 42
 *   bone #F3F1EC (page)  tile #EFEDE8  line #E3DFD7  muted #6E6A63
 *
 * Fonts (template meta): Bricolage Grotesque (headings, extrabold, tight
 * tracking), Manrope (body), JetBrains Mono via `font-['JetBrains_Mono']`
 * for kickers, sizes and spec labels, Hind Siliguri via
 * `font-['Hind_Siliguri']` for the Bangla line in the hero.
 *
 * Product cards: a bone photo well that zooms and tilts on hover, a lime
 * "% OFF" chip, a mono line from the excerpt (use it for the size range and
 * material, e.g. "EU 39-46 · Knit upper"), the name, rating, price and an
 * ink "+ Add" pill that turns orange.
 *
 * HOME
 *
 *   Drop-stage hero (#drop) - slanted orange ticker - category bento
 *   (#categories) - new drops (#new) - shop by feel, a six-bar cushion
 *   meter (#cushion) - bestsellers (#bestsellers) - size guide with steps
 *   and an EU/UK/US/cm chart (#size-guide) - men (#men) - women (#women) -
 *   the Juta promise (#promise) - sale on ink (#sale) - brands, live
 *   product_brand terms (#brands) - reviews with fit notes (#reviews) -
 *   journal (#journal) - FAQ with a WhatsApp size-help card (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: sneakers, running, formal, sandals, boots, kids, men,
 *     women. Tag slugs: new, bestseller, sale, firm, balanced, plush,
 *     eu-38 to eu-46. Brands are product_brand terms; give each a logo.
 *   - "Drop 07", "Volt Runner 07" (৳6,490), the spec callouts, the size
 *     chart, the reviews, the 7-day free size exchange, "genuine or your
 *     money back", code STEP10, delivery times and the ৳2,500 free-delivery
 *     threshold are sample copy: offer only what you actually run. The
 *     size chart is a generic EU conversion; brands differ.
 *   - The WhatsApp link is https://wa.me/ - add your number.
 */

var template = [
  {
    "name": "Juta Sneaker Store",
    "description": "Modern sneaker and shoe store in ink, signal orange and volt lime on bone, with Bricolage Grotesque, Manrope and JetBrains Mono: a \"drop stage\" hero - a tilted sneaker on a glowing volt disc with spec callouts, a spinning new-drop badge, an outlined JUTA wordmark and an EU size-run strip - then a slanted ticker, a category bento, new drops, a six-bar cushion meter, bestsellers, a size guide with a conversion chart, men and women rows, the Juta promise, sale, brands, reviews with fit notes, the journal and FAQ. All 16 pages.",
    "thumbnail": "/templates/juta.svg",
    "meta": {
      "fonts": [
        {
          "family": "Bricolage Grotesque",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&display=swap",
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
          "family": "JetBrains Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap",
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
        "heading": "Bricolage Grotesque",
        "body": "Manrope"
      },
      "colors": {
        "primary": "#FF5B1F",
        "secondary": "#121212",
        "accent": "#D4FF3F",
        "background": "#F3F1EC",
        "foreground": "#121212",
        "muted": "#6E6A63"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "jt-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E3DFD7] bg-[#F3F1EC]/90 backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "jt-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#121212] px-4 py-2 text-center text-xs font-medium text-white/85"
                  }
                },
                "children": [
                  {
                    "id": "jt-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳2,500 · Cash on delivery · Free size exchange in 7 days · 10% off your first pair:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "jt-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "STEP10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#D4FF3F] px-2 py-0.5 font-['JetBrains_Mono'] text-xs font-bold text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Shop the drop",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/tags/new",
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
                        "classes": "text-xs font-bold text-[#D4FF3F] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "jt-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-4 lg:h-[76px]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "J",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 -rotate-6 items-center justify-center rounded-[12px] bg-[#FF5B1F] font-heading text-2xl font-extrabold leading-none text-[#121212] transition-transform group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "jt-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Juta",
                                  "src": "https://placehold.co/200x64?text=Juta",
                                  "altText": "Juta",
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
                                    "classes": "font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Sneakers & everyday shoes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block font-['JetBrains_Mono'] text-[9px] font-bold uppercase tracking-[0.2em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search sneakers, brands or your size",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-2 hidden max-w-3xl flex-1 rounded-full border-2 border-[#121212] bg-white py-1 pl-1 pr-3 transition-all focus-within:border-[#FF5B1F] focus-within:ring-4 focus-within:ring-[#FF5B1F]/15 md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#6E6A63]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF5B1F]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#FF5B1F]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF5B1F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E2470F]"
                          }
                        }
                      },
                      {
                        "id": "jt-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white ring-1 ring-[#E3DFD7] text-[#121212] transition-colors hover:bg-[#FFEDE4] hover:text-[#FF5B1F]"
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
                            "id": "jt-hdr-cart",
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
                              "crossSellsTitle": "Complete the pair",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#121212] text-white shadow-[0_10px_25px_-5px_rgba(255,91,31,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#2A2A2A]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#D4FF3F] px-1 text-[10px] font-bold text-[#121212]"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F3F1EC] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#121212]"
                              },
                              "title-icon": {
                                "classes": "text-[#FF5B1F]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#FF5B1F] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#FF5B1F] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#E2470F]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#FF5B1F] px-4 py-2 text-sm font-medium text-[#FF5B1F] transition-colors hover:bg-[#FF5B1F] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E2470F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "jt-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F3F1EC] text-[#121212]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F3F1EC] p-2 text-[#121212] transition-colors hover:bg-[#FF5B1F] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "J",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 -rotate-6 items-center justify-center rounded-[12px] bg-[#FF5B1F] font-heading text-2xl font-extrabold leading-none text-[#121212] transition-transform group-hover:rotate-0"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Juta",
                                          "src": "https://placehold.co/200x64?text=Juta",
                                          "altText": "Juta",
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
                                            "classes": "font-heading text-2xl font-extrabold tracking-[-0.05em] text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Sneakers & everyday shoes",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-0.5 block font-['JetBrains_Mono'] text-[9px] font-bold uppercase tracking-[0.2em] text-[#6E6A63]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "jt-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search sneakers & brands",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F3F1EC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#121212] focus-within:ring-2 focus-within:ring-[#121212]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6E6A63]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF5B1F]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#FF5B1F]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF5B1F] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E2470F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-hdr-m-menu",
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
                                    "classes": "min-w-52 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                                  },
                                  "menu-link": {
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#121212] transition-colors hover:text-[#FF5B1F]"
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
                                    "id": "jt-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Sneakers",
                                      "url": "/categories/sneakers"
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
                                    "id": "jt-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Running",
                                      "url": "/categories/running"
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
                                    "id": "jt-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Men",
                                      "url": "/categories/men"
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
                                    "id": "jt-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Women",
                                      "url": "/categories/women"
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
                                    "id": "jt-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Kids",
                                      "url": "/categories/kids"
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
                                    "id": "jt-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Formal",
                                      "url": "/categories/formal"
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
                                    "id": "jt-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Brands",
                                      "url": "/brands"
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
                                    "id": "jt-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Sale",
                                      "url": "/#sale"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": "rounded-full bg-[#FF5B1F] px-2.5 py-0.5 text-white"
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
                    "id": "jt-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#E3DFD7] lg:block"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-hdr-menu",
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
                            "classes": "flex h-11 items-center gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body font-semibold text-[#121212] transition-colors hover:text-[#FF5B1F] uppercase tracking-wide text-[13px]"
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
                            "id": "jt-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Sneakers",
                              "url": "/categories/sneakers"
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
                            "id": "jt-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Running",
                              "url": "/categories/running"
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
                            "id": "jt-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Men",
                              "url": "/categories/men"
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
                            "id": "jt-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Women",
                              "url": "/categories/women"
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
                            "id": "jt-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Kids",
                              "url": "/categories/kids"
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
                            "id": "jt-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Formal",
                              "url": "/categories/formal"
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
                            "id": "jt-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Brands",
                              "url": "/brands"
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
                            "id": "jt-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Sale",
                              "url": "/#sale"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "rounded-full bg-[#FF5B1F] px-2.5 py-0.5 text-white"
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
            "id": "jt-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#121212] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "jt-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "jt-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-[#FF5B1F] p-8 sm:p-10 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Juta Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-sm bg-[#D4FF3F] px-2 py-1 font-body text-[11px] font-bold uppercase tracking-widest text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "10% off your first pair",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading uppercase text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "jt-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Join for the welcome code, early access to drops and restock alerts in your size.",
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
                        "id": "jt-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join the club",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconUserPlus",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#121212] px-6 py-3 transition-colors hover:bg-[#2A2A2A]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-wide text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "jt-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "jt-ftr-grid",
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
                        "id": "jt-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "J",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 -rotate-6 items-center justify-center rounded-[12px] bg-[#FF5B1F] font-heading text-2xl font-extrabold leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Juta",
                                      "src": "https://placehold.co/200x64?text=Juta",
                                      "altText": "Juta",
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
                                        "classes": "font-heading text-2xl font-extrabold tracking-[-0.05em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Genuine sneakers and everyday shoes from brands you know, with free size exchanges and cash on delivery across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "jt-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF5B1F]"
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
                                "id": "jt-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF5B1F]"
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
                                "id": "jt-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF5B1F]"
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
                                "id": "jt-ftr-pin",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://tiktok.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandTiktok",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF5B1F]"
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
                        "id": "jt-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Sneakers",
                                  "icon": "",
                                  "slug": "/categories/sneakers"
                                },
                                {
                                  "text": "Running",
                                  "icon": "",
                                  "slug": "/categories/running"
                                },
                                {
                                  "text": "Men",
                                  "icon": "",
                                  "slug": "/categories/men"
                                },
                                {
                                  "text": "Women",
                                  "icon": "",
                                  "slug": "/categories/women"
                                },
                                {
                                  "text": "Kids",
                                  "icon": "",
                                  "slug": "/categories/kids"
                                },
                                {
                                  "text": "Sale",
                                  "icon": "",
                                  "slug": "/#sale"
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
                                "classes": "transition-colors hover:text-[#D4FF3F]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D4FF3F]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ftr-ll-care",
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
                                  "slug": "/#size-guide"
                                },
                                {
                                  "text": "Size Exchange",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "All Brands",
                                  "icon": "",
                                  "slug": "/brands"
                                },
                                {
                                  "text": "Journal",
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
                                "classes": "transition-colors hover:text-[#D4FF3F]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D4FF3F]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ftr-contact-h",
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
                            "id": "jt-ftr-address",
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
                                "value": "Support: every day, 9am - 11pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#D4FF3F]"
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
                                "classes": "shrink-0 text-[#FF5B1F]"
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
                "id": "jt-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "jt-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Juta. All rights reserved.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "jt-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Visa · Mastercard",
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
            "id": "jt-hero",
            "type": "section",
            "options": {
              "anchor": "drop"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#121212] pt-10 text-white lg:pt-16"
              }
            },
            "children": [
              {
                "id": "jt-hero-grid-bg",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_45%,#000_30%,transparent_75%)]"
                  }
                },
                "children": []
              },
              {
                "id": "jt-hero-word",
                "type": "text",
                "options": {
                  "text": "JUTA",
                  "tag": "span"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none font-heading text-[42vw] font-extrabold leading-none tracking-[-0.07em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.10)] lg:text-[26rem]"
                  }
                }
              },
              {
                "id": "jt-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-start gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hero-chip",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5 rounded-full bg-white/[0.06] py-1.5 pl-2.5 pr-4 ring-1 ring-white/15"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-live",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-2.5 w-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-live-ping",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4FF3F] opacity-75"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jt-hero-live-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D4FF3F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-chip-t",
                                "type": "text",
                                "options": {
                                  "text": "Drop 07 · Live now",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "পায়ে পায়ে নতুন গল্প",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Hind_Siliguri'] text-xl font-semibold text-[#D4FF3F]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Built to move.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[44px] font-extrabold leading-[0.9] tracking-[-0.045em] text-white sm:text-7xl lg:text-[60px] xl:text-[74px]"
                                  }
                                }
                              },
                              {
                                "id": "jt-hero-h1-2",
                                "type": "text",
                                "options": {
                                  "text": "Made to be seen.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[44px] font-extrabold leading-[0.95] tracking-[-0.045em] text-transparent [-webkit-text-stroke:1.5px_#D4FF3F] sm:text-7xl lg:text-[60px] xl:text-[74px]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Genuine sneakers, runners and everyday shoes from the brands you know. Pick your EU size, try them at home, and swap the size free if they don’t fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop the drop",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/new",
                                  "target": "",
                                  "icon": "IconArrowUpRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D4FF3F] px-7 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_#D4FF3F] flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#121212] transition-transform group-hover:rotate-45"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-extrabold uppercase tracking-wide text-[#121212] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "jt-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find my size",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#size-guide",
                                  "target": "",
                                  "icon": "IconRuler2",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-4 ring-1 ring-white/25 transition-all hover:bg-white/10 hover:ring-white"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-extrabold uppercase tracking-wide text-white whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 grid w-full max-w-md grid-cols-3 divide-x divide-white/10 border-y border-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "100%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-xl font-extrabold tracking-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-stat-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Genuine pairs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-white/45"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "7 days",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-xl font-extrabold tracking-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-stat-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Free size swap",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-white/45"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-stat-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-stat-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "COD",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-xl font-extrabold tracking-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-stat-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Nationwide",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-white/45"
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
                        "id": "jt-hero-stage",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative min-h-[360px] sm:min-h-[500px] lg:col-span-6 lg:min-h-[560px]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hero-orbit",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-white/20 sm:h-[500px] sm:w-[500px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jt-hero-disc",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#E9FF8A,#D4FF3F_55%,#A9D400)] shadow-[0_0_140px_-10px_rgba(212,255,63,0.5)] sm:h-[420px] sm:w-[420px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jt-hero-model",
                            "type": "text",
                            "options": {
                              "text": "VR—07",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute left-1/2 top-[13%] -translate-x-1/2 font-['JetBrains_Mono'] text-xs font-bold tracking-[0.4em] text-[#121212]/60 sm:top-[12%]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-shadow",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute bottom-[22%] left-1/2 h-6 w-[55%] -translate-x-1/2 rounded-[50%] bg-black/45 blur-xl sm:bottom-[23%]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "jt-hero-shoe",
                            "type": "image",
                            "options": {
                              "src": "/templates/juta-hero.svg",
                              "altText": "A bone-white running sneaker with an orange heel and a volt-green side panel",
                              "link": "/tags/new",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-1/2 top-1/2 z-10 w-[108%] max-w-[700px] -translate-x-1/2 -translate-y-[56%] -rotate-[12deg] transition-transform duration-700 ease-out hover:-rotate-[4deg] hover:scale-[1.04] sm:w-[96%]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-badge",
                            "type": "image",
                            "options": {
                              "src": "/templates/juta-badge.svg",
                              "altText": "New drop 07: free size exchange",
                              "link": "/tags/new",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-0 top-0 z-20 h-24 w-24 animate-[spin_18s_linear_infinite] sm:right-4 sm:h-32 sm:w-32"
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
                            "id": "jt-hero-call-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex  left-[2%] top-[22%]"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-call-1-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 rounded-full bg-[#121212]/80 py-1.5 pl-1.5 pr-3.5 ring-1 ring-white/15 backdrop-blur"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-call-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "01",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-white font-['JetBrains_Mono'] text-[10px] font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-call-1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Breathable knit upper",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-call-1-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-white/50 lg:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-hero-call-1-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2.5 w-2.5 rounded-full bg-white ring-4 ring-white/25"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-call-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex  bottom-[30%] left-0 lg:-left-6"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-call-2-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 rounded-full bg-[#121212]/80 py-1.5 pl-1.5 pr-3.5 ring-1 ring-white/15 backdrop-blur"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-call-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "02",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-white font-['JetBrains_Mono'] text-[10px] font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-call-2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "38 mm foam midsole",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-call-2-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-white/50 lg:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-hero-call-2-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2.5 w-2.5 rounded-full bg-white ring-4 ring-white/25"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-call-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute z-20 hidden items-center gap-2 sm:flex flex-row-reverse bottom-[16%] right-[2%]"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-call-3-pill",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2 rounded-full bg-[#121212]/80 py-1.5 pl-1.5 pr-3.5 ring-1 ring-white/15 backdrop-blur"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-call-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "03",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-white font-['JetBrains_Mono'] text-[10px] font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-call-3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Grip rubber outsole",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-call-3-line",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-white/50 lg:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-hero-call-3-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2.5 w-2.5 rounded-full bg-white ring-4 ring-white/25"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-hero-card",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-[20px] bg-white p-2 pr-2 text-[#121212] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] sm:left-auto sm:right-0 sm:translate-x-0"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-card-sw",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EFEDE8]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-card-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShoe",
                                      "size": 24,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#FF5B1F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-card-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col pr-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-hero-card-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Volt Runner 07",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-extrabold tracking-tight whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-hero-card-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৳6,490 · EU 39-46",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63] whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-hero-card-btn",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/new",
                                  "target": "",
                                  "icon": "IconArrowUpRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-[14px] bg-[#121212] transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D4FF3F]"
                                  },
                                  "label": {
                                    "classes": "hidden"
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
                    "id": "jt-hero-sizes",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative z-10 mt-10 flex flex-col items-start gap-4 border-t border-white/10 py-6 lg:flex-row lg:items-center lg:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-hero-sizes-k",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hero-sizes-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRuler2",
                              "size": 18,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#D4FF3F]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-sizes-kt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-hero-sizes-k1",
                                "type": "text",
                                "options": {
                                  "text": "Shop by size",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-base font-extrabold tracking-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-hero-sizes-k2",
                                "type": "text",
                                "options": {
                                  "text": "EU sizing · every pair in stock",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-white/45"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-hero-sizes-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-hero-size-38",
                            "type": "button",
                            "options": {
                              "text": "38",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-38",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-39",
                            "type": "button",
                            "options": {
                              "text": "39",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-39",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-40",
                            "type": "button",
                            "options": {
                              "text": "40",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-40",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-41",
                            "type": "button",
                            "options": {
                              "text": "41",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-41",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-42",
                            "type": "button",
                            "options": {
                              "text": "42",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-42",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#D4FF3F] px-3 transition-transform hover:-translate-y-0.5 after:absolute after:-top-2 after:right-[-6px] after:rounded-full after:bg-[#FF5B1F] after:px-1.5 after:py-px after:text-[8px] after:font-bold after:text-white after:content-['HOT']"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-43",
                            "type": "button",
                            "options": {
                              "text": "43",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-43",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-44",
                            "type": "button",
                            "options": {
                              "text": "44",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-44",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-45",
                            "type": "button",
                            "options": {
                              "text": "45",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-45",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-hero-size-46",
                            "type": "button",
                            "options": {
                              "text": "46",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/eu-46",
                              "target": "",
                              "icon": "",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-3 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-white hover:ring-white group"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-['JetBrains_Mono'] text-sm font-bold text-white group-hover:text-[#121212]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-hero-sizes-guide",
                        "type": "button",
                        "options": {
                          "text": "Size guide",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#size-guide",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-1.5 flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#D4FF3F] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-white underline decoration-white/30 underline-offset-4 whitespace-nowrap"
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
            "id": "jt-ticker",
            "type": "container",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden bg-[#121212] pb-6"
              }
            },
            "children": [
              {
                "id": "jt-ticker-band",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-[110%] -translate-x-[4%] -rotate-[1.5deg] items-center gap-6 overflow-hidden whitespace-nowrap bg-[#FF5B1F] py-4"
                  }
                },
                "children": [
                  {
                    "id": "jt-tick-1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-1-t",
                        "type": "text",
                        "options": {
                          "text": "Genuine pairs only",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-1-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-2",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-2-t",
                        "type": "text",
                        "options": {
                          "text": "Free size exchange",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-2-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-3",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-3-t",
                        "type": "text",
                        "options": {
                          "text": "Cash on delivery",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-3-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-4",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-4-t",
                        "type": "text",
                        "options": {
                          "text": "New drops every Friday",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-4-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-5",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-5-t",
                        "type": "text",
                        "options": {
                          "text": "Delivery in 24-72 hours",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-5-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-6",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-6-t",
                        "type": "text",
                        "options": {
                          "text": "Genuine pairs only",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-6-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-7",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-7-t",
                        "type": "text",
                        "options": {
                          "text": "Free size exchange",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-7-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-8",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-8-t",
                        "type": "text",
                        "options": {
                          "text": "Cash on delivery",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-8-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-9",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-9-t",
                        "type": "text",
                        "options": {
                          "text": "New drops every Friday",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-9-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-tick-10",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex shrink-0 items-center gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tick-10-t",
                        "type": "text",
                        "options": {
                          "text": "Delivery in 24-72 hours",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-xl font-extrabold uppercase tracking-[-0.01em] text-[#121212] sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "jt-tick-10-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconAsterisk",
                          "size": 20,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex text-[#121212]"
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
            "id": "jt-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cats-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cats-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-cats-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by category",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Find your fit.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-cats-sub",
                            "type": "text",
                            "options": {
                              "text": "Six ways in. Every pair is genuine, boxed and ready to ship today.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-cats-all",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-cats-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid auto-rows-[190px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:auto-rows-[220px]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-cat-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-[#121212] text-white col-span-2 row-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-1-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-1-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#D4FF3F] text-[#121212]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-1-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShoe",
                              "size": 160,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-6 -right-4"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Sneakers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/sneakers",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Everyday, court and lifestyle",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-cat-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-[#FF5B1F] text-[#121212] "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-2-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-2-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#121212] text-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-2-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRun",
                              "size": 76,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-3 -right-3"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Running",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/running",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Road, trail and gym",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-cat-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-white text-[#121212] ring-1 ring-[#E3DFD7] "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-3-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-3-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#121212] text-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-3-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBriefcase",
                              "size": 76,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-3 -right-3"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Formal",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/formal",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Oxfords, loafers, derbies",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-cat-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-[#D4FF3F] text-[#121212] "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-4-n",
                                "type": "text",
                                "options": {
                                  "text": "04",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-4-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#121212] text-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-4-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBeach",
                              "size": 76,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-3 -right-3"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Sandals & slides",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/sandals",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Easy on, easy off",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-cat-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-[#DCD6CB] text-[#121212] "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-5-n",
                                "type": "text",
                                "options": {
                                  "text": "05",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-5-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#121212] text-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-5-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-5-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMountain",
                              "size": 76,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-3 -right-3"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Boots",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/boots",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-5-p",
                                "type": "text",
                                "options": {
                                  "text": "Chelsea, hiking, work",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-cat-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 bg-white text-[#121212] ring-1 ring-[#E3DFD7] col-span-2 sm:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-6-n",
                                "type": "text",
                                "options": {
                                  "text": "06",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold opacity-60"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-6-arrow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 bg-[#121212] text-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat-6-arrow-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconArrowUpRight",
                                      "size": 18,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-cat-6-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoodKid",
                              "size": 76,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute flex opacity-[0.13] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 -bottom-3 -right-3"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Kids",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/kids",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-heading font-extrabold tracking-[-0.03em] text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat-6-p",
                                "type": "text",
                                "options": {
                                  "text": "Velcro to first laces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm opacity-70"
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
            "id": "jt-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-new-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-new-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-new-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-new-label",
                                "type": "text",
                                "options": {
                                  "text": "Just landed",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-new-h",
                            "type": "heading",
                            "options": {
                              "text": "New drops",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-new-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh pairs every Friday. Once a size is gone, it is gone.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-new-all",
                        "type": "button",
                        "options": {
                          "text": "All new",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-new-slider",
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
                                  "new"
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
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#121212] hover:!bg-[#FF5B1F] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-new-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-new-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-new-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-new-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-new-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#D4FF3F] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#121212]"
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
                                "id": "jt-new-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-new-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                                  },
                                  {
                                    "id": "jt-new-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-base font-bold leading-snug tracking-[-0.01em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-new-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6E6A63]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#121212]"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-new-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-new-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6A63]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-new-slider-c-add",
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
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#121212] pl-3 pr-4 text-white transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wide"
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
            "id": "jt-feel",
            "type": "section",
            "options": {
              "anchor": "cushion"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#121212] py-16 text-white lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-feel-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-feel-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-feel-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-feel-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#D4FF3F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by feel",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-h",
                            "type": "heading",
                            "options": {
                              "text": "How soft do you like it?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-white"
                              }
                            }
                          },
                          {
                            "id": "jt-feel-sub",
                            "type": "text",
                            "options": {
                              "text": "Every pair is rated on our six-bar cushion scale, so you know how it rides before it ships.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-feel-all",
                        "type": "button",
                        "options": {
                          "text": "Size guide",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#size-guide",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-white/25 hover:bg-white hover:ring-white"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D4FF3F] group-hover:text-[#121212]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-white group-hover:text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-feel-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-feel-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-8 overflow-hidden rounded-[28px] bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-[#D4FF3F]/60 sm:p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-feel-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBolt",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D4FF3F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-1-lv",
                                "type": "text",
                                "options": {
                                  "text": "2/6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold text-white/50"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-1-bars",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-24 items-end gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-1-bar-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[17%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-1-bar-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[33%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-1-bar-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[50%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-1-bar-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[67%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-1-bar-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[83%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-1-bar-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[100%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Firm & fast",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/firm",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D4FF3F] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Low to the ground. Court, racing and gym.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/55"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-feel-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-8 overflow-hidden rounded-[28px] bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-[#D4FF3F]/60 sm:p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-feel-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconScale",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D4FF3F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-2-lv",
                                "type": "text",
                                "options": {
                                  "text": "4/6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold text-white/50"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-2-bars",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-24 items-end gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-2-bar-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[17%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-2-bar-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[33%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-2-bar-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[50%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-2-bar-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[67%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-2-bar-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[83%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-2-bar-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-white/10 h-[100%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Balanced",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/balanced",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D4FF3F] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-2-p",
                                "type": "text",
                                "options": {
                                  "text": "The everyday sweet spot. Walk all day.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/55"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-feel-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-8 overflow-hidden rounded-[28px] bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-[#D4FF3F]/60 sm:p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-feel-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCloud",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D4FF3F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-3-lv",
                                "type": "text",
                                "options": {
                                  "text": "6/6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-xs font-bold text-white/50"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-3-bars",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-24 items-end gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-3-bar-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[17%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-3-bar-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[33%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-3-bar-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[50%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-3-bar-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[67%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-3-bar-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[83%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-feel-3-bar-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex-1 rounded-t-[6px] transition-all duration-500 bg-[#D4FF3F] group-hover:bg-[#FF5B1F] h-[100%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "jt-feel-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-feel-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Max cushion",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/plush",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D4FF3F] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-2xl font-extrabold tracking-[-0.03em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-feel-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Deep foam for long runs and long shifts.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/55"
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
            "id": "jt-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-best-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most picked",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-best-h",
                            "type": "heading",
                            "options": {
                              "text": "On everyone’s feet.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The pairs our customers reorder in a second colour.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-best-all",
                        "type": "button",
                        "options": {
                          "text": "All bestsellers",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/bestseller",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#D4FF3F] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#121212]"
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
                                "id": "jt-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                                  },
                                  {
                                    "id": "jt-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-base font-bold leading-snug tracking-[-0.01em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6E6A63]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#121212]"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6A63]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-best-grid-c-add",
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
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#121212] pl-3 pr-4 text-white transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wide"
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
            "id": "jt-size",
            "type": "section",
            "options": {
              "anchor": "size-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-size-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-size-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-size-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-8 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-size-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-size-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex max-w-2xl flex-col gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-head-k",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-k-sq",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "jt-size-label",
                                        "type": "text",
                                        "options": {
                                          "text": "Size guide",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "jt-size-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Get it right the first time.",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "Three minutes, a pen and a ruler. And if it still doesn’t fit, the exchange is on us.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-size-steps",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 -mt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-size-step-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-[22px] bg-[#F3F1EC] p-4 sm:p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-step-1-n",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#121212] text-[#D4FF3F]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-1-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconFileDescription",
                                          "size": 22,
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
                                    "id": "jt-size-step-1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-1-h",
                                        "type": "text",
                                        "options": {
                                          "text": "1. Stand on paper",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-lg font-extrabold tracking-tight text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-size-step-1-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Heel against a wall, in the socks you’ll wear. Evening is best: feet swell a little through the day.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-[#6E6A63]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-step-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-[22px] bg-[#F3F1EC] p-4 sm:p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-step-2-n",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#121212] text-[#D4FF3F]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-2-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconPencil",
                                          "size": 22,
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
                                    "id": "jt-size-step-2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-2-h",
                                        "type": "text",
                                        "options": {
                                          "text": "2. Mark heel and toe",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-lg font-extrabold tracking-tight text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-size-step-2-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Draw a line at the tip of your longest toe. Do both feet and use the longer one.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-[#6E6A63]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-step-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-[22px] bg-[#F3F1EC] p-4 sm:p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-step-3-n",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#121212] text-[#D4FF3F]"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-3-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconRuler2",
                                          "size": 22,
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
                                    "id": "jt-size-step-3-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-size-step-3-h",
                                        "type": "text",
                                        "options": {
                                          "text": "3. Measure in cm",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-lg font-extrabold tracking-tight text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-size-step-3-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Measure wall to line, add 0.5 cm for room, then match it to the chart.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm leading-relaxed text-[#6E6A63]"
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
                        "id": "jt-size-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-size-table",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "overflow-hidden rounded-[28px] ring-1 ring-[#E3DFD7]"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-size-row-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 bg-[#121212]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-th-1",
                                    "type": "text",
                                    "options": {
                                      "text": "EU",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[10px] font-bold uppercase tracking-wider text-[#D4FF3F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-th-2",
                                    "type": "text",
                                    "options": {
                                      "text": "UK",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[10px] font-bold uppercase tracking-wider text-white/70"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-th-3",
                                    "type": "text",
                                    "options": {
                                      "text": "US Men",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[10px] font-bold uppercase tracking-wider text-white/70"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-th-4",
                                    "type": "text",
                                    "options": {
                                      "text": "US Women",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[10px] font-bold uppercase tracking-wider text-white/70"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-th-5",
                                    "type": "text",
                                    "options": {
                                      "text": "Foot cm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[10px] font-bold uppercase tracking-wider text-white/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r1-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "38",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r1-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r1-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "5.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r1-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "7",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r1-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "24.0",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-[#F3F1EC]/60"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r2-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "39",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r2-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "6",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r2-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "6.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r2-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "8",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r2-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "24.6",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r3-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "40",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r3-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "6.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r3-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "7",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r3-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "8.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r3-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "25.3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-[#F3F1EC]/60"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r4-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "41",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r4-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "7.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r4-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "8",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r4-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "9.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r4-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "26.0",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-[#D4FF3F]/40"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r5-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "42",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r5-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "8",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r5-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "8.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r5-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "10",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r5-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "26.6",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-[#F3F1EC]/60"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r6-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "43",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r6-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "9",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r6-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "9.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r6-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "11",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r6-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "27.3",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-7",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-white"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r7-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "44",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r7-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "9.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r7-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "10",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r7-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "11.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r7-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "28.0",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-row-8",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "grid grid-cols-5 border-t border-[#E3DFD7] transition-colors hover:bg-[#FFEDE4] bg-[#F3F1EC]/60"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-r8-c1",
                                    "type": "text",
                                    "options": {
                                      "text": "45",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r8-c2",
                                    "type": "text",
                                    "options": {
                                      "text": "10.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r8-c3",
                                    "type": "text",
                                    "options": {
                                      "text": "11",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r8-c4",
                                    "type": "text",
                                    "options": {
                                      "text": "12.5",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-r8-c5",
                                    "type": "text",
                                    "options": {
                                      "text": "28.6",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] px-3 py-3 text-center text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-size-note",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex flex-wrap items-center justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-size-note-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-size-note-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconInfoCircle",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-size-note-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Brands vary: every product page lists its own chart.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-size-note-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop EU 42",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/eu-42",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#121212] px-5 py-2.5 transition-colors hover:bg-[#FF5B1F] flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D4FF3F] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
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
            "id": "jt-men",
            "type": "section",
            "options": {
              "anchor": "men"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-men-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-men-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-men-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-men-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-men-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-men-label",
                                "type": "text",
                                "options": {
                                  "text": "For him",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-men-h",
                            "type": "heading",
                            "options": {
                              "text": "Men’s shoes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-men-sub",
                            "type": "text",
                            "options": {
                              "text": "Sneakers, runners, loafers and boots in EU 39 to 46.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-men-all",
                        "type": "button",
                        "options": {
                          "text": "Shop men",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/men",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-men-slider",
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
                                  "men"
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
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#121212] hover:!bg-[#FF5B1F] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-men-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-men-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-men-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-men-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-men-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#D4FF3F] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#121212]"
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
                                "id": "jt-men-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-men-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                                  },
                                  {
                                    "id": "jt-men-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-base font-bold leading-snug tracking-[-0.01em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-men-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6E6A63]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#121212]"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-men-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-men-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6A63]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-men-slider-c-add",
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
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#121212] pl-3 pr-4 text-white transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wide"
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
            "id": "jt-women",
            "type": "section",
            "options": {
              "anchor": "women"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-women-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-women-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-women-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-women-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-women-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-women-label",
                                "type": "text",
                                "options": {
                                  "text": "For her",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-women-h",
                            "type": "heading",
                            "options": {
                              "text": "Women’s shoes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-women-sub",
                            "type": "text",
                            "options": {
                              "text": "Platform sneakers, flats, sandals and runners in EU 36 to 42.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-women-all",
                        "type": "button",
                        "options": {
                          "text": "Shop women",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/women",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-women-slider",
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
                                  "women"
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
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#121212] hover:!bg-[#FF5B1F] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-women-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-women-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-women-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-women-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-women-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#D4FF3F] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#121212]"
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
                                "id": "jt-women-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-women-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                                  },
                                  {
                                    "id": "jt-women-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-base font-bold leading-snug tracking-[-0.01em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-women-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6E6A63]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#121212]"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-women-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-women-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6A63]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-women-slider-c-add",
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
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#121212] pl-3 pr-4 text-white transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wide"
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
            "id": "jt-promise",
            "type": "section",
            "options": {
              "anchor": "promise"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FF5B1F] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-promise-word",
                "type": "text",
                "options": {
                  "text": "STEP",
                  "tag": "span"
                },
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-6 -top-10 select-none font-heading text-[180px] font-extrabold leading-none tracking-[-0.07em] text-[#121212]/[0.08] lg:text-[300px]"
                  }
                }
              },
              {
                "id": "jt-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-promise-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-promise-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-promise-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-promise-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#121212]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-promise-label",
                                "type": "text",
                                "options": {
                                  "text": "The Juta promise",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#121212]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-promise-h",
                            "type": "heading",
                            "options": {
                              "text": "Buy shoes online without the guesswork.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-promise-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-promise-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4 rounded-[24px] bg-[#121212] p-6 text-white transition-transform duration-300 hover:-translate-y-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-promise-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconShieldCheck",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full bg-[#D4FF3F] text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Genuine, or your money back",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-extrabold leading-tight tracking-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Bought from brands and official distributors only. Every pair ships in its original box.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/60"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-promise-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4 rounded-[24px] bg-[#121212] p-6 text-white transition-transform duration-300 hover:-translate-y-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-promise-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowsExchange",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full bg-[#D4FF3F] text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "Free size exchange",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-extrabold leading-tight tracking-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Unworn and boxed? Swap the size within 7 days. We pick up, you pay nothing.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/60"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-promise-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4 rounded-[24px] bg-[#121212] p-6 text-white transition-transform duration-300 hover:-translate-y-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-promise-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCash",
                                  "size": 24,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full bg-[#D4FF3F] text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Check, then pay",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-extrabold leading-tight tracking-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "jt-promise-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Cash on delivery nationwide. Open the box, try the fit, then pay the rider.",
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
          },
          {
            "id": "jt-sale",
            "type": "section",
            "options": {
              "anchor": "sale"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#121212] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-sale-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-sale-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-sale-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-sale-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-sale-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-sale-label",
                                "type": "text",
                                "options": {
                                  "text": "Last sizes",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-sale-h",
                            "type": "heading",
                            "options": {
                              "text": "On sale now",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-white"
                              }
                            }
                          },
                          {
                            "id": "jt-sale-sub",
                            "type": "text",
                            "options": {
                              "text": "Final pairs from past drops at up to 40% off. No restocks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-sale-all",
                        "type": "button",
                        "options": {
                          "text": "All sale",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/sale",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-white/25 hover:bg-white hover:ring-white"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D4FF3F] group-hover:text-[#121212]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-white group-hover:text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-sale-slider",
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
                                  "sale"
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
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#D4FF3F] hover:!bg-white [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#121212] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-sale-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-2.5 ring-1 ring-[#E3DFD7] transition-all duration-300 hover:-translate-y-1 hover:ring-[#121212] hover:shadow-[0_26px_40px_-30px_rgba(18,18,18,0.7)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-sale-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-sale-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-sale-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-sale-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#D4FF3F] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase text-[#121212]"
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
                                "id": "jt-sale-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-sale-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                                  },
                                  {
                                    "id": "jt-sale-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-heading text-base font-bold leading-snug tracking-[-0.01em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-sale-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#6E6A63]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#121212]"
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "jt-sale-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-sale-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-extrabold text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6A63]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-sale-slider-c-add",
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
                                    "classes": "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#121212] pl-3 pr-4 text-white transition-colors hover:bg-[#FF5B1F]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wide"
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
            "id": "jt-brands",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-brands-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-brands-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-brands-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-brands-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-brands-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-brands-label",
                                "type": "text",
                                "options": {
                                  "text": "Genuine brands",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-brands-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands we carry.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-brands-sub",
                            "type": "text",
                            "options": {
                              "text": "Bought from official distributors only: never grey-market or first-copy stock.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-brands-all",
                        "type": "button",
                        "options": {
                          "text": "All brands",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-br-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-[#F3F1EC] p-4 text-center transition-all hover:-translate-y-1 hover:bg-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-br-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-2 rounded-[24px] bg-[#F3F1EC] p-4 text-center transition-all hover:-translate-y-1 hover:bg-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-br-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-[18px] bg-white"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "jt-br-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-extrabold tracking-tight text-[#121212] transition-colors group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "jt-br-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pairs",
                              "singularSuffix": " pair",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63] group-hover:text-[#D4FF3F]"
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
            "id": "jt-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-reviews-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Reviews",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Worn, then reviewed.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Real fit notes from customers, sizes included.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jt-reviews-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-rev-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-6 ring-1 ring-[#E3DFD7] transition-transform duration-300 hover:-translate-y-1 sm:p-7 "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-rev-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-1-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#121212]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-1-star-1",
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
                                    "id": "jt-rev-1-star-2",
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
                                    "id": "jt-rev-1-star-3",
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
                                    "id": "jt-rev-1-star-4",
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
                                    "id": "jt-rev-1-star-5",
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
                                "id": "jt-rev-1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered 42, felt snug, swapped for 43 the next day. Rider picked up the old pair. No questions, no charge.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-bold leading-snug tracking-[-0.01em] text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-rev-1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E3DFD7] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-1-av",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5B1F] font-heading text-sm font-extrabold text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-rev-1-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Tanvir A.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-rev-1-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Volt Runner 07 · EU 42",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                        "id": "jt-rev-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-6 ring-1 ring-[#E3DFD7] transition-transform duration-300 hover:-translate-y-1 sm:p-7 md:-translate-y-4 md:hover:-translate-y-5"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-rev-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-2-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#121212]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-2-star-1",
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
                                    "id": "jt-rev-2-star-2",
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
                                    "id": "jt-rev-2-star-3",
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
                                    "id": "jt-rev-2-star-4",
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
                                    "id": "jt-rev-2-star-5",
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
                                "id": "jt-rev-2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Wore them through a full day at a wedding and my feet were fine. Box, tags and the receipt were all original.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-bold leading-snug tracking-[-0.01em] text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-rev-2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E3DFD7] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-2-av",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#D4FF3F] font-heading text-sm font-extrabold text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-rev-2-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Nusrat J.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-rev-2-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Cloudstep Slip-on · EU 38",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
                        "id": "jt-rev-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-6 ring-1 ring-[#E3DFD7] transition-transform duration-300 hover:-translate-y-1 sm:p-7 "
                          }
                        },
                        "children": [
                          {
                            "id": "jt-rev-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-3-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#121212]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-3-star-1",
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
                                    "id": "jt-rev-3-star-2",
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
                                    "id": "jt-rev-3-star-3",
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
                                    "id": "jt-rev-3-star-4",
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
                                    "id": "jt-rev-3-star-5",
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
                                "id": "jt-rev-3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Checked the stitching and sole before paying the rider. Genuine pair, half the price of the mall.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-lg font-bold leading-snug tracking-[-0.01em] text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-rev-3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-dashed border-[#E3DFD7] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-rev-3-av",
                                "type": "text",
                                "options": {
                                  "text": "RH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#DCD6CB] font-heading text-sm font-extrabold text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-rev-3-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-rev-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Rafiul H.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-rev-3-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Trail Grip GTX · EU 44",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-[#6E6A63]"
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
            "id": "jt-journal",
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
                "id": "jt-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-journal-k-sq",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "jt-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "The journal",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Fit notes & shoe care.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All posts",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 ring-1 transition-colors flex-row-reverse ring-[#121212]/20 hover:bg-[#121212] hover:ring-[#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5B1F] group-hover:text-[#D4FF3F]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#121212] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-journal-grid",
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
                        "id": "jt-journal-loop",
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
                            "id": "jt-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[28px] bg-[#EFEDE8]"
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
                            "id": "jt-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider text-[#FF5B1F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read",
                                  "readMoreIcon": "IconArrowUpRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6E6A63]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex flex-row-reverse items-center justify-end gap-1.5 font-body text-sm font-bold text-[#121212]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#FF5B1F] transition-transform group-hover/rm:rotate-45"
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
            "id": "jt-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "jt-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "jt-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-faq-k-sq",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2 w-2 rotate-45 bg-[#FF5B1F]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "jt-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E6A63]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[52px] text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Sizing, exchanges, payment and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base leading-relaxed text-[#6E6A63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "jt-faq-help",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3 rounded-[24px] bg-[#121212] p-6 text-white -mt-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-help-k",
                            "type": "text",
                            "options": {
                              "text": "Still unsure about a size?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-lg font-extrabold tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "jt-faq-help-p",
                            "type": "text",
                            "options": {
                              "text": "Send us your foot length on WhatsApp and we’ll tell you the size for any pair.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-white/60"
                              }
                            }
                          },
                          {
                            "id": "jt-faq-help-btn",
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
                                "classes": "group mt-1 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#D4FF3F] px-5 py-2.5 transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#121212]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#121212] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jt-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Are the shoes genuine?",
                          "classes": ""
                        },
                        {
                          "label": "What if the size is wrong?",
                          "classes": ""
                        },
                        {
                          "label": "Which size should I order?",
                          "classes": ""
                        },
                        {
                          "label": "Can I check the pair before paying?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 font-heading text-base font-extrabold tracking-tight text-[#121212] ring-1 ring-[#E3DFD7] transition-colors hover:ring-[#121212]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#121212] !text-white !ring-[#121212]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#FF5B1F]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy from brands and their official distributors only, and every pair ships in its original box with tags. Never first-copy or grey-market stock.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Unworn pairs in the original box can be exchanged for another size within 7 days, free. Request it from your account and a rider picks up the old pair when the new one arrives.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "We list EU sizes. Measure your foot in cm (see the size guide above) and check the chart on the product page: brands differ by up to half a size.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. With cash on delivery you can open the box and check the pair in front of the rider before you pay.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka within 24 hours for orders before 3 pm, 48-72 hours nationwide. Delivery is free over ৳2,500.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6E6A63]"
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
            "id": "jt-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "All products",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop Everything",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every pair in stock, newest drops first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-shop-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
                        "id": "jt-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-shop-promise",
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
                "id": "jt-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% Authentic",
                          "description": "Genuine brands, checked",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay at your door",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h Dhaka · 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Returns",
                          "description": "Easy, free exchanges",
                          "icon": "IconArrowBackUp",
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
                        "classes": "font-body text-base font-bold text-[#121212]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEDE8] text-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-shop-promise-fb-ic",
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
                        "id": "jt-shop-promise-fb-t",
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
                        "id": "jt-shop-promise-fb-d",
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
            "id": "jt-pd",
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
                "id": "jt-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-pd-grid",
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
                        "id": "jt-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-pd-gallery",
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
                                "classes": "rounded-xl border-4 border-white bg-gradient-to-tr from-[#EFEDE8] via-white to-[#FFFFFF] p-4 shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-xl bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#121212]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#121212]!"
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
                                "classes": "overflow-hidden rounded-lg border-2 border-transparent hover:border-[#FF5B1F]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-pd-cats",
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
                                "classes": "rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212] hover:bg-[#121212] hover:text-white"
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
                            "id": "jt-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading uppercase text-3xl font-bold leading-tight text-[#121212] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "jt-pd-rate",
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
                                "classes": "font-body font-bold text-[#121212]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "jt-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-price",
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
                                    "classes": "font-heading uppercase text-3xl font-black text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading uppercase text-3xl font-black text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading uppercase text-3xl font-black text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#FF5B1F] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "jt-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E6A63]"
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
                            "id": "jt-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#121212]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-lg border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#EFEDE8]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#121212] !bg-[#EFEDE8] !text-[#2A2A2A]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "jt-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#FF5B1F]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#121212]"
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
                            "id": "jt-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-lg border-2 border-gray-200 bg-white px-3 text-[#121212]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F3F1EC]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F3F1EC]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-8 text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#E2470F]"
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
                            "id": "jt-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Cash on delivery",
                                  "description": "Pay at your door",
                                  "icon": "IconCash",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day returns",
                                  "description": "Free exchanges",
                                  "icon": "IconArrowBackUp",
                                  "iconSize": ""
                                },
                                {
                                  "title": "100% authentic",
                                  "description": "Verified sellers",
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
                                "classes": "font-body text-base font-bold text-[#121212]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEDE8] text-[#121212]"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-perks-ic",
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
                                "id": "jt-pd-perks-t",
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
                                "id": "jt-pd-perks-d",
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
                            "id": "jt-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-sku",
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
                                    "classes": "font-semibold text-[#121212]"
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
                                "id": "jt-pd-brands",
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
                                    "classes": "font-semibold text-[#121212]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF5B1F]"
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
                                "id": "jt-pd-tags",
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
                                    "classes": "font-semibold text-[#121212]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF5B1F]"
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
            "id": "jt-pd-tabs-sec",
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
                "id": "jt-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Size & Fit",
                              "icon": "IconRuler2"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3F1EC] px-5 py-2.5 font-body text-sm font-semibold text-[#121212] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#121212] !text-white shadow-md"
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
                            "id": "jt-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading uppercase [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#121212] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading uppercase [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#121212] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#FF5B1F] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4FF3F] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconRuler2",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Sizes are EU. Every product lists foot length in cm for each size",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Measure your foot in the evening, heel to longest toe, and add 0.5 cm",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Between sizes or wide feet? Go half a size up, especially for running shoes",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wrong size? Unworn pairs in the original box are exchanged free within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#121212]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-ship-list",
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
                                      "text": "Outside Dhaka: 48-72 hours nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery on orders over ৳2,500",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unworn, in the original box? Return or exchange within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#121212]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "jt-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F3F1EC] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F3F1EC] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "jt-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFEDE4]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "jt-pd-reviews-rate",
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
                                        "id": "jt-pd-reviews-co",
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
                                    "id": "jt-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was the fit and comfort?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thanks! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-lg border border-gray-200 bg-[#F3F1EC] px-4 py-3 text-sm text-[#121212] placeholder:text-gray-400 focus:border-[#121212] focus:outline-none focus:ring-2 focus:ring-[#121212]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#FF5B1F] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E2470F] disabled:opacity-50"
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
            "id": "jt-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16"
              }
            },
            "children": [
              {
                "id": "jt-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Pairs well with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFEDE4] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF5B1F]"
                          }
                        }
                      },
                      {
                        "id": "jt-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading uppercase text-3xl font-bold text-[#121212]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-pd-related-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-pd-related-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-pd-rel-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
            "id": "jt-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Browse",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFEDE4] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF5B1F]"
                      }
                    }
                  },
                  {
                    "id": "jt-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Sneakers, running, formal, sandals, boots and kids. Pick a category to start.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-lg bg-[#EFEDE8] transition-transform"
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
                            "id": "jt-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                              }
                            }
                          },
                          {
                            "id": "jt-cat-grid-count",
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
                        "id": "jt-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFEDE4] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF5B1F]"
                      }
                    }
                  },
                  {
                    "id": "jt-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jt-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#121212] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-cat1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
                        "id": "jt-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find your pair",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D4FF3F] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pairs by size, cushioning and deal: EU sizes, new drops, sale and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF5B1F]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF5B1F]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#121212] group-hover:text-[#FF5B1F]"
                              }
                            }
                          },
                          {
                            "id": "jt-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F3F1EC] px-2 py-0.5 text-[10px] font-bold text-[#6E6A63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "jt-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D4FF3F] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jt-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#121212] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-tag1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
                        "id": "jt-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Genuine pairs",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every brand we stock, A to Z, bought from official distributors.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F3F1EC] p-3"
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
                            "id": "jt-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#121212] group-hover:text-[#FF5B1F]"
                              }
                            }
                          },
                          {
                            "id": "jt-brand-grid-count",
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
                        "id": "jt-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "jt-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#121212] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-brand1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
                        "id": "jt-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Juta Journal",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Sizing help, shoe care, drop notes and how to style a pair.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFFFFF]"
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
                            "id": "jt-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
                                  }
                                }
                              },
                              {
                                "id": "jt-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#FF5B1F]"
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
                        "id": "jt-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#FF5B1F] hover:text-[#FF5B1F]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF5B1F] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "jt-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F1EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jt-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-post-k",
                    "type": "text",
                    "options": {
                      "text": "The Juta Journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-3xl font-bold leading-tight text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6E6A63]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-post-author",
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
                            "classes": "font-body font-bold text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "jt-post-dot",
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
                        "id": "jt-post-date",
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
                    "id": "jt-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-xl border-4 border-white shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
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
            "id": "jt-post-body",
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
                "id": "jt-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading uppercase [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#121212] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading uppercase [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#121212] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#FF5B1F] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4FF3F] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16"
              }
            },
            "children": [
              {
                "id": "jt-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading uppercase text-3xl font-bold text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F3F1EC] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F3F1EC] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFEDE4]"
                              }
                            }
                          },
                          {
                            "id": "jt-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "jt-post-cmt-co",
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
                        "id": "jt-post-cmt-form",
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
                            "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#121212]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-lg border border-gray-200 bg-[#F3F1EC] px-4 py-3 text-sm text-[#121212] placeholder:text-gray-400 focus:border-[#121212] focus:outline-none focus:ring-2 focus:ring-[#121212]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#FF5B1F] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E2470F] disabled:opacity-50"
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
            "id": "jt-post-more",
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
                "id": "jt-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Journal",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading uppercase text-3xl font-bold text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-post-more-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-post-more-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFFFFF]"
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
                            "id": "jt-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "jt-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#121212] transition-colors group-hover:text-[#FF5B1F]"
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
            "id": "jt-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3DFD7] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "jt-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "jt-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEDE8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-4xl font-bold text-[#121212] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "jt-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage size exchanges and keep your addresses up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "jt-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-12"
              }
            },
            "children": [
              {
                "id": "jt-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#121212] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#D4FF3F]"
                      },
                      "welcome-name": {
                        "classes": "font-heading uppercase text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-lg bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#FF5B1F]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#FF5B1F]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#FF5B1F]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "jt-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "jt-acc-3",
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
                                "id": "jt-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E2470F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "jt-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E2470F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "jt-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "jt-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3F1EC] px-5 py-2.5 font-body text-sm font-semibold text-[#121212] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#121212] !text-white shadow-md"
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
                                "id": "jt-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF5B1F]/10 text-[#FF5B1F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "jt-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#FF5B1F] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jt-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF5B1F]/10 text-[#FF5B1F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jt-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#FF5B1F]/40 hover:bg-[#FF5B1F]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF5B1F]/10 text-[#FF5B1F]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "jt-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF5B1F]/10 text-[#FF5B1F]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF5B1F] focus:outline-none focus:ring-2 focus:ring-[#FF5B1F]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E2470F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B1F]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "jt-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F1EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jt-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEDE8] text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "jt-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFEDE4] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#FF5B1F]"
                          }
                        }
                      },
                      {
                        "id": "jt-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You for Your Order!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading uppercase text-3xl font-bold text-[#121212] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "jt-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your order is confirmed. A confirmation is on its way, and you can track every item from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6E6A63] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "jt-ty-steps",
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
                              "text": "Sellers pack your items and hand them to our courier",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-xl bg-[#F3F1EC] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#FF5B1F]"
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
                        "id": "jt-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E2470F] w-full sm:w-auto"
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
                            "id": "jt-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#121212] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#121212] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#121212] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#121212] whitespace-nowrap group-hover:text-white"
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
            "id": "jt-ty-promise",
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
                "id": "jt-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% Authentic",
                          "description": "Genuine brands, checked",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay at your door",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h Dhaka · 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Returns",
                          "description": "Easy, free exchanges",
                          "icon": "IconArrowBackUp",
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
                        "classes": "font-body text-base font-bold text-[#121212]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEDE8] text-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-ty-promise-fb-ic",
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
                        "id": "jt-ty-promise-fb-t",
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
                        "id": "jt-ty-promise-fb-d",
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
            "id": "jt-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F1EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "jt-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-8xl font-black text-[#FF5B1F] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "jt-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-lg bg-[#FFFFFF] text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "jt-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading uppercase text-3xl font-bold text-[#121212] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "jt-nf-p",
                    "type": "text",
                    "options": {
                      "text": "This pair may have sold out, or the link is broken. Head back home or keep shopping.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6E6A63] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "jt-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5B1F] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E2470F] w-full sm:w-auto"
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
                        "id": "jt-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop Everything",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#121212] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#121212] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#121212] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#121212] whitespace-nowrap group-hover:text-white"
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
            "id": "jt-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F1EC] py-16"
              }
            },
            "children": [
              {
                "id": "jt-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "jt-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#D4FF3F] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "jt-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading uppercase text-3xl font-bold text-[#121212] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "jt-nf-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "jt-nf-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E3DFD7] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "jt-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#EFEDE8]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#FF5B1F] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "jt-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "jt-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                    "id": "jt-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#121212] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "jt-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
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
                            "id": "jt-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "jt-nf-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6E6A63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#FF5B1F]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF5B1F]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF5B1F] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "jt-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 17
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#121212] text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
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
