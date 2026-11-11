/**
 * Template: Ghori Fine Watches.
 *
 * A refined, modern watch store (ghori is Bangla for "watch"): authentic
 * automatic, quartz and smart watches, pair watches and gifts. Like the other
 * complete templates here it carries all sixteen page types - Header,
 * Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive, Blog
 * Single, Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to gh-, palette remapped, copy
 * rewritten); the Header is rearranged and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * Symmetric like a dial: a top bar with the message and a compact search,
 * then the menu split in two (gh-hdr-menu: Men, Women, Pair watches |
 * gh-hdr-menu-r: Smartwatches, Brands, Gifts) on either side of the centred
 * GHORI wordmark with a glowing lume dot, account and cart at the far right,
 * and a minute-track strip (long ticks every 50px, short ones every 10px)
 * along the bottom. Below lg the menus hide; the drawer (from the left) holds
 * the full menu.
 *
 * THE HERO
 *
 * A watch (public/templates/ghori-dial.svg, drawn without hands) with CSS
 * hands laid over it: hour and minute hands parked at 10:10, with lume
 * strips, and a lume-green seconds hand that ticks once a second
 * (`animate-[spin_60s_steps(60)_infinite]`). The hands pivot at the image's
 * centre, so a replacement image must keep the dial centred.
 *
 * DESIGN
 *
 *   champagne  #C9A96E  primary: buttons, kickers, rings    #A88A52 dark  #E2CC9B light  #F3ECDD tint
 *   midnight   #0B1220  header, hero, dark bands, text      navy #13213A / #1F3358
 *   lume       #9BF2C4  accent: seconds hand, glow, details
 *   steel #8D96A5 / #D9DCE1   paper #F5F4F0   muted #5E6676   line #E3E0D8
 *
 * Fonts (template meta): Prata (headings; one weight, so they carry
 * font-normal), Albert Sans (body), Michroma via `font-['Michroma']` for
 * small technical caps (labels, menu, buttons, specs).
 *
 * Product cards: the watch on a soft spotlight gradient (contained and
 * multiplied so white-backed photos blend), a midnight discount pill, the
 * name, one Michroma excerpt line (use the excerpt for the specs, e.g.
 * "Automatic · 40 mm · 100 m"), the price in Prata and a round add button.
 *
 * HOME
 *
 *   Watch hero - shop by movement (#movements) - for him / her / pair
 *   watches (#shop-for) - new arrivals - brands (#brands) - categories as
 *   steel-bezel dials (#categories) - bestsellers (#bestsellers) - case size
 *   guide with rings to scale (#size-guide) - men's watches - promise band
 *   (#promise) - women's watches - gifting (#gifts) - smartwatches - reviews -
 *   the watch journal (#journal) - FAQ (#faq) - club CTA (#club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: men, women, pair-watches, smartwatches. Tag slugs:
 *     bestseller, gift, sale, and the movement tags automatic, quartz,
 *     chronograph, smartwatch, solar, diver. Brands are product_brand terms.
 *   - The wrist sizes in the case guide are a general rule of thumb.
 *   - Contact details, promo code TIMELESS, the warranty length, engraving,
 *     free strap sizing, lifetime battery changes, "9,000+ customers", the
 *     hero reference card (GH-01) and the six reviews are sample copy.
 */

var template = [
  {
    "name": "Ghori Fine Watches",
    "description": "Refined-modern watch store in midnight, champagne and lume green; Prata serif, Albert Sans and Michroma technical caps: a symmetric header with the menu split around a centred logo over a dial minute-track, a hero watch whose CSS hands sit at 10:10 with a ticking seconds hand, shop by movement, him / her / pair collections, new arrivals, brands, categories as steel-bezel dials, bestsellers, a to-scale case size guide, men and women rows, a promise band, gifting, smartwatches, reviews, the watch journal, FAQ and a club CTA. All 16 pages.",
    "thumbnail": "/templates/ghori.svg",
    "meta": {
      "fonts": [
        {
          "family": "Prata",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Prata&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Albert Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Michroma",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Michroma&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Prata",
        "body": "Albert Sans"
      },
      "colors": {
        "primary": "#C9A96E",
        "secondary": "#0B1220",
        "accent": "#9BF2C4",
        "background": "#F5F4F0",
        "foreground": "#0B1220",
        "muted": "#5E6676"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "gh-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#0B1220]"
              }
            },
            "children": [
              {
                "id": "gh-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-1 border-b border-white/10 bg-[#070C16] px-4 py-2 md:justify-between lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-2 text-center text-xs text-white/60"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Authentic watches with official warranty · Free insured delivery · Code",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "gh-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "TIMELESS",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-[#C9A96E]/50 px-2 py-0.5 font-['Michroma'] text-[9px] tracking-[0.2em] text-[#E2CC9B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-hdr-search",
                    "type": "quickSearch",
                    "options": {
                      "placeholder": "Search watches, brands...",
                      "iconPosition": "",
                      "icon": "IconSearch"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden w-64 rounded-full border border-white/15 bg-white/5 py-0.5 pl-1 pr-3 transition-all focus-within:border-[#C9A96E] md:block"
                      },
                      "input-wrapper": {
                        "classes": "flex items-center gap-2"
                      },
                      "input-search": {
                        "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-body text-xs text-white placeholder:text-white/40 focus:outline-none focus-visible:!outline-none"
                      },
                      "icon": {
                        "classes": "flex h-6 w-6 items-center justify-center text-[#E2CC9B]"
                      },
                      "filter-select": {
                        "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15"
                      },
                      "result-title": {
                        "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C9A96E]"
                      },
                      "result-price": {
                        "classes": "font-semibold text-[#C9A96E]"
                      },
                      "add-button": {
                        "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C9A96E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A88A52]"
                      }
                    }
                  }
                ]
              },
              {
                "id": "gh-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid h-[84px] grid-cols-[1fr_auto_1fr] items-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-hdr-left",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center justify-start gap-2 lg:justify-end lg:pr-10"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F5F4F0] p-2 text-[#0B1220] transition-colors hover:bg-[#C9A96E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "gh-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Ghori",
                                          "src": "https://placehold.co/200x64?text=Ghori",
                                          "altText": "Ghori Fine Watches",
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
                                            "classes": "font-heading text-[28px] uppercase leading-none tracking-[0.3em] text-[#0B1220]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gh-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Fine watches · Dhaka",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-1 block font-['Michroma'] text-[7px] uppercase leading-none tracking-[0.35em] text-[#5E6676]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "gh-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search watches...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F5F4F0] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#0B1220] focus-within:ring-2 focus-within:ring-[#0B1220]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#0B1220] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5E6676]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C9A96E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#C9A96E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C9A96E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A88A52]"
                                  }
                                }
                              },
                              {
                                "id": "gh-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-[#E3E0D8] py-3.5 font-['Michroma'] text-[11px] uppercase tracking-[0.22em] text-[#0B1220] transition-colors hover:text-[#A88A52]"
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
                                    "id": "gh-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New arrivals",
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
                                    "id": "gh-hdr-m-menu-i2",
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
                                    "id": "gh-hdr-m-menu-i3",
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
                                    "id": "gh-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Pair watches",
                                      "url": "/categories/pair-watches"
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
                                    "id": "gh-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Smartwatches",
                                      "url": "/categories/smartwatches"
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
                                    "id": "gh-hdr-m-menu-i6",
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
                                    "id": "gh-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Gifts",
                                      "url": "/tags/gift"
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
                                    "id": "gh-hdr-m-menu-i8",
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
                                        "classes": "!text-[#A88A52]"
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
                            "id": "gh-hdr-menu",
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
                                "classes": "flex items-center gap-7 xl:gap-9"
                              },
                              "menu-item": {
                                "classes": ""
                              },
                              "sub-menu": {
                                "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                              },
                              "menu-link": {
                                "classes": "relative flex items-center whitespace-nowrap font-['Michroma'] text-[10px] uppercase tracking-[0.24em] text-white/75 transition-colors hover:text-[#E2CC9B] after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#9BF2C4] after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-100"
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
                                "id": "gh-hdr-menu-i1",
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
                                "id": "gh-hdr-menu-i2",
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
                                "id": "gh-hdr-menu-i3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Pair watches",
                                  "url": "/categories/pair-watches"
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
                        "id": "gh-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 flex-col items-center justify-self-center"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mb-1.5 flex h-2 w-2 rounded-full bg-[#9BF2C4] shadow-[0_0_10px_rgba(155,242,196,0.8)]"
                              }
                            }
                          },
                          {
                            "id": "gh-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Ghori",
                                  "src": "https://placehold.co/200x64?text=Ghori",
                                  "altText": "Ghori Fine Watches",
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
                                    "classes": "font-heading text-[28px] uppercase leading-none tracking-[0.3em] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Fine watches · Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 block font-['Michroma'] text-[7px] uppercase leading-none tracking-[0.35em] text-white/45"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gh-hdr-right",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 lg:pl-10"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-hdr-menu-r",
                            "type": "menu",
                            "options": {
                              "showFrom": "lg",
                              "label": "Main menu (right)"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "menu": {
                                "classes": "flex items-center gap-7 xl:gap-9"
                              },
                              "menu-item": {
                                "classes": ""
                              },
                              "sub-menu": {
                                "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                              },
                              "menu-link": {
                                "classes": "relative flex items-center whitespace-nowrap font-['Michroma'] text-[10px] uppercase tracking-[0.24em] text-white/75 transition-colors hover:text-[#E2CC9B] after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#9BF2C4] after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-100"
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
                                "id": "gh-hdr-menu-r-i1",
                                "type": "menuItem",
                                "options": {
                                  "label": "Smartwatches",
                                  "url": "/categories/smartwatches"
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
                                "id": "gh-hdr-menu-r-i2",
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
                                "id": "gh-hdr-menu-r-i3",
                                "type": "menuItem",
                                "options": {
                                  "label": "Gifts",
                                  "url": "/tags/gift"
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
                            "id": "gh-hdr-actions",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "ml-auto flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hdr-account",
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
                                    "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#C9A96E] hover:text-[#E2CC9B]"
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
                                "id": "gh-hdr-cart",
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
                                    "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#C9A96E] text-[#0B1220] transition-colors hover:bg-[#E2CC9B]"
                                  },
                                  "trigger-badge": {
                                    "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#C9A96E] px-1 text-[10px] font-bold text-white"
                                  },
                                  "header": {
                                    "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F5F4F0] px-5 py-4"
                                  },
                                  "title": {
                                    "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#0B1220]"
                                  },
                                  "title-icon": {
                                    "classes": "text-[#C9A96E]"
                                  },
                                  "count-badge": {
                                    "classes": "rounded-full bg-[#C9A96E] px-2 py-0.5 text-xs font-bold text-white"
                                  },
                                  "trigger": {
                                    "classes": "flex items-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#A88A52]"
                                  },
                                  "close-button": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/30"
                                  },
                                  "coupon-code-input": {
                                    "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15"
                                  },
                                  "coupon-apply": {
                                    "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#C9A96E] px-4 py-2 text-sm font-medium text-[#C9A96E] transition-colors hover:bg-[#C9A96E] hover:text-white disabled:opacity-60"
                                  },
                                  "checkout-button": {
                                    "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A88A52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                "id": "gh-hdr-track",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "h-2.5 w-full bg-[repeating-linear-gradient(90deg,rgba(201,169,110,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(201,169,110,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
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
            "id": "gh-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0B1220] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "gh-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "gh-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-[#C9A96E] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Ghori Circle",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#0B1220]/70"
                              }
                            }
                          },
                          {
                            "id": "gh-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Free battery changes, for life",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-3xl text-[#0B1220] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "gh-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for lifetime battery service, early access to new arrivals and a yearly check-up.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-[#0B1220]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-ftr-news-btn",
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
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#0B1220] px-7 py-3.5 transition-colors hover:bg-[#1F3358]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#E2CC9B]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "gh-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "gh-ftr-grid",
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
                        "id": "gh-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden"
                                  }
                                }
                              },
                              {
                                "id": "gh-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Ghori",
                                      "src": "https://placehold.co/200x64?text=Ghori",
                                      "altText": "Ghori Fine Watches",
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
                                        "classes": "font-heading text-[28px] uppercase leading-none tracking-[0.3em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Authentic automatic, quartz and smart watches from official distributors, sold with full warranty, sized to your wrist and delivered insured across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "gh-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C9A96E]"
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
                                "id": "gh-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C9A96E]"
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
                                "id": "gh-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C9A96E]"
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
                                "id": "gh-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C9A96E]"
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
                        "id": "gh-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Men’s Watches",
                                  "icon": "",
                                  "slug": "/categories/men"
                                },
                                {
                                  "text": "Women’s Watches",
                                  "icon": "",
                                  "slug": "/categories/women"
                                },
                                {
                                  "text": "Pair Watches",
                                  "icon": "",
                                  "slug": "/categories/pair-watches"
                                },
                                {
                                  "text": "Smartwatches",
                                  "icon": "",
                                  "slug": "/categories/smartwatches"
                                },
                                {
                                  "text": "Brands",
                                  "icon": "",
                                  "slug": "/brands"
                                },
                                {
                                  "text": "Gifts",
                                  "icon": "",
                                  "slug": "/tags/gift"
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
                                "classes": "transition-colors hover:text-[#E2CC9B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E2CC9B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ftr-ll-care",
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
                                  "text": "Case Size Guide",
                                  "icon": "",
                                  "slug": "/#size-guide"
                                },
                                {
                                  "text": "Warranty & Service",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Watch Journal",
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
                                "classes": "transition-colors hover:text-[#E2CC9B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E2CC9B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ftr-contact-h",
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
                            "id": "gh-ftr-address",
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
                                "value": "Showroom: every day, 11am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E2CC9B]"
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
                                "classes": "shrink-0 text-[#C9A96E]"
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
                "id": "gh-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "gh-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Ghori Fine Watches. All rights reserved. Time, well kept.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "gh-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards · EMI",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em]"
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
            "id": "gh-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0B1220] bg-[radial-gradient(circle_at_75%_45%,rgba(201,169,110,0.16),transparent_55%)] pb-16 pt-12 lg:pb-24 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "gh-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-7 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-hero-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hero-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-10 bg-[#C9A96E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-hero-k",
                                "type": "text",
                                "options": {
                                  "text": "Est. 2026 · Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Time, well kept.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-6xl leading-[0.95] text-white sm:text-7xl xl:text-8xl"
                              }
                            }
                          },
                          {
                            "id": "gh-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Automatic, quartz and smart watches from the brands you trust, every one authenticated, under official warranty and sized to your wrist for free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-white/65"
                              }
                            }
                          },
                          {
                            "id": "gh-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Explore watches",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#C9A96E] px-7 py-3.5 transition-colors hover:bg-[#E2CC9B]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#0B1220] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "gh-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Gift a watch",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/gift",
                                  "target": "",
                                  "icon": "IconGift",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 transition-colors hover:border-white hover:bg-white/5"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
                                  },
                                  "label": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-hero-specs",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hero-spec-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-hero-spec-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCertificate",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#9BF2C4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-hero-spec-1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "100% authentic",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gh-hero-spec-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-hero-spec-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldCheck",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#9BF2C4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-hero-spec-2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Official warranty",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gh-hero-spec-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-hero-spec-3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRuler2",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#9BF2C4]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-hero-spec-3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Free strap sizing",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/70"
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
                        "id": "gh-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-dial",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto aspect-square w-full max-w-[540px]"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-dial-glow",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-[18%] rounded-full bg-[#9BF2C4]/10 blur-3xl"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-dial-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/ghori-dial.svg",
                                  "altText": "A steel automatic watch with a midnight-blue dial and champagne indices",
                                  "link": "/shop",
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
                                    "classes": "h-full w-full"
                                  }
                                }
                              },
                              {
                                "id": "gh-hand-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rounded-full h-[19%] w-[2.6%] rotate-[305deg] bg-[linear-gradient(#E2CC9B,#C9A96E)] shadow-[0_4px_8px_rgba(0,0,0,0.45)] after:absolute after:inset-x-[30%] after:bottom-[22%] after:top-[14%] after:rounded-full after:bg-[#9BF2C4] after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-hand-m",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rounded-full h-[28%] w-[1.9%] rotate-[60deg] bg-[linear-gradient(#E2CC9B,#C9A96E)] shadow-[0_4px_8px_rgba(0,0,0,0.45)] after:absolute after:inset-x-[28%] after:bottom-[18%] after:top-[8%] after:rounded-full after:bg-[#9BF2C4] after:content-['']"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-hand-s",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rounded-full h-[31%] w-[0.6%] animate-[spin_60s_steps(60)_infinite] bg-[#9BF2C4] shadow-[0_0_8px_rgba(155,242,196,0.6)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-hand-cap",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 h-[4%] w-[4%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E2CC9B] bg-[#0B1220]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gh-hero-card",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-2 left-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:left-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-hero-card-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 animate-pulse rounded-full bg-[#9BF2C4]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-hero-card-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-hero-card-a",
                                    "type": "text",
                                    "options": {
                                      "text": "Ref. GH-01 · Automatic",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-hero-card-b",
                                    "type": "text",
                                    "options": {
                                      "text": "40 mm · Sapphire · 100 m",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-white/55"
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
            "id": "gh-moves",
            "type": "section",
            "options": {
              "anchor": "movements"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-8"
              }
            },
            "children": [
              {
                "id": "gh-moves-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5 lg:flex-row lg:justify-between"
                  }
                },
                "children": [
                  {
                    "id": "gh-moves-k",
                    "type": "text",
                    "options": {
                      "text": "Shop by movement",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#0B1220]"
                      }
                    }
                  },
                  {
                    "id": "gh-moves-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap justify-center gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-move-1",
                        "type": "button",
                        "options": {
                          "text": "Automatic",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/automatic",
                          "target": "",
                          "icon": "IconSettings",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "gh-move-2",
                        "type": "button",
                        "options": {
                          "text": "Quartz",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/quartz",
                          "target": "",
                          "icon": "IconBattery2",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "gh-move-3",
                        "type": "button",
                        "options": {
                          "text": "Chronograph",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/chronograph",
                          "target": "",
                          "icon": "IconStopwatch",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "gh-move-4",
                        "type": "button",
                        "options": {
                          "text": "Smart",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/smartwatch",
                          "target": "",
                          "icon": "IconDeviceWatch",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "gh-move-5",
                        "type": "button",
                        "options": {
                          "text": "Solar",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/solar",
                          "target": "",
                          "icon": "IconSun",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "gh-move-6",
                        "type": "button",
                        "options": {
                          "text": "Diver",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/diver",
                          "target": "",
                          "icon": "IconDroplet",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E3E0D8] bg-white px-4 py-2.5 transition-colors hover:border-[#0B1220] hover:bg-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A88A52] group-hover:text-[#9BF2C4]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#0B1220] whitespace-nowrap group-hover:text-white"
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
            "id": "gh-for",
            "type": "section",
            "options": {
              "anchor": "shop-for"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-for-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-for-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-for-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-for-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-for-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-for-label",
                                "type": "text",
                                "options": {
                                  "text": "Collections",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-for-h",
                            "type": "heading",
                            "options": {
                              "text": "Find the one",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gh-for-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-5 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-for-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[340px] flex-col justify-end gap-4 overflow-hidden rounded-[28px] bg-[#0B1220] p-8 transition-transform duration-500 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-for-1-ring",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border-[18px] border-white/[0.06] transition-transform duration-700 group-hover:rotate-45 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(255,255,255,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-1-ring2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-2 top-[3.25rem] h-40 w-40 rounded-full border border-white/10"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-1-k",
                            "type": "text",
                            "options": {
                              "text": "01",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                              }
                            }
                          },
                          {
                            "id": "gh-for-1-h",
                            "type": "heading",
                            "options": {
                              "text": "For him",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-heading font-normal tracking-tight text-4xl text-white"
                              }
                            }
                          },
                          {
                            "id": "gh-for-1-p",
                            "type": "text",
                            "options": {
                              "text": "Divers, dress watches and chronographs.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative max-w-xs text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "gh-for-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/men",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#C9A96E] w-fit px-6 py-3 transition-colors hover:bg-[#E2CC9B]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B1220]"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-for-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[340px] flex-col justify-end gap-4 overflow-hidden rounded-[28px] bg-[#F3ECDD] p-8 transition-transform duration-500 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-for-2-ring",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border-[18px] border-[#C9A96E]/20 transition-transform duration-700 group-hover:rotate-45 bg-[repeating-linear-gradient(90deg,rgba(168,138,82,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(168,138,82,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-2-ring2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-2 top-[3.25rem] h-40 w-40 rounded-full border border-[#C9A96E]/30"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-2-k",
                            "type": "text",
                            "options": {
                              "text": "02",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                              }
                            }
                          },
                          {
                            "id": "gh-for-2-h",
                            "type": "heading",
                            "options": {
                              "text": "For her",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-heading font-normal tracking-tight text-4xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-for-2-p",
                            "type": "text",
                            "options": {
                              "text": "Slim cases, bracelets and mother-of-pearl dials.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative max-w-xs text-sm text-[#5E6676]"
                              }
                            }
                          },
                          {
                            "id": "gh-for-2-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/women",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#0B1220] w-fit px-6 py-3 transition-colors hover:bg-[#1F3358]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-for-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[340px] flex-col justify-end gap-4 overflow-hidden rounded-[28px] bg-[#13213A] p-8 transition-transform duration-500 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-for-3-ring",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border-[18px] border-white/[0.06] transition-transform duration-700 group-hover:rotate-45 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(255,255,255,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-3-ring2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-2 top-[3.25rem] h-40 w-40 rounded-full border border-white/10"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "gh-for-3-k",
                            "type": "text",
                            "options": {
                              "text": "03",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                              }
                            }
                          },
                          {
                            "id": "gh-for-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Pair watches",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-heading font-normal tracking-tight text-4xl text-white"
                              }
                            }
                          },
                          {
                            "id": "gh-for-3-p",
                            "type": "text",
                            "options": {
                              "text": "Matching his & hers sets, gift-boxed.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative max-w-xs text-sm text-white/60"
                              }
                            }
                          },
                          {
                            "id": "gh-for-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pair-watches",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#C9A96E] w-fit px-6 py-3 transition-colors hover:bg-[#E2CC9B]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B1220]"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
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
            "id": "gh-row-new-arrivals",
            "type": "section",
            "options": {
              "anchor": "new-arrivals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-row-new-arrivals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-row-new-arrivals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-new-arrivals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-new-arrivals-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-new-arrivals-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-row-new-arrivals-label",
                                "type": "text",
                                "options": {
                                  "text": "Just in",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-row-new-arrivals-h",
                            "type": "heading",
                            "options": {
                              "text": "New arrivals",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-row-new-arrivals-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh from the brands, this month.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-row-new-arrivals-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-row-new-arrivals-slider",
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!pb-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-new-arrivals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-new-arrivals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-new-arrivals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-new-arrivals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-new-arrivals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-row-new-arrivals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-new-arrivals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-row-new-arrivals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-new-arrivals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-row-new-arrivals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-new-arrivals-slider-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-row-new-arrivals-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#0B1220] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "gh-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-brandsec-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-brandsec-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#C9A96E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-brandsec-label",
                                "type": "text",
                                "options": {
                                  "text": "The maisons",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands we carry",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-white"
                              }
                            }
                          },
                          {
                            "id": "gh-brandsec-sub",
                            "type": "text",
                            "options": {
                              "text": "Bought from official distributors, sold with their warranty.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-brandsec-all",
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
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/25 px-5 py-2.5 transition-colors hover:border-white hover:bg-white/5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-white"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-brands-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-white/40"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-white/40"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-brands-slider-thumb",
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
                                "classes": "max-h-9 w-auto max-w-full object-contain brightness-0 invert opacity-70 transition-opacity group-hover:opacity-100"
                              }
                            }
                          },
                          {
                            "id": "gh-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.2em] text-white"
                              }
                            }
                          },
                          {
                            "id": "gh-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " watches",
                              "singularSuffix": " watch",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs text-white/45"
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
            "id": "gh-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cats-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-cats-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-cats-label",
                                "type": "text",
                                "options": {
                                  "text": "By style",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Dress, dive or everyday",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-cats-all",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-cats-grid",
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
                        "classes": "grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-4 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-cats-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#FFFFFF,#F5F4F0)] shadow-[inset_0_0_0_1px_#8D96A5,0_18px_30px_-20px_rgba(11,18,32,0.5)] outline outline-1 outline-offset-4 outline-[#E3E0D8] transition-all duration-500 group-hover:outline-[#C9A96E]"
                              },
                              "link": {
                                "classes": "block h-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "gh-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-xl leading-tight text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                              }
                            }
                          },
                          {
                            "id": "gh-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " watches",
                              "singularSuffix": " watch",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
            "id": "gh-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-best-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most wanted",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Bestsellers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The watches our customers keep coming back for.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-best-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-best-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-size",
            "type": "section",
            "options": {
              "anchor": "size-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#0B1220] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-size-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-size-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-size-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-size-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-size-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#C9A96E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-size-label",
                                "type": "text",
                                "options": {
                                  "text": "Fit guide",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-size-h",
                            "type": "heading",
                            "options": {
                              "text": "Which case size suits you?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-white"
                              }
                            }
                          },
                          {
                            "id": "gh-size-sub",
                            "type": "text",
                            "options": {
                              "text": "Wrap a string around your wrist bone and measure it. The rings below are drawn to scale.",
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
                    "id": "gh-size-rings",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-case-34",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-case-34-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[150px] items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-34-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[116px] w-[116px] items-center justify-center rounded-full border-[5px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#1F3358,#0B1220)] shadow-[0_16px_30px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#C9A96E] "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-case-34-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "34 mm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[11px] tracking-[0.15em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-case-34-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-34-n",
                                "type": "text",
                                "options": {
                                  "text": "Petite",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "gh-case-34-w",
                                "type": "text",
                                "options": {
                                  "text": "Under 15 cm wrist",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs text-white/50"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gh-case-38",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-case-38-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[150px] items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-38-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[129px] w-[129px] items-center justify-center rounded-full border-[5px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#1F3358,#0B1220)] shadow-[0_16px_30px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#C9A96E] "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-case-38-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "38 mm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[11px] tracking-[0.15em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-case-38-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-38-n",
                                "type": "text",
                                "options": {
                                  "text": "Classic",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "gh-case-38-w",
                                "type": "text",
                                "options": {
                                  "text": "15–16.5 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs text-white/50"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gh-case-40",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-case-40-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[150px] items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-40-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[136px] w-[136px] items-center justify-center rounded-full border-[5px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#1F3358,#0B1220)] shadow-[0_16px_30px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#C9A96E] ring-2 ring-[#9BF2C4] ring-offset-4 ring-offset-[#0B1220]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-case-40-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "40 mm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[11px] tracking-[0.15em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-case-40-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-40-n",
                                "type": "text",
                                "options": {
                                  "text": "Everyday",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "gh-case-40-w",
                                "type": "text",
                                "options": {
                                  "text": "16–17.5 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs text-white/50"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gh-case-42",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-case-42-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[150px] items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-42-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[143px] w-[143px] items-center justify-center rounded-full border-[5px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#1F3358,#0B1220)] shadow-[0_16px_30px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#C9A96E] "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-case-42-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "42 mm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[11px] tracking-[0.15em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-case-42-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-42-n",
                                "type": "text",
                                "options": {
                                  "text": "Bold",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "gh-case-42-w",
                                "type": "text",
                                "options": {
                                  "text": "17–18.5 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs text-white/50"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gh-case-44",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-case-44-o",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-[150px] items-end justify-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-44-ring",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-[150px] w-[150px] items-center justify-center rounded-full border-[5px] border-[#D9DCE1] bg-[radial-gradient(circle_at_50%_40%,#1F3358,#0B1220)] shadow-[0_16px_30px_-16px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#C9A96E] "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-case-44-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "44 mm",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[11px] tracking-[0.15em] text-[#E2CC9B]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gh-case-44-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center gap-0.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-case-44-n",
                                "type": "text",
                                "options": {
                                  "text": "Statement",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "gh-case-44-w",
                                "type": "text",
                                "options": {
                                  "text": "Over 18 cm",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs text-white/50"
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
                    "id": "gh-size-foot",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-12 flex flex-col items-center gap-5 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-size-note",
                        "type": "text",
                        "options": {
                          "text": "Lug-to-lug length matters too: it should not overhang your wrist. Every product page lists case diameter, thickness and lug-to-lug.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-2xl text-sm text-white/55"
                          }
                        }
                      },
                      {
                        "id": "gh-size-btn",
                        "type": "button",
                        "options": {
                          "text": "Ask a watch expert",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#faq",
                          "target": "",
                          "icon": "IconMessageCircle",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 transition-colors hover:border-white hover:bg-white/5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
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
            "id": "gh-row-men",
            "type": "section",
            "options": {
              "anchor": "men"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-row-men-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-row-men-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-men-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-men-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-men-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-row-men-label",
                                "type": "text",
                                "options": {
                                  "text": "For him",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-row-men-h",
                            "type": "heading",
                            "options": {
                              "text": "Men’s watches",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-row-men-sub",
                            "type": "text",
                            "options": {
                              "text": "Divers, chronographs and dress watches.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-row-men-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/men",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-row-men-slider",
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!pb-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-men-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-men-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-men-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-men-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-men-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-row-men-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-men-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-row-men-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-men-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-row-men-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-men-slider-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-row-men-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-promise",
            "type": "section",
            "options": {
              "anchor": "promise"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#E3E0D8] bg-[#F5F4F0] py-14"
              }
            },
            "children": [
              {
                "id": "gh-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                  }
                },
                "children": [
                  {
                    "id": "gh-promise-1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-promise-1-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCertificate",
                          "size": 24,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-1-h",
                        "type": "heading",
                        "options": {
                          "text": "Authenticity guaranteed",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal tracking-tight text-xl text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-1-p",
                        "type": "text",
                        "options": {
                          "text": "Bought from official distributors, with the brand’s papers.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-[240px] text-sm text-[#5E6676]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-promise-2",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-promise-2-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconShieldCheck",
                          "size": 24,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-2-h",
                        "type": "heading",
                        "options": {
                          "text": "Official warranty",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal tracking-tight text-xl text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-2-p",
                        "type": "text",
                        "options": {
                          "text": "Full manufacturer warranty, honoured in Bangladesh.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-[240px] text-sm text-[#5E6676]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-promise-3",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-promise-3-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconRuler2",
                          "size": 24,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-3-h",
                        "type": "heading",
                        "options": {
                          "text": "Free strap sizing",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal tracking-tight text-xl text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-3-p",
                        "type": "text",
                        "options": {
                          "text": "Bracelets sized to your wrist before they ship.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-[240px] text-sm text-[#5E6676]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-promise-4",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-promise-4-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBattery2",
                          "size": 24,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-4-h",
                        "type": "heading",
                        "options": {
                          "text": "Battery service",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal tracking-tight text-xl text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-promise-4-p",
                        "type": "text",
                        "options": {
                          "text": "Quartz battery changes at our service desk.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-[240px] text-sm text-[#5E6676]"
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
            "id": "gh-row-women",
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
                "id": "gh-row-women-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-row-women-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-women-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-women-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-women-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-row-women-label",
                                "type": "text",
                                "options": {
                                  "text": "For her",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-row-women-h",
                            "type": "heading",
                            "options": {
                              "text": "Women’s watches",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-row-women-sub",
                            "type": "text",
                            "options": {
                              "text": "Slim cases, bracelets and jewel-like dials.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-row-women-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/women",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-row-women-slider",
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!pb-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-women-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-women-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-women-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-women-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-women-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-row-women-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-women-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-row-women-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-women-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-row-women-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-women-slider-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-row-women-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-gift",
            "type": "section",
            "options": {
              "anchor": "gifts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "gh-gift-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-gift-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#F3ECDD] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-gift-ring",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full border-[24px] border-[#C9A96E]/25 bg-[repeating-linear-gradient(90deg,rgba(168,138,82,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(168,138,82,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "gh-gift-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-gift-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-gift-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-gift-k",
                                "type": "text",
                                "options": {
                                  "text": "Gifting",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-gift-h",
                            "type": "heading",
                            "options": {
                              "text": "A gift that counts every second.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] text-[#0B1220] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "gh-gift-p",
                            "type": "text",
                            "options": {
                              "text": "Free gift box, a hand-written card and engraving on the case back for Eid, weddings and anniversaries.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-gift-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-gift-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Shop gifts",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/gift",
                              "target": "",
                              "icon": "IconGift",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#0B1220] px-7 py-3.5 transition-colors hover:bg-[#1F3358]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "gh-gift-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Pair watches",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/pair-watches",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-7 py-3.5 transition-colors hover:border-[#0B1220]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
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
            "id": "gh-row-smart",
            "type": "section",
            "options": {
              "anchor": "smart"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-row-smart-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-row-smart-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-smart-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-smart-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-smart-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-row-smart-label",
                                "type": "text",
                                "options": {
                                  "text": "Connected",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-row-smart-h",
                            "type": "heading",
                            "options": {
                              "text": "Smartwatches",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-row-smart-sub",
                            "type": "text",
                            "options": {
                              "text": "Fitness, calls and notifications on your wrist.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-row-smart-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/smartwatches",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-row-smart-slider",
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
                                  "smartwatches"
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
                            "gap": "0.5rem",
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
                        "classes": "relative [&_.splide__track]:!pb-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-row-smart-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-row-smart-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-smart-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-smart-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-smart-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-row-smart-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-row-smart-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-row-smart-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-row-smart-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-row-smart-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-row-smart-slider-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-row-smart-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-reviews",
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
                "id": "gh-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-reviews-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Kind words",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Worn and trusted",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 9,000+ customers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "gh-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#0B1220]/15 !bg-white !opacity-100 transition-colors hover:!border-[#0B1220] hover:!bg-[#0B1220] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#0B1220] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#0B1220]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#C9A96E]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Papers, warranty card and the box were all there. They even sized the bracelet before shipping. Perfect fit.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "RA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rafiq Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Automatic diver",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
                        "id": "gh-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“The engraving on the case back made him tear up on our anniversary. Beautifully wrapped too.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumaiya Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Gift for my husband",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
                        "id": "gh-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Compared prices across Dhaka for a month. Same official warranty here, and they were the most honest about it.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "KH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Kamrul Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Chronograph",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
                        "id": "gh-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought a his & hers set for my parents’ 30th. The gift box looked like it came from the boutique.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "NC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nabila Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Pair watches",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
                        "id": "gh-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Delivered next day in Dhaka and they set it up with my phone on a quick video call. Great service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "TI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tahmid Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Smartwatch",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
                        "id": "gh-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] border border-[#E3E0D8] bg-[#F5F4F0] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Brought in an old quartz for a battery and new strap. Done in twenty minutes, fair price.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#0B1220]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E3E0D8] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "FK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-[#D9DCE1] bg-[#0B1220] font-['Michroma'] text-[10px] text-[#E2CC9B]"
                                  }
                                }
                              },
                              {
                                "id": "gh-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farhana Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B1220]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Battery service",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.2em] text-[#5E6676]"
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
            "id": "gh-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gh-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "gh-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-journal-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#A88A52]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "The watch journal",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Guides, care & stories",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#0B1220]/15 px-5 py-2.5 transition-colors hover:border-[#0B1220]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#0B1220]"
                          },
                          "label": {
                            "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-journal-grid",
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
                        "id": "gh-journal-loop",
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
                            "id": "gh-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[22px] bg-[#E3E0D8]"
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
                            "id": "gh-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[9px] uppercase tracking-[0.22em] text-[#A88A52]"
                                  }
                                }
                              },
                              {
                                "id": "gh-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl leading-snug text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                  }
                                }
                              },
                              {
                                "id": "gh-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#5E6676]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-2 font-['Michroma'] text-[9px] uppercase tracking-[0.22em] text-[#0B1220]"
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
            "id": "gh-faq",
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
                "id": "gh-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "gh-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "gh-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-faq-tick",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-px w-8 bg-[#A88A52]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "gh-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gh-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] sm:text-5xl text-[#0B1220]"
                                  }
                                }
                              },
                              {
                                "id": "gh-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Authenticity, warranty, sizing and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#5E6676]"
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
                    "id": "gh-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Are your watches original?",
                          "classes": ""
                        },
                        {
                          "label": "How does the warranty work?",
                          "classes": ""
                        },
                        {
                          "label": "Will the bracelet fit my wrist?",
                          "classes": ""
                        },
                        {
                          "label": "Can you engrave a gift?",
                          "classes": ""
                        },
                        {
                          "label": "How is delivery handled?",
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
                        "classes": "flex flex-col divide-y divide-[#E3E0D8] border-y border-[#E3E0D8]"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 px-1 py-6 font-heading text-xl text-[#0B1220] transition-colors hover:text-[#A88A52]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#A88A52]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#A88A52]"
                      },
                      "accordion-content": {
                        "classes": "px-1 pb-6"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Every watch comes from the brand or its official distributor in Bangladesh, with its box, papers and warranty card.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "You get the full manufacturer warranty, usually 2 years. Bring the watch and its card to us and we handle the claim with the brand.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Tell us your wrist size at checkout (or call us) and we remove links before shipping. Leather straps can be swapped free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, most steel case backs can be engraved with a name or date. Add it in the order note; it adds one day to delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Insured delivery in 24-48 hours inside Dhaka and 2-4 days nationwide, with cash on delivery available.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#5E6676]"
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
            "id": "gh-cta",
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
                "id": "gh-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#0B1220] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-cta-track",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(201,169,110,0.9)_0_2px,transparent_2px_50px),repeating-linear-gradient(90deg,rgba(201,169,110,0.45)_0_1px,transparent_1px_10px)] bg-[length:100%_10px,100%_5px] bg-no-repeat"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "gh-cta-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C9A96E]/15 blur-3xl"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "gh-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cta-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-cta-tick",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-8 bg-[#C9A96E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gh-cta-k",
                                "type": "text",
                                "options": {
                                  "text": "The Ghori Circle",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#C9A96E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Free battery changes, for life.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal tracking-tight text-4xl leading-[1.05] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "gh-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for lifetime battery service on watches bought here, early access to new arrivals and a yearly check-up.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the circle",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#C9A96E] px-7 py-3.5 transition-colors hover:bg-[#E2CC9B]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B1220]"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-[#0B1220] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "gh-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Explore watches",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 transition-colors hover:border-white hover:bg-white/5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.22em] text-white whitespace-nowrap"
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
            "id": "gh-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The collection",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Watches",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every watch in the showroom, newest first. Open one for its movement, case size, water resistance and warranty.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-shop-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
                        "id": "gh-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-shop-promise",
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
                "id": "gh-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% authentic",
                          "description": "From official distributors",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Official warranty",
                          "description": "Honoured in Bangladesh",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Free strap sizing",
                          "description": "Before it ships",
                          "icon": "IconRuler2",
                          "iconSize": ""
                        },
                        {
                          "title": "Insured delivery",
                          "description": "Cash on delivery too",
                          "icon": "IconTruckDelivery",
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
                        "classes": "font-heading text-lg text-[#0B1220]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-shop-promise-fb-ic",
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
                        "id": "gh-shop-promise-fb-t",
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
                        "id": "gh-shop-promise-fb-d",
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
            "id": "gh-pd",
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
                "id": "gh-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-pd-grid",
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
                        "id": "gh-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#F3ECDD] via-white to-[#F5F4F0] p-4 shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B1220]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B1220]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#C9A96E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-pd-cats",
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
                                "classes": "rounded-full bg-[#F3ECDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B1220] hover:bg-[#0B1220] hover:text-white"
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
                            "id": "gh-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#0B1220] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "gh-pd-rate",
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
                                "classes": "font-body font-bold text-[#0B1220]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "gh-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#C9A96E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "gh-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5E6676]"
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
                            "id": "gh-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#0B1220]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#F3ECDD]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#0B1220] !bg-[#F3ECDD] !text-[#13213A]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "gh-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out · ask us to order it in",
                              "inStockText": "In stock · ships insured within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#C9A96E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0B1220]"
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
                            "id": "gh-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#0B1220]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F4F0]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F4F0]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#C9A96E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#A88A52]"
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
                            "id": "gh-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "100% authentic",
                                  "description": "With papers",
                                  "icon": "IconCertificate",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Official warranty",
                                  "description": "Usually 2 years",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free strap sizing",
                                  "description": "Before shipping",
                                  "icon": "IconRuler2",
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
                                "classes": "font-body text-base font-bold text-[#0B1220]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECDD] text-[#0B1220]"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-perks-ic",
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
                                "id": "gh-pd-perks-t",
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
                                "id": "gh-pd-perks-d",
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
                            "id": "gh-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-sku",
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
                                    "classes": "font-semibold text-[#0B1220]"
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
                                "id": "gh-pd-brands",
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
                                    "classes": "font-semibold text-[#0B1220]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C9A96E]"
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
                                "id": "gh-pd-tags",
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
                                    "classes": "font-semibold text-[#0B1220]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C9A96E]"
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
            "id": "gh-pd-tabs-sec",
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
                "id": "gh-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,18,32,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Specifications",
                              "icon": "IconSettings"
                            },
                            {
                              "label": "Delivery & Warranty",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F4F0] px-5 py-2.5 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#0B1220] !text-white shadow-md"
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
                            "id": "gh-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#0B1220] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#0B1220] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#C9A96E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E2CC9B] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconSettings",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Movement, case diameter, thickness and lug-to-lug are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Water resistance: 30 m splash-proof, 100 m swimming, 200 m diving",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Comes with the brand box, papers and warranty card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Tell us your wrist size and we size the bracelet before shipping",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B1220]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Insured delivery inside Dhaka: 24-48 hours",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 2-4 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free gift box; engraving adds one day",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Warranty claims handled at our service desk",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B1220]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gh-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F5F4F0] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F5F4F0] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "gh-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3ECDD]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gh-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#0B1220]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gh-pd-reviews-rate",
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
                                        "id": "gh-pd-reviews-co",
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
                                    "id": "gh-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How does it wear? Tell others about the fit, finishing and accuracy.",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,18,32,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#0B1220]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F4F0] px-4 py-3 text-sm text-[#0B1220] placeholder:text-gray-400 focus:border-[#0B1220] focus:outline-none focus:ring-2 focus:ring-[#0B1220]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C9A96E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A88A52] disabled:opacity-50"
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
            "id": "gh-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16"
              }
            },
            "children": [
              {
                "id": "gh-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "In the same spirit",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3ECDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C9A96E]"
                          }
                        }
                      },
                      {
                        "id": "gh-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-pd-rel-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
            "id": "gh-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "By style",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Men, women, pair watches, smartwatches, divers and dress watches.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#F3ECDD] transition-transform"
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
                            "id": "gh-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#0B1220] transition-colors group-hover:text-[#C9A96E]"
                              }
                            }
                          },
                          {
                            "id": "gh-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " watches",
                              "singularSuffix": " watch",
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
                        "id": "gh-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gh-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " watches",
                      "singularSuffix": " watch"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B1220] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
                        "id": "gh-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group watches by movement, occasion and offer: automatic, quartz, gifts, sale and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C9A96E]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C9A96E]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#0B1220] group-hover:text-[#C9A96E]"
                              }
                            }
                          },
                          {
                            "id": "gh-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F5F4F0] px-2 py-0.5 text-[10px] font-bold text-[#5E6676]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gh-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gh-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " watches",
                      "singularSuffix": " watch"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B1220] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
                        "id": "gh-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The maisons",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every brand we carry, from official distributors.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F5F4F0] p-3"
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
                            "id": "gh-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#0B1220] group-hover:text-[#C9A96E]"
                              }
                            }
                          },
                          {
                            "id": "gh-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " watches",
                              "singularSuffix": " watch",
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
                        "id": "gh-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gh-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " watches",
                      "singularSuffix": " watch"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B1220] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
                        "id": "gh-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The watch journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Guides, Care & Stories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Automatic or quartz, how to size a bracelet, and keeping your watch running for decades.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F4F0]"
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
                            "id": "gh-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B1220]"
                                  }
                                }
                              },
                              {
                                "id": "gh-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#0B1220] transition-colors group-hover:text-[#C9A96E]"
                                  }
                                }
                              },
                              {
                                "id": "gh-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#C9A96E]"
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
                        "id": "gh-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B1220] transition-colors hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C9A96E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gh-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F4F0] via-white to-[#F5F4F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gh-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-post-k",
                    "type": "text",
                    "options": {
                      "text": "The watch journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F3ECDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B1220]"
                      }
                    }
                  },
                  {
                    "id": "gh-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#5E6676]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-post-author",
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
                            "classes": "font-body font-bold text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-post-dot",
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
                        "id": "gh-post-date",
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
                    "id": "gh-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
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
            "id": "gh-post-body",
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
                "id": "gh-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#0B1220] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#0B1220] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#C9A96E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E2CC9B] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16"
              }
            },
            "children": [
              {
                "id": "gh-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F5F4F0] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F5F4F0] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3ECDD]"
                              }
                            }
                          },
                          {
                            "id": "gh-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#0B1220]"
                              }
                            }
                          },
                          {
                            "id": "gh-post-cmt-co",
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
                        "id": "gh-post-cmt-form",
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
                            "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,18,32,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0B1220]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F4F0] px-4 py-3 text-sm text-[#0B1220] placeholder:text-gray-400 focus:border-[#0B1220] focus:outline-none focus:ring-2 focus:ring-[#0B1220]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C9A96E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A88A52] disabled:opacity-50"
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
            "id": "gh-post-more",
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
                "id": "gh-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More from the Journal",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#0B1220] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,18,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F4F0]"
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
                            "id": "gh-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B1220]"
                                  }
                                }
                              },
                              {
                                "id": "gh-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#0B1220] transition-colors group-hover:text-[#C9A96E]"
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
            "id": "gh-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E0D8] bg-[#F5F4F0] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "gh-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gh-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Michroma'] text-[10px] uppercase tracking-[0.28em] text-[#A88A52]"
                      }
                    }
                  },
                  {
                    "id": "gh-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#0B1220] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, warranty claims and service, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gh-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-12"
              }
            },
            "children": [
              {
                "id": "gh-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#0B1220] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E2CC9B]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#C9A96E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#C9A96E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#C9A96E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "gh-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gh-acc-3",
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
                                "id": "gh-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,18,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A88A52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "gh-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,18,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A88A52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "gh-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "gh-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F4F0] px-5 py-2.5 font-body text-sm font-semibold text-[#0B1220] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#0B1220] !text-white shadow-md"
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
                                "id": "gh-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E]/10 text-[#C9A96E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gh-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#C9A96E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gh-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E]/10 text-[#C9A96E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gh-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#C9A96E]/40 hover:bg-[#C9A96E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E]/10 text-[#C9A96E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gh-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A96E]/10 text-[#C9A96E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A96E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A88A52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "gh-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F4F0] via-white to-[#F5F4F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gh-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(11,18,32,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#F3ECDD] text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3ECDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C9A96E]"
                          }
                        }
                      },
                      {
                        "id": "gh-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You for Your Order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#0B1220] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "gh-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your watch is being checked and boxed. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#5E6676] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "gh-ty-steps",
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
                              "text": "Your watch is checked, sized if needed and boxed with its papers",
                              "icon": ""
                            },
                            {
                              "text": "Insured delivery in 24-48 hours inside Dhaka: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[28px] bg-[#F5F4F0] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#C9A96E]"
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
                        "id": "gh-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C9A96E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A88A52] w-full sm:w-auto"
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
                            "id": "gh-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B1220] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B1220] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B1220] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#0B1220] whitespace-nowrap group-hover:text-white"
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
            "id": "gh-ty-promise",
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
                "id": "gh-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% authentic",
                          "description": "From official distributors",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Official warranty",
                          "description": "Honoured in Bangladesh",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Free strap sizing",
                          "description": "Before it ships",
                          "icon": "IconRuler2",
                          "iconSize": ""
                        },
                        {
                          "title": "Insured delivery",
                          "description": "Cash on delivery too",
                          "icon": "IconTruckDelivery",
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
                        "classes": "font-heading text-lg text-[#0B1220]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A96E] text-[#A88A52]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-ty-promise-fb-ic",
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
                        "id": "gh-ty-promise-fb-t",
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
                        "id": "gh-ty-promise-fb-d",
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
            "id": "gh-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F4F0] via-white to-[#F5F4F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gh-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#C9A96E] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F4F0] text-[#0B1220]"
                      }
                    }
                  },
                  {
                    "id": "gh-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Has Stopped Ticking",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#0B1220] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "gh-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the watch may have sold out. Head back home or browse the collection.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5E6676] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "gh-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C9A96E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(201,169,110,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A88A52] w-full sm:w-auto"
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
                        "id": "gh-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Watches",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B1220] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B1220] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0B1220] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#0B1220] whitespace-nowrap group-hover:text-white"
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
            "id": "gh-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F4F0] py-16"
              }
            },
            "children": [
              {
                "id": "gh-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gh-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E2CC9B] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B1220]"
                          }
                        }
                      },
                      {
                        "id": "gh-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#0B1220] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gh-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gh-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#E3E0D8] bg-white transition-all duration-500 hover:border-[#C9A96E] hover:shadow-[0_24px_40px_-28px_rgba(11,18,32,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gh-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#F5F4F0_55%,#E7E4DC_100%)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[3] flex items-center gap-1 rounded-full bg-[#0B1220] px-2.5 py-1 font-['Michroma'] text-[9px] uppercase tracking-widest text-[#E2CC9B]"
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
                                "id": "gh-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-5 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gh-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#C9A96E]"
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
                                    "id": "gh-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#0B1220] transition-colors group-hover:text-[#A88A52]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gh-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Michroma'] text-[9px] uppercase tracking-[0.18em] text-[#5E6676]"
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
                            "id": "gh-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-5 pb-5 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gh-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#5E6676] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl leading-none text-[#0B1220]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C9A96E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C9A96E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gh-nf-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0B1220]/15 text-[#0B1220] transition-colors hover:border-[#0B1220] hover:bg-[#0B1220] hover:text-[#E2CC9B]"
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
