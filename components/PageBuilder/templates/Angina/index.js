/**
 * Template: Angina Home & Garden.
 *
 * A modern marketplace for home decor and garden (angina: "courtyard"):
 * furniture, decor, lighting, textiles, kitchen, bath, plants, pots and
 * balcony garden, from many independent makers and brands. Like the other
 * complete templates here it carries all sixteen page types - Header,
 * Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive,
 * Blog Single, Account, Thank you and 404 - so applying it replaces every
 * page.
 *
 * GENERATED from Haatbox/index.js: every page except Home keeps Haatbox's
 * block structure (ids renamed hb- to ag-, palette remapped, headings moved
 * to the one-weight display serif - small heading-font labels go to the
 * body font - and copy rewritten for home and garden); the Header is
 * restyled (an arch logo with a sage doorway, an italic wordmark, a linen
 * search, nine departments ending in Flash deals) and Home is built fresh.
 * It is plain data: edit freely.
 *
 * THE HERO: "shop the look"
 *
 *   An illustrated living room (public/templates/angina-room.svg, 8:5, so
 *   the hotspots line up) with five pulsing hotspots - sofa, floor lamp,
 *   monstera, prints, jute rug. Hovering one reveals a card with the piece,
 *   its maker, the price and a View link (the lamp's card is open on large
 *   screens); tapping a dot opens its category. Under the scene, the total
 *   for the room and "Shop the look" (tag look-living). Beside it: a sage
 *   balcony-garden tile (public/templates/angina-garden.svg) and a
 *   terracotta flash-deal tile with a countdown. Above: "Make it home," over
 *   an italic "then grow the garden.", a marketplace search with trending
 *   chips; below: a four-point trust row.
 *
 * DESIGN
 *
 *   terracotta #C65D3B  primary: CTAs, sale, hover   #A7472A deep  #F7E4DA tint
 *   sage       #4E6B4E  secondary: garden, makers    #2F4A36 deep  #E4EBDD tint
 *   ochre      #D9A441  accent: stars, deals, sell   #F8EDD3 tint
 *   linen #F5F0E8 (page)  plaster #EDE5D8  ink #24201B  muted #7A7167
 *   line #E6DED2
 *
 *   Arches are the motif: the logo, product photos (arch-topped, squaring
 *   off on hover), room tiles, budget tiles, kicker marks and avatars.
 *
 * Fonts (template meta): Instrument Serif (display headings, one weight -
 * use font-normal and italic, never bold) and Onest (body, labels, prices).
 *
 * Product cards: a 4:5 arch-topped photo on plaster, a terracotta "% OFF"
 * pill, a heart on hover, the maker line from the excerpt (e.g. "by Kaath
 * Studio · mango wood"), the name, rating, price and a round bag button.
 *
 * HOME
 *
 *   Shop-the-look hero (#look) - shop by room (#rooms) - flash deals with a
 *   countdown (#deals) - departments, live product_cat terms (#categories)
 *   - new from the makers (#new) - plants & garden by care level (#garden)
 *   - independent makers, live product_brand terms, and a sell-on-Angina
 *   card (#makers) - shop by budget (#budget) - bestsellers (#bestsellers)
 *   - style edits with swatches (#styles) - services (#services) - reviews
 *   (#reviews) - ideas (#ideas) - FAQ with a stylist WhatsApp card (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: living, bedroom, kitchen-dining, bath, workspace,
 *     decor, lighting, plants, garden. Tag slugs: look-living, flash-deal,
 *     new, bestseller, easy-care, pet-safe, low-light, sun-lovers,
 *     under-999, under-2499, under-4999, under-9999, premium,
 *     style-japandi, style-boho, style-mid-century, style-deshi-craft.
 *     Makers are product_brand terms; give each a logo.
 *   - The hotspot pieces, makers and prices, the room total, the countdowns
 *     (08:24:51, static text), the counts (900+ makers, 40,000 pieces),
 *     free assembly over ৳4,999, 0% EMI, the 30-day plant guarantee, the
 *     styling call, code HOME500 and the reviews are sample copy: offer only
 *     what you actually run. The WhatsApp link is https://wa.me/ - add your
 *     number. "Open your shop" links to /register; point it at your seller
 *     sign-up if you have one.
 */

var template = [
  {
    "name": "Angina Home & Garden",
    "description": "Modern home decor and garden marketplace in terracotta, sage and ochre on linen, with Instrument Serif (italic accents) and Onest, and arches everywhere - an arch logo, arch-topped product photos, room tiles, budget tiles and avatars: a \"shop the look\" hero - an illustrated living room with pulsing hotspots that reveal each piece, its maker and price - beside a balcony-garden tile and a flash-deal countdown, a marketplace search with trending chips and a trust row, then shop by room, flash deals, live departments, new from the makers, plants and garden by care level, independent makers with a sell-on-Angina card, shop by budget, bestsellers, style edits with colour swatches, services, reviews, ideas and FAQ. All 16 pages.",
    "thumbnail": "/templates/angina.svg",
    "meta": {
      "fonts": [
        {
          "family": "Instrument Serif",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Onest",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Instrument Serif",
        "body": "Onest"
      },
      "colors": {
        "primary": "#C65D3B",
        "secondary": "#4E6B4E",
        "accent": "#D9A441",
        "background": "#F5F0E8",
        "foreground": "#24201B",
        "muted": "#7A7167"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ag-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E6DED2] bg-white"
              }
            },
            "children": [
              {
                "id": "ag-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#2F4A36] px-4 py-2 text-center text-xs font-semibold text-white/90"
                  }
                },
                "children": [
                  {
                    "id": "ag-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery & assembly over ৳4,999 · 0% EMI · ৳500 off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "ag-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "HOME500",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#D9A441] px-2.5 py-0.5 font-mono text-xs font-bold text-[#2F4A36]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-hdr-promo-btn",
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
                        "classes": "text-xs font-bold text-[#D9A441] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "ag-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-3 lg:h-[76px]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-11 w-11 shrink-0 rounded-t-full rounded-b-[10px] bg-[#C65D3B] transition-transform group-hover:-translate-y-0.5 before:absolute before:inset-x-[11px] before:bottom-[7px] before:top-[12px] before:rounded-t-full before:bg-[#F5F0E8] before:content-[''] after:absolute after:bottom-[7px] after:left-1/2 after:h-[14px] after:w-[10px] after:-translate-x-1/2 after:rounded-t-full after:bg-[#4E6B4E] after:content-['']"
                              }
                            }
                          },
                          {
                            "id": "ag-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "angina",
                                  "src": "https://placehold.co/200x64?text=Angina",
                                  "altText": "Angina",
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
                                    "classes": "font-heading text-[30px] font-normal italic leading-none tracking-[-0.02em] text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Home & garden",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4E6B4E]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-hdr-deliver",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden shrink-0 items-center gap-2.5 rounded-2xl bg-[#E4EBDD] px-3.5 py-2 xl:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-hdr-deliver-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMapPin",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#4E6B4E]"
                              }
                            }
                          },
                          {
                            "id": "ag-hdr-deliver-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hdr-deliver-k",
                                "type": "text",
                                "options": {
                                  "text": "Deliver to",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-bold uppercase tracking-wider text-[#7A7167]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hdr-deliver-v",
                                "type": "text",
                                "options": {
                                  "text": "All 64 districts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm font-extrabold text-[#2F4A36]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search sofas, lamps, planters, makers...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-2 hidden max-w-2xl flex-1 rounded-full border border-[#E6DED2] bg-[#F5F0E8]  py-1 pl-1 pr-3 transition-all focus-within:ring-4 focus-within:ring-[#C65D3B]/15 md:block focus-within:border-[#C65D3B] focus-within:bg-white"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#24201B] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#7A7167]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C65D3B]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#C65D3B]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C65D3B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A7472A]"
                          }
                        }
                      },
                      {
                        "id": "ag-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F0E8] text-[#24201B] transition-colors hover:bg-[#F7E4DA] hover:text-[#C65D3B]"
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
                            "id": "ag-hdr-cart",
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
                              "crossSellsTitle": "Complete the look",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2F4A36] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#3E5C45]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#C65D3B] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F5F0E8] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#24201B]"
                              },
                              "title-icon": {
                                "classes": "text-[#C65D3B]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#C65D3B] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#C65D3B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#A7472A]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#C65D3B] px-4 py-2 text-sm font-medium text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#C65D3B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A7472A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "ag-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F5F0E8] text-[#24201B]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F5F0E8] p-2 text-[#24201B] transition-colors hover:bg-[#C65D3B] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-11 w-11 shrink-0 rounded-t-full rounded-b-[10px] bg-[#C65D3B] transition-transform group-hover:-translate-y-0.5 before:absolute before:inset-x-[11px] before:bottom-[7px] before:top-[12px] before:rounded-t-full before:bg-[#F5F0E8] before:content-[''] after:absolute after:bottom-[7px] after:left-1/2 after:h-[14px] after:w-[10px] after:-translate-x-1/2 after:rounded-t-full after:bg-[#4E6B4E] after:content-['']"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "angina",
                                          "src": "https://placehold.co/200x64?text=Angina",
                                          "altText": "Angina",
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
                                            "classes": "font-heading text-[30px] font-normal italic leading-none tracking-[-0.02em] text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Home & garden",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-0.5 block font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4E6B4E]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "ag-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search home & garden...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F5F0E8] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#2F4A36] focus-within:ring-2 focus-within:ring-[#2F4A36]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#24201B] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#7A7167]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C65D3B]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#C65D3B]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C65D3B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A7472A]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#24201B] transition-colors hover:text-[#C65D3B]"
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
                                    "id": "ag-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Living",
                                      "url": "/categories/living"
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
                                    "id": "ag-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bedroom",
                                      "url": "/categories/bedroom"
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
                                    "id": "ag-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Dining & Kitchen",
                                      "url": "/categories/kitchen-dining"
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
                                    "id": "ag-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Decor",
                                      "url": "/categories/decor"
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
                                    "id": "ag-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Lighting",
                                      "url": "/categories/lighting"
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
                                    "id": "ag-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Plants",
                                      "url": "/categories/plants"
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
                                    "id": "ag-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Garden & Balcony",
                                      "url": "/categories/garden"
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
                                    "id": "ag-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Makers",
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
                                    "id": "ag-hdr-m-menu-i9",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Flash deals",
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
                    "id": "ag-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#E6DED2] lg:block"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-hdr-menu",
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 font-body text-sm font-semibold text-[#24201B] transition-colors hover:bg-[#F7E4DA] hover:text-[#A7472A]"
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
                            "id": "ag-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Living",
                              "url": "/categories/living"
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
                            "id": "ag-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Bedroom",
                              "url": "/categories/bedroom"
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
                            "id": "ag-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Dining & Kitchen",
                              "url": "/categories/kitchen-dining"
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
                            "id": "ag-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Decor",
                              "url": "/categories/decor"
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
                            "id": "ag-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Lighting",
                              "url": "/categories/lighting"
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
                            "id": "ag-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Plants",
                              "url": "/categories/plants"
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
                            "id": "ag-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Garden & Balcony",
                              "url": "/categories/garden"
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
                            "id": "ag-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Makers",
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
                            "id": "ag-hdr-menu-i9",
                            "type": "menuItem",
                            "options": {
                              "label": "Flash deals",
                              "url": "/#deals"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[#9E3B22]"
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
            "id": "ag-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#24201B] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "ag-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "ag-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#C65D3B] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "New here?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                              }
                            }
                          },
                          {
                            "id": "ag-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "৳500 off your first order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl tracking-tight text-white sm:text-4xl font-normal tracking-[-0.01em]"
                              }
                            }
                          },
                          {
                            "id": "ag-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account to save favourites, follow makers and get restock alerts.",
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
                        "id": "ag-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconUserPlus",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-[#E6BC68]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#2F4A36]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-extrabold text-[#2F4A36] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ag-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "ag-ftr-grid",
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
                        "id": "ag-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-11 w-11 shrink-0 rounded-t-full rounded-b-[10px] bg-[#C65D3B] transition-transform group-hover:-translate-y-0.5 before:absolute before:inset-x-[11px] before:bottom-[7px] before:top-[12px] before:rounded-t-full before:bg-[#24201B] before:content-[''] after:absolute after:bottom-[7px] after:left-1/2 after:h-[14px] after:w-[10px] after:-translate-x-1/2 after:rounded-t-full after:bg-[#4E6B4E] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "ag-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "angina",
                                      "src": "https://placehold.co/200x64?text=Angina",
                                      "altText": "Angina",
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
                                        "classes": "font-heading text-[30px] font-normal italic leading-none tracking-[-0.02em] text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ag-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "A marketplace for home and garden: furniture, decor, lighting, textiles, plants and pots from 900+ independent makers and brands, delivered and assembled across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "ag-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C65D3B]"
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
                                "id": "ag-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C65D3B]"
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
                                "id": "ag-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C65D3B]"
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
                                "id": "ag-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C65D3B]"
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
                        "id": "ag-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Living Room",
                                  "icon": "",
                                  "slug": "/categories/living"
                                },
                                {
                                  "text": "Bedroom",
                                  "icon": "",
                                  "slug": "/categories/bedroom"
                                },
                                {
                                  "text": "Lighting",
                                  "icon": "",
                                  "slug": "/categories/lighting"
                                },
                                {
                                  "text": "Decor & Textiles",
                                  "icon": "",
                                  "slug": "/categories/decor"
                                },
                                {
                                  "text": "Plants & Pots",
                                  "icon": "",
                                  "slug": "/categories/plants"
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
                                "classes": "transition-colors hover:text-[#D9A441]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D9A441]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ftr-ll-care",
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
                                  "slug": "/#services"
                                },
                                {
                                  "text": "Returns & Refunds",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Sell on Angina",
                                  "icon": "",
                                  "slug": "/#makers"
                                },
                                {
                                  "text": "Ideas & How-tos",
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
                                "classes": "transition-colors hover:text-[#D9A441]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D9A441]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ftr-contact-h",
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
                            "id": "ag-ftr-address",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#D9A441]"
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
                                "classes": "shrink-0 text-[#C65D3B]"
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
                "id": "ag-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "ag-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Angina. All rights reserved. Made for the homes we live in.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "ag-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Cards · 0% EMI",
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
            "id": "ag-hero",
            "type": "section",
            "options": {
              "anchor": "look"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F5F0E8] pb-10 pt-8 lg:pt-12"
              }
            },
            "children": [
              {
                "id": "ag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-hero-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-hero-chip",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 ring-1 ring-[#E6DED2]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hero-chip-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBuildingStore",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#4E6B4E] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-chip-t",
                                "type": "text",
                                "options": {
                                  "text": "900+ makers · 40,000 pieces · one cart",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-[#24201B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-hero-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Make it home,",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[54px] font-normal leading-[0.95] tracking-[-0.03em] text-[#24201B] sm:text-7xl xl:text-[96px]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-h1-2",
                                "type": "text",
                                "options": {
                                  "text": "then grow the garden.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[54px] font-normal italic leading-[0.95] tracking-[-0.03em] text-[#C65D3B] sm:text-7xl xl:text-[96px]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-hero-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-5 lg:pb-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Furniture, lighting, textiles, plants and pots from independent makers across Bangladesh. Tap a dot in the room to shop the look.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-hero-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search sofas, lamps, planters, makers...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full rounded-full bg-white py-1.5 pl-2 pr-2 shadow-[0_18px_40px_-28px_rgba(36,32,27,0.6)] ring-1 ring-[#E6DED2] transition-all focus-within:ring-2 focus-within:ring-[#C65D3B]"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2 [&>svg]:ml-2 [&>svg]:text-[#C65D3B]"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-2.5 font-body text-sm text-[#24201B] outline-none placeholder:text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-hero-trends",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-hero-trends-k",
                                "type": "text",
                                "options": {
                                  "text": "Trending:",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-[#7A7167]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-trend-1",
                                "type": "button",
                                "options": {
                                  "text": "Jute rugs",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop?s=jute%20rugs",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 ring-1 ring-[#E6DED2] transition-colors hover:bg-[#24201B] hover:ring-[#24201B] [&:hover_span]:text-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-trend-2",
                                "type": "button",
                                "options": {
                                  "text": "Floor lamps",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop?s=floor%20lamps",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 ring-1 ring-[#E6DED2] transition-colors hover:bg-[#24201B] hover:ring-[#24201B] [&:hover_span]:text-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-trend-3",
                                "type": "button",
                                "options": {
                                  "text": "Balcony planters",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop?s=balcony%20planters",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 ring-1 ring-[#E6DED2] transition-colors hover:bg-[#24201B] hover:ring-[#24201B] [&:hover_span]:text-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-trend-4",
                                "type": "button",
                                "options": {
                                  "text": "Rattan",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop?s=rattan",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 ring-1 ring-[#E6DED2] transition-colors hover:bg-[#24201B] hover:ring-[#24201B] [&:hover_span]:text-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-hero-trend-5",
                                "type": "button",
                                "options": {
                                  "text": "Bedsheets",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop?s=bedsheets",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center rounded-full bg-white px-3 py-1 ring-1 ring-[#E6DED2] transition-colors hover:bg-[#24201B] hover:ring-[#24201B] [&:hover_span]:text-white"
                                  },
                                  "icon": {
                                    "classes": "hidden"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium text-[#24201B]"
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
                    "id": "ag-bento",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-scene",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative overflow-hidden rounded-[32px] bg-[#EDE5D8] lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-scene-frame",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-[8/5] w-full"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-scene-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/angina-room.svg",
                                  "altText": "A sunlit living room with a terracotta sofa, framed prints, a monstera, a brass floor lamp and a jute rug",
                                  "link": "/tags/look-living",
                                  "newTab": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0"
                                  },
                                  "link": {
                                    "classes": "block h-full w-full"
                                  },
                                  "img": {
                                    "classes": "h-full w-full object-cover"
                                  }
                                }
                              },
                              {
                                "id": "ag-spot-sofa",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/spot absolute z-20 -translate-x-1/2 -translate-y-1/2 left-[54%] top-[62%]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-spot-sofa-dot",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/living",
                                      "target": "",
                                      "icon": "IconPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(36,32,27,0.5)] ring-[6px] ring-white/40 transition-transform hover:scale-110 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 before:content-['']"
                                      },
                                      "icon": {
                                        "classes": "relative flex items-center text-[#C65D3B] transition-transform group-hover/spot:rotate-45"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-spot-sofa-card",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-52 -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_20px_40px_-18px_rgba(36,32,27,0.55)] transition-all duration-300 group-hover/spot:pointer-events-auto group-hover/spot:translate-y-0 group-hover/spot:opacity-100 sm:block opacity-0 translate-y-1 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:content-['']"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-spot-sofa-maker",
                                        "type": "text",
                                        "options": {
                                          "text": "by Kaath Studio",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-sofa-name",
                                        "type": "text",
                                        "options": {
                                          "text": "Mira 3-seat sofa",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-sm font-semibold leading-snug text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-sofa-row",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-2 flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-spot-sofa-price",
                                            "type": "text",
                                            "options": {
                                              "text": "৳48,500",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-base font-bold text-[#24201B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-spot-sofa-go",
                                            "type": "button",
                                            "options": {
                                              "text": "View",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/living",
                                              "target": "",
                                              "icon": "IconArrowRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "group/go inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                                              },
                                              "icon": {
                                                "classes": "flex items-center text-[#C65D3B] transition-transform group-hover/go:translate-x-0.5"
                                              },
                                              "label": {
                                                "classes": "font-body text-xs font-bold text-[#C65D3B]"
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
                                "id": "ag-spot-lamp",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/spot absolute z-20 -translate-x-1/2 -translate-y-1/2 left-[83%] top-[31%]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-spot-lamp-dot",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/lighting",
                                      "target": "",
                                      "icon": "IconPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(36,32,27,0.5)] ring-[6px] ring-white/40 transition-transform hover:scale-110 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 before:content-['']"
                                      },
                                      "icon": {
                                        "classes": "relative flex items-center text-[#C65D3B] transition-transform group-hover/spot:rotate-45"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-spot-lamp-card",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-52 -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_20px_40px_-18px_rgba(36,32,27,0.55)] transition-all duration-300 group-hover/spot:pointer-events-auto group-hover/spot:translate-y-0 group-hover/spot:opacity-100 sm:block lg:opacity-100 opacity-0 translate-y-1 lg:translate-y-0 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:content-['']"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-spot-lamp-maker",
                                        "type": "text",
                                        "options": {
                                          "text": "by Lumen & Co.",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-lamp-name",
                                        "type": "text",
                                        "options": {
                                          "text": "Brass dome floor lamp",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-sm font-semibold leading-snug text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-lamp-row",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-2 flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-spot-lamp-price",
                                            "type": "text",
                                            "options": {
                                              "text": "৳6,900",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-base font-bold text-[#24201B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-spot-lamp-go",
                                            "type": "button",
                                            "options": {
                                              "text": "View",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/lighting",
                                              "target": "",
                                              "icon": "IconArrowRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "group/go inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                                              },
                                              "icon": {
                                                "classes": "flex items-center text-[#C65D3B] transition-transform group-hover/go:translate-x-0.5"
                                              },
                                              "label": {
                                                "classes": "font-body text-xs font-bold text-[#C65D3B]"
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
                                "id": "ag-spot-plant",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/spot absolute z-20 -translate-x-1/2 -translate-y-1/2 left-[31%] top-[46%]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-spot-plant-dot",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/plants",
                                      "target": "",
                                      "icon": "IconPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(36,32,27,0.5)] ring-[6px] ring-white/40 transition-transform hover:scale-110 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 before:content-['']"
                                      },
                                      "icon": {
                                        "classes": "relative flex items-center text-[#C65D3B] transition-transform group-hover/spot:rotate-45"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-spot-plant-card",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-52 -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_20px_40px_-18px_rgba(36,32,27,0.55)] transition-all duration-300 group-hover/spot:pointer-events-auto group-hover/spot:translate-y-0 group-hover/spot:opacity-100 sm:block opacity-0 translate-y-1 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:content-['']"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-spot-plant-maker",
                                        "type": "text",
                                        "options": {
                                          "text": "by Sobuj Nursery",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-plant-name",
                                        "type": "text",
                                        "options": {
                                          "text": "Monstera in ceramic pot",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-sm font-semibold leading-snug text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-plant-row",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-2 flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-spot-plant-price",
                                            "type": "text",
                                            "options": {
                                              "text": "৳2,450",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-base font-bold text-[#24201B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-spot-plant-go",
                                            "type": "button",
                                            "options": {
                                              "text": "View",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/plants",
                                              "target": "",
                                              "icon": "IconArrowRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "group/go inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                                              },
                                              "icon": {
                                                "classes": "flex items-center text-[#C65D3B] transition-transform group-hover/go:translate-x-0.5"
                                              },
                                              "label": {
                                                "classes": "font-body text-xs font-bold text-[#C65D3B]"
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
                                "id": "ag-spot-art",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/spot absolute z-20 -translate-x-1/2 -translate-y-1/2 left-[50%] top-[30%]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-spot-art-dot",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/decor",
                                      "target": "",
                                      "icon": "IconPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(36,32,27,0.5)] ring-[6px] ring-white/40 transition-transform hover:scale-110 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 before:content-['']"
                                      },
                                      "icon": {
                                        "classes": "relative flex items-center text-[#C65D3B] transition-transform group-hover/spot:rotate-45"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-spot-art-card",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-52 -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_20px_40px_-18px_rgba(36,32,27,0.55)] transition-all duration-300 group-hover/spot:pointer-events-auto group-hover/spot:translate-y-0 group-hover/spot:opacity-100 sm:block opacity-0 translate-y-1 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:content-['']"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-spot-art-maker",
                                        "type": "text",
                                        "options": {
                                          "text": "by Rekha Prints",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-art-name",
                                        "type": "text",
                                        "options": {
                                          "text": "Sun & arch print set",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-sm font-semibold leading-snug text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-art-row",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-2 flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-spot-art-price",
                                            "type": "text",
                                            "options": {
                                              "text": "৳3,200",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-base font-bold text-[#24201B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-spot-art-go",
                                            "type": "button",
                                            "options": {
                                              "text": "View",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/decor",
                                              "target": "",
                                              "icon": "IconArrowRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "group/go inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                                              },
                                              "icon": {
                                                "classes": "flex items-center text-[#C65D3B] transition-transform group-hover/go:translate-x-0.5"
                                              },
                                              "label": {
                                                "classes": "font-body text-xs font-bold text-[#C65D3B]"
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
                                "id": "ag-spot-rug",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/spot absolute z-20 -translate-x-1/2 -translate-y-1/2 left-[70%] top-[92%]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-spot-rug-dot",
                                    "type": "button",
                                    "options": {
                                      "text": "",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/decor",
                                      "target": "",
                                      "icon": "IconPlus",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(36,32,27,0.5)] ring-[6px] ring-white/40 transition-transform hover:scale-110 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 before:content-['']"
                                      },
                                      "icon": {
                                        "classes": "relative flex items-center text-[#C65D3B] transition-transform group-hover/spot:rotate-45"
                                      },
                                      "label": {
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-spot-rug-card",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-full left-1/2 mb-3 hidden w-52 -translate-x-1/2 rounded-[16px] bg-white p-3 shadow-[0_20px_40px_-18px_rgba(36,32,27,0.55)] transition-all duration-300 group-hover/spot:pointer-events-auto group-hover/spot:translate-y-0 group-hover/spot:opacity-100 sm:block opacity-0 translate-y-1 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white after:content-['']"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-spot-rug-maker",
                                        "type": "text",
                                        "options": {
                                          "text": "by Shatranji House",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-[10px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-rug-name",
                                        "type": "text",
                                        "options": {
                                          "text": "Handwoven jute rug",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-sm font-semibold leading-snug text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-spot-rug-row",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-2 flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-spot-rug-price",
                                            "type": "text",
                                            "options": {
                                              "text": "৳7,800",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-base font-bold text-[#24201B]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-spot-rug-go",
                                            "type": "button",
                                            "options": {
                                              "text": "View",
                                              "linkTo": "custom",
                                              "scheme": "",
                                              "url": "/categories/decor",
                                              "target": "",
                                              "icon": "IconArrowRight",
                                              "iconSize": 14
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "group/go inline-flex cursor-pointer items-center gap-1 flex-row-reverse"
                                              },
                                              "icon": {
                                                "classes": "flex items-center text-[#C65D3B] transition-transform group-hover/go:translate-x-0.5"
                                              },
                                              "label": {
                                                "classes": "font-body text-xs font-bold text-[#C65D3B]"
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
                            "id": "ag-scene-tag",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-4 top-4 z-10 hidden items-center sm:flex gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 backdrop-blur sm:left-5 sm:top-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-scene-tag-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHandFinger",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-full bg-[#C65D3B] text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-scene-tag-t",
                                "type": "text",
                                "options": {
                                  "text": "Shop the look · The Dhanmondi living room",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-[#24201B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-scene-bar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#E6DED2] bg-white px-5 py-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-scene-bar-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-scene-bar-k",
                                    "type": "text",
                                    "options": {
                                      "text": "5 pieces from 5 makers",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-wider text-[#7A7167]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-scene-bar-v",
                                    "type": "text",
                                    "options": {
                                      "text": "The whole room for ৳68,850",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-2xl font-normal text-[#24201B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-scene-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop the look",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/look-living",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C65D3B] px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-[#A7472A] flex-row-reverse"
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
                        "id": "ag-bento-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-garden-tile",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#E4EBDD] p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-garden-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/angina-garden.svg",
                                  "altText": "A balcony corner with a snake plant, a monstera in a terracotta pot and a hanging plant",
                                  "link": "/categories/garden",
                                  "newTab": false
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-4 -right-6 w-[62%] transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105"
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
                                "id": "ag-garden-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex max-w-[60%] flex-col gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-garden-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Garden & balcony",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#4E6B4E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-garden-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Green up the balcony.",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-normal leading-[1.02] text-[#2F4A36]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-garden-p",
                                    "type": "text",
                                    "options": {
                                      "text": "2,300 plants, pots and planters",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm text-[#2F4A36]/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-garden-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop garden",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/garden",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#2F4A36] px-5 py-2.5 transition-colors hover:bg-[#C65D3B] flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#D9A441]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-flash-tile",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col justify-between gap-5 overflow-hidden rounded-[32px] bg-[#C65D3B] p-6 text-white"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-flash-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -right-10 -top-6 h-48 w-36 rounded-t-full border-[14px] border-white/10"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-flash-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-flash-k",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-flash-k-ic",
                                        "type": "icon",
                                        "options": {
                                          "iconName": "IconBolt",
                                          "size": 14,
                                          "label": ""
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex text-[#D9A441]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-flash-k-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Flash deals",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "ag-flash-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Up to 50% off, tonight only.",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-normal leading-[1.02] text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-flash-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-wrap items-center justify-between gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-flash-cd",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1.5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-flash-cd-1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-flash-cd-1-v",
                                            "type": "text",
                                            "options": {
                                              "text": "08",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-xl font-bold tabular-nums text-white"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-flash-cd-1-k",
                                            "type": "text",
                                            "options": {
                                              "text": "hrs",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "ag-flash-cd-s1",
                                        "type": "text",
                                        "options": {
                                          "text": ":",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-lg font-bold text-white/60"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-flash-cd-2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-flash-cd-2-v",
                                            "type": "text",
                                            "options": {
                                              "text": "24",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-xl font-bold tabular-nums text-white"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-flash-cd-2-k",
                                            "type": "text",
                                            "options": {
                                              "text": "min",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "ag-flash-cd-s2",
                                        "type": "text",
                                        "options": {
                                          "text": ":",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-lg font-bold text-white/60"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-flash-cd-3",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "ag-flash-cd-3-v",
                                            "type": "text",
                                            "options": {
                                              "text": "51",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-xl font-bold tabular-nums text-white"
                                              }
                                            }
                                          },
                                          {
                                            "id": "ag-flash-cd-3-k",
                                            "type": "text",
                                            "options": {
                                              "text": "sec",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "ag-flash-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop deals",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#deals",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 transition-colors hover:bg-[#D9A441] flex-row-reverse"
                                      },
                                      "icon": {
                                        "classes": "flex items-center text-[#C65D3B]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#24201B] whitespace-nowrap"
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
                    "id": "ag-trust",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-trust-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 ring-1 ring-[#E6DED2]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-trust-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-trust-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-trust-1-h",
                                "type": "text",
                                "options": {
                                  "text": "Verified makers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-trust-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Every shop checked",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-trust-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 ring-1 ring-[#E6DED2]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-trust-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTruckDelivery",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-trust-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-trust-2-h",
                                "type": "text",
                                "options": {
                                  "text": "Delivered & assembled",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-trust-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Free over ৳4,999",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-trust-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 ring-1 ring-[#E6DED2]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-trust-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconArrowBackUp",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-trust-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-trust-3-h",
                                "type": "text",
                                "options": {
                                  "text": "7-day returns",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-trust-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Free pickup",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-trust-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 ring-1 ring-[#E6DED2]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-trust-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 20,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-trust-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col leading-tight"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-trust-4-h",
                                "type": "text",
                                "options": {
                                  "text": "0% EMI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-trust-4-p",
                                "type": "text",
                                "options": {
                                  "text": "3 to 12 months",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-[#7A7167]"
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
            "id": "ag-rooms",
            "type": "section",
            "options": {
              "anchor": "rooms"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-rooms-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-rooms-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-rooms-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-rooms-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rooms-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-rooms-label",
                                "type": "text",
                                "options": {
                                  "text": "Shop by room",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-rooms-h",
                            "type": "heading",
                            "options": {
                              "text": "Start with a room.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-rooms-sub",
                            "type": "text",
                            "options": {
                              "text": "Everything for one space, from the big pieces to the last cushion.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-rooms-all",
                        "type": "button",
                        "options": {
                          "text": "All departments",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-rooms-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-room-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-1-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#F7E4DA] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-1-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#C65D3B]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSofa",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#C65D3B] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Living room",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/living",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-1-c",
                                "type": "text",
                                "options": {
                                  "text": "6,400 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-room-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-2-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#F8EDD3] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-2-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#9C7424]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBed",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#9C7424] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Bedroom",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/bedroom",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-2-c",
                                "type": "text",
                                "options": {
                                  "text": "4,900 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-room-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-3-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#E4EBDD] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-3-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#4E6B4E]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconToolsKitchen2",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#4E6B4E] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Dining & kitchen",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/kitchen-dining",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-3-c",
                                "type": "text",
                                "options": {
                                  "text": "5,200 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-room-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-4-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#E3ECEE] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-4-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#3F6670]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBath",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#3F6670] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Bath",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/bath",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-4-c",
                                "type": "text",
                                "options": {
                                  "text": "1,800 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-room-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-5-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#EDE5D8] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-5-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#24201B]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-5-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDesk",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#24201B] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Workspace",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/workspace",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-5-c",
                                "type": "text",
                                "options": {
                                  "text": "2,100 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-room-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-room-6-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-full rounded-b-[20px] bg-[#E4EBDD] pb-8 transition-all duration-500 group-hover:rounded-b-[40px]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-6-inner",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-[14%] bottom-[14%] top-[10%] rounded-t-full border-2 border-dashed border-[#2F4A36]/20 transition-transform duration-500 group-hover:scale-105"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-room-6-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPlant2",
                                  "size": 64,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex text-[#2F4A36] transition-transform duration-500 group-hover:-translate-y-2"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-room-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col items-center"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-room-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Balcony & garden",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/garden",
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
                                    "classes": "font-heading text-2xl font-normal text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-room-6-c",
                                "type": "text",
                                "options": {
                                  "text": "2,300 pieces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-medium text-[#7A7167]"
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
            "id": "ag-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-deals-bar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-[#24201B] px-5 py-4 sm:px-7"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-deals-bar-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-deals-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBolt",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 items-center justify-center rounded-full bg-[#C65D3B] text-white"
                              }
                            }
                          },
                          {
                            "id": "ag-deals-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-deals-h",
                                "type": "heading",
                                "options": {
                                  "text": "Flash deals",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-normal leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-deals-p",
                                "type": "text",
                                "options": {
                                  "text": "New picks every night at 8 · while stock lasts",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-deals-bar-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap items-center gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-deals-ends",
                            "type": "text",
                            "options": {
                              "text": "Ends in",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-wider text-white/60"
                              }
                            }
                          },
                          {
                            "id": "ag-deals-cd",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-deals-cd-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-deals-cd-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "08",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xl font-bold tabular-nums text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-cd-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "hrs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-deals-cd-s1",
                                "type": "text",
                                "options": {
                                  "text": ":",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-bold text-white/60"
                                  }
                                }
                              },
                              {
                                "id": "ag-deals-cd-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-deals-cd-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "24",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xl font-bold tabular-nums text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-cd-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-deals-cd-s2",
                                "type": "text",
                                "options": {
                                  "text": ":",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-bold text-white/60"
                                  }
                                }
                              },
                              {
                                "id": "ag-deals-cd-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center rounded-[12px] px-2.5 py-1.5 bg-white/15"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-deals-cd-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "51",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xl font-bold tabular-nums text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-cd-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "sec",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[9px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ag-deals-all",
                            "type": "button",
                            "options": {
                              "text": "All deals",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/flash-deal",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white/10 hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#D9A441] group-hover:text-[#24201B]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold whitespace-nowrap text-white group-hover:text-[#24201B]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ag-deals-slider",
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
                                  "flash-deal"
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
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#24201B] hover:!bg-[#C65D3B] [&>svg]:!fill-white [&>svg]:!h-3.5 [&>svg]:!w-3.5 disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-deals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-deals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-deals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-deals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] rounded-t-[90px] bg-[#EDE5D8] transition-[border-radius] duration-500 group-hover:rounded-t-[14px]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-2.5 left-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#C65D3B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
                                      },
                                      "discount": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-slider-c-fav",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHeart",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-2.5 top-2.5 z-[11] flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#24201B] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-deals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-deals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
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
                                    "id": "ag-deals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-deals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#7A7167]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9A441]"
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
                            "id": "ag-deals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-deals-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#7A7167]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-deals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBagPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E4EBDD] text-[#2F4A36] transition-colors hover:bg-[#C65D3B] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "hidden"
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
            "id": "ag-cats",
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
                "id": "ag-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-cats-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-cats-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-cats-label",
                                "type": "text",
                                "options": {
                                  "text": "Departments",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Browse every corner.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-cats-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "12",
                        "per_page": "12",
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
                        "classes": "grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col items-center gap-2.5 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-cats-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-2.5 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-cats-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block aspect-square w-full max-w-[150px] overflow-hidden rounded-full bg-[#EDE5D8] ring-1 ring-[#E6DED2] ring-offset-4 transition-all duration-500 group-hover:ring-2 group-hover:ring-[#C65D3B]"
                              },
                              "link": {
                                "classes": "block h-full w-full"
                              },
                              "image": {
                                "classes": "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "ag-cats-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-cats-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pieces",
                              "singularSuffix": " piece",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-1.5 font-body text-[11px] text-[#7A7167]"
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
            "id": "ag-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-new-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-new-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-new-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-new-label",
                                "type": "text",
                                "options": {
                                  "text": "Just in",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-new-h",
                            "type": "heading",
                            "options": {
                              "text": "New from the makers.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-new-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh listings from our makers this week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-new-all",
                        "type": "button",
                        "options": {
                          "text": "All new",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-new-grid",
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
                                  "new"
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-new-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-new-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-new-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-new-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] rounded-t-[90px] bg-[#EDE5D8] transition-[border-radius] duration-500 group-hover:rounded-t-[14px]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-new-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-2.5 left-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#C65D3B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
                                      },
                                      "discount": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-new-grid-c-fav",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHeart",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-2.5 top-2.5 z-[11] flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#24201B] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-new-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-new-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
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
                                    "id": "ag-new-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-new-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#7A7167]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9A441]"
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
                            "id": "ag-new-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-new-grid-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#7A7167]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-new-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBagPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E4EBDD] text-[#2F4A36] transition-colors hover:bg-[#C65D3B] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "hidden"
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
            "id": "ag-garden",
            "type": "section",
            "options": {
              "anchor": "garden"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2F4A36] py-16 text-white lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-garden-arch-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-24 top-20 h-[420px] w-[300px] rounded-t-full border border-white/10"
                  }
                },
                "children": []
              },
              {
                "id": "ag-garden-arch-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-12 top-36 h-[340px] w-[220px] rounded-t-full border border-white/10"
                  }
                },
                "children": []
              },
              {
                "id": "ag-garden-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-gd-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-gd-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-gd-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-gd-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#D9A441]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-gd-label",
                                "type": "text",
                                "options": {
                                  "text": "Plants & garden",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A441]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-gd-h",
                            "type": "heading",
                            "options": {
                              "text": "Plants, potted and ready.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-white"
                              }
                            }
                          },
                          {
                            "id": "ag-gd-sub",
                            "type": "text",
                            "options": {
                              "text": "Grown by nurseries in Savar and Gazipur, delivered in their pots with a care card. If one dies in the first 30 days, we replace it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-gd-all",
                        "type": "button",
                        "options": {
                          "text": "Shop garden",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/garden",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white/10 hover:bg-white"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#D9A441] group-hover:text-[#24201B]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-white group-hover:text-[#24201B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-care",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-care-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 rounded-[22px] bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-care-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPlant",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-[#2F4A36]"
                              }
                            }
                          },
                          {
                            "id": "ag-care-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-care-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Easy care",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/easy-care",
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
                                    "classes": "font-heading text-xl font-normal text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-care-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Forgets to water? Start here.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-care-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 rounded-[22px] bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-care-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPaw",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-[#2F4A36]"
                              }
                            }
                          },
                          {
                            "id": "ag-care-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-care-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Pet safe",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/pet-safe",
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
                                    "classes": "font-heading text-xl font-normal text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-care-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Non-toxic for cats and dogs.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-care-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 rounded-[22px] bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-care-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconMoon",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-[#2F4A36]"
                              }
                            }
                          },
                          {
                            "id": "ag-care-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-care-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Low light",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/low-light",
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
                                    "classes": "font-heading text-xl font-normal text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-care-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Happy in a north-facing flat.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/60"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-care-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex items-center gap-3 rounded-[22px] bg-white/[0.06] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-care-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconSun",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-[#2F4A36]"
                              }
                            }
                          },
                          {
                            "id": "ag-care-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-care-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Sun lovers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/sun-lovers",
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
                                    "classes": "font-heading text-xl font-normal text-white"
                                  }
                                }
                              },
                              {
                                "id": "ag-care-4-p",
                                "type": "text",
                                "options": {
                                  "text": "For the rooftop and the balcony.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/60"
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
                    "id": "ag-gd-slider",
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
                                  "plants"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#D9A441] hover:!bg-white [&>svg]:!fill-[#24201B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-gd-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-gd-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-gd-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-gd-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] rounded-t-[90px] bg-[#EDE5D8] transition-[border-radius] duration-500 group-hover:rounded-t-[14px]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-gd-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-2.5 left-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#C65D3B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
                                      },
                                      "discount": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-gd-slider-c-fav",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHeart",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-2.5 top-2.5 z-[11] flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#24201B] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-gd-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-gd-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
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
                                    "id": "ag-gd-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-gd-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#7A7167]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9A441]"
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
                            "id": "ag-gd-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-gd-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#7A7167]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-gd-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBagPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E4EBDD] text-[#2F4A36] transition-colors hover:bg-[#C65D3B] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "hidden"
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
            "id": "ag-makers",
            "type": "section",
            "options": {
              "anchor": "makers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-makers-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-makers-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-makers-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-makers-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-makers-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-makers-label",
                                "type": "text",
                                "options": {
                                  "text": "Independent makers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-makers-h",
                            "type": "heading",
                            "options": {
                              "text": "Meet the people who made it.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-makers-sub",
                            "type": "text",
                            "options": {
                              "text": "Woodworkers in Chattogram, weavers in Rangpur, potters in Bijoypur. Every shop is checked by our team.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-makers-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-makers-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-mk-wrap",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-mk-grid",
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
                                "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3"
                              },
                              "loop-item": {
                                "classes": "group flex items-center gap-3 rounded-[22px] bg-[#F5F0E8] p-3 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_34px_-24px_rgba(36,32,27,0.6)] hover:ring-1 hover:ring-[#E6DED2]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-mk-loop",
                                "type": "termsLoop",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  },
                                  "loop-items": {
                                    "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3"
                                  },
                                  "loop-item": {
                                    "classes": "group flex items-center gap-3 rounded-[22px] bg-[#F5F0E8] p-3 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_34px_-24px_rgba(36,32,27,0.6)] hover:ring-1 hover:ring-[#E6DED2]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-mk-thumb",
                                    "type": "termThumbnail",
                                    "options": {
                                      "linkTo": "termUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
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
                                    "id": "ag-mk-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex min-w-0 flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-mk-title",
                                        "type": "termTitle",
                                        "options": {
                                          "tag": "h3",
                                          "linkTo": "termUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "truncate font-body text-sm font-bold text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-mk-count",
                                        "type": "termCount",
                                        "options": {
                                          "label": "",
                                          "suffix": " pieces",
                                          "singularSuffix": " piece",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs text-[#7A7167]"
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
                        "id": "ag-sell",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#D9A441] p-7 lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-sell-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-16 -right-10 h-56 w-40 rounded-t-full bg-[#F8EDD3]/40"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ag-sell-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-sell-k",
                                "type": "text",
                                "options": {
                                  "text": "For makers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#24201B]/70"
                                  }
                                }
                              },
                              {
                                "id": "ag-sell-h",
                                "type": "heading",
                                "options": {
                                  "text": "Make it? Sell it on Angina.",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-normal leading-[1] text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-sell-p",
                                "type": "text",
                                "options": {
                                  "text": "Open a shop in a day. We handle payments, delivery and assembly; you keep making.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm leading-relaxed text-[#24201B]/75"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-sell-btn",
                            "type": "button",
                            "options": {
                              "text": "Open your shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconBuildingStore",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#24201B] px-5 py-3 transition-colors hover:bg-[#C65D3B]"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#D9A441]"
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
          },
          {
            "id": "ag-budget",
            "type": "section",
            "options": {
              "anchor": "budget"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-14"
              }
            },
            "children": [
              {
                "id": "ag-budget-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                  }
                },
                "children": [
                  {
                    "id": "ag-budget-t",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-1"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-budget-k",
                        "type": "text",
                        "options": {
                          "text": "Shop by budget",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                          }
                        }
                      },
                      {
                        "id": "ag-budget-h",
                        "type": "heading",
                        "options": {
                          "text": "Something lovely at every price.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#24201B] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-budget-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-2 sm:grid-cols-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-bud-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center rounded-t-full rounded-b-[18px] px-6 pb-4 pt-7 transition-all hover:-translate-y-1 bg-white ring-1 ring-[#E6DED2] hover:ring-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-bud-1-k",
                            "type": "text",
                            "options": {
                              "text": "Under",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-bud-1-btn",
                            "type": "button",
                            "options": {
                              "text": "৳999",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-999",
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
                                "classes": "font-heading text-3xl font-normal whitespace-nowrap text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-bud-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center rounded-t-full rounded-b-[18px] px-6 pb-4 pt-7 transition-all hover:-translate-y-1 bg-white ring-1 ring-[#E6DED2] hover:ring-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-bud-2-k",
                            "type": "text",
                            "options": {
                              "text": "Under",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-bud-2-btn",
                            "type": "button",
                            "options": {
                              "text": "৳2,499",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-2499",
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
                                "classes": "font-heading text-3xl font-normal whitespace-nowrap text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-bud-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center rounded-t-full rounded-b-[18px] px-6 pb-4 pt-7 transition-all hover:-translate-y-1 bg-white ring-1 ring-[#E6DED2] hover:ring-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-bud-3-k",
                            "type": "text",
                            "options": {
                              "text": "Under",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-bud-3-btn",
                            "type": "button",
                            "options": {
                              "text": "৳4,999",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-4999",
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
                                "classes": "font-heading text-3xl font-normal whitespace-nowrap text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-bud-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center rounded-t-full rounded-b-[18px] px-6 pb-4 pt-7 transition-all hover:-translate-y-1 bg-white ring-1 ring-[#E6DED2] hover:ring-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-bud-4-k",
                            "type": "text",
                            "options": {
                              "text": "Under",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-[#7A7167]"
                              }
                            }
                          },
                          {
                            "id": "ag-bud-4-btn",
                            "type": "button",
                            "options": {
                              "text": "৳9,999",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-9999",
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
                                "classes": "font-heading text-3xl font-normal whitespace-nowrap text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-bud-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center rounded-t-full rounded-b-[18px] px-6 pb-4 pt-7 transition-all hover:-translate-y-1 bg-[#24201B] text-white"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-bud-5-k",
                            "type": "text",
                            "options": {
                              "text": "Premium",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-wider text-white/60"
                              }
                            }
                          },
                          {
                            "id": "ag-bud-5-btn",
                            "type": "button",
                            "options": {
                              "text": "৳10k+",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/premium",
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
                                "classes": "font-heading text-3xl font-normal whitespace-nowrap text-[#D9A441]"
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
            "id": "ag-best",
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
                "id": "ag-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-best-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most loved",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Bestsellers.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The pieces customers come back for, and tell their friends about.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-best-slider",
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
                                  "bestseller"
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
                        "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-4 [&_.splide__track]:!pt-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !opacity-100 transition-colors !bg-[#24201B] hover:!bg-[#C65D3B] [&>svg]:!fill-white [&>svg]:!h-3.5 [&>svg]:!w-3.5 disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-best-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[20px] bg-white p-2.5 ring-1 ring-[#E6DED2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_44px_-30px_rgba(36,32,27,0.55)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-best-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-best-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-best-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] rounded-t-[90px] bg-[#EDE5D8] transition-[border-radius] duration-500 group-hover:rounded-t-[14px]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-best-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-2.5 left-2.5 z-[11] flex items-center gap-1 rounded-full bg-[#C65D3B] px-2.5 py-1 font-body text-[11px] font-bold text-white"
                                      },
                                      "discount": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-best-slider-c-fav",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHeart",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-2.5 top-2.5 z-[11] flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#24201B] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-best-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1.5 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-best-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 8,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-wider text-[#4E6B4E]"
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
                                    "id": "ag-best-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-semibold leading-snug text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-best-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-[11px] text-[#7A7167]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9A441]"
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
                            "id": "ag-best-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1.5 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-best-slider-c-price",
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
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#7A7167]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-best-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBagPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E4EBDD] text-[#2F4A36] transition-colors hover:bg-[#C65D3B] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "hidden"
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
            "id": "ag-styles",
            "type": "section",
            "options": {
              "anchor": "styles"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-styles-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-styles-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-styles-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-styles-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-styles-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-styles-label",
                                "type": "text",
                                "options": {
                                  "text": "Style edits",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-styles-h",
                            "type": "heading",
                            "options": {
                              "text": "Find your style.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-styles-sub",
                            "type": "text",
                            "options": {
                              "text": "Four edits, picked by our stylists from every maker on Angina.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ag-styles-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-style-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#E9DFCF]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-style-1-blocks",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-6 top-6 flex h-36 items-end gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-1-b1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[70%] flex-1 rounded-t-full bg-[#C9B79C] transition-all duration-500 group-hover:h-[90%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-1-b2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full flex-1 rounded-t-[14px] bg-[#6F6455] transition-all duration-500 group-hover:h-[75%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-1-b3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[55%] flex-1 rounded-full bg-[#2E2A25] transition-all duration-500 group-hover:h-[80%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ag-style-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto flex flex-col gap-2 rounded-[20px] bg-white/85 p-4 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-1-sw",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-style-1-sw-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#E9DFCF] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-1-sw-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#C9B79C] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-1-sw-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#6F6455] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-1-sw-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#2E2A25] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-style-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Japandi",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/style-japandi",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#C65D3B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-3xl font-normal text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-style-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Pale oak, linen and very little else.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-style-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#E7C9A9]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-style-2-blocks",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-6 top-6 flex h-36 items-end gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-2-b1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[70%] flex-1 rounded-t-full bg-[#C65D3B] transition-all duration-500 group-hover:h-[90%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-2-b2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full flex-1 rounded-t-[14px] bg-[#D9A441] transition-all duration-500 group-hover:h-[75%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-2-b3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[55%] flex-1 rounded-full bg-[#4E6B4E] transition-all duration-500 group-hover:h-[80%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ag-style-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto flex flex-col gap-2 rounded-[20px] bg-white/85 p-4 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-2-sw",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-style-2-sw-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#E7C9A9] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-2-sw-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#C65D3B] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-2-sw-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#D9A441] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-2-sw-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#4E6B4E] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-style-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Boho",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/style-boho",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#C65D3B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-3xl font-normal text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-style-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Rattan, macramé and plants on every shelf.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-style-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#8A5A36]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-style-3-blocks",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-6 top-6 flex h-36 items-end gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-3-b1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[70%] flex-1 rounded-t-full bg-[#D9A441] transition-all duration-500 group-hover:h-[90%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-3-b2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full flex-1 rounded-t-[14px] bg-[#3F6670] transition-all duration-500 group-hover:h-[75%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-3-b3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[55%] flex-1 rounded-full bg-[#24201B] transition-all duration-500 group-hover:h-[80%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ag-style-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto flex flex-col gap-2 rounded-[20px] bg-white/85 p-4 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-3-sw",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-style-3-sw-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#8A5A36] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-3-sw-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#D9A441] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-3-sw-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#3F6670] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-3-sw-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#24201B] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-style-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Mid-century",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/style-mid-century",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#C65D3B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-3xl font-normal text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-style-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Teak, tapered legs and mustard velvet.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-style-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-style-4-blocks",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-6 top-6 flex h-36 items-end gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-4-b1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[70%] flex-1 rounded-t-full bg-[#E9D3B0] transition-all duration-500 group-hover:h-[90%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-4-b2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full flex-1 rounded-t-[14px] bg-[#9E3B22] transition-all duration-500 group-hover:h-[75%]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-style-4-b3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[55%] flex-1 rounded-full bg-[#2F4A36] transition-all duration-500 group-hover:h-[80%]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "ag-style-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-auto flex flex-col gap-2 rounded-[20px] bg-white/85 p-4 backdrop-blur"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-style-4-sw",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-style-4-sw-1",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#C65D3B] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-4-sw-2",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#E9D3B0] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-4-sw-3",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#9E3B22] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-style-4-sw-4",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-4 rounded-full bg-[#2F4A36] ring-2 ring-white"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-style-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Deshi craft",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/style-deshi-craft",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 flex-row-reverse after:absolute after:inset-0 after:content-['']"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#C65D3B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-3xl font-normal text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-style-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Jute, nakshi kantha, terracotta and cane.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm text-[#7A7167]"
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
            "id": "ag-services",
            "type": "section",
            "options": {
              "anchor": "services"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-services-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-services-l",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-services-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-services-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-services-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-services-k-arch",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-services-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Services",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-services-h",
                                "type": "heading",
                                "options": {
                                  "text": "More than a marketplace.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-services-sub",
                                "type": "text",
                                "options": {
                                  "text": "The help that makes buying a sofa online feel easy.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
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
                    "id": "ag-services-r",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-svc-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[26px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#F7E4DA]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-svc-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTool",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-[12px] bg-[#C65D3B] text-white"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Free delivery & assembly",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-normal leading-tight text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-1-p",
                            "type": "text",
                            "options": {
                              "text": "Furniture over ৳4,999 is delivered to your room and assembled by our team. We take the packaging away.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-svc-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[26px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#E4EBDD]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-svc-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPalette",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-[12px] bg-[#4E6B4E] text-white"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Free styling call",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-normal leading-tight text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-2-p",
                            "type": "text",
                            "options": {
                              "text": "Send photos of your room; a stylist sends back a mood board and a shopping list in 48 hours.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-svc-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 rounded-[26px] p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#F8EDD3]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-svc-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCreditCard",
                              "size": 24,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 items-center justify-center rounded-t-full rounded-b-[12px] bg-[#D9A441] text-white"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-3-h",
                            "type": "heading",
                            "options": {
                              "text": "0% EMI, 3 to 12 months",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-normal leading-tight text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-svc-3-p",
                            "type": "text",
                            "options": {
                              "text": "Spread the cost on cards from 20+ banks. No hidden fees, no paperwork.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm leading-relaxed text-[#7A7167]"
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
            "id": "ag-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-reviews-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Reviews",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Homes, made.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ag-reviews-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-rev-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-7 ring-1 ring-[#E6DED2] transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-rev-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-1-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#D9A441]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-1-star-1",
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
                                    "id": "ag-rev-1-star-2",
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
                                    "id": "ag-rev-1-star-3",
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
                                    "id": "ag-rev-1-star-4",
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
                                    "id": "ag-rev-1-star-5",
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
                                "id": "ag-rev-1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The sofa came in two pieces and two guys assembled it in twenty minutes. The terracotta is exactly the colour in the photos.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-normal leading-snug text-[#24201B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-rev-1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-[#E6DED2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-1-av",
                                "type": "text",
                                "options": {
                                  "text": "NS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-t-full rounded-b-[10px] bg-[#F7E4DA] font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-rev-1-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-1-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Nabila S.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-rev-1-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Mira 3-seat sofa · Kaath Studio",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A7167]"
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
                        "id": "ag-rev-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-7 ring-1 ring-[#E6DED2] transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-rev-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-2-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#D9A441]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-2-star-1",
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
                                    "id": "ag-rev-2-star-2",
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
                                    "id": "ag-rev-2-star-3",
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
                                    "id": "ag-rev-2-star-4",
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
                                    "id": "ag-rev-2-star-5",
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
                                "id": "ag-rev-2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Six plants, pots and soil for my balcony. One snake plant arrived bruised and they replaced it the next day.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-normal leading-snug text-[#24201B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-rev-2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-[#E6DED2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-2-av",
                                "type": "text",
                                "options": {
                                  "text": "AM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-t-full rounded-b-[10px] bg-[#E4EBDD] font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-rev-2-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-2-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Arif M.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-rev-2-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Balcony starter set · Sobuj Nursery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A7167]"
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
                        "id": "ag-rev-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-[28px] bg-white p-7 ring-1 ring-[#E6DED2] transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-rev-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-3-stars",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-0.5 text-[#D9A441]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-3-star-1",
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
                                    "id": "ag-rev-3-star-2",
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
                                    "id": "ag-rev-3-star-3",
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
                                    "id": "ag-rev-3-star-4",
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
                                    "id": "ag-rev-3-star-5",
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
                                "id": "ag-rev-3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Handmade and you can tell. I messaged the maker through the shop and she sent me photos of it on the loom.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl font-normal leading-snug text-[#24201B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-rev-3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 border-t border-[#E6DED2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-rev-3-av",
                                "type": "text",
                                "options": {
                                  "text": "TK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 items-center justify-center rounded-t-full rounded-b-[10px] bg-[#F8EDD3] font-body text-sm font-bold text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-rev-3-wt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-rev-3-n",
                                    "type": "text",
                                    "options": {
                                      "text": "Tahmina K.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-rev-3-i",
                                    "type": "text",
                                    "options": {
                                      "text": "Nakshi kantha bedcover · Rangpur Looms",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A7167]"
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
            "id": "ag-ideas",
            "type": "section",
            "options": {
              "anchor": "ideas"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-ideas-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-ideas-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-ideas-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ideas-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-ideas-k-arch",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ag-ideas-label",
                                "type": "text",
                                "options": {
                                  "text": "Ideas & how-tos",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-ideas-h",
                            "type": "heading",
                            "options": {
                              "text": "Ideas for every room.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-ideas-all",
                        "type": "button",
                        "options": {
                          "text": "All ideas",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 transition-colors flex-row-reverse bg-white ring-1 ring-[#E6DED2] hover:bg-[#24201B] hover:ring-[#24201B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#C65D3B] group-hover:text-[#D9A441]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#24201B] group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-ideas-grid",
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
                        "id": "ag-ideas-loop",
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
                            "id": "ag-ideas-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[24px] bg-[#EDE5D8]"
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
                            "id": "ag-ideas-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-ideas-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold uppercase tracking-wider text-[#4E6B4E]"
                                  }
                                }
                              },
                              {
                                "id": "ag-ideas-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-normal leading-snug text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-ideas-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read the idea",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#7A7167]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex flex-row-reverse items-center justify-end gap-1.5 font-body text-sm font-bold text-[#24201B]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#C65D3B] transition-transform group-hover/rm:translate-x-1"
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
            "id": "ag-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ag-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "ag-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-faq-k-arch",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-4 w-3 rounded-t-full bg-[#C65D3B]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "ag-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7167]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know.",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-[38px] font-normal leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-[60px] text-[#24201B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Makers, delivery, assembly and returns.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base leading-relaxed text-[#7A7167]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ag-faq-help",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative -mt-4 flex flex-col gap-3 overflow-hidden rounded-[28px] bg-[#2F4A36] p-6 text-white"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-help-arch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-12 -right-8 h-40 w-28 rounded-t-full border-[10px] border-white/10"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ag-faq-help-k",
                            "type": "text",
                            "options": {
                              "text": "Need a hand choosing?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-heading text-2xl font-normal"
                              }
                            }
                          },
                          {
                            "id": "ag-faq-help-p",
                            "type": "text",
                            "options": {
                              "text": "Send a photo of your room on WhatsApp and a stylist will suggest pieces that fit, free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative font-body text-sm leading-relaxed text-white/75"
                              }
                            }
                          },
                          {
                            "id": "ag-faq-help-btn",
                            "type": "button",
                            "options": {
                              "text": "Chat with a stylist",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "https://wa.me/",
                              "target": "_blank",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mt-1 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#D9A441] px-5 py-2.5 transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#2F4A36]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#24201B] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ag-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Who sells on Angina?",
                          "classes": ""
                        },
                        {
                          "label": "How long does delivery take?",
                          "classes": ""
                        },
                        {
                          "label": "Do you assemble furniture?",
                          "classes": ""
                        },
                        {
                          "label": "Can I return something?",
                          "classes": ""
                        },
                        {
                          "label": "What if a plant dies?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 font-body text-base font-semibold text-[#24201B] ring-1 ring-[#E6DED2] transition-colors hover:ring-[#C65D3B]/50"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#24201B] !text-white !ring-[#24201B]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#C65D3B]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Independent makers, small studios and established brands from across Bangladesh. Every shop is checked by our team before it can list, and each product page shows who made it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Small items ship in 2-4 days. Furniture is made or prepared to order and arrives in 5-10 days. Orders from several makers can arrive separately; you pay delivery once.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Delivery and assembly are free on orders over ৳4,999 inside Dhaka, Chattogram and Sylhet, and we take the packaging away.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, within 7 days if it is unused and in its packaging. Damaged or not as described? We pick it up free and refund you in full.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Plants are covered for 30 days. Send us a photo and we replace it, no questions asked.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A7167]"
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
            "id": "ag-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "40,000+ pieces",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop Everything",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Furniture, decor, lighting, textiles, plants and garden from every maker, newest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-shop-grid-c-thumb",
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
                                    "id": "ag-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-shop-grid-c-rate",
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
                                    "id": "ag-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-shop-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-shop-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
                        "id": "ag-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-shop-promise",
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
                "id": "ag-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Verified makers",
                          "description": "Every shop checked",
                          "icon": "IconPlant2",
                          "iconSize": ""
                        },
                        {
                          "title": "Delivery & assembly",
                          "description": "Free over ৳4,999",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, card",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day returns",
                          "description": "Changed your mind? Send it back",
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
                        "classes": "font-body text-sm font-extrabold text-[#24201B]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7E4DA] text-[#C65D3B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-shop-promise-fb-ic",
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
                        "id": "ag-shop-promise-fb-t",
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
                        "id": "ag-shop-promise-fb-d",
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
            "id": "ag-pd",
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
                "id": "ag-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-pd-grid",
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
                        "id": "ag-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#E4EBDD] via-white to-[#F8EDD3] p-4 shadow-[0_12px_30px_rgba(20,35,26,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#24201B]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#24201B]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#C65D3B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-pd-cats",
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
                                "classes": "rounded-full bg-[#E4EBDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2F4A36] hover:bg-[#2F4A36] hover:text-white"
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
                            "id": "ag-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl leading-tight text-[#24201B] sm:text-4xl tracking-tight font-normal tracking-[-0.01em]"
                              }
                            }
                          },
                          {
                            "id": "ag-pd-rate",
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
                                "classes": "font-body font-bold text-[#24201B]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "ag-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-price",
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
                                    "classes": "font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#C65D3B] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "ag-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#7A7167]"
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
                            "id": "ag-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#24201B]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#24201B] transition-colors hover:border-[#2F4A36] hover:bg-[#E4EBDD]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#2F4A36] !bg-[#E4EBDD] !text-[#3E5C45]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "ag-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out · ask the maker to restock",
                              "inStockText": "In stock · ships in 2-4 days",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#C65D3B]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2F4A36]"
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
                            "id": "ag-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#24201B]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F0E8]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F5F0E8]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#C65D3B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#A7472A]"
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
                            "id": "ag-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Verified maker",
                                  "description": "Shop checked by us",
                                  "icon": "IconPlant2",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free assembly",
                                  "description": "Over ৳4,999",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day returns",
                                  "description": "Free pickup",
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
                                "classes": "font-body text-base font-bold text-[#24201B]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4EBDD] text-[#2F4A36]"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-perks-ic",
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
                                "id": "ag-pd-perks-t",
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
                                "id": "ag-pd-perks-d",
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
                            "id": "ag-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-sku",
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
                                    "classes": "font-semibold text-[#24201B]"
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
                                "id": "ag-pd-brands",
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
                                    "classes": "font-semibold text-[#24201B]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C65D3B]"
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
                                "id": "ag-pd-tags",
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
                                    "classes": "font-semibold text-[#24201B]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C65D3B]"
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
            "id": "ag-pd-tabs-sec",
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
                "id": "ag-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Size & Care",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F0E8] px-5 py-2.5 font-body text-sm font-semibold text-[#24201B] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#24201B] !text-white shadow-md"
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
                            "id": "ag-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-body font-bold [&_h2]:text-3xl [&_h2]: [&_h2]:text-[#24201B] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]: [&_h3]:text-[#24201B] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]: [&_a]:text-[#C65D3B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D9A441] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconLeaf",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Dimensions (W × D × H) and materials are listed in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Handmade and natural materials vary slightly: that is part of the charm",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wipe wood with a dry cloth; keep it out of direct sun and damp",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Plants arrive potted with a care card: light, water and pet safety",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2F4A36]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Small items ship in 2-4 days; furniture in 5-10 days, assembled on delivery",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free delivery and assembly on orders over ৳4,999",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cash on delivery, bKash, Nagad, card or 0% EMI",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged or not as described? Free pickup and refund within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2F4A36]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ag-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F5F0E8] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F5F0E8] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ag-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F7E4DA]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#24201B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ag-pd-reviews-rate",
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
                                        "id": "ag-pd-reviews-co",
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
                                    "id": "ag-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was the quality, packing and delivery?",
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
                                        "classes": "font-body text-sm font-bold text-[#24201B]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F0E8] px-4 py-3 text-sm text-[#24201B] placeholder:text-gray-400 focus:border-[#2F4A36] focus:outline-none focus:ring-2 focus:ring-[#2F4A36]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C65D3B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A7472A] disabled:opacity-50"
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
            "id": "ag-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16"
              }
            },
            "children": [
              {
                "id": "ag-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the look",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F7E4DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C65D3B]"
                          }
                        }
                      },
                      {
                        "id": "ag-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-pd-rel-c-thumb",
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
                                    "id": "ag-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-pd-rel-c-rate",
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
                                    "id": "ag-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-pd-rel-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-pd-rel-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
            "id": "ag-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "All departments",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Furniture, decor, lighting, textiles, kitchen, bath, plants and garden. Pick a department.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-cat-grid",
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
                        "id": "ag-cat-grid-loop",
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
                            "id": "ag-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E4EBDD] transition-transform"
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
                            "id": "ag-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-cat-grid-count",
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
                        "id": "ag-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ag-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2F4A36] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-cat1-grid-c-thumb",
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
                                    "id": "ag-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-cat1-grid-c-rate",
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
                                    "id": "ag-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-cat1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
                        "id": "ag-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pieces by room, style and deal: Japandi, boho, under ৳999, flash deals and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C65D3B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C65D3B]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F5F0E8] px-2 py-0.5 text-[10px] font-bold text-[#7A7167]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ag-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ag-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2F4A36] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-tag1-grid-c-thumb",
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
                                    "id": "ag-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-tag1-grid-c-rate",
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
                                    "id": "ag-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-tag1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
                        "id": "ag-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Independent makers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Makers & Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "900+ independent makers and brands, every shop checked by our team.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-brand-grid",
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
                        "id": "ag-brand-grid-loop",
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
                            "id": "ag-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F5F0E8] p-3"
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
                            "id": "ag-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#24201B] group-hover:text-[#C65D3B]"
                              }
                            }
                          },
                          {
                            "id": "ag-brand-grid-count",
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
                        "id": "ag-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ag-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2F4A36] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-brand1-grid-c-thumb",
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
                                    "id": "ag-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-brand1-grid-c-rate",
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
                                    "id": "ag-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-brand1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
                        "id": "ag-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Ideas & how-tos",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Ideas for Every Room",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Room makeovers, plant care, small-space tricks and maker stories.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-blog-grid",
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
                        "id": "ag-blog-grid-loop",
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
                            "id": "ag-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8EDD3]"
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
                            "id": "ag-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2F4A36]"
                                  }
                                }
                              },
                              {
                                "id": "ag-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
                                  }
                                }
                              },
                              {
                                "id": "ag-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read the idea",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#C65D3B]"
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
                        "id": "ag-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#24201B] transition-colors hover:border-[#C65D3B] hover:text-[#C65D3B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C65D3B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ag-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EDD3] via-white to-[#F5F0E8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ag-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-post-k",
                    "type": "text",
                    "options": {
                      "text": "Ideas & how-tos",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E4EBDD] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl leading-tight text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#7A7167]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-post-author",
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
                            "classes": "font-body font-bold text-[#24201B]"
                          }
                        }
                      },
                      {
                        "id": "ag-post-dot",
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
                        "id": "ag-post-date",
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
                    "id": "ag-post-thumb",
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
            "id": "ag-post-body",
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
                "id": "ag-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-body font-bold [&_h2]:text-3xl [&_h2]: [&_h2]:text-[#24201B] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]: [&_h3]:text-[#24201B] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]: [&_a]:text-[#C65D3B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D9A441] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16"
              }
            },
            "children": [
              {
                "id": "ag-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F5F0E8] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F5F0E8] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F7E4DA]"
                              }
                            }
                          },
                          {
                            "id": "ag-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#24201B]"
                              }
                            }
                          },
                          {
                            "id": "ag-post-cmt-co",
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
                        "id": "ag-post-cmt-form",
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
                            "classes": "font-body text-sm font-bold text-[#24201B]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F5F0E8] px-4 py-3 text-sm text-[#24201B] placeholder:text-gray-400 focus:border-[#2F4A36] focus:outline-none focus:ring-2 focus:ring-[#2F4A36]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C65D3B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A7472A] disabled:opacity-50"
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
            "id": "ag-post-more",
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
                "id": "ag-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Ideas",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl text-[#24201B] tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-post-more-grid",
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
                        "id": "ag-post-more-grid-loop",
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
                            "id": "ag-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8EDD3]"
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
                            "id": "ag-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2F4A36]"
                                  }
                                }
                              },
                              {
                                "id": "ag-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#24201B] transition-colors group-hover:text-[#C65D3B]"
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
            "id": "ag-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7E4DA] py-12 sm:py-14"
              }
            },
            "children": [
              {
                "id": "ag-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ag-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold text-[#2F4A36]"
                      }
                    }
                  },
                  {
                    "id": "ag-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl text-[#24201B] sm:text-5xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, follow your favourite makers and manage your addresses.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ag-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-12"
              }
            },
            "children": [
              {
                "id": "ag-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#24201B] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#D9A441]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl text-white tracking-tight font-normal tracking-[-0.01em]"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#C65D3B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#C65D3B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#C65D3B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "ag-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ag-acc-3",
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
                                "id": "ag-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C65D3B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A7472A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "ag-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C65D3B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A7472A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "ag-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "ag-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F5F0E8] px-5 py-2.5 font-body text-sm font-semibold text-[#24201B] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#24201B] !text-white shadow-md"
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
                                "id": "ag-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C65D3B]/10 text-[#C65D3B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ag-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#C65D3B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C65D3B]/10 text-[#C65D3B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#C65D3B]/40 hover:bg-[#C65D3B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C65D3B]/10 text-[#C65D3B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ag-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C65D3B]/10 text-[#C65D3B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C65D3B] focus:outline-none focus:ring-2 focus:ring-[#C65D3B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#C65D3B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A7472A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D3B]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "ag-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EDD3] via-white to-[#F5F0E8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ag-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(20,35,26,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E4EBDD] text-[#2F4A36]"
                          }
                        }
                      },
                      {
                        "id": "ag-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F7E4DA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C65D3B]"
                          }
                        }
                      },
                      {
                        "id": "ag-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Your Order Is Confirmed!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl text-[#24201B] sm:text-4xl tracking-tight font-normal tracking-[-0.01em]"
                          }
                        }
                      },
                      {
                        "id": "ag-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your makers are packing your pieces now. Follow every item from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#7A7167] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "ag-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order and notify each maker",
                              "icon": ""
                            },
                            {
                              "text": "Each piece is checked, wrapped and packed for the journey",
                              "icon": ""
                            },
                            {
                              "text": "Delivered and, for furniture, assembled in your room: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#F5F0E8] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#C65D3B]"
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
                        "id": "ag-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C65D3B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A7472A] w-full sm:w-auto"
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
                            "id": "ag-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2F4A36] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2F4A36] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2F4A36] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#2F4A36] whitespace-nowrap group-hover:text-white"
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
            "id": "ag-ty-promise",
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
                "id": "ag-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Verified makers",
                          "description": "Every shop checked",
                          "icon": "IconPlant2",
                          "iconSize": ""
                        },
                        {
                          "title": "Delivery & assembly",
                          "description": "Free over ৳4,999",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Or bKash, Nagad, card",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day returns",
                          "description": "Changed your mind? Send it back",
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
                        "classes": "font-body text-sm font-extrabold text-[#24201B]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7E4DA] text-[#C65D3B]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-ty-promise-fb-ic",
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
                        "id": "ag-ty-promise-fb-t",
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
                        "id": "ag-ty-promise-fb-d",
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
            "id": "ag-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EDD3] via-white to-[#F5F0E8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ag-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl text-[#C65D3B] sm:text-9xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8EDD3] text-[#24201B]"
                      }
                    }
                  },
                  {
                    "id": "ag-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl text-[#24201B] sm:text-4xl tracking-tight font-normal tracking-[-0.01em]"
                      }
                    }
                  },
                  {
                    "id": "ag-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this piece may have sold out. Head back home or browse every department.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#7A7167] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "ag-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C65D3B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(18,161,80,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A7472A] w-full sm:w-auto"
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
                        "id": "ag-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Browse Everything",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2F4A36] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2F4A36] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2F4A36] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#2F4A36] whitespace-nowrap group-hover:text-white"
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
            "id": "ag-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F5F0E8] py-16"
              }
            },
            "children": [
              {
                "id": "ag-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ag-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#D9A441] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#24201B]"
                          }
                        }
                      },
                      {
                        "id": "ag-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl text-[#24201B] sm:text-4xl tracking-tight font-normal tracking-[-0.01em]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ag-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ag-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E6DED2] bg-white p-3 transition-all duration-200 hover:border-[#C65D3B]/50 hover:shadow-[0_14px_30px_-16px_rgba(18,161,80,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ag-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-nf-grid-c-thumb",
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
                                    "id": "ag-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[2] flex items-center gap-0.5 rounded-br-xl rounded-tl-lg bg-[#9E3B22] px-2 py-1 text-[11px] font-extrabold text-white"
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
                                "id": "ag-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ag-nf-grid-c-rate",
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
                                    "id": "ag-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-sm font-semibold leading-snug text-[#24201B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ag-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 4,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#7A7167]"
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
                            "id": "ag-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col gap-2.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ag-nf-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-[#7A7167] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#24201B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C65D3B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C65D3B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ag-nf-grid-c-add",
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
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-[#C65D3B] text-[#C65D3B] transition-colors hover:bg-[#C65D3B] hover:text-white"
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
