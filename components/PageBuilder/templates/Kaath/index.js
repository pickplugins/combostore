/**
 * Template: Kaath & Co. Furniture.
 *
 * A warm, editorial furniture marketplace: sofas, beds, dining, home office,
 * outdoor, decor and lighting from many makers, delivered and assembled.
 * Like the other complete templates here it carries all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog
 * Archive, Blog Single, Account, Thank you and 404 - so applying it replaces
 * every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to kc-, palette remapped, copy rewritten). The
 * header is reshaped: brand, a wide sand search and the cart on one row; a
 * room-by-room menu (Sale in terracotta) on a second. Home is built fresh
 * from the same block types. Product cards everywhere show the piece
 * contained on sand at 4:3 (cut-out product photos on white blend in via
 * mix-blend-multiply), a short excerpt line (use it for size or material,
 * e.g. "3-seater · linen"), the price, and a round walnut cart button. It is
 * plain data: edit freely.
 *
 * THE HERO
 *
 * "Shop the look": a styled living room (public/templates/kaath-hero.svg,
 * 800x520) with four hotspot pins placed by percentage over the image - sofa
 * 38%/63%, lamp 79%/32%, coffee table 50%/84%, plant 12%/55%. Each pin is a
 * button (pulsing `animate-ping` ring) whose label appears as a tooltip on
 * hover and links to its category. Beside it, a "Shop this look" panel lists
 * the four pieces with prices and a full-look total. If you replace the
 * image with a photo, move the pins (their `left-[..%] top-[..%]` classes)
 * onto the matching pieces and update the names and prices.
 *
 * DESIGN
 *
 *   terracotta #B8542D  primary buttons, kickers, sale, hover   #96421F hover  #F7E9E1 tint
 *   walnut     #2B2420  text, cart buttons, promo bar, finishes band   #463B35 hover  #EFEAE5 tint
 *   sage       #8FA68A  accents on walnut, consultation band   #E9EFE6 tint
 *   sand       #F5F1EB / #EDE6DC  page bands and image wells    line #E6DED4  muted #786C63
 *
 * Fonts (template meta): DM Serif Display (one weight, used at font-normal)
 * for display headings, review quotes and FAQ questions; Hanken Grotesk for
 * body and every small label.
 *
 * HOME
 *
 *   Shop-the-look hero - trust bar (delivery & assembly, warranty, COD,
 *   returns) - room / category tiles, the first one large (#rooms) - weekend
 *   sale (#sale) - bestsellers grid (#bestsellers) - "made your way" with wood
 *   and fabric swatches (#finishes) - sofas and beds rows - stylist
 *   consultation band (#design-help) - dining, office, decor rows - makers
 *   slider (#makers) - reviews - inspiration (#inspiration) - FAQ (#faq) -
 *   terracotta members CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: sofas, beds, dining, office-furniture, outdoor,
 *     decor-lighting, tables, lighting, decor. Tag slugs: sale, bestseller,
 *     made-to-order, living-room-look.
 *   - Hero look items and prices, the ৳56,650 total, swatch names and the
 *     "12 finishes / 30+ fabrics / 21 days" made-to-order claims are sample
 *     copy.
 *   - "Chat on WhatsApp" and "Book a showroom visit" link to # .
 *   - Contact details, promo code HOME2000, the ৳2,000 offer, "200+ makers",
 *     4.8 / 12,000+ and the six reviews are sample copy.
 *   - Free delivery & assembly threshold (৳15,000), delivery times, warranty
 *     and the 7-day return: check they match the shop.
 */

var template = [
  {
    "name": "Kaath & Co. Furniture",
    "description": "Warm, editorial furniture marketplace in terracotta, walnut and sage on sand with DM Serif Display: a shop-the-look hero with hotspot pins on a styled living room and a look panel with prices, room tiles, weekend sale, bestsellers, wood and fabric finish swatches, room-by-room rows, a stylist consultation band, makers, reviews, inspiration, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/kaath.svg",
    "meta": {
      "fonts": [
        {
          "family": "DM Serif Display",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Hanken Grotesk",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "DM Serif Display",
        "body": "Hanken Grotesk"
      },
      "colors": {
        "primary": "#B8542D",
        "secondary": "#2B2420",
        "accent": "#8FA68A",
        "background": "#F5F1EB",
        "foreground": "#2B2420",
        "muted": "#786C63"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "kc-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E6DED4] bg-white/95 backdrop-blur"
              }
            },
            "children": [
              {
                "id": "kc-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#2B2420] px-4 py-2 text-center text-xs font-medium text-white/85"
                  }
                },
                "children": [
                  {
                    "id": "kc-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery & assembly in Dhaka over ৳15,000 · ৳2,000 off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "kc-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "HOME2000",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#8FA68A] px-2.5 py-0.5 font-mono text-xs font-bold text-[#2B2420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Weekend sale",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#sale",
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
                        "classes": "text-xs font-semibold text-[#E9EFE6] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "kc-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-4 lg:h-20"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "K",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-10 text-2xl items-center justify-center rounded-t-full rounded-b-lg bg-[#2B2420] pt-1 font-heading font-normal leading-none text-[#F5F1EB]"
                              }
                            }
                          },
                          {
                            "id": "kc-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Kaath & Co.",
                                  "src": "https://placehold.co/200x64?text=Kaath+%26+Co.",
                                  "altText": "Kaath & Co.",
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
                                    "classes": "font-heading font-normal text-2xl text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Furniture & home",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#786C63]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kc-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search sofas, beds, dining tables...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-4 hidden max-w-2xl flex-1 rounded-full border border-[#E6DED4] bg-[#F5F1EB] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#B8542D] focus-within:bg-white md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B2420] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#786C63]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#B8542D]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#B8542D]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#B8542D] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#96421F]"
                          }
                        }
                      },
                      {
                        "id": "kc-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F1EB] text-[#2B2420] transition-colors hover:bg-[#F7E9E1] hover:text-[#B8542D]"
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
                            "id": "kc-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#463B35]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#B8542D] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F5F1EB] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#2B2420]"
                              },
                              "title-icon": {
                                "classes": "text-[#B8542D]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#B8542D] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#B8542D] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#96421F]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#B8542D] px-4 py-2 text-sm font-medium text-[#B8542D] transition-colors hover:bg-[#B8542D] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#B8542D] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#96421F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "kc-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F5F1EB] text-[#2B2420]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F5F1EB] p-2 text-[#2B2420] transition-colors hover:bg-[#B8542D] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "K",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-9 text-xl items-center justify-center rounded-t-full rounded-b-lg bg-[#2B2420] pt-1 font-heading font-normal leading-none text-[#F5F1EB]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kc-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Kaath & Co.",
                                          "src": "https://placehold.co/200x64?text=Kaath+%26+Co.",
                                          "altText": "Kaath & Co.",
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
                                            "classes": "font-heading font-normal text-2xl text-[#2B2420]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kc-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Furniture & home",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#2B2420]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "kc-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search furniture...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F5F1EB] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#2B2420] focus-within:ring-2 focus-within:ring-[#2B2420]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B2420] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#786C63]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#B8542D]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#B8542D]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#B8542D] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#96421F]"
                                  }
                                }
                              },
                              {
                                "id": "kc-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#2B2420] transition-colors hover:text-[#B8542D]"
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
                                    "id": "kc-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Living Room",
                                      "url": "/categories/sofas"
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
                                    "id": "kc-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bedroom",
                                      "url": "/categories/beds"
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
                                    "id": "kc-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Dining",
                                      "url": "/categories/dining"
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
                                    "id": "kc-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Home Office",
                                      "url": "/categories/office-furniture"
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
                                    "id": "kc-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Outdoor",
                                      "url": "/categories/outdoor"
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
                                    "id": "kc-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Decor & Lighting",
                                      "url": "/categories/decor-lighting"
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
                                    "id": "kc-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Made to Order",
                                      "url": "/tags/made-to-order"
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
                                    "id": "kc-hdr-m-menu-i8",
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
                    "id": "kc-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#E6DED4] lg:block"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-hdr-menu",
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
                            "classes": "flex h-12 items-center gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-sm font-medium text-[#2B2420] transition-colors hover:text-[#B8542D]"
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
                            "id": "kc-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Living Room",
                              "url": "/categories/sofas"
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
                            "id": "kc-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Bedroom",
                              "url": "/categories/beds"
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
                            "id": "kc-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Dining",
                              "url": "/categories/dining"
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
                            "id": "kc-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Home Office",
                              "url": "/categories/office-furniture"
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
                            "id": "kc-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Outdoor",
                              "url": "/categories/outdoor"
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
                            "id": "kc-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Decor & Lighting",
                              "url": "/categories/decor-lighting"
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
                            "id": "kc-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Made to Order",
                              "url": "/tags/made-to-order"
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
                            "id": "kc-hdr-menu-i8",
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
                                "classes": "font-semibold text-[#B8542D]"
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
            "id": "kc-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2B2420] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "kc-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "kc-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-[#B8542D] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Members save more",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75"
                              }
                            }
                          },
                          {
                            "id": "kc-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "৳2,000 off your first order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "kc-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Free account, early sale access and saved room wishlists.",
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
                        "id": "kc-ftr-news-btn",
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
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 transition-colors hover:bg-[#F5F1EB]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#B8542D] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "kc-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "kc-ftr-grid",
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
                        "id": "kc-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "K",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-9 text-xl items-center justify-center rounded-t-full rounded-b-lg bg-[#2B2420] pt-1 font-heading font-normal leading-none text-[#F5F1EB]"
                                  }
                                }
                              },
                              {
                                "id": "kc-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Kaath & Co.",
                                      "src": "https://placehold.co/200x64?text=Kaath+%26+Co.",
                                      "altText": "Kaath & Co.",
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
                                        "classes": "font-heading font-normal text-2xl text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kc-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Solid-wood furniture, soft sofas and finishing touches from 200+ makers, delivered and assembled at your home.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "kc-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B8542D]"
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
                                "id": "kc-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B8542D]"
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
                                "id": "kc-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B8542D]"
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
                                "id": "kc-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B8542D]"
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
                        "id": "kc-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop by room",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Living Room",
                                  "icon": "",
                                  "slug": "/categories/sofas"
                                },
                                {
                                  "text": "Bedroom",
                                  "icon": "",
                                  "slug": "/categories/beds"
                                },
                                {
                                  "text": "Dining",
                                  "icon": "",
                                  "slug": "/categories/dining"
                                },
                                {
                                  "text": "Home Office",
                                  "icon": "",
                                  "slug": "/categories/office-furniture"
                                },
                                {
                                  "text": "Decor & Lighting",
                                  "icon": "",
                                  "slug": "/categories/decor-lighting"
                                },
                                {
                                  "text": "Made to Order",
                                  "icon": "",
                                  "slug": "/tags/made-to-order"
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
                                "classes": "transition-colors hover:text-[#8FA68A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#8FA68A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ftr-ll-care",
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
                                  "text": "Delivery & Assembly",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Warranty & Returns",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Ideas & Inspiration",
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
                                "classes": "transition-colors hover:text-[#8FA68A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#8FA68A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ftr-contact-h",
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
                            "id": "kc-ftr-address",
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
                                "value": "Showroom: Sat-Thu, 10am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#8FA68A]"
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
                                "classes": "shrink-0 text-[#B8542D]"
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
                "id": "kc-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "kc-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Kaath & Co. All rights reserved. Made for the way you live.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "kc-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-ftr-pay-txt",
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
            "id": "kc-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] pb-12 pt-8 lg:pb-16 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "kc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-hero-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-hero-k",
                            "type": "text",
                            "options": {
                              "text": "Shop the look · Living room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Rooms that feel like you.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl leading-[1.02] text-[#2B2420] sm:text-6xl xl:text-7xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-hero-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Solid-wood furniture, soft sofas and finishing touches from 200+ makers. Tap a pin to shop any piece, or get the whole room delivered and assembled.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-[#786C63]"
                              }
                            }
                          },
                          {
                            "id": "kc-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop all furniture",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B8542D] px-7 py-3.5 transition-colors hover:bg-[#96421F]"
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
                                "id": "kc-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Shop by room",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#rooms",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#2B2420]/25 px-7 py-3.5 transition-colors hover:border-[#2B2420] hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap"
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
                    "id": "kc-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-scene",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden rounded-3xl bg-[#EDE6DC] lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-scene-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/kaath-hero.svg",
                              "altText": "A styled living room: terracotta sofa, round oak coffee table, arc floor lamp, plant and rug under an arched window",
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
                          },
                          {
                            "id": "kc-spot-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute z-10 left-[38%] top-[63%] -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-spot-1-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/70"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kc-spot-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Sofas · from ৳38,500",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/sofas",
                                  "target": "",
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(43,36,32,0.45)] ring-4 ring-white/40 transition-transform hover:scale-110"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#B8542D] transition-transform group-hover:rotate-90"
                                  },
                                  "label": {
                                    "classes": "pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 font-body text-xs font-semibold text-[#2B2420] opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-spot-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute z-10 left-[79%] top-[32%] -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-spot-2-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/70"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kc-spot-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Lighting · from ৳4,900",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/lighting",
                                  "target": "",
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(43,36,32,0.45)] ring-4 ring-white/40 transition-transform hover:scale-110"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#B8542D] transition-transform group-hover:rotate-90"
                                  },
                                  "label": {
                                    "classes": "pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 font-body text-xs font-semibold text-[#2B2420] opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-spot-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute z-10 left-[50%] top-[84%] -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-spot-3-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/70"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kc-spot-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Coffee tables · from ৳9,900",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/tables",
                                  "target": "",
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(43,36,32,0.45)] ring-4 ring-white/40 transition-transform hover:scale-110"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#B8542D] transition-transform group-hover:rotate-90"
                                  },
                                  "label": {
                                    "classes": "pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 font-body text-xs font-semibold text-[#2B2420] opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-spot-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute z-10 left-[12%] top-[55%] -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-spot-4-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/70"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kc-spot-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Plants & decor · from ৳1,200",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/decor",
                                  "target": "",
                                  "icon": "IconPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(43,36,32,0.45)] ring-4 ring-white/40 transition-transform hover:scale-110"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#B8542D] transition-transform group-hover:rotate-90"
                                  },
                                  "label": {
                                    "classes": "pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 font-body text-xs font-semibold text-[#2B2420] opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-scene-tag",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-scene-tag-dot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 w-2 rounded-full bg-[#B8542D]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kc-scene-tag-t",
                                "type": "text",
                                "options": {
                                  "text": "Tap the pins to shop",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kc-look",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-4 rounded-3xl bg-white p-5 lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-look-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-look-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop this look",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-2xl text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-look-n",
                                "type": "text",
                                "options": {
                                  "text": "4 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#F5F1EB] px-3 py-1 font-body text-xs font-semibold text-[#786C63]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-look-list",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col divide-y divide-[#E6DED4]"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-look-1",
                                "type": "button",
                                "options": {
                                  "text": "Hasna 3-seat sofa · ৳38,500",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/sofas",
                                  "target": "",
                                  "icon": "IconSofa",
                                  "iconSize": 26
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-[#F5F1EB]"
                                  },
                                  "icon": {
                                    "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EDE6DC] text-[#2B2420]"
                                  },
                                  "label": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-look-2",
                                "type": "button",
                                "options": {
                                  "text": "Oval oak coffee table · ৳9,900",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/tables",
                                  "target": "",
                                  "icon": "IconTable",
                                  "iconSize": 26
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-[#F5F1EB]"
                                  },
                                  "icon": {
                                    "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EDE6DC] text-[#2B2420]"
                                  },
                                  "label": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-look-3",
                                "type": "button",
                                "options": {
                                  "text": "Arc brass floor lamp · ৳6,400",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/lighting",
                                  "target": "",
                                  "icon": "IconLamp",
                                  "iconSize": 26
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-[#F5F1EB]"
                                  },
                                  "icon": {
                                    "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EDE6DC] text-[#2B2420]"
                                  },
                                  "label": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-look-4",
                                "type": "button",
                                "options": {
                                  "text": "Ceramic planter + fern · ৳1,850",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/decor",
                                  "target": "",
                                  "icon": "IconPlant",
                                  "iconSize": 26
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-[#F5F1EB]"
                                  },
                                  "icon": {
                                    "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EDE6DC] text-[#2B2420]"
                                  },
                                  "label": {
                                    "classes": "flex-1 font-body text-sm font-semibold text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-look-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3 rounded-2xl bg-[#F5F1EB] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-look-total",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline justify-between"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-look-total-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Full look",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm text-[#786C63]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-look-total-v",
                                    "type": "text",
                                    "options": {
                                      "text": "৳56,650",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-3xl text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-look-btn",
                                "type": "button",
                                "options": {
                                  "text": "Get the full look",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/living-room-look",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B2420] px-7 py-3.5 transition-colors hover:bg-[#463B35] w-full"
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
                                "id": "kc-look-note",
                                "type": "text",
                                "options": {
                                  "text": "Free delivery & assembly in Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-center text-xs text-[#786C63]"
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
            "id": "kc-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y border-[#E6DED4] bg-white py-6"
              }
            },
            "children": [
              {
                "id": "kc-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-trust-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free delivery & assembly",
                          "description": "Inside Dhaka, on orders over ৳15,000",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "1-year warranty",
                          "description": "On frames, joints and mechanisms",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Inspect first, then pay",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day easy return",
                          "description": "If it is not right, we take it back",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "grid grid-cols-[auto_1fr] items-center gap-x-3 text-left"
                      },
                      "title": {
                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                      },
                      "description": {
                        "classes": "text-xs text-[#786C63]"
                      },
                      "icon": {
                        "classes": "row-span-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7E9E1] text-[#B8542D]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-trust-fb-ic",
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
                        "id": "kc-trust-fb-t",
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
                        "id": "kc-trust-fb-d",
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
            "id": "kc-rooms",
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
                "id": "kc-rooms-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-rooms-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-rooms-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-rooms-k",
                            "type": "text",
                            "options": {
                              "text": "Shop by room & category",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-rooms-h",
                            "type": "heading",
                            "options": {
                              "text": "Start with the room you love most",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-rooms-sub",
                            "type": "text",
                            "options": {
                              "text": "Living, bedroom, dining, workspace and outdoor: every corner, covered.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-rooms-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-rooms-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 [&>*:first-child]:lg:col-span-2 [&>*:first-child]:lg:row-span-2"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col overflow-hidden rounded-2xl bg-[#EDE6DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-rooms-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 [&>*:first-child]:lg:col-span-2 [&>*:first-child]:lg:row-span-2"
                          },
                          "loop-item": {
                            "classes": "group relative flex flex-col overflow-hidden rounded-2xl bg-[#EDE6DC]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-rooms-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-full w-full overflow-hidden"
                              },
                              "link": {
                                "classes": "block h-full"
                              },
                              "image": {
                                "classes": "aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "kc-rooms-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 font-body text-sm font-semibold text-[#2B2420] shadow-sm transition-colors group-hover:bg-[#B8542D] group-hover:text-white"
                              }
                            }
                          },
                          {
                            "id": "kc-rooms-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " items",
                              "singularSuffix": " item",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-4 top-4 rounded-full bg-[#2B2420]/80 px-2.5 py-1 font-body text-[11px] font-semibold text-white backdrop-blur"
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
            "id": "kc-sale",
            "type": "section",
            "options": {
              "anchor": "sale"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-sale-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-sale-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-sale-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-sale-k",
                            "type": "text",
                            "options": {
                              "text": "Weekend sale",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "self-start rounded-full bg-[#B8542D] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-white"
                              }
                            }
                          },
                          {
                            "id": "kc-sale-h",
                            "type": "heading",
                            "options": {
                              "text": "Up to 40% off, this weekend only",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-sale-all",
                        "type": "button",
                        "options": {
                          "text": "Shop the sale",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/sale",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B8542D] px-7 py-3.5 transition-colors hover:bg-[#96421F]"
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
                  },
                  {
                    "id": "kc-sale-slider",
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-sale-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-sale-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-sale-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sale-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-sale-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-sale-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sale-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-sale-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-sale-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-sale-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-sale-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-sale-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-best",
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
                "id": "kc-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-best-k",
                            "type": "text",
                            "options": {
                              "text": "Bestsellers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Most-loved pieces this month",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-best-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/bestseller",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-best-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-best-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-finish",
            "type": "section",
            "options": {
              "anchor": "finishes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#2B2420] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-finish-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
                  }
                },
                "children": [
                  {
                    "id": "kc-finish-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-finish-k",
                        "type": "text",
                        "options": {
                          "text": "Made your way",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#8FA68A]"
                          }
                        }
                      },
                      {
                        "id": "kc-finish-h",
                        "type": "heading",
                        "options": {
                          "text": "Pick your wood. Choose your fabric. We build it.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-4xl leading-tight text-white sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "kc-finish-p",
                        "type": "text",
                        "options": {
                          "text": "Most of our sofas, beds and dining sets can be made to order in 12 wood finishes and 30+ upholstery fabrics, delivered in about 21 days.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-lg text-base leading-relaxed text-white/70"
                          }
                        }
                      },
                      {
                        "id": "kc-finish-steps",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-3 gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-finish-s1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-2xl bg-white/[0.06] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-finish-s1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPalette",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#8FA68A]"
                                  }
                                }
                              },
                              {
                                "id": "kc-finish-s1-t",
                                "type": "text",
                                "options": {
                                  "text": "Choose finish",
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
                            "id": "kc-finish-s2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-2xl bg-white/[0.06] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-finish-s2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHammer",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#8FA68A]"
                                  }
                                }
                              },
                              {
                                "id": "kc-finish-s2-t",
                                "type": "text",
                                "options": {
                                  "text": "Hand-made",
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
                            "id": "kc-finish-s3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2 rounded-2xl bg-white/[0.06] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-finish-s3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#8FA68A]"
                                  }
                                }
                              },
                              {
                                "id": "kc-finish-s3-t",
                                "type": "text",
                                "options": {
                                  "text": "Delivered & set up",
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
                        "id": "kc-finish-btn",
                        "type": "button",
                        "options": {
                          "text": "Explore made-to-order",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/made-to-order",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B8542D] px-7 py-3.5 transition-colors hover:bg-[#96421F] self-start"
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
                  },
                  {
                    "id": "kc-finish-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-8 rounded-3xl bg-[#F5F1EB] p-6 sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-finish-woods",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-finish-woods-k",
                            "type": "text",
                            "options": {
                              "text": "Wood finishes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#786C63]"
                              }
                            }
                          },
                          {
                            "id": "kc-finish-woods-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4 sm:gap-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-sw-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-1-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#E3C9A0] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Natural oak",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-2-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#C8915A] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Teak",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-3-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#8A5A34] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-3-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Walnut",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-4-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#5A3A24] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-4-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Dark walnut",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-5-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#2E2522] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-5-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Ebony",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
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
                        "id": "kc-finish-fabrics",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-finish-fab-k",
                            "type": "text",
                            "options": {
                              "text": "Upholstery",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#786C63]"
                              }
                            }
                          },
                          {
                            "id": "kc-finish-fab-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4 sm:gap-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-sw-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-6-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#E9E2D6] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-6-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Linen",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-7",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-7-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#B8542D] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-7-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Rust velvet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-8",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-8-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#8FA68A] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-8-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Sage bouclé",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-9",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-9-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#3F5468] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-9-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Navy weave",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-sw-10",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex flex-col items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-sw-10-c",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-16 w-16 rounded-full bg-[#C9B79C] shadow-inner ring-1 ring-black/5  transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kc-sw-10-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Sand chenille",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#2B2420]"
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
            "id": "kc-row-sofas",
            "type": "section",
            "options": {
              "anchor": "sofas"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-row-sofas-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-row-sofas-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-sofas-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-sofas-k",
                            "type": "text",
                            "options": {
                              "text": "Living room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-sofas-h",
                            "type": "heading",
                            "options": {
                              "text": "Sofas & armchairs",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-sofas-sub",
                            "type": "text",
                            "options": {
                              "text": "Deep seats, solid frames, fabrics that forgive.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-row-sofas-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/sofas",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-row-sofas-slider",
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
                                  "sofas"
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-sofas-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-sofas-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-sofas-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-sofas-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-sofas-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-row-sofas-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-sofas-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-row-sofas-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-sofas-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-row-sofas-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-sofas-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-row-sofas-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-row-beds",
            "type": "section",
            "options": {
              "anchor": "beds"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-row-beds-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-row-beds-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-beds-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-beds-k",
                            "type": "text",
                            "options": {
                              "text": "Bedroom",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-beds-h",
                            "type": "heading",
                            "options": {
                              "text": "Beds & wardrobes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-beds-sub",
                            "type": "text",
                            "options": {
                              "text": "Solid-wood beds and storage that lasts for decades.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-row-beds-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/beds",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-row-beds-slider",
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
                                  "beds"
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-beds-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-beds-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-beds-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-beds-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-beds-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-row-beds-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-beds-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-row-beds-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-beds-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-row-beds-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-beds-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-row-beds-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-consult",
            "type": "section",
            "options": {
              "anchor": "design-help"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-14 lg:pb-20"
              }
            },
            "children": [
              {
                "id": "kc-consult-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-consult-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 overflow-hidden rounded-3xl bg-[#E9EFE6] md:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-consult-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-center gap-4 p-8 sm:p-12 md:col-span-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-consult-k",
                            "type": "text",
                            "options": {
                              "text": "Free design help",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-consult-h",
                            "type": "heading",
                            "options": {
                              "text": "Not sure what fits? Talk to an interior stylist.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "kc-consult-p",
                            "type": "text",
                            "options": {
                              "text": "Send us a photo and your room size. A stylist suggests pieces, colours and layout within a day, free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base text-[#786C63]"
                              }
                            }
                          },
                          {
                            "id": "kc-consult-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-consult-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Chat on WhatsApp",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2B2420] px-7 py-3.5 transition-colors hover:bg-[#463B35]"
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
                                "id": "kc-consult-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Book a showroom visit",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "#",
                                  "target": "",
                                  "icon": "IconCalendarEvent",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#2B2420]/25 px-7 py-3.5 transition-colors hover:border-[#2B2420] hover:bg-white"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#2B2420]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kc-consult-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex min-h-[220px] items-center justify-center bg-[#8FA68A] md:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-consult-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-48 w-36 items-end justify-center rounded-t-full bg-white/25 pb-6"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-consult-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArmchair",
                                  "size": 72,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-white"
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
            "id": "kc-row-dining",
            "type": "section",
            "options": {
              "anchor": "dining"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-row-dining-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-row-dining-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-dining-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-dining-k",
                            "type": "text",
                            "options": {
                              "text": "Dining",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-dining-h",
                            "type": "heading",
                            "options": {
                              "text": "Dining sets & tables",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-dining-sub",
                            "type": "text",
                            "options": {
                              "text": "Gather round: 4, 6 and 8-seaters in solid wood.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-row-dining-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/dining",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-row-dining-slider",
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
                                  "dining"
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-dining-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-dining-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-dining-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-dining-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-dining-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-row-dining-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-dining-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-row-dining-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-dining-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-row-dining-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-dining-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-row-dining-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-row-office",
            "type": "section",
            "options": {
              "anchor": "office"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-row-office-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-row-office-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-office-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-office-k",
                            "type": "text",
                            "options": {
                              "text": "Workspace",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-office-h",
                            "type": "heading",
                            "options": {
                              "text": "Home office",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-office-sub",
                            "type": "text",
                            "options": {
                              "text": "Desks, ergonomic chairs and storage for focused days.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-row-office-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/office-furniture",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-row-office-slider",
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
                                  "office-furniture"
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-office-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-office-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-office-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-office-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-office-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-row-office-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-office-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-row-office-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-office-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-row-office-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-office-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-row-office-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-row-decor",
            "type": "section",
            "options": {
              "anchor": "decor"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-row-decor-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-row-decor-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-decor-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-decor-k",
                            "type": "text",
                            "options": {
                              "text": "Finishing touches",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-decor-h",
                            "type": "heading",
                            "options": {
                              "text": "Decor & lighting",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-row-decor-sub",
                            "type": "text",
                            "options": {
                              "text": "Lamps, rugs, mirrors and plants that make it home.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-row-decor-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/decor-lighting",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-row-decor-slider",
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
                                  "decor-lighting"
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
                            "perPage": 1.4,
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-8 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-row-decor-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-row-decor-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-decor-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-decor-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-decor-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-row-decor-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-row-decor-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-row-decor-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-row-decor-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-row-decor-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-row-decor-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-row-decor-slider-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-makersec",
            "type": "section",
            "options": {
              "anchor": "makers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-makersec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-makersec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-makersec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-makersec-k",
                            "type": "text",
                            "options": {
                              "text": "Our makers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-makersec-h",
                            "type": "heading",
                            "options": {
                              "text": "From 200+ workshops & brands",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-makersec-sub",
                            "type": "text",
                            "options": {
                              "text": "Local craftspeople and trusted brands, all quality-checked by us.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-makersec-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-makers-slider",
                    "type": "termsSlider",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_brand",
                        "number": "20",
                        "per_page": "20",
                        "hide_empty": true,
                        "order": "ASC",
                        "orderby": "name",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#F5F1EB] p-5 text-center transition-colors hover:bg-[#EDE6DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-makers-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#F5F1EB] p-5 text-center transition-colors hover:bg-[#EDE6DC]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-makers-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-full items-center justify-center overflow-hidden"
                              },
                              "link": {
                                "classes": "flex h-full w-full items-center justify-center"
                              },
                              "image": {
                                "classes": "max-h-12 w-auto max-w-full object-contain mix-blend-multiply"
                              }
                            }
                          },
                          {
                            "id": "kc-makers-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#2B2420]"
                              }
                            }
                          },
                          {
                            "id": "kc-makers-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pieces",
                              "singularSuffix": " piece",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] text-[#786C63]"
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
            "id": "kc-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-reviews-k",
                            "type": "text",
                            "options": {
                              "text": "Reviews",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Homes we have helped furnish",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          },
                          {
                            "id": "kc-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 by 12,000+ customers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#786C63]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "kc-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E6DED4] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2B2420] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#2B2420] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#2B2420]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#B8542D]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The sofa looks even better than the photos. Two men delivered and assembled it in twenty minutes and took all the packaging away.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "FK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farhana Kabir",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Sofa · Gulshan",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                        "id": "kc-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Solid mahogany, beautifully finished. They let us choose the stain, and it arrived exactly on the promised date.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "IC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imtiaz Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Dining set · Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                        "id": "kc-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“The stylist helped me pick a bed and side tables that actually fit my small room. Free advice that saved me money.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "LH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lubna Haque",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Bed · Dhanmondi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                        "id": "kc-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ergonomic chair with proper lumbar support. My back pain is gone after a month of working from home.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "RK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rezaul Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Office chair · Uttara",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                        "id": "kc-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Small order, same care. Lovely packaging, quick delivery and the brass lamp is the star of my living room.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "SN",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumaiya Noor",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Rug & lamp · Banani",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                        "id": "kc-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“A hinge was loose on day three. They sent a carpenter the next morning at no cost. That is real after-sales service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl leading-snug text-[#2B2420]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E6DED4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "HR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9EFE6] font-body text-sm font-bold text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Habib Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Wardrobe · Mirpur",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
            "id": "kc-journal",
            "type": "section",
            "options": {
              "anchor": "inspiration"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-journal-k",
                            "type": "text",
                            "options": {
                              "text": "Ideas & inspiration",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Room ideas from our stylists",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#2B2420]/30 pb-1 transition-colors hover:border-[#B8542D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] transition-transform group-hover:translate-x-1 group-hover:text-[#B8542D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#2B2420] whitespace-nowrap group-hover:text-[#B8542D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-journal-grid",
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
                        "id": "kc-journal-loop",
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
                            "id": "kc-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-2xl bg-[#EDE6DC]"
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
                            "id": "kc-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading font-normal text-2xl leading-snug text-[#2B2420] transition-colors group-hover:text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read the story",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#786C63]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-semibold text-[#2B2420]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#B8542D] transition-transform group-hover/rm:translate-x-1"
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
            "id": "kc-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "kc-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-faq-k",
                                "type": "text",
                                "options": {
                                  "text": "FAQ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-3xl leading-tight text-[#2B2420] sm:text-[2.75rem]"
                                  }
                                }
                              },
                              {
                                "id": "kc-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Delivery, materials, warranty and returns.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#786C63]"
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
                    "id": "kc-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Is delivery and assembly really free?",
                          "classes": ""
                        },
                        {
                          "label": "How long does delivery take?",
                          "classes": ""
                        },
                        {
                          "label": "What wood and materials do you use?",
                          "classes": ""
                        },
                        {
                          "label": "Can I see or touch the furniture first?",
                          "classes": ""
                        },
                        {
                          "label": "What does the warranty cover?",
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
                        "classes": "flex flex-col divide-y divide-[#E6DED4] border-y border-[#E6DED4]"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 px-1 py-5 font-heading font-normal text-xl text-[#2B2420] transition-colors hover:text-[#B8542D]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#B8542D]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#B8542D]"
                      },
                      "accordion-content": {
                        "classes": "px-1 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka, delivery and assembly are free on orders over ৳15,000. Below that, or outside Dhaka, the fee is shown at checkout. Our team also takes the packaging away.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "In-stock pieces arrive in 2-5 days in Dhaka and 4-7 days elsewhere. Made-to-order pieces take about 21 days; you will get a firm date when you order.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Each product page lists the exact wood (for example mahogany, teak or oak veneer over engineered board), fabric and finish, plus dimensions and weight.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Visit our showroom, or pay cash on delivery and inspect the piece before paying. If it is damaged or not as described, we take it back.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "A 1-year warranty covers frames, joints and mechanisms against manufacturing defects. Fabric wear, misuse and water damage are not covered.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
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
            "id": "kc-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "kc-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-[#B8542D] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-cta-arch",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-24 right-10 h-72 w-56 rounded-t-full border-[20px] border-white/10"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "kc-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex max-w-xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-cta-k",
                            "type": "text",
                            "options": {
                              "text": "Members save more",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                              }
                            }
                          },
                          {
                            "id": "kc-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Get ৳2,000 off your first order over ৳20,000.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl leading-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "kc-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for the welcome code, early access to sales and saved room wishlists.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-cta-btn-1",
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
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 transition-colors hover:bg-[#F5F1EB]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B8542D]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#B8542D] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "kc-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse furniture",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 transition-colors hover:bg-white/10"
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
            "id": "kc-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The collection",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All Furniture",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Sofas, beds, dining, storage and decor from 200+ makers, newest first. Every piece delivered and assembled.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-shop-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-shop-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
                        "id": "kc-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-shop-promise",
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
                "id": "kc-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free delivery & assembly",
                          "description": "Inside Dhaka, on orders over ৳15,000",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "1-year warranty",
                          "description": "On frames, joints and mechanisms",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Inspect first, then pay",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day easy return",
                          "description": "If it is not right, we take it back",
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
                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9E1] text-[#B8542D]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-shop-promise-fb-ic",
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
                        "id": "kc-shop-promise-fb-t",
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
                        "id": "kc-shop-promise-fb-d",
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
            "id": "kc-pd",
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
                "id": "kc-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-pd-grid",
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
                        "id": "kc-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-pd-gallery",
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
                                "classes": "rounded-2xl border-4 border-white bg-gradient-to-tr from-[#EFEAE5] via-white to-[#F5F1EB] p-4 shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B2420]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B2420]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#B8542D]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-pd-cats",
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
                                "classes": "rounded-full bg-[#EFEAE5] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B2420] hover:bg-[#2B2420] hover:text-white"
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
                            "id": "kc-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#2B2420] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "kc-pd-rate",
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
                                "classes": "font-body font-bold text-[#2B2420]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "kc-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#B8542D] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "kc-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#786C63]"
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
                            "id": "kc-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#2B2420]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#2B2420] transition-colors hover:border-[#2B2420] hover:bg-[#EFEAE5]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#2B2420] !bg-[#EFEAE5] !text-[#463B35]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "kc-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · made to order available",
                              "inStockText": "In stock · delivered in 2-5 days",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#B8542D]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2B2420]"
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
                            "id": "kc-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#2B2420]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F1EB]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F1EB]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#B8542D] px-8 text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#96421F]"
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
                            "id": "kc-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Free assembly",
                                  "description": "Dhaka, over ৳15,000",
                                  "icon": "IconTools",
                                  "iconSize": ""
                                },
                                {
                                  "title": "1-year warranty",
                                  "description": "Frames & joints",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Inspect, then pay",
                                  "description": "Cash on delivery",
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
                                "classes": "font-body text-base font-bold text-[#2B2420]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFEAE5] text-[#2B2420]"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-perks-ic",
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
                                "id": "kc-pd-perks-t",
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
                                "id": "kc-pd-perks-d",
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
                            "id": "kc-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-sku",
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
                                    "classes": "font-semibold text-[#2B2420]"
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
                                "id": "kc-pd-brands",
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
                                    "classes": "font-semibold text-[#2B2420]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#B8542D]"
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
                                "id": "kc-pd-tags",
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
                                    "classes": "font-semibold text-[#2B2420]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#B8542D]"
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
            "id": "kc-pd-tabs-sec",
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
                "id": "kc-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,36,32,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Dimensions & Care",
                              "icon": "IconRuler2"
                            },
                            {
                              "label": "Delivery & Assembly",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F1EB] px-5 py-2.5 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2B2420] !text-white shadow-md"
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
                            "id": "kc-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2B2420] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2B2420] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#B8542D] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#8FA68A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconRuler2",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Width, depth, height, seat height and weight are listed in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Measure doors, stairs and lifts before ordering large pieces",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wood: wipe with a dry cloth; keep out of direct sun and away from damp walls",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Upholstery: vacuum weekly; blot spills, never rub",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B2420]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "In-stock: 2-5 days in Dhaka, 4-7 days elsewhere",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Made to order: about 21 days, date confirmed at order",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery & assembly in Dhaka over ৳15,000; packaging removed",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged or not as described? Return within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B2420]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kc-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F5F1EB] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F5F1EB] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kc-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F7E9E1]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kc-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B2420]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kc-pd-reviews-rate",
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
                                        "id": "kc-pd-reviews-co",
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
                                    "id": "kc-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How does it look and feel in your home?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,36,32,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#2B2420]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F1EB] px-4 py-3 text-sm text-[#2B2420] placeholder:text-gray-400 focus:border-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#2B2420]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#B8542D] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#96421F] disabled:opacity-50"
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
            "id": "kc-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-16"
              }
            },
            "children": [
              {
                "id": "kc-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the room",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F7E9E1] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B8542D]"
                          }
                        }
                      },
                      {
                        "id": "kc-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Goes Well With",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B2420]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-pd-rel-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-pd-rel-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
            "id": "kc-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Browse",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Living, bedroom, dining, workspace, outdoor and decor. Choose a room to start.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#EFEAE5] transition-transform"
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
                            "id": "kc-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B2420] transition-colors group-hover:text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-cat-grid-count",
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
                        "id": "kc-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kc-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B2420] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-cat1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
                        "id": "kc-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pieces by style, material and offer: solid wood, Scandinavian, made to order, sale and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#B8542D]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#B8542D]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B2420] group-hover:text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F5F1EB] px-2 py-0.5 text-[10px] font-bold text-[#786C63]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kc-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kc-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B2420] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-tag1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
                        "id": "kc-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Our makers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Makers & Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Local workshops and trusted brands, all quality-checked by us.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F5F1EB] p-3"
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
                            "id": "kc-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B2420] group-hover:text-[#B8542D]"
                              }
                            }
                          },
                          {
                            "id": "kc-brand-grid-count",
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
                        "id": "kc-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kc-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B2420] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-brand1-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
                        "id": "kc-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Ideas & inspiration",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Home Journal",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Room ideas, styling tips and care guides from our interior stylists.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F1EB]"
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
                            "id": "kc-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#2B2420] transition-colors group-hover:text-[#B8542D]"
                                  }
                                }
                              },
                              {
                                "id": "kc-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read the story",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#B8542D]"
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
                        "id": "kc-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B2420] transition-colors hover:border-[#B8542D] hover:text-[#B8542D]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B8542D] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kc-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F1EB] via-white to-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-post-k",
                    "type": "text",
                    "options": {
                      "text": "The Home Journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFEAE5] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B2420]"
                      }
                    }
                  },
                  {
                    "id": "kc-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#786C63]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-post-author",
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
                            "classes": "font-body font-bold text-[#2B2420]"
                          }
                        }
                      },
                      {
                        "id": "kc-post-dot",
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
                        "id": "kc-post-date",
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
                    "id": "kc-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
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
            "id": "kc-post-body",
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
                "id": "kc-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2B2420] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2B2420] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#B8542D] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#8FA68A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-16"
              }
            },
            "children": [
              {
                "id": "kc-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2B2420]"
                      }
                    }
                  },
                  {
                    "id": "kc-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F5F1EB] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F5F1EB] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F7E9E1]"
                              }
                            }
                          },
                          {
                            "id": "kc-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B2420]"
                              }
                            }
                          },
                          {
                            "id": "kc-post-cmt-co",
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
                        "id": "kc-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,36,32,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B2420]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F1EB] px-4 py-3 text-sm text-[#2B2420] placeholder:text-gray-400 focus:border-[#2B2420] focus:outline-none focus:ring-2 focus:ring-[#2B2420]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#B8542D] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#96421F] disabled:opacity-50"
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
            "id": "kc-post-more",
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
                "id": "kc-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Ideas",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2B2420]"
                      }
                    }
                  },
                  {
                    "id": "kc-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,36,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F5F1EB]"
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
                            "id": "kc-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B2420]"
                                  }
                                }
                              },
                              {
                                "id": "kc-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#2B2420] transition-colors group-hover:text-[#B8542D]"
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
            "id": "kc-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E6DED4] bg-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kc-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome home",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#B8542D]"
                      }
                    }
                  },
                  {
                    "id": "kc-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B2420] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kc-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track deliveries, manage made-to-order pieces and save room wishlists.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kc-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-12"
              }
            },
            "children": [
              {
                "id": "kc-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#2B2420] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#8FA68A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#B8542D]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#B8542D]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#B8542D]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "kc-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kc-acc-3",
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
                                "id": "kc-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,36,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B8542D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#96421F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "kc-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,36,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B8542D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#96421F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "kc-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "kc-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F1EB] px-5 py-2.5 font-body text-sm font-semibold text-[#2B2420] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2B2420] !text-white shadow-md"
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
                                "id": "kc-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8542D]/10 text-[#B8542D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kc-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#B8542D] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kc-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8542D]/10 text-[#B8542D]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kc-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#B8542D]/40 hover:bg-[#B8542D]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8542D]/10 text-[#B8542D]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kc-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B8542D]/10 text-[#B8542D]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B8542D] focus:outline-none focus:ring-2 focus:ring-[#B8542D]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#B8542D] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#96421F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8542D]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "kc-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F1EB] via-white to-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(43,36,32,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEAE5] text-[#2B2420]"
                          }
                        }
                      },
                      {
                        "id": "kc-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F7E9E1] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B8542D]"
                          }
                        }
                      },
                      {
                        "id": "kc-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You. Your Home Is Getting an Upgrade.",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B2420] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "kc-ty-p",
                        "type": "text",
                        "options": {
                          "text": "A confirmation is on its way, and we will call to fix a delivery date. Follow your order from your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#786C63] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "kc-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order and delivery date by phone",
                              "icon": ""
                            },
                            {
                              "text": "Your pieces are quality-checked and wrapped for transport",
                              "icon": ""
                            },
                            {
                              "text": "Our team delivers, assembles and takes the packaging away",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F5F1EB] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#B8542D]"
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
                        "id": "kc-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B8542D] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#96421F] w-full sm:w-auto"
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
                            "id": "kc-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B2420] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B2420] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2B2420] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#2B2420] whitespace-nowrap group-hover:text-white"
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
            "id": "kc-ty-promise",
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
                "id": "kc-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free delivery & assembly",
                          "description": "Inside Dhaka, on orders over ৳15,000",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "1-year warranty",
                          "description": "On frames, joints and mechanisms",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Inspect first, then pay",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day easy return",
                          "description": "If it is not right, we take it back",
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
                        "classes": "font-body text-sm font-semibold text-[#2B2420]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7E9E1] text-[#B8542D]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-ty-promise-fb-ic",
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
                        "id": "kc-ty-promise-fb-t",
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
                        "id": "kc-ty-promise-fb-d",
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
            "id": "kc-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F5F1EB] via-white to-[#F5F1EB] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kc-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#B8542D] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "kc-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F1EB] text-[#2B2420]"
                      }
                    }
                  },
                  {
                    "id": "kc-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Room Is Empty",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#2B2420] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "kc-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the piece may no longer be available. Head back home or browse the collection.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#786C63] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "kc-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B8542D] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(184,84,45,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#96421F] w-full sm:w-auto"
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
                        "id": "kc-nf-shop",
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
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B2420] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B2420] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B2420] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#2B2420] whitespace-nowrap group-hover:text-white"
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
            "id": "kc-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F1EB] py-16"
              }
            },
            "children": [
              {
                "id": "kc-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kc-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#8FA68A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B2420]"
                          }
                        }
                      },
                      {
                        "id": "kc-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B2420] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kc-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kc-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-3 transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(43,36,32,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kc-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F5F1EB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B8542D] px-2.5 py-1 text-[11px] font-semibold text-white"
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
                                "id": "kc-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kc-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B8542D]"
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
                                    "id": "kc-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2B2420]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kc-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#786C63]"
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
                            "id": "kc-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kc-nf-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#786C63] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#2B2420]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B8542D]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B8542D] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kc-nf-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2420] text-white transition-colors hover:bg-[#B8542D]"
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
