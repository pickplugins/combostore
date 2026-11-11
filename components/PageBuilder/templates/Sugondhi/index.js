/**
 * Template: Sugondhi Perfumery.
 *
 * An airy, luxurious perfume store (sugondhi is Bangla for "fragrance"):
 * designer and niche perfumes, pure alcohol-free attar and oud, decants and
 * gift sets. Like the other complete templates here it carries all sixteen
 * page types - Header, Footer, Home, Shop, Product, the six taxonomy
 * archives, Blog Archive, Blog Single, Account, Thank you and 404 - so
 * applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to sg-, palette remapped, copy
 * rewritten); the Header is rearranged and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * An oud-brown promo bar, then the logo (an arch-shaped "S" mark filled with
 * the scent spectrum and the SUGONDHI wordmark), search, account and cart;
 * the menu sits centred on its own row, where the scent-family items (Attar,
 * Oud, Floral, Fresh) carry a small coloured dot (`before:` in each item's
 * own `link` classes); the header ends in the "olfactory spectrum", a 3px
 * gradient through saffron, amber, rose, lavender, sage and oud.
 *
 * THE HERO
 *
 * The headline wraps around the bottle - "Wear your" | bottle | "story." -
 * with three frosted note bubbles (Top: Bergamot, Heart: Damask rose, Base:
 * Oud & amber) floating around it and three blurred scent clouds slowly
 * pulsing behind (public/templates/sugondhi-bottle.svg).
 *
 * DESIGN
 *
 *   amber    #C8742E  primary: hovers, kickers, accents      #A65B1F dark  #F6E6D6 tint
 *   oud      #2A1B17  text, buttons, dark bands              #3E2A23
 *   saffron  #E7B84A  accent: codes, stars, highlights       #FAEED0 tint
 *   rose #D98C8C / #F6E1DF   mist #CDBEE8 / #EEE8F8   sage #A9C3A5 / #E6EEE3
 *   bone #F7F2EC / #EFE6DB   muted #7A6A62   line #E8DED3
 *
 * Fonts (template meta): Italiana (headings; one weight, so they carry
 * font-normal) and Urbanist (body, spaced uppercase labels).
 *
 * Product cards: the bottle in an arch-topped frame on a soft bone-to-mist
 * gradient that warms on hover, an oud discount pill, the name in Italiana,
 * one italic excerpt line (use the excerpt for the type and notes, e.g.
 * "EDP · 100 ml · Oud, Amber"), the price and a round add button, all
 * centred.
 *
 * HOME
 *
 *   Hero - notes marquee - scent families as gradient swatches (#families) -
 *   new arrivals - notes pyramid (#notes) - signature scents (#bestsellers) -
 *   pure attar band (#attar) - arch-shaped collections (#categories) - for
 *   him - longevity guide by concentration (#longevity) - decants and gift
 *   sets (#decants) - for her - perfume houses (#houses) - reviews - the
 *   scent journal (#journal) - FAQ (#faq) - scent-club CTA (#club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: men, women, attar, oud, decants, gift-sets. Tag slugs:
 *     bestseller, sale, and the families floral, woody, amber, fresh, oud,
 *     musk. Perfume houses are product_brand terms.
 *   - The hero notes and the bottle ("Oud Noir") are placeholders for your
 *     signature scent.
 *   - Longevity hours are typical ranges, not guarantees.
 *   - Contact details, promo code SCENTED, the 10% offer, free samples,
 *     the birthday decant, attar facts, "15,000+ customers" and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Sugondhi Perfumery",
    "description": "Airy-luxe perfume and attar store on bone with oud brown, amber, rose, saffron and lavender mist; Italiana display and Urbanist: a header over an olfactory-spectrum line with scent-family dots in the menu, a hero where the headline wraps around the bottle with floating top / heart / base notes and drifting scent clouds, a notes marquee, scent-family swatches, new arrivals, a notes pyramid, signature scents, a pure-attar band, arch-shaped collections, a longevity guide, decants and gift sets, him / her rows, perfume houses, reviews, the scent journal, FAQ and a scent-club CTA. All 16 pages.",
    "thumbnail": "/templates/sugondhi.svg",
    "meta": {
      "fonts": [
        {
          "family": "Italiana",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Italiana&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Urbanist",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Italiana",
        "body": "Urbanist"
      },
      "colors": {
        "primary": "#C8742E",
        "secondary": "#2A1B17",
        "accent": "#E7B84A",
        "background": "#F7F2EC",
        "foreground": "#2A1B17",
        "muted": "#7A6A62"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "sg-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#F7F2EC]/90 backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "sg-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#2A1B17] px-4 py-2.5 text-center font-body text-xs tracking-wide text-[#F7F2EC]/85"
                  }
                },
                "children": [
                  {
                    "id": "sg-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "A free sample with every order · 10% off your first bottle with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "sg-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "SCENTED",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#E7B84A] px-2.5 py-0.5 font-body text-[11px] font-semibold tracking-[0.15em] text-[#2A1B17]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Find your scent",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#families",
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
                        "classes": "font-body text-xs font-semibold text-[#E7B84A] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "sg-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[76px] items-center justify-between gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "S",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-9 text-2xl items-center justify-center rounded-t-full rounded-b-[10px] bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)] font-heading leading-none text-[#2A1B17] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]"
                              }
                            }
                          },
                          {
                            "id": "sg-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Sugondhi",
                                  "src": "https://placehold.co/200x64?text=Sugondhi",
                                  "altText": "Sugondhi Perfumery",
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
                                    "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.22em] text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Perfume · Attar · Oud",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.32em] text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search a scent, note or house...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-56 rounded-full border border-[#2A1B17]/15 bg-white/70 py-1 pl-1 pr-3 transition-all focus-within:border-[#C8742E] focus-within:bg-white md:block xl:w-64"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2A1B17] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#7A6A62]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C8742E]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#C8742E]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C8742E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A65B1F]"
                              }
                            }
                          },
                          {
                            "id": "sg-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/15 text-[#2A1B17] transition-colors hover:bg-white"
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
                            "id": "sg-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#2A1B17] text-[#E7B84A] transition-colors hover:bg-[#C8742E] hover:text-white"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#C8742E] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F7F2EC] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#2A1B17]"
                              },
                              "title-icon": {
                                "classes": "text-[#C8742E]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#C8742E] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#C8742E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#A65B1F]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#C8742E] px-4 py-2 text-sm font-medium text-[#C8742E] transition-colors hover:bg-[#C8742E] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8742E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A65B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "sg-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/15 text-[#2A1B17]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F7F2EC] p-2 text-[#2A1B17] transition-colors hover:bg-[#C8742E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "S",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-8 text-xl items-center justify-center rounded-t-full rounded-b-[10px] bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)] font-heading leading-none text-[#2A1B17] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sg-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Sugondhi",
                                          "src": "https://placehold.co/200x64?text=Sugondhi",
                                          "altText": "Sugondhi Perfumery",
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
                                            "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.22em] text-[#2A1B17]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sg-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Perfume · Attar · Oud",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-1 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.32em] text-[#7A6A62]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "sg-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search scents...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F7F2EC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#2A1B17] focus-within:ring-2 focus-within:ring-[#2A1B17]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2A1B17] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#7A6A62]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#C8742E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#C8742E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#C8742E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#A65B1F]"
                                  }
                                }
                              },
                              {
                                "id": "sg-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-[#E8DED3] py-3.5 font-heading text-2xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
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
                                    "id": "sg-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New",
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
                                    "id": "sg-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "For him",
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
                                    "id": "sg-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "For her",
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
                                    "id": "sg-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Attar",
                                      "url": "/categories/attar"
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
                                    "id": "sg-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Oud",
                                      "url": "/categories/oud"
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
                                    "id": "sg-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Floral",
                                      "url": "/tags/floral"
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
                                    "id": "sg-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Fresh",
                                      "url": "/tags/fresh"
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
                                    "id": "sg-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Decants",
                                      "url": "/categories/decants"
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
                                    "id": "sg-hdr-m-menu-i9",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Gift sets",
                                      "url": "/categories/gift-sets"
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
                "id": "sg-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden w-full border-t border-[#2A1B17]/10 lg:block"
                  }
                },
                "children": [
                  {
                    "id": "sg-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-12 items-center justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hdr-menu",
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
                            "classes": "flex items-center gap-7 xl:gap-10"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-2 whitespace-nowrap font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2A1B17]/80 transition-colors hover:text-[#C8742E]"
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
                            "id": "sg-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "New",
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
                            "id": "sg-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "For him",
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
                            "id": "sg-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "For her",
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
                            "id": "sg-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Attar",
                              "url": "/categories/attar"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#C8742E] before:content-['']"
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
                            "id": "sg-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Oud",
                              "url": "/categories/oud"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#3E2A23] before:content-['']"
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
                            "id": "sg-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Floral",
                              "url": "/tags/floral"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D98C8C] before:content-['']"
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
                            "id": "sg-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Fresh",
                              "url": "/tags/fresh"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#A9C3A5] before:content-['']"
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
                            "id": "sg-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Decants",
                              "url": "/categories/decants"
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
                            "id": "sg-hdr-menu-i9",
                            "type": "menuItem",
                            "options": {
                              "label": "Gift sets",
                              "url": "/categories/gift-sets"
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
              },
              {
                "id": "sg-hdr-spectrum",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "h-[3px] w-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
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
            "id": "sg-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2A1B17] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "sg-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "sg-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,#FAEED0,#F6E1DF,#EEE8F8)] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Scent Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                              }
                            }
                          },
                          {
                            "id": "sg-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A free sample with every order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#2A1B17] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "sg-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for samples, early launches and a birthday decant of your choice.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconSparkles",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#2A1B17] px-8 py-4 transition-all hover:bg-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#E7B84A]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F2EC] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "sg-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "sg-ftr-grid",
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
                        "id": "sg-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "S",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-8 text-xl items-center justify-center rounded-t-full rounded-b-[10px] bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)] font-heading leading-none text-[#2A1B17] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]"
                                  }
                                }
                              },
                              {
                                "id": "sg-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Sugondhi",
                                      "src": "https://placehold.co/200x64?text=Sugondhi",
                                      "altText": "Sugondhi Perfumery",
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
                                        "classes": "font-heading text-[30px] uppercase leading-none tracking-[0.22em] text-[#F7F2EC]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "sg-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Original designer and niche perfumes, pure alcohol-free attar and oud, with decants to try before you buy. Gift-wrapped and delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "sg-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C8742E]"
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
                                "id": "sg-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C8742E]"
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
                                "id": "sg-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C8742E]"
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
                                "id": "sg-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#C8742E]"
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
                        "id": "sg-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "For Him",
                                  "icon": "",
                                  "slug": "/categories/men"
                                },
                                {
                                  "text": "For Her",
                                  "icon": "",
                                  "slug": "/categories/women"
                                },
                                {
                                  "text": "Attar",
                                  "icon": "",
                                  "slug": "/categories/attar"
                                },
                                {
                                  "text": "Oud",
                                  "icon": "",
                                  "slug": "/categories/oud"
                                },
                                {
                                  "text": "Decants",
                                  "icon": "",
                                  "slug": "/categories/decants"
                                },
                                {
                                  "text": "Gift Sets",
                                  "icon": "",
                                  "slug": "/categories/gift-sets"
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
                                "classes": "transition-colors hover:text-[#E7B84A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E7B84A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ftr-ll-care",
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
                                  "text": "Scent Families",
                                  "icon": "",
                                  "slug": "/#families"
                                },
                                {
                                  "text": "Delivery & Returns",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Scent Journal",
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
                                "classes": "transition-colors hover:text-[#E7B84A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E7B84A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ftr-contact-h",
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
                            "id": "sg-ftr-address",
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
                                "value": "Every day, 10am - 10pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E7B84A]"
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
                                "classes": "shrink-0 text-[#C8742E]"
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
                "id": "sg-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "sg-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Sugondhi Perfumery. All rights reserved. Wear your story.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "sg-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-body text-xs tracking-wide"
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
            "id": "sg-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#F7F2EC] pb-16 pt-12 lg:pb-20 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "sg-cloud-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-[#E7B84A]/35 blur-[90px]"
                  }
                },
                "children": []
              },
              {
                "id": "sg-cloud-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute left-1/3 top-1/3 h-[460px] w-[460px] animate-[pulse_9s_ease-in-out_infinite] rounded-full bg-[#D98C8C]/30 blur-[100px]"
                  }
                },
                "children": []
              },
              {
                "id": "sg-cloud-3",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-[#CDBEE8]/50 blur-[90px]"
                  }
                },
                "children": []
              },
              {
                "id": "sg-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-hero-top",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hero-k-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-hero-dash",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-hero-k",
                            "type": "text",
                            "options": {
                              "text": "Perfume · Attar · Oud",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                              }
                            }
                          },
                          {
                            "id": "sg-hero-dash2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "sg-hero-stage",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-16"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hero-h1a",
                        "type": "heading",
                        "options": {
                          "text": "Wear your",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-center text-6xl leading-[0.95] text-[#2A1B17] sm:text-7xl lg:text-right lg:text-6xl xl:text-8xl"
                          }
                        }
                      },
                      {
                        "id": "sg-hero-bottle",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-[260px] sm:w-[320px] lg:w-[300px] xl:w-[340px]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-hero-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/sugondhi-bottle.svg",
                              "altText": "A faceted perfume bottle with amber liquid and a gold cap",
                              "link": "/shop",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-10"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "relative h-auto w-full drop-shadow-[0_40px_40px_rgba(42,27,23,0.25)] transition-transform duration-700 hover:-translate-y-2 hover:-rotate-2"
                              }
                            }
                          },
                          {
                            "id": "sg-note-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-6 top-[20%] lg:-left-12 z-20 flex flex-col items-center rounded-full border border-white/60 bg-white/55 px-4 py-2.5 text-center shadow-[0_20px_40px_-24px_rgba(42,27,23,0.5)] backdrop-blur-md"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-note-top-k",
                                "type": "text",
                                "options": {
                                  "text": "Top",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#7A6A62]"
                                  }
                                }
                              },
                              {
                                "id": "sg-note-top-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-note-top-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2 w-2 rounded-full bg-[#E7B84A]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-note-top-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Bergamot",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-xl text-[#2A1B17]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "sg-note-heart",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-6 top-[46%] lg:-right-14 z-20 flex flex-col items-center rounded-full border border-white/60 bg-white/55 px-4 py-2.5 text-center shadow-[0_20px_40px_-24px_rgba(42,27,23,0.5)] backdrop-blur-md"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-note-heart-k",
                                "type": "text",
                                "options": {
                                  "text": "Heart",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#7A6A62]"
                                  }
                                }
                              },
                              {
                                "id": "sg-note-heart-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-note-heart-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2 w-2 rounded-full bg-[#D98C8C]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-note-heart-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Damask rose",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-xl text-[#2A1B17]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "sg-note-base",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-4 bottom-[10%] lg:-left-10 z-20 flex flex-col items-center rounded-full border border-white/60 bg-white/55 px-4 py-2.5 text-center shadow-[0_20px_40px_-24px_rgba(42,27,23,0.5)] backdrop-blur-md"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-note-base-k",
                                "type": "text",
                                "options": {
                                  "text": "Base",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#7A6A62]"
                                  }
                                }
                              },
                              {
                                "id": "sg-note-base-row",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-note-base-dot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-2 w-2 rounded-full bg-[#3E2A23]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-note-base-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Oud & amber",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-xl text-[#2A1B17]"
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
                        "id": "sg-hero-h1b",
                        "type": "text",
                        "options": {
                          "text": "story.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-center text-6xl italic leading-[0.95] text-[#C8742E] sm:text-7xl lg:text-left lg:text-6xl xl:text-8xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-hero-foot",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex flex-col items-center gap-6 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-hero-p",
                        "type": "text",
                        "options": {
                          "text": "Designer perfumes, niche houses and pure alcohol-free attar, 100% original, with decants so you can try before the full bottle.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-lg leading-relaxed text-[#7A6A62]"
                          }
                        }
                      },
                      {
                        "id": "sg-hero-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap justify-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-hero-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Shop perfumes",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#2A1B17] px-8 py-4 transition-all hover:bg-[#C8742E]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F7F2EC] transition-transform group-hover:translate-x-1"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F2EC] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "sg-hero-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Find your scent",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#families",
                              "target": "",
                              "icon": "IconSparkles",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#2A1B17]/30 px-8 py-4 transition-colors hover:border-[#2A1B17] hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2A1B17]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap"
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
            "id": "sg-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden bg-[#2A1B17] py-5"
              }
            },
            "children": [
              {
                "id": "sg-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-8 whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "sg-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Bergamot  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Damask rose  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-2",
                    "type": "text",
                    "options": {
                      "text": "Oud  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-3",
                    "type": "text",
                    "options": {
                      "text": "Amber  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-4",
                    "type": "text",
                    "options": {
                      "text": "White musk  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-5",
                    "type": "text",
                    "options": {
                      "text": "Sandalwood  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Jasmine  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Saffron  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-8",
                    "type": "text",
                    "options": {
                      "text": "Vetiver  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-9",
                    "type": "text",
                    "options": {
                      "text": "Vanilla  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Bergamot  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-11",
                    "type": "text",
                    "options": {
                      "text": "Damask rose  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-12",
                    "type": "text",
                    "options": {
                      "text": "Oud  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-13",
                    "type": "text",
                    "options": {
                      "text": "Amber  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-14",
                    "type": "text",
                    "options": {
                      "text": "White musk  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-15",
                    "type": "text",
                    "options": {
                      "text": "Sandalwood  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-16",
                    "type": "text",
                    "options": {
                      "text": "Jasmine  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-17",
                    "type": "text",
                    "options": {
                      "text": "Saffron  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-18",
                    "type": "text",
                    "options": {
                      "text": "Vetiver  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#F7F2EC]"
                      }
                    }
                  },
                  {
                    "id": "sg-strip-19",
                    "type": "text",
                    "options": {
                      "text": "Vanilla  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-normal text-2xl text-[#E7B84A]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-families",
            "type": "section",
            "options": {
              "anchor": "families"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-families-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-families-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-families-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-families-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-families-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-families-label",
                                "type": "text",
                                "options": {
                                  "text": "Scent families",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-families-h",
                            "type": "heading",
                            "options": {
                              "text": "What do you love to smell like?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-families-sub",
                            "type": "text",
                            "options": {
                              "text": "Pick a family and we’ll show you every scent in it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "sg-families-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-fam-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-1-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#F6E1DF_40%,#D98C8C)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Floral",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/floral",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Rose, jasmine, tuberose",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-fam-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-2-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#EFE6DB_35%,#9C7A5B)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Woody",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/woody",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Sandalwood, cedar, vetiver",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-fam-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-3-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#FAEED0_35%,#C8742E)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Amber",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/amber",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Vanilla, resins, warm spice",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-fam-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-4-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#E6EEE3_40%,#A9C3A5)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Fresh",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/fresh",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-4-p",
                                "type": "text",
                                "options": {
                                  "text": "Citrus, aquatic, green",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-fam-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-5-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#8C6A5C,#3E2A23_45%,#2A1B17)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "Oud",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/oud",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-5-p",
                                "type": "text",
                                "options": {
                                  "text": "Smoky, leathery, deep",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-fam-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-fam-6-swatch",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[170px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#EEE8F8_40%,#CDBEE8)] shadow-[0_24px_40px_-26px_rgba(42,27,23,0.55)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 after:absolute after:inset-3 after:rounded-full after:border after:border-white/50 after:content-['']"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-fam-6-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-fam-6-btn",
                                "type": "button",
                                "options": {
                                  "text": "Musk",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/musk",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/f inline-flex cursor-pointer items-center justify-center"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-fam-6-p",
                                "type": "text",
                                "options": {
                                  "text": "Clean, powdery, skin-like",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#7A6A62]"
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
            "id": "sg-row-new-arrivals",
            "type": "section",
            "options": {
              "anchor": "new-arrivals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-row-new-arrivals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-row-new-arrivals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-new-arrivals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-new-arrivals-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-new-arrivals-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-row-new-arrivals-label",
                                "type": "text",
                                "options": {
                                  "text": "Just arrived",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-row-new-arrivals-h",
                            "type": "heading",
                            "options": {
                              "text": "New arrivals",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-row-new-arrivals-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh bottles and new houses, this month.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-row-new-arrivals-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-row-new-arrivals-slider",
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
                        "gap": "1.5rem",
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#2A1B17]/20 !bg-[#F7F2EC] !opacity-100 transition-colors hover:!bg-[#2A1B17] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1B17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-new-arrivals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-new-arrivals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-new-arrivals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-new-arrivals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-new-arrivals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-row-new-arrivals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-new-arrivals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-row-new-arrivals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-new-arrivals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-row-new-arrivals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-new-arrivals-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-row-new-arrivals-slider-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
            "id": "sg-pyramid",
            "type": "section",
            "options": {
              "anchor": "notes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#EEE8F8] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-pyramid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "sg-pyr",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-1.5 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-tier-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-[46%] flex-col items-center justify-center gap-1 bg-[linear-gradient(135deg,#FAEED0,#E7B84A)] [clip-path:polygon(22%_0,78%_0,100%_100%,0_100%)] px-10 py-7 text-center transition-transform duration-500 hover:scale-[1.02]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-tier-1-k",
                            "type": "text",
                            "options": {
                              "text": "First 15 minutes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2A1B17]/60"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Top notes",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-1-p",
                            "type": "text",
                            "options": {
                              "text": "Bergamot · Lemon · Pink pepper",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm italic text-[#2A1B17]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-tier-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-[73%] flex-col items-center justify-center gap-1 bg-[linear-gradient(135deg,#F6E1DF,#D98C8C)] [clip-path:polygon(9%_0,91%_0,100%_100%,0_100%)] px-10 py-7 text-center transition-transform duration-500 hover:scale-[1.02]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-tier-2-k",
                            "type": "text",
                            "options": {
                              "text": "15 minutes to 3 hours",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2A1B17]/60"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Heart notes",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-2-p",
                            "type": "text",
                            "options": {
                              "text": "Rose · Jasmine · Saffron",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm italic text-[#2A1B17]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-tier-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-1 bg-[linear-gradient(135deg,#3E2A23,#2A1B17)] [clip-path:polygon(6%_0,94%_0,100%_100%,0_100%)] px-10 py-7 text-center transition-transform duration-500 hover:scale-[1.02]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-tier-3-k",
                            "type": "text",
                            "options": {
                              "text": "3 hours and beyond",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Base notes",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#F7F2EC]"
                              }
                            }
                          },
                          {
                            "id": "sg-tier-3-p",
                            "type": "text",
                            "options": {
                              "text": "Oud · Amber · Musk · Sandalwood",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm italic text-white/75"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "sg-pyr-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-pyr-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-pyr-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pyr-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-pyr-dash",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-pyr-label",
                                    "type": "text",
                                    "options": {
                                      "text": "The notes pyramid",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-pyr-h",
                                "type": "heading",
                                "options": {
                                  "text": "How a perfume unfolds",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-pyr-p",
                        "type": "text",
                        "options": {
                          "text": "A fragrance is a story in three acts. The bright top notes greet you first, the heart blooms as they fade, and the base lingers on skin and clothes for hours. Every product page lists all three.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#7A6A62]"
                          }
                        }
                      },
                      {
                        "id": "sg-pyr-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-pyr-btn",
                            "type": "button",
                            "options": {
                              "text": "Explore by note",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#2A1B17] px-8 py-4 transition-all hover:bg-[#C8742E]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F7F2EC]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F2EC] whitespace-nowrap"
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
            "id": "sg-best",
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
                "id": "sg-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-best-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most loved",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Signature scents",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The bottles our customers re-order again and again.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-best-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-best-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-best-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
            "id": "sg-attar",
            "type": "section",
            "options": {
              "anchor": "attar"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2A1B17] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-attar-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#C8742E]/25 blur-[100px]"
                  }
                },
                "children": []
              },
              {
                "id": "sg-attar-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "sg-attar-t",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-attar-k-row",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-dash",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "sg-attar-k",
                            "type": "text",
                            "options": {
                              "text": "Pure attar",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E7B84A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-attar-h",
                        "type": "heading",
                        "options": {
                          "text": "Alcohol-free oils, made the old way.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-4xl leading-[1.05] text-[#F7F2EC] sm:text-6xl"
                          }
                        }
                      },
                      {
                        "id": "sg-attar-p",
                        "type": "text",
                        "options": {
                          "text": "Concentrated perfume oils of oud, rose, musk and sandalwood. A single drop lasts the whole day, perfect for Jummah, Eid and every day in between.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-white/65"
                          }
                        }
                      },
                      {
                        "id": "sg-attar-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap gap-3 pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Shop attar",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/attar",
                              "target": "",
                              "icon": "IconDroplet",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F7F2EC] px-8 py-4 transition-colors hover:bg-[#E7B84A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2A1B17]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "sg-attar-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Oud collection",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/oud",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/30 px-8 py-4 transition-colors hover:border-white hover:bg-white/5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "sg-attar-facts",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-attar-f1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-f1-v",
                            "type": "text",
                            "options": {
                              "text": "12h+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl text-[#E7B84A]"
                              }
                            }
                          },
                          {
                            "id": "sg-attar-f1-k",
                            "type": "text",
                            "options": {
                              "text": "on skin",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs uppercase tracking-[0.2em] text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-attar-f2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-f2-v",
                            "type": "text",
                            "options": {
                              "text": "0%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl text-[#E7B84A]"
                              }
                            }
                          },
                          {
                            "id": "sg-attar-f2-k",
                            "type": "text",
                            "options": {
                              "text": "alcohol",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs uppercase tracking-[0.2em] text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-attar-f3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-f3-v",
                            "type": "text",
                            "options": {
                              "text": "3 ml",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl text-[#E7B84A]"
                              }
                            }
                          },
                          {
                            "id": "sg-attar-f3-k",
                            "type": "text",
                            "options": {
                              "text": "to 12 ml roll-ons",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs uppercase tracking-[0.2em] text-white/60"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-attar-f4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-attar-f4-v",
                            "type": "text",
                            "options": {
                              "text": "100%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl text-[#E7B84A]"
                              }
                            }
                          },
                          {
                            "id": "sg-attar-f4-k",
                            "type": "text",
                            "options": {
                              "text": "original oils",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-xs uppercase tracking-[0.2em] text-white/60"
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
            "id": "sg-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cats-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-cats-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-cats-label",
                                "type": "text",
                                "options": {
                                  "text": "The collections",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "For him, for her, for all",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-cats-all",
                        "type": "button",
                        "options": {
                          "text": "All collections",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-cats-grid",
                    "type": "termsGrid",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "4",
                        "per_page": "4",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col items-center gap-4 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-cats-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex flex-col items-center gap-4 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative block w-full overflow-hidden rounded-t-[200px] rounded-b-[24px] bg-[#EFE6DB]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "sg-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                              }
                            }
                          },
                          {
                            "id": "sg-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " scents",
                              "singularSuffix": " scent",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A6A62]"
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
            "id": "sg-row-men",
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
                "id": "sg-row-men-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-row-men-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-men-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-men-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-men-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-row-men-label",
                                "type": "text",
                                "options": {
                                  "text": "Pour homme",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-row-men-h",
                            "type": "heading",
                            "options": {
                              "text": "For him",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-row-men-sub",
                            "type": "text",
                            "options": {
                              "text": "Woody, spicy and oud-rich signatures.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-row-men-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-row-men-slider",
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
                        "gap": "1.5rem",
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#2A1B17]/20 !bg-[#F7F2EC] !opacity-100 transition-colors hover:!bg-[#2A1B17] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1B17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-men-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-men-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-men-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-men-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-men-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-row-men-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-men-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-row-men-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-men-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-row-men-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-men-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-row-men-slider-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
            "id": "sg-conc",
            "type": "section",
            "options": {
              "anchor": "longevity"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-conc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "sg-conc-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-conc-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-dash",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-conc-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Longevity guide",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-h",
                                "type": "heading",
                                "options": {
                                  "text": "How long will it last?",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-conc-p",
                        "type": "text",
                        "options": {
                          "text": "The more perfume oil in the bottle, the longer it stays on skin. Spray on pulse points and clothes; heat and humidity make scents bloom faster.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#7A6A62]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-conc-bars",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-6 lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-conc-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-1-tl",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Attar (perfume oil)",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-2xl text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-conc-1-pct",
                                    "type": "text",
                                    "options": {
                                      "text": "20–30% oil · no alcohol",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A6A62]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-1-hrs",
                                "type": "text",
                                "options": {
                                  "text": "12 h+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-conc-1-track",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-full overflow-hidden rounded-full bg-[#EFE6DB]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-1-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full w-full rounded-full bg-[linear-gradient(90deg,#C8742E,#2A1B17)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-conc-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-2-tl",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Parfum / Extrait",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-2xl text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-conc-2-pct",
                                    "type": "text",
                                    "options": {
                                      "text": "20–30%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A6A62]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-2-hrs",
                                "type": "text",
                                "options": {
                                  "text": "8–12 h",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-conc-2-track",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-full overflow-hidden rounded-full bg-[#EFE6DB]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-2-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full w-[86%] rounded-full bg-[linear-gradient(90deg,#D98C8C,#C8742E)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-conc-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-3-tl",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-3-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Eau de Parfum (EDP)",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-2xl text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-conc-3-pct",
                                    "type": "text",
                                    "options": {
                                      "text": "15–20%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A6A62]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-3-hrs",
                                "type": "text",
                                "options": {
                                  "text": "6–8 h",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-conc-3-track",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-full overflow-hidden rounded-full bg-[#EFE6DB]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-3-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full w-[66%] rounded-full bg-[linear-gradient(90deg,#E7B84A,#D98C8C)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-conc-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-4-tl",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-4-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Eau de Toilette (EDT)",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-2xl text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-conc-4-pct",
                                    "type": "text",
                                    "options": {
                                      "text": "5–15%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A6A62]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-4-hrs",
                                "type": "text",
                                "options": {
                                  "text": "3–5 h",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-conc-4-track",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-full overflow-hidden rounded-full bg-[#EFE6DB]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-4-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full w-[42%] rounded-full bg-[linear-gradient(90deg,#CDBEE8,#E7B84A)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sg-conc-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-conc-5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-baseline justify-between gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-5-tl",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-baseline gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-conc-5-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Eau de Cologne (EDC)",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-2xl text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-conc-5-pct",
                                    "type": "text",
                                    "options": {
                                      "text": "2–4%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#7A6A62]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-conc-5-hrs",
                                "type": "text",
                                "options": {
                                  "text": "1–2 h",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-conc-5-track",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-2.5 w-full overflow-hidden rounded-full bg-[#EFE6DB]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-conc-5-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-full w-[22%] rounded-full bg-[linear-gradient(90deg,#A9C3A5,#CDBEE8)]"
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
            "id": "sg-duo",
            "type": "section",
            "options": {
              "anchor": "decants"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-duo-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
                  }
                },
                "children": [
                  {
                    "id": "sg-duo-decants",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[320px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#FAEED0,#F6E1DF)] p-8 sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-duo-decants-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconTestPipe",
                          "size": 150,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-[#2A1B17]/10 transition-transform duration-700 group-hover:rotate-0"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-decants-k",
                        "type": "text",
                        "options": {
                          "text": "Try before you commit",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-decants-h",
                        "type": "heading",
                        "options": {
                          "text": "Decants from 5 ml.",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2A1B17]"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-decants-p",
                        "type": "text",
                        "options": {
                          "text": "Original perfume poured into travel sprays, so you can live with a scent for a week before buying the full bottle.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md text-base text-[#7A6A62]"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-decants-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop decants",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/decants",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#2A1B17] w-fit px-7 py-3.5 transition-all hover:bg-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#F7F2EC]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#F7F2EC] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-duo-gifts",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[320px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] bg-[#3E2A23] p-8 sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-duo-gifts-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconGift",
                          "size": 150,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-4 -top-4 flex rotate-12 text-white/10 transition-transform duration-700 group-hover:rotate-0"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-gifts-k",
                        "type": "text",
                        "options": {
                          "text": "Gifting",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E7B84A]"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-gifts-h",
                        "type": "heading",
                        "options": {
                          "text": "Gift sets, beautifully boxed.",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#F7F2EC]"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-gifts-p",
                        "type": "text",
                        "options": {
                          "text": "Perfume and attar sets with a hand-written card, for Eid, weddings and birthdays.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-md text-base text-white/65"
                          }
                        }
                      },
                      {
                        "id": "sg-duo-gifts-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop gift sets",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/gift-sets",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F7F2EC] w-fit px-7 py-3.5 transition-colors hover:bg-[#E7B84A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2A1B17]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap"
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
            "id": "sg-row-women",
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
                "id": "sg-row-women-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-row-women-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-women-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-women-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-women-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-row-women-label",
                                "type": "text",
                                "options": {
                                  "text": "Pour femme",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-row-women-h",
                            "type": "heading",
                            "options": {
                              "text": "For her",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-row-women-sub",
                            "type": "text",
                            "options": {
                              "text": "Florals, musks and soft ambers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-row-women-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-row-women-slider",
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
                        "gap": "1.5rem",
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#2A1B17]/20 !bg-[#F7F2EC] !opacity-100 transition-colors hover:!bg-[#2A1B17] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1B17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-row-women-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-row-women-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-women-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-women-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-women-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-row-women-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-row-women-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-row-women-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-row-women-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-row-women-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-row-women-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-row-women-slider-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
            "id": "sg-brandsec",
            "type": "section",
            "options": {
              "anchor": "houses"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "sg-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-brandsec-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-brandsec-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-brandsec-label",
                                "type": "text",
                                "options": {
                                  "text": "The houses",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Perfume houses we carry",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-brandsec-sub",
                            "type": "text",
                            "options": {
                              "text": "Designer, niche and Arabian houses, all original.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-brandsec-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-brands-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#2A1B17]/20 !bg-[#F7F2EC] !opacity-100 transition-colors hover:!bg-[#2A1B17] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1B17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[24px] border border-[#E8DED3] bg-white p-5 text-center transition-colors hover:border-[#C8742E]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-[24px] border border-[#E8DED3] bg-white p-5 text-center transition-colors hover:border-[#C8742E]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-brands-slider-thumb",
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
                                "classes": "max-h-10 w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "sg-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " scents",
                              "singularSuffix": " scent",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
            "id": "sg-reviews",
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
                "id": "sg-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-reviews-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "In their words",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Compliments, guaranteed",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 15,000+ customers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "sg-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#2A1B17]/20 !bg-[#F7F2EC] !opacity-100 transition-colors hover:!bg-[#2A1B17] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2A1B17] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#2A1B17]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#C8742E]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Tried the 5 ml decant first, fell in love, came back for the full bottle. The batch code checked out too.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAEED0] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "EDP · Floral",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
                        "id": "sg-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“One drop before Jummah and people were still asking about it at Asr. Real oud, not a synthetic copy.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "AH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6E1DF] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Oud attar",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
                        "id": "sg-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought a set for my mother’s birthday. The box, the card, the ribbon: it felt like a boutique gift.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEE8F8] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tasnim Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Gift set",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
                        "id": "sg-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Same bottle as the duty-free, a better price, and delivered the next day in Dhaka.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "RK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6EEE3] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rezaul Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Designer EDT",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
                        "id": "sg-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“The scent family guide helped me finally find a musk that isn’t too sweet. Lasts all day on my scarf.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "LR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6E6D6] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lamia Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Musk",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
                        "id": "sg-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[28px] bg-[#F7F2EC] p-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“They answered every question about the notes on WhatsApp before I ordered. Honest, patient service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl leading-snug text-[#2A1B17]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#E8DED3] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "SC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFE6DB] font-heading font-normal text-lg text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sajid Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#2A1B17]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Niche EDP",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] uppercase tracking-[0.2em] text-[#7A6A62]"
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
            "id": "sg-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "sg-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "sg-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-journal-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "The scent journal",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Notes, layering & care",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 pb-1 border-b border-[#2A1B17]/40 transition-colors hover:border-[#C8742E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-1 text-[#C8742E]"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap group-hover:text-[#C8742E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-journal-grid",
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
                        "id": "sg-journal-loop",
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
                            "id": "sg-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[28px] bg-[#EFE6DB]"
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
                            "id": "sg-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[10px] text-[#A65B1F]"
                                  }
                                }
                              },
                              {
                                "id": "sg-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-3xl leading-tight text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#7A6A62]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#C8742E] transition-transform group-hover/rm:translate-x-1"
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
            "id": "sg-faq",
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
                "id": "sg-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "sg-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-14"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "sg-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-faq-dash",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "sg-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-6xl text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Originality, decants, attar and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#7A6A62]"
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
                    "id": "sg-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Are your perfumes original?",
                          "classes": ""
                        },
                        {
                          "label": "What is a decant?",
                          "classes": ""
                        },
                        {
                          "label": "Is attar halal and alcohol-free?",
                          "classes": ""
                        },
                        {
                          "label": "How do I make a scent last longer?",
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
                        "classes": "flex flex-col divide-y divide-[#E8DED3] border-y border-[#E8DED3]"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 px-1 py-6 font-heading text-2xl text-[#2A1B17] transition-colors hover:text-[#C8742E]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#C8742E]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#C8742E]"
                      },
                      "accordion-content": {
                        "classes": "px-1 pb-6"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. We buy from brands and authorised distributors only, and every bottle keeps its batch code so you can check it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Original perfume carefully transferred from a full bottle into a 5 or 10 ml travel spray, so you can try a scent properly before buying it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Our attars are pure perfume oils with no alcohol. Each product page lists the oils and the base used.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Moisturise first, spray on pulse points and clothes, and don’t rub your wrists. Attar oils last longest of all.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24-48 hours, 2-4 days elsewhere in Bangladesh, with cash on delivery and free gift wrap.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6A62]"
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
            "id": "sg-cta",
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
                "id": "sg-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] bg-[#2A1B17] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-cta-c1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#D98C8C]/25 blur-[80px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "sg-cta-c2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#E7B84A]/20 blur-[80px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "sg-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cta-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-cta-dash",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-[3px] w-10 rounded-full bg-[linear-gradient(90deg,#E7B84A,#C8742E,#D98C8C,#CDBEE8,#A9C3A5,#3E2A23)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "sg-cta-k",
                                "type": "text",
                                "options": {
                                  "text": "The Scent Club",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E7B84A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "A free sample with every order.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] text-[#F7F2EC] sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "sg-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free for a sample in every parcel, early access to new launches and a birthday decant of your choice.",
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
                        "id": "sg-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the club",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconSparkles",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#F7F2EC] px-8 py-4 transition-colors hover:bg-[#E7B84A]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2A1B17]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1B17] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "sg-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Shop perfumes",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/30 px-8 py-4 transition-colors hover:border-white hover:bg-white/5"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-body text-xs font-semibold uppercase tracking-[0.22em] text-white whitespace-nowrap"
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
            "id": "sg-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The perfumery",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Fragrances",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every scent on our shelves, newest first. Open a bottle for its notes, concentration and longevity.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-shop-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
                        "id": "sg-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-shop-promise",
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
                "id": "sg-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% original",
                          "description": "Batch codes intact",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Try with decants",
                          "description": "From 5 ml",
                          "icon": "IconTestPipe",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written card",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
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
                        "classes": "font-heading text-xl text-[#2A1B17]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6E6D6] text-[#A65B1F]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-shop-promise-fb-ic",
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
                        "id": "sg-shop-promise-fb-t",
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
                        "id": "sg-shop-promise-fb-d",
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
            "id": "sg-pd",
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
                "id": "sg-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-pd-grid",
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
                        "id": "sg-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#F6E1DF] via-white to-[#F7F2EC] p-4 shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2A1B17]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2A1B17]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#C8742E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-pd-cats",
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
                                "classes": "rounded-full bg-[#F6E1DF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1B17] hover:bg-[#2A1B17] hover:text-white"
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
                            "id": "sg-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#2A1B17] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "sg-pd-rate",
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
                                "classes": "font-body font-bold text-[#2A1B17]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sg-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#C8742E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "sg-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#7A6A62]"
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
                            "id": "sg-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#2A1B17]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#F6E1DF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#2A1B17] !bg-[#F6E1DF] !text-[#3E2A23]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "sg-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out · try a decant or ask us to restock",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#C8742E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2A1B17]"
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
                            "id": "sg-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#2A1B17]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F2EC]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F2EC]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#C8742E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#A65B1F]"
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
                            "id": "sg-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "100% original",
                                  "description": "Batch code intact",
                                  "icon": "IconCertificate",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free sample",
                                  "description": "In every parcel",
                                  "icon": "IconSparkles",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on delivery",
                                  "description": "Nationwide",
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
                                "classes": "font-body text-base font-bold text-[#2A1B17]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6E1DF] text-[#2A1B17]"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-perks-ic",
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
                                "id": "sg-pd-perks-t",
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
                                "id": "sg-pd-perks-d",
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
                            "id": "sg-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-sku",
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
                                    "classes": "font-semibold text-[#2A1B17]"
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
                                "id": "sg-pd-brands",
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
                                    "classes": "font-semibold text-[#2A1B17]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C8742E]"
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
                                "id": "sg-pd-tags",
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
                                    "classes": "font-semibold text-[#2A1B17]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#C8742E]"
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
            "id": "sg-pd-tabs-sec",
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
                "id": "sg-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,27,23,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Notes & Longevity",
                              "icon": "IconFlower"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F2EC] px-5 py-2.5 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2A1B17] !text-white shadow-md"
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
                            "id": "sg-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2A1B17] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2A1B17] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#C8742E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E7B84A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconFlower",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Top, heart and base notes are listed in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Concentration (attar, parfum, EDP, EDT) tells you how long it lasts",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Spray on pulse points and clothes; don’t rub",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store away from heat and sunlight to keep it fresh",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2A1B17]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Inside Dhaka: 24-48 hours",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 2-4 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Free gift wrap with a hand-written card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Sealed bottles that arrive damaged are replaced free",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2A1B17]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sg-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F7F2EC] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F7F2EC] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sg-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F6E6D6]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sg-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2A1B17]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sg-pd-reviews-rate",
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
                                        "id": "sg-pd-reviews-co",
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
                                    "id": "sg-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How does it smell on you, and how long does it last?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,27,23,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#2A1B17]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F7F2EC] px-4 py-3 text-sm text-[#2A1B17] placeholder:text-gray-400 focus:border-[#2A1B17] focus:outline-none focus:ring-2 focus:ring-[#2A1B17]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C8742E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A65B1F] disabled:opacity-50"
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
            "id": "sg-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16"
              }
            },
            "children": [
              {
                "id": "sg-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Layers well with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F6E6D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C8742E]"
                          }
                        }
                      },
                      {
                        "id": "sg-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2A1B17]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-pd-rel-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
            "id": "sg-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The collections",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Collections",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "For him, for her, attar, oud, decants and gift sets.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[28px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#F6E1DF] transition-transform"
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
                            "id": "sg-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                              }
                            }
                          },
                          {
                            "id": "sg-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " scents",
                              "singularSuffix": " scent",
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
                        "id": "sg-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sg-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " scents",
                      "singularSuffix": " scent"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2A1B17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
                        "id": "sg-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group scents by family and occasion: floral, woody, amber, fresh, oud, musk and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C8742E]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C8742E]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2A1B17] group-hover:text-[#C8742E]"
                              }
                            }
                          },
                          {
                            "id": "sg-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F7F2EC] px-2 py-0.5 text-[10px] font-bold text-[#7A6A62]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sg-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sg-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " scents",
                      "singularSuffix": " scent"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2A1B17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
                        "id": "sg-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The houses",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Perfume Houses",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every designer, niche and Arabian house we carry.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F7F2EC] p-3"
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
                            "id": "sg-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2A1B17] group-hover:text-[#C8742E]"
                              }
                            }
                          },
                          {
                            "id": "sg-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " scents",
                              "singularSuffix": " scent",
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
                        "id": "sg-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sg-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " scents",
                      "singularSuffix": " scent"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2A1B17] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
                        "id": "sg-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The scent journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Notes, Layering & Care",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "How to read a notes pyramid, layer attar with perfume and make a scent last.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F7F2EC]"
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
                            "id": "sg-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                  }
                                }
                              },
                              {
                                "id": "sg-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#C8742E]"
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
                        "id": "sg-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:border-[#C8742E] hover:text-[#C8742E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#C8742E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sg-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F2EC] via-white to-[#F7F2EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sg-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-post-k",
                    "type": "text",
                    "options": {
                      "text": "The scent journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F6E1DF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1B17]"
                      }
                    }
                  },
                  {
                    "id": "sg-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#7A6A62]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-post-author",
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
                            "classes": "font-body font-bold text-[#2A1B17]"
                          }
                        }
                      },
                      {
                        "id": "sg-post-dot",
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
                        "id": "sg-post-date",
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
                    "id": "sg-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
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
            "id": "sg-post-body",
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
                "id": "sg-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2A1B17] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2A1B17] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#C8742E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[28px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E7B84A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16"
              }
            },
            "children": [
              {
                "id": "sg-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2A1B17]"
                      }
                    }
                  },
                  {
                    "id": "sg-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F7F2EC] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[28px] border border-gray-100 bg-[#F7F2EC] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F6E6D6]"
                              }
                            }
                          },
                          {
                            "id": "sg-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2A1B17]"
                              }
                            }
                          },
                          {
                            "id": "sg-post-cmt-co",
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
                        "id": "sg-post-cmt-form",
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
                            "classes": "rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,27,23,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2A1B17]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F7F2EC] px-4 py-3 text-sm text-[#2A1B17] placeholder:text-gray-400 focus:border-[#2A1B17] focus:outline-none focus:ring-2 focus:ring-[#2A1B17]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#C8742E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#A65B1F] disabled:opacity-50"
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
            "id": "sg-post-more",
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
                "id": "sg-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More from the Journal",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2A1B17]"
                      }
                    }
                  },
                  {
                    "id": "sg-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,27,23,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F7F2EC]"
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
                            "id": "sg-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2A1B17]"
                                  }
                                }
                              },
                              {
                                "id": "sg-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
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
            "id": "sg-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[linear-gradient(120deg,#FAEED0,#F7F2EC_40%,#EEE8F8)] py-14 sm:py-20"
              }
            },
            "children": [
              {
                "id": "sg-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sg-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A65B1F]"
                      }
                    }
                  },
                  {
                    "id": "sg-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2A1B17] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sg-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, see your samples and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sg-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-12"
              }
            },
            "children": [
              {
                "id": "sg-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#2A1B17] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E7B84A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#C8742E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#C8742E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#C8742E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "sg-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sg-acc-3",
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
                                "id": "sg-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,27,23,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C8742E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A65B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "sg-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,27,23,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C8742E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A65B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "sg-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "sg-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F2EC] px-5 py-2.5 font-body text-sm font-semibold text-[#2A1B17] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2A1B17] !text-white shadow-md"
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
                                "id": "sg-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8742E]/10 text-[#C8742E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sg-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#C8742E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sg-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8742E]/10 text-[#C8742E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sg-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#C8742E]/40 hover:bg-[#C8742E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8742E]/10 text-[#C8742E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sg-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C8742E]/10 text-[#C8742E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#C8742E] focus:outline-none focus:ring-2 focus:ring-[#C8742E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8742E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A65B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8742E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "sg-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F2EC] via-white to-[#F7F2EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sg-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(42,27,23,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#F6E1DF] text-[#2A1B17]"
                          }
                        }
                      },
                      {
                        "id": "sg-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F6E6D6] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#C8742E]"
                          }
                        }
                      },
                      {
                        "id": "sg-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You for Your Order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2A1B17] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "sg-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your scents are being wrapped. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#7A6A62] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "sg-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "We confirm your order by SMS",
                              "icon": ""
                            },
                            {
                              "text": "Your bottles are sealed, wrapped and sent with a free sample",
                              "icon": ""
                            },
                            {
                              "text": "Delivered in 24-48 hours inside Dhaka: pay on arrival if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[28px] bg-[#F7F2EC] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#C8742E]"
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
                        "id": "sg-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C8742E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A65B1F] w-full sm:w-auto"
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
                            "id": "sg-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2A1B17] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2A1B17] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2A1B17] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#2A1B17] whitespace-nowrap group-hover:text-white"
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
            "id": "sg-ty-promise",
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
                "id": "sg-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "100% original",
                          "description": "Batch codes intact",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "Try with decants",
                          "description": "From 5 ml",
                          "icon": "IconTestPipe",
                          "iconSize": ""
                        },
                        {
                          "title": "Free gift wrap",
                          "description": "With a hand-written card",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
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
                        "classes": "font-heading text-xl text-[#2A1B17]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6E6D6] text-[#A65B1F]"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-ty-promise-fb-ic",
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
                        "id": "sg-ty-promise-fb-t",
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
                        "id": "sg-ty-promise-fb-d",
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
            "id": "sg-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F7F2EC] via-white to-[#F7F2EC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sg-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#C8742E] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "sg-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F2EC] text-[#2A1B17]"
                      }
                    }
                  },
                  {
                    "id": "sg-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Has Evaporated",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#2A1B17] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "sg-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the scent may have sold out. Head back home or browse the perfumery.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#7A6A62] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "sg-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C8742E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(200,116,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#A65B1F] w-full sm:w-auto"
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
                        "id": "sg-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Fragrances",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2A1B17] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2A1B17] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2A1B17] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#2A1B17] whitespace-nowrap group-hover:text-white"
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
            "id": "sg-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F2EC] py-16"
              }
            },
            "children": [
              {
                "id": "sg-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sg-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E7B84A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1B17]"
                          }
                        }
                      },
                      {
                        "id": "sg-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2A1B17] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sg-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "sg-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "sg-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-t-[200px] rounded-b-[28px] bg-[linear-gradient(180deg,#EFE6DB,#EEE8F8)] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#FAEED0,#F6E1DF)]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-contain p-7 pt-10 mix-blend-multiply transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-1/2 top-4 z-[3] flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2A1B17] px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7B84A]"
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
                                "id": "sg-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center gap-1 px-2 pt-5 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sg-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center justify-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E7B84A]"
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
                                    "id": "sg-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-xl text-[#2A1B17] transition-colors group-hover:text-[#C8742E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sg-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[13px] italic text-[#7A6A62]"
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
                            "id": "sg-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-center gap-3 px-2 pb-2 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sg-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6A62] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-semibold text-[#2A1B17]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#C8742E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#C8742E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sg-nf-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A1B17]/20 text-[#2A1B17] transition-colors hover:border-[#2A1B17] hover:bg-[#2A1B17] hover:text-[#E7B84A]"
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
