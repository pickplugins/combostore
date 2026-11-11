/**
 * Template: Aurelle Fine Jewellery.
 *
 * A soft-luxury jewellery store for young women who love beauty and a little
 * luxury: demi-fine rings, earrings, necklaces and bracelets in 18K
 * gold-plated sterling silver, pearls and hand-set stones, plus a gift edit.
 * Like the other complete templates here it carries all sixteen page types -
 * Header, Footer, Home, Shop, Product, the six taxonomy archives, Blog
 * Archive, Blog Single, Account, Thank you and 404 - so applying it replaces
 * every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to au-, palette remapped, copy rewritten), so it
 * uses only blocks and option shapes already proven on the builder and the
 * storefront. Home is built fresh from the same block types. Product cards
 * are restyled everywhere: centred, square blush image well, rose-gold price,
 * full-width outline "Add to Bag". It is plain data: edit freely.
 *
 * DESIGN
 *
 *   noir       #1E1416  primary buttons, brand mark          #3A2A2D hover  #F3ECEA tint
 *   rose gold  #A0525E  prices, links, script accents        #84404B hover  #FBEDEE tint
 *   champagne  #D9B77E  gold on dark: script, CTAs, stars    #E6CB9C hover
 *   champagne  #8C6B3A  gold text on light: kickers, rules
 *   night      #1A1214  hero, materials band, promo bar, CTA
 *   ink        #241A1C  text, footer    muted #75686A   ivory #FCF8F6   blush #F8EEEB / #F4E1DE
 *
 * Fonts (template meta): Bodoni Moda for display headings, Jost for body
 * and every small label (Bodoni's hairlines vanish small, so the build moves
 * small `font-heading` labels, buttons, prices and card titles to
 * `font-body`), and Pinyon Script for the handwritten accents via
 * `font-['Pinyon_Script']`. Labels are small, light and widely tracked.
 *
 * Motifs: a facet lattice with tiny sparkles (public/templates/
 * aurelle-pattern.svg) over the dark bands, the gift banner and the inner
 * page heads; round category frames; an arched hero frame; a diamond rule
 * under each section title.
 *
 * HOME
 *
 *   Night hero with sparkle lattice, rose glow, script line and a jewellery
 *   still life (public/templates/aurelle-hero.svg) - four promises (gift box,
 *   hypoallergenic, warranty, COD) - categories in round frames
 *   (#categories) - new in (#new) - the Gift Edit (#gifts) - rows for rings
 *   and earrings (#rings, #earrings) - materials story (#craft) - rows for
 *   necklaces and bracelets (#necklaces, #bracelets) - reviews slider -
 *   latest three posts (#journal) - FAQ (#faq) - "Join the Aurelle Club"
 *   CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs the links and rows assume: rings, earrings, necklaces,
 *     bracelets, gifts.
 *   - Contact details (+880 1700-000000, hello@example.com, hours), social
 *     URLs, the promo code GLOW10 and the 10% welcome offer.
 *   - Hero numbers (4.9), "40,000+ women" and the six reviews are sample
 *     copy; "Lumière" is a placeholder collection name.
 *   - Materials (925 silver, 18K plating, nickel-free), the 1-year warranty,
 *     gift box, delivery times and the 7-day exchange (earrings excluded):
 *     check every claim matches what the shop actually sells.
 */

var template = [
  {
    "name": "Aurelle Fine Jewellery",
    "description": "Soft-luxury jewellery store for young women in noir, champagne gold, rose gold and blush, with Bodoni headlines, script accents and a facet-sparkle pattern: dark hero, round category frames, new in, a gift edit, ring, earring, necklace and bracelet rows, a materials story, reviews, journal, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/aurelle.svg",
    "meta": {
      "fonts": [
        {
          "family": "Bodoni Moda",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400;1,6..96,500&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Jost",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Pinyon Script",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Bodoni Moda",
        "body": "Jost"
      },
      "colors": {
        "primary": "#1E1416",
        "secondary": "#A0525E",
        "accent": "#D9B77E",
        "background": "#FCF8F6",
        "foreground": "#241A1C",
        "muted": "#75686A"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "au-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "au-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#1A1214] px-4 py-2 text-center text-[11px] font-light uppercase tracking-[0.2em] text-white/80"
                  }
                },
                "children": [
                  {
                    "id": "au-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "✧ Complimentary gift box on every order · 10% off your first piece with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "au-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "GLOW10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#D9B77E] px-2 py-0.5 font-mono text-[11px] font-bold tracking-normal text-[#1A1214]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Shop now",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/shop",
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
                        "classes": "text-[11px] font-medium uppercase tracking-[0.2em] text-[#D9B77E] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "au-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "au-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "au-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "A",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-[#1E1416] font-heading font-medium italic leading-none text-[#D9B77E] ring-1 ring-[#D9B77E]/60 ring-offset-2 ring-offset-white"
                              }
                            }
                          },
                          {
                            "id": "au-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Aurelle",
                                  "src": "https://placehold.co/200x64?text=Aurelle",
                                  "altText": "Aurelle Fine Jewellery",
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
                                    "classes": "text-2xl text-[#241A1C] font-heading font-medium tracking-[0.15em] uppercase"
                                  }
                                }
                              },
                              {
                                "id": "au-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Fine Jewellery",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[9px] font-medium uppercase tracking-[0.4em] text-[#8C6B3A]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "au-hdr-menu",
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
                            "classes": "flex items-center gap-7"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-xs font-medium text-[#241A1C] transition-colors hover:text-[#A0525E] uppercase tracking-[0.2em]"
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
                            "id": "au-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "New In",
                              "url": "/#new"
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
                            "id": "au-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Rings",
                              "url": "/categories/rings"
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
                            "id": "au-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Earrings",
                              "url": "/categories/earrings"
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
                            "id": "au-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Necklaces",
                              "url": "/categories/necklaces"
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
                            "id": "au-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Gifts",
                              "url": "/#gifts",
                              "icon": "IconGift",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "!text-[#1E1416] font-bold"
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
                        "id": "au-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search rings, earrings, pearls...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#FCF8F6] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#A0525E] focus-within:ring-2 focus-within:ring-[#A0525E]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#241A1C] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#75686A]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1E1416]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#1E1416]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1E1416] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3A2A2D]"
                          }
                        }
                      },
                      {
                        "id": "au-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "au-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FCF8F6] text-[#241A1C] transition-colors hover:bg-[#F3ECEA] hover:text-[#1E1416]"
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
                            "id": "au-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#A0525E] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#84404B]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#1E1416] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FCF8F6] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#241A1C]"
                              },
                              "title-icon": {
                                "classes": "text-[#1E1416]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#1E1416] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#1E1416] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3A2A2D]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#1E1416] px-4 py-2 text-sm font-medium text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E1416] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3A2A2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "au-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#FCF8F6] text-[#241A1C]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FCF8F6] p-2 text-[#241A1C] transition-colors hover:bg-[#1E1416] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "A",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#1E1416] font-heading font-medium italic leading-none text-[#D9B77E] ring-1 ring-[#D9B77E]/60 ring-offset-2 ring-offset-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Aurelle",
                                          "src": "https://placehold.co/200x64?text=Aurelle",
                                          "altText": "Aurelle Fine Jewellery",
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
                                            "classes": "text-2xl text-[#241A1C] font-heading font-medium tracking-[0.15em] uppercase"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Fine Jewellery",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#A0525E]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "au-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search rings, earrings, pearls...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FCF8F6] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#A0525E] focus-within:ring-2 focus-within:ring-[#A0525E]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#241A1C] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#75686A]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1E1416]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#1E1416]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1E1416] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3A2A2D]"
                                  }
                                }
                              },
                              {
                                "id": "au-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#241A1C] transition-colors hover:text-[#A0525E] uppercase tracking-[0.2em]"
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
                                    "id": "au-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New In",
                                      "url": "/#new"
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
                                    "id": "au-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Rings",
                                      "url": "/categories/rings"
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
                                    "id": "au-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Earrings",
                                      "url": "/categories/earrings"
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
                                    "id": "au-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Necklaces",
                                      "url": "/categories/necklaces"
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
                                    "id": "au-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Gifts",
                                      "url": "/#gifts",
                                      "icon": "IconGift",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "!text-[#1E1416] font-bold"
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
          }
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "au-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#241A1C] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "au-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "au-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F4E1DE] to-[#F8EEEB] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "au-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "au-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Join the Aurelle Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#A0525E]"
                              }
                            }
                          },
                          {
                            "id": "au-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 10% Off Your First Piece",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-medium text-[#241A1C] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "au-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for your welcome code, early access to new drops and a birthday surprise.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm font-light text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Claim 10% Off",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1E1416] px-9 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#3A2A2D]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "au-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "au-ftr-grid",
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
                        "id": "au-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "au-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "A",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#1E1416] font-heading font-medium italic leading-none text-[#D9B77E] ring-1 ring-[#D9B77E]/60 ring-offset-2 ring-offset-white"
                                  }
                                }
                              },
                              {
                                "id": "au-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Aurelle",
                                      "src": "https://placehold.co/200x64?text=Aurelle",
                                      "altText": "Aurelle Fine Jewellery",
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
                                        "classes": "text-2xl text-white font-heading font-medium tracking-[0.15em] uppercase"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "au-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Demi-fine jewellery for the modern woman: 18K gold-plated sterling silver, freshwater pearls and hand-set stones, designed to be worn every day and gifted with love.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "au-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1E1416]"
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
                                "id": "au-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1E1416]"
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
                                "id": "au-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1E1416]"
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
                                "id": "au-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1E1416]"
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
                        "id": "au-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Rings",
                                  "icon": "",
                                  "slug": "/categories/rings"
                                },
                                {
                                  "text": "Earrings",
                                  "icon": "",
                                  "slug": "/categories/earrings"
                                },
                                {
                                  "text": "Necklaces",
                                  "icon": "",
                                  "slug": "/categories/necklaces"
                                },
                                {
                                  "text": "Bracelets & Anklets",
                                  "icon": "",
                                  "slug": "/categories/bracelets"
                                },
                                {
                                  "text": "The Gift Edit",
                                  "icon": "",
                                  "slug": "/categories/gifts"
                                },
                                {
                                  "text": "Shop All",
                                  "icon": "",
                                  "slug": "/shop"
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
                                "classes": "transition-colors hover:text-[#D9B77E]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D9B77E]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-ftr-ll-care",
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
                                  "text": "Ring Size Guide",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Jewellery Care",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Style Journal",
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
                                "classes": "transition-colors hover:text-[#D9B77E]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D9B77E]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "au-ftr-contact-h",
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
                            "id": "au-ftr-address",
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
                                "value": "Sat-Thu: 11am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#D9B77E]"
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
                                "classes": "shrink-0 text-[#1E1416]"
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
                "id": "au-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "au-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Aurelle Fine Jewellery. All rights reserved. Made to shine.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "au-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "au-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-[10px] font-medium uppercase tracking-[0.25em]"
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
            "id": "au-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1A1214] pb-20 pt-12 lg:pb-28 lg:pt-20"
              }
            },
            "children": [
              {
                "id": "au-hero-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px] opacity-60"
                  }
                },
                "children": []
              },
              {
                "id": "au-hero-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -top-32 right-0 h-[560px] w-[560px] max-w-full rounded-full bg-[#A0525E] opacity-30 blur-[130px]"
                  }
                },
                "children": []
              },
              {
                "id": "au-hero-glow-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-[#D9B77E] opacity-15 blur-[110px]"
                  }
                },
                "children": []
              },
              {
                "id": "au-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "au-hero-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-14 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "au-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-6 text-center lg:col-span-7 lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "au-hero-sc",
                            "type": "text",
                            "options": {
                              "text": "made to shine",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Pinyon_Script'] text-5xl leading-none text-[#D9B77E] sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "au-hero-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-[#D9B77E]/30 bg-white/5 px-4 py-2 backdrop-blur-sm"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-badge-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSparkles",
                                  "size": 15,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-hero-badge-t",
                                "type": "text",
                                "options": {
                                  "text": "The new Lumière collection",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-medium uppercase tracking-[0.3em] text-white/90"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Little Luxuries for Every Day You Glow",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-medium leading-[1.05] text-white sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "au-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Demi-fine jewellery in 18K gold-plated sterling silver, freshwater pearls and sparkling stones. Hypoallergenic, tarnish-resistant and made to be stacked, gifted and worn every day.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto max-w-xl text-lg font-light leading-relaxed text-white/70 lg:mx-0"
                              }
                            }
                          },
                          {
                            "id": "au-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop New In",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D9B77E] px-9 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#E6CB9C] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1A1214]"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-[#1A1214] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "au-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find a Gift",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#gifts",
                                  "target": "",
                                  "icon": "IconGift",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-9 py-4 transition-all hover:border-[#D9B77E] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white group-hover:text-[#D9B77E]"
                                  },
                                  "label": {
                                    "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-white whitespace-nowrap group-hover:text-[#D9B77E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 grid w-full max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-stat-0",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-stat-0-v",
                                    "type": "text",
                                    "options": {
                                      "text": "18K",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-medium text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hero-stat-0-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Gold plated",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-medium uppercase tracking-[0.2em] text-white/55"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "au-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "925",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-medium text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hero-stat-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Sterling silver",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-medium uppercase tracking-[0.2em] text-white/55"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "au-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "4.9★",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-medium text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hero-stat-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Avg. rating",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-medium uppercase tracking-[0.2em] text-white/55"
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
                        "id": "au-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
                          }
                        },
                        "children": [
                          {
                            "id": "au-hero-frame",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-[#D9B77E]/40 p-2.5 shadow-[0_40px_90px_-30px_rgba(160,82,94,0.55)]"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-frame-in",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "overflow-hidden rounded-t-[999px] rounded-b-[1.6rem]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/aurelle-hero.svg",
                                      "altText": "A diamond solitaire ring, a pearl drop pendant and gold hoops on a blush pedestal",
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
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "au-hero-float-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-4 top-1/4 hidden items-center gap-3 rounded-2xl border border-[#D9B77E]/30 bg-[#1A1214]/85 p-3.5 shadow-xl backdrop-blur-md sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-float-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconShieldCheck",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#D9B77E]/15 text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-hero-float-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-float-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Tarnish-resistant",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-medium uppercase tracking-[0.2em] text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hero-float-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "1-year plating warranty",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-medium text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "au-hero-float-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-3 bottom-12 hidden items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "au-hero-float-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconGift",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#FBEDEE] text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-hero-float-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-hero-float-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Complimentary",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-medium uppercase tracking-[0.2em] text-[#75686A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-hero-float-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Signature gift box",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-medium text-[#241A1C]"
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
            "id": "au-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#8C6B3A]/15 bg-[#F8EEEB] py-10"
              }
            },
            "children": [
              {
                "id": "au-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free Gift Box",
                          "description": "Every order arrives in our signature box",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Hypoallergenic",
                          "description": "Nickel-free, gentle on sensitive skin",
                          "icon": "IconDroplet",
                          "iconSize": ""
                        },
                        {
                          "title": "1-Year Warranty",
                          "description": "On plating and stone settings",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Fast delivery, pay when it arrives",
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
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] text-[#241A1C]"
                      },
                      "description": {
                        "classes": "text-xs font-light text-[#75686A]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white text-[#A0525E]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconGift",
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
                        "id": "au-promise-fb-t",
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
                        "id": "au-promise-fb-d",
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
            "id": "au-cats",
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
                "id": "au-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cats-sc",
                        "type": "text",
                        "options": {
                          "text": "adorn",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Pinyon_Script'] text-4xl leading-none text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-cats-k",
                        "type": "text",
                        "options": {
                          "text": "Shop by category",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                          }
                        }
                      },
                      {
                        "id": "au-cats-h",
                        "type": "heading",
                        "options": {
                          "text": "Find Your Signature Piece",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-cats-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 text-[#8C6B3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-cats-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-r from-transparent to-current"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "au-cats-rule-d",
                            "type": "text",
                            "options": {
                              "text": "◆",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[8px] leading-none"
                              }
                            }
                          },
                          {
                            "id": "au-cats-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-l from-transparent to-current"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "au-cats-p",
                        "type": "text",
                        "options": {
                          "text": "Rings to stack, earrings to mix, necklaces to layer. Start with the piece you will reach for every day.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base font-light leading-relaxed text-[#75686A]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-cats-slider",
                    "type": "termsSlider",
                    "options": {
                      "queryPrams": {
                        "taxonomy": "product_cat",
                        "number": "12",
                        "per_page": "12",
                        "hide_empty": true,
                        "order": "DESC",
                        "orderby": "count",
                        "paged": 1
                      },
                      "sliderOptions": {
                        "type": "slide",
                        "perPage": 6,
                        "perMove": 1,
                        "gap": "1.5rem",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center gap-1 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cats-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center gap-1 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "au-cats-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mb-4 w-full overflow-hidden rounded-full border border-[#8C6B3A]/30 bg-white p-1.5 transition-all duration-500 group-hover:border-[#A0525E]/60 group-hover:shadow-[0_18px_40px_-18px_rgba(160,82,94,0.5)]"
                              },
                              "link": {
                                "classes": "block overflow-hidden rounded-full bg-[#F8EEEB]"
                              },
                              "image": {
                                "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "au-cats-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-medium text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                              }
                            }
                          },
                          {
                            "id": "au-cats-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " pieces",
                              "singularSuffix": " piece",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-medium uppercase tracking-[0.25em] text-[#8C6B3A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "au-cats-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cats-all",
                        "type": "button",
                        "options": {
                          "text": "View all categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 15
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 border-b border-[#241A1C]/40 pb-1 transition-colors hover:border-[#A0525E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-[11px] font-medium uppercase tracking-[0.3em] text-[#241A1C] group-hover:text-[#A0525E]"
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
            "id": "au-row-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-row-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-new-sc",
                        "type": "text",
                        "options": {
                          "text": "just landed",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Pinyon_Script'] text-4xl leading-none text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-new-k",
                        "type": "text",
                        "options": {
                          "text": "New in",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                          }
                        }
                      },
                      {
                        "id": "au-new-h",
                        "type": "heading",
                        "options": {
                          "text": "Fresh From the Atelier",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-new-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 text-[#8C6B3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-new-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-r from-transparent to-current"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "au-new-rule-d",
                            "type": "text",
                            "options": {
                              "text": "◆",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[8px] leading-none"
                              }
                            }
                          },
                          {
                            "id": "au-new-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-l from-transparent to-current"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "au-new-p",
                        "type": "text",
                        "options": {
                          "text": "Our newest designs, made in small batches. Bestsellers sell out fast, so do not wait too long.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base font-light leading-relaxed text-[#75686A]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-row-new-slider",
                    "type": "postSlider",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
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
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 !shadow-[0_10px_25px_-8px_rgba(36,26,28,0.25)] transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-new-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-new-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-new-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-new-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-new-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-row-new-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-new-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-row-new-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-new-slider-c-ex",
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
                            "id": "au-row-new-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-new-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-row-new-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
                  },
                  {
                    "id": "au-new-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-new-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop all new in",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1E1416] px-9 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#3A2A2D]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-white whitespace-nowrap"
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
            "id": "au-gifts",
            "type": "section",
            "options": {
              "anchor": "gifts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-gifts-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-gifts-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#F4E1DE] via-[#F8EEEB] to-white lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "au-gifts-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px] opacity-60"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "au-gifts-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-center gap-5 p-8 text-center sm:p-12 lg:items-start lg:p-16 lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "au-gifts-sc",
                            "type": "text",
                            "options": {
                              "text": "for her",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Pinyon_Script'] text-5xl leading-none text-[#A0525E]"
                              }
                            }
                          },
                          {
                            "id": "au-gifts-k",
                            "type": "text",
                            "options": {
                              "text": "The Gift Edit",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                              }
                            }
                          },
                          {
                            "id": "au-gifts-h",
                            "type": "heading",
                            "options": {
                              "text": "Gifts She Will Never Take Off",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "au-gifts-p",
                            "type": "text",
                            "options": {
                              "text": "Birthdays, anniversaries, graduations or simply because. Every piece arrives in our signature box with a hand-written note, ready to be unwrapped.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          },
                          {
                            "id": "au-gifts-chips",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap justify-center gap-2 lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "au-gifts-chip-1",
                                "type": "text",
                                "options": {
                                  "text": "Under ৳2,500",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#A0525E]/30 bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-gifts-chip-2",
                                "type": "text",
                                "options": {
                                  "text": "Initial necklaces",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#A0525E]/30 bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-gifts-chip-3",
                                "type": "text",
                                "options": {
                                  "text": "Matching sets",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-[#A0525E]/30 bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#A0525E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-gifts-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop the Gift Edit",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/gifts",
                              "target": "",
                              "icon": "IconGift",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1E1416] px-9 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#3A2A2D] mt-2 w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-white whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-gifts-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex min-h-[320px] items-center justify-center p-10"
                          }
                        },
                        "children": [
                          {
                            "id": "au-gifts-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex aspect-square w-full max-w-[300px] flex-col items-center justify-center gap-3 rounded-full bg-[#1E1416] text-center shadow-[0_40px_80px_-30px_rgba(30,20,22,0.6)] ring-1 ring-[#D9B77E]/50 ring-offset-8 ring-offset-[#F8EEEB]"
                              }
                            },
                            "children": [
                              {
                                "id": "au-gifts-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDiamond",
                                  "size": 34,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-gifts-box-sc",
                                "type": "text",
                                "options": {
                                  "text": "with love",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Pinyon_Script'] text-5xl leading-tight text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-gifts-box-en",
                                "type": "text",
                                "options": {
                                  "text": "Complimentary gift wrap",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-medium uppercase tracking-[0.3em] text-white/60"
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
            "id": "au-row-rings",
            "type": "section",
            "options": {
              "anchor": "rings"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-row-rings-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-row-rings-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8C6B3A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-rings-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-rings-ic",
                            "type": "text",
                            "options": {
                              "text": "r",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white font-['Pinyon_Script'] text-3xl leading-none text-[#A0525E] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "au-row-rings-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-rings-h",
                                "type": "heading",
                                "options": {
                                  "text": "Rings",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium text-[#241A1C] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "au-row-rings-p",
                                "type": "text",
                                "options": {
                                  "text": "Solitaires, stackers and statement bands to mix and match.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm font-light text-[#75686A] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "au-row-rings-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/rings",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] whitespace-nowrap text-[#241A1C] group-hover:text-[#A0525E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-row-rings-slider",
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
                                  "rings"
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
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 !shadow-[0_10px_25px_-8px_rgba(36,26,28,0.25)] transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-rings-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-rings-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-rings-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-rings-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-rings-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-row-rings-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-rings-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-row-rings-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-rings-slider-c-ex",
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
                            "id": "au-row-rings-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-rings-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-row-rings-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
            "id": "au-row-earrings",
            "type": "section",
            "options": {
              "anchor": "earrings"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-row-earrings-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-row-earrings-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8C6B3A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-earrings-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-earrings-ic",
                            "type": "text",
                            "options": {
                              "text": "e",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white font-['Pinyon_Script'] text-3xl leading-none text-[#A0525E] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "au-row-earrings-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-earrings-h",
                                "type": "heading",
                                "options": {
                                  "text": "Earrings",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium text-[#241A1C] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "au-row-earrings-p",
                                "type": "text",
                                "options": {
                                  "text": "Huggies, hoops, studs and pearl drops for every ear.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm font-light text-[#75686A] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "au-row-earrings-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/earrings",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] whitespace-nowrap text-[#241A1C] group-hover:text-[#A0525E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-row-earrings-slider",
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
                                  "earrings"
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
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 !shadow-[0_10px_25px_-8px_rgba(36,26,28,0.25)] transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-earrings-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-earrings-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-earrings-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-earrings-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-earrings-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-row-earrings-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-earrings-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-row-earrings-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-earrings-slider-c-ex",
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
                            "id": "au-row-earrings-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-earrings-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-row-earrings-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
            "id": "au-craft",
            "type": "section",
            "options": {
              "anchor": "craft"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1A1214] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "au-craft-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px] opacity-40"
                  }
                },
                "children": []
              },
              {
                "id": "au-craft-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#A0525E] opacity-20 blur-[120px]"
                  }
                },
                "children": []
              },
              {
                "id": "au-craft-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "au-craft-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "au-craft-card",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-center gap-5 rounded-t-[999px] rounded-b-[2.5rem] border border-[#D9B77E]/30 bg-gradient-to-b from-white/[0.06] to-transparent px-8 pb-14 pt-24 text-center sm:px-12"
                          }
                        },
                        "children": [
                          {
                            "id": "au-craft-card-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDiamond",
                              "size": 36,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex text-[#D9B77E]"
                              }
                            }
                          },
                          {
                            "id": "au-craft-card-sc",
                            "type": "text",
                            "options": {
                              "text": "forever yours",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Pinyon_Script'] text-6xl leading-tight text-[#D9B77E]"
                              }
                            }
                          },
                          {
                            "id": "au-craft-card-en",
                            "type": "text",
                            "options": {
                              "text": "Designed to be worn, loved and passed on.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl italic text-white sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "au-craft-card-src",
                            "type": "text",
                            "options": {
                              "text": "The Aurelle promise",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[10px] font-medium uppercase tracking-[0.35em] text-white/50"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-craft-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "au-craft-k",
                            "type": "text",
                            "options": {
                              "text": "Made to last",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#D9B77E]"
                              }
                            }
                          },
                          {
                            "id": "au-craft-h",
                            "type": "heading",
                            "options": {
                              "text": "Luxury You Can Wear Every Single Day",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-medium leading-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "au-craft-p",
                            "type": "text",
                            "options": {
                              "text": "We start with solid 925 sterling silver, finish it in a thick layer of 18K gold, and set every stone by hand. The result looks and feels like fine jewellery, at a price that lets you build a collection.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base font-light leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "au-craft-grid",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-craft-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-craft-r1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCrown",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9B77E]/30 text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-craft-r1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-craft-r1-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "925 Silver base",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium uppercase tracking-[0.2em] text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-craft-r1-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Solid sterling silver, never brass or base metal.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-light leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "au-craft-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-craft-r2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconSparkles",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9B77E]/30 text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-craft-r2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-craft-r2-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Thick 18K plating",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium uppercase tracking-[0.2em] text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-craft-r2-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Rich gold colour that resists everyday wear.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-light leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "au-craft-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-craft-r3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconDroplet",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9B77E]/30 text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-craft-r3-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-craft-r3-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Skin-safe",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium uppercase tracking-[0.2em] text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-craft-r3-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Nickel- and lead-free, kind to sensitive skin.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-light leading-relaxed text-white/60"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "au-craft-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-craft-r4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRosette",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9B77E]/30 text-[#D9B77E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-craft-r4-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-craft-r4-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Hand-set stones",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-medium uppercase tracking-[0.2em] text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-craft-r4-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Sparkling zirconia and real freshwater pearls.",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm font-light leading-relaxed text-white/60"
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
              }
            ]
          },
          {
            "id": "au-row-necklaces",
            "type": "section",
            "options": {
              "anchor": "necklaces"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-row-necklaces-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-row-necklaces-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8C6B3A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-necklaces-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-necklaces-ic",
                            "type": "text",
                            "options": {
                              "text": "n",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white font-['Pinyon_Script'] text-3xl leading-none text-[#A0525E] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "au-row-necklaces-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-necklaces-h",
                                "type": "heading",
                                "options": {
                                  "text": "Necklaces",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium text-[#241A1C] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "au-row-necklaces-p",
                                "type": "text",
                                "options": {
                                  "text": "Dainty chains, pendants and initials made for layering.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm font-light text-[#75686A] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "au-row-necklaces-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/necklaces",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] whitespace-nowrap text-[#241A1C] group-hover:text-[#A0525E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-row-necklaces-slider",
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
                                  "necklaces"
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
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 !shadow-[0_10px_25px_-8px_rgba(36,26,28,0.25)] transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-necklaces-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-necklaces-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-necklaces-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-necklaces-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-necklaces-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-row-necklaces-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-necklaces-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-row-necklaces-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-necklaces-slider-c-ex",
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
                            "id": "au-row-necklaces-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-necklaces-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-row-necklaces-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
            "id": "au-row-bracelets",
            "type": "section",
            "options": {
              "anchor": "bracelets"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-row-bracelets-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-row-bracelets-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-[#8C6B3A]/20 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-bracelets-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-bracelets-ic",
                            "type": "text",
                            "options": {
                              "text": "b",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white font-['Pinyon_Script'] text-3xl leading-none text-[#A0525E] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "au-row-bracelets-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-bracelets-h",
                                "type": "heading",
                                "options": {
                                  "text": "Bracelets & Anklets",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-medium text-[#241A1C] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "au-row-bracelets-p",
                                "type": "text",
                                "options": {
                                  "text": "Tennis bracelets, cuffs and delicate chains to finish the look.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm font-light text-[#75686A] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "au-row-bracelets-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bracelets",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] whitespace-nowrap text-[#241A1C] group-hover:text-[#A0525E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-row-bracelets-slider",
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
                                  "bracelets"
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
                          "767": {
                            "perPage": 2,
                            "gap": "1rem",
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pt-2 [&_.splide__track]:!pb-4"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 !shadow-[0_10px_25px_-8px_rgba(36,26,28,0.25)] transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-row-bracelets-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-row-bracelets-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-bracelets-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-bracelets-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-bracelets-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-row-bracelets-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-row-bracelets-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-row-bracelets-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-row-bracelets-slider-c-ex",
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
                            "id": "au-row-bracelets-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-row-bracelets-slider-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-row-bracelets-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
            "id": "au-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F8EEEB] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "au-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-reviews-sc",
                        "type": "text",
                        "options": {
                          "text": "love notes",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Pinyon_Script'] text-4xl leading-none text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-reviews-k",
                        "type": "text",
                        "options": {
                          "text": "Worn by 40,000+ women",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                          }
                        }
                      },
                      {
                        "id": "au-reviews-h",
                        "type": "heading",
                        "options": {
                          "text": "Loved & Worn Every Day",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-reviews-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 text-[#8C6B3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-reviews-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-r from-transparent to-current"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "au-reviews-rule-d",
                            "type": "text",
                            "options": {
                              "text": "◆",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[8px] leading-none"
                              }
                            }
                          },
                          {
                            "id": "au-reviews-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-l from-transparent to-current"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "au-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#8C6B3A]/30 !bg-white !opacity-100 transition-colors hover:!bg-[#1E1416] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1E1416] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#A0525E]/30 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#A0525E]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The gold huggies have not left my ears in three months. Shower, gym, sleep: still shining. The gift box alone made me feel so fancy.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "AR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Anika Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
                        "id": "au-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought the pearl drop pendant for my mum and one for myself. Delicate, elegant and the chain is so fine. Everyone asks where it is from.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sadia Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
                        "id": "au-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“I have very sensitive skin and usually react to cheap jewellery. Not with these. Finally rings I can stack all day.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "MC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mahi Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Sylhet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
                        "id": "au-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“My boyfriend got me the initial necklace for our anniversary. The hand-written note made me cry a little. Beautiful quality.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tasnim Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
                        "id": "au-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“The tennis bracelet sparkles like the real thing. Wore it to a wedding and felt like a million taka. Delivery was quick too.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "NH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nabila Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Rajshahi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
                        "id": "au-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(160,82,94,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Customer service helped me choose my ring size over chat and exchanged it when I got it wrong. Lovely, lovely experience.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl italic leading-snug text-[#241A1C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-[#8C6B3A]/15 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "IJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E1416] font-heading text-base text-[#D9B77E]"
                                  }
                                }
                              },
                              {
                                "id": "au-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Ishrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-medium text-[#241A1C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Khulna",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-light text-[#A0525E]"
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
            "id": "au-journal",
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
                "id": "au-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-journal-sc",
                        "type": "text",
                        "options": {
                          "text": "the edit",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Pinyon_Script'] text-4xl leading-none text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-journal-k",
                        "type": "text",
                        "options": {
                          "text": "Style journal",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                          }
                        }
                      },
                      {
                        "id": "au-journal-h",
                        "type": "heading",
                        "options": {
                          "text": "Styling Notes & Stories",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-journal-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 text-[#8C6B3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-journal-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-r from-transparent to-current"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "au-journal-rule-d",
                            "type": "text",
                            "options": {
                              "text": "◆",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[8px] leading-none"
                              }
                            }
                          },
                          {
                            "id": "au-journal-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-l from-transparent to-current"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "au-journal-p",
                        "type": "text",
                        "options": {
                          "text": "How to stack rings, layer necklaces, care for your gold and find the perfect gift.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base font-light leading-relaxed text-[#75686A]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-journal-grid",
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
                        "id": "au-journal-loop",
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
                            "id": "au-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[1.75rem] bg-[#F8EEEB]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "au-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col items-center gap-2 pt-5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "au-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[10px] font-medium uppercase tracking-[0.3em] text-[#8C6B3A]"
                                  }
                                }
                              },
                              {
                                "id": "au-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-medium leading-snug text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col items-center justify-between gap-4 text-sm font-light text-[#75686A]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#241A1C]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#A0525E] transition-transform group-hover/rm:translate-x-1"
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
            "id": "au-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "au-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-faq-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-faq-sc",
                        "type": "text",
                        "options": {
                          "text": "good to know",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Pinyon_Script'] text-4xl leading-none text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-faq-k",
                        "type": "text",
                        "options": {
                          "text": "Questions",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.35em] text-[#8C6B3A]"
                          }
                        }
                      },
                      {
                        "id": "au-faq-h",
                        "type": "heading",
                        "options": {
                          "text": "Frequently Asked Questions",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-medium leading-tight text-[#241A1C] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-faq-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 text-[#8C6B3A]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-r from-transparent to-current"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "au-faq-rule-d",
                            "type": "text",
                            "options": {
                              "text": "◆",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[8px] leading-none"
                              }
                            }
                          },
                          {
                            "id": "au-faq-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-16 bg-gradient-to-l from-transparent to-current"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "au-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Will the gold plating fade or tarnish?",
                          "classes": ""
                        },
                        {
                          "label": "Is it safe for sensitive skin?",
                          "classes": ""
                        },
                        {
                          "label": "How do I find my ring size?",
                          "classes": ""
                        },
                        {
                          "label": "How should I care for my jewellery?",
                          "classes": ""
                        },
                        {
                          "label": "Do you gift wrap, and can I add a note?",
                          "classes": ""
                        },
                        {
                          "label": "Delivery, payment and exchanges?",
                          "classes": ""
                        }
                      ],
                      "multiple": false
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-3xl"
                      },
                      "spacing": {
                        "classes": "p-0"
                      },
                      "accordion-items": {
                        "classes": "flex flex-col divide-y divide-[#8C6B3A]/20 border-y border-[#8C6B3A]/20"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 bg-transparent px-1 py-6 font-heading text-xl font-medium text-[#241A1C] transition-colors hover:text-[#A0525E]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#A0525E]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#A0525E]"
                      },
                      "accordion-content": {
                        "classes": "px-1 pb-6"
                      }
                    },
                    "children": [
                      {
                        "id": "au-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Our pieces are 925 sterling silver with a thick 18K gold plating, made to last with everyday wear. Keep them away from perfume, lotions and chlorine, and they will keep their shine for years. Plating is covered by a 1-year warranty.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Everything is nickel-free and lead-free on a solid sterling silver base, so it is hypoallergenic and gentle for most sensitive skin.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Wrap a strip of paper around your finger, mark where it meets, and measure the length in millimetres. Match it to the size chart on each ring’s page. Between sizes? Go up one.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Put it on last and take it off first. Wipe with the soft cloth in your box, store each piece in its pouch, and avoid swimming or showering with plated pieces to keep them bright for longer.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Every order arrives in our signature gift box at no cost. Add a message at checkout and we will hand-write it on a card. Prices are never shown inside the box.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-faq-i6",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-faq-i6-a",
                            "type": "text",
                            "options": {
                              "text": "Cash on delivery is available nationwide: about 24 hours inside Dhaka and 48-72 hours elsewhere. bKash, Nagad and cards are accepted. Unworn pieces in original packaging can be exchanged within 7 days; for hygiene, earrings cannot be exchanged.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm font-light leading-relaxed text-[#75686A]"
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
            "id": "au-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "au-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center gap-5 overflow-hidden rounded-[2.5rem] bg-[#1A1214] px-6 py-16 text-center sm:px-12"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cta-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px] opacity-50"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "au-cta-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[#A0525E] opacity-30 blur-[100px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "au-cta-sc",
                        "type": "text",
                        "options": {
                          "text": "welcome, darling",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Pinyon_Script'] text-5xl leading-none text-[#D9B77E]"
                          }
                        }
                      },
                      {
                        "id": "au-cta-h",
                        "type": "heading",
                        "options": {
                          "text": "Join the Aurelle Club",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading text-4xl font-medium text-white sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "au-cta-p",
                        "type": "text",
                        "options": {
                          "text": "Create a free account for 10% off your first order, early access to new drops and a little something on your birthday.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-lg text-base font-light text-white/75"
                          }
                        }
                      },
                      {
                        "id": "au-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "au-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Create my account",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconUserPlus",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D9B77E] px-9 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#E6CB9C] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1A1214]"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-[#1A1214] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "au-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse the shop",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-9 py-4 transition-all hover:border-[#D9B77E] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-xs font-medium uppercase tracking-[0.3em] text-white whitespace-nowrap group-hover:text-[#D9B77E]"
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
            "id": "au-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The Collection",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All Jewellery",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every ring, earring, necklace and bracelet we make, newest first. Open a piece for materials, sizing and care, or add it straight to your bag.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-shop-grid-c-ex",
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
                            "id": "au-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
                        "id": "au-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-shop-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#8C6B3A]/15 bg-[#F8EEEB] py-10"
              }
            },
            "children": [
              {
                "id": "au-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free Gift Box",
                          "description": "Every order arrives in our signature box",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Hypoallergenic",
                          "description": "Nickel-free, gentle on sensitive skin",
                          "icon": "IconDroplet",
                          "iconSize": ""
                        },
                        {
                          "title": "1-Year Warranty",
                          "description": "On plating and stone settings",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Fast delivery, pay when it arrives",
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
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] text-[#241A1C]"
                      },
                      "description": {
                        "classes": "text-xs font-light text-[#75686A]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white text-[#A0525E]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-shop-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconGift",
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
                        "id": "au-shop-promise-fb-t",
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
                        "id": "au-shop-promise-fb-d",
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
            "id": "au-pd",
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
                "id": "au-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-pd-grid",
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
                        "id": "au-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "au-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FBEDEE] via-white to-[#F8EEEB] p-4 shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#241A1C]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#241A1C]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#1E1416]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "au-pd-cats",
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
                                "classes": "rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E] hover:bg-[#A0525E] hover:text-white"
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
                            "id": "au-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#241A1C] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "au-pd-rate",
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
                                "classes": "font-body font-bold text-[#241A1C]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "au-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#241A1C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#241A1C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#241A1C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#1E1416] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "au-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#75686A]"
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
                            "id": "au-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#241A1C]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#241A1C] transition-colors hover:border-[#A0525E] hover:bg-[#FBEDEE]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#A0525E] !bg-[#FBEDEE] !text-[#84404B]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "au-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out: join the club to hear when it is back",
                              "inStockText": "In stock, gift-boxed and ready to ship",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#1E1416]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#A0525E]"
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
                            "id": "au-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#241A1C]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FCF8F6]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FCF8F6]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#1E1416] px-8 text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#3A2A2D]"
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
                            "id": "au-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Free gift box",
                                  "description": "With a hand-written note",
                                  "icon": "IconGift",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Hypoallergenic",
                                  "description": "Nickel-free sterling silver",
                                  "icon": "IconDroplet",
                                  "iconSize": ""
                                },
                                {
                                  "title": "1-year warranty",
                                  "description": "Plating & settings",
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
                                "classes": "font-body text-base font-bold text-[#241A1C]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBEDEE] text-[#A0525E]"
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-perks-ic",
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
                                "id": "au-pd-perks-t",
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
                                "id": "au-pd-perks-d",
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
                            "id": "au-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-sku",
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
                                    "classes": "font-semibold text-[#241A1C]"
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
                                "id": "au-pd-brands",
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
                                    "classes": "font-semibold text-[#241A1C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1E1416]"
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
                                "id": "au-pd-tags",
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
                                    "classes": "font-semibold text-[#241A1C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1E1416]"
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
            "id": "au-pd-tabs-sec",
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
                "id": "au-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(36,26,28,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "au-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Materials & Care",
                              "icon": "IconDiamond"
                            },
                            {
                              "label": "Delivery & Exchange",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FCF8F6] px-5 py-2.5 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#241A1C] !text-white shadow-md"
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
                            "id": "au-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#241A1C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#241A1C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#1E1416] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D9B77E] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconDiamond",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "925 sterling silver base with thick 18K gold plating",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Nickel- and lead-free: hypoallergenic and gentle on sensitive skin",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Put it on last, take it off first: avoid perfume, lotion and water",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store in the pouch provided and polish with the soft cloth",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A0525E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-ship-list",
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
                                      "text": "Cash on delivery, bKash, Nagad or card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unworn pieces in original packaging: exchange within 7 days (earrings excluded for hygiene)",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A0525E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "au-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FCF8F6] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FCF8F6] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "au-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3ECEA]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#241A1C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "au-pd-reviews-rate",
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
                                        "id": "au-pd-reviews-co",
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
                                    "id": "au-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Tell us how you wear it",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you, darling! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(36,26,28,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#241A1C]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FCF8F6] px-4 py-3 text-sm text-[#241A1C] placeholder:text-gray-400 focus:border-[#A0525E] focus:outline-none focus:ring-2 focus:ring-[#A0525E]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#1E1416] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#3A2A2D] disabled:opacity-50"
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
            "id": "au-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-16"
              }
            },
            "children": [
              {
                "id": "au-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the Look",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3ECEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1E1416]"
                          }
                        }
                      },
                      {
                        "id": "au-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Pairs Beautifully With",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#241A1C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-pd-rel-c-ex",
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
                            "id": "au-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
            "id": "au-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Categories",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F3ECEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1E1416]"
                      }
                    }
                  },
                  {
                    "id": "au-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Rings, earrings, necklaces, bracelets and gifts. Pick a category to begin.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FBEDEE] transition-transform"
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
                            "id": "au-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#241A1C] transition-colors group-hover:text-[#1E1416]"
                              }
                            }
                          },
                          {
                            "id": "au-cat-grid-count",
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
                        "id": "au-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F3ECEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1E1416]"
                      }
                    }
                  },
                  {
                    "id": "au-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "au-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A0525E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-cat1-grid-c-ex",
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
                            "id": "au-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
                        "id": "au-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D9B77E] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#241A1C]"
                      }
                    }
                  },
                  {
                    "id": "au-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pieces by metal, stone and mood: gold, silver, pearl, minimalist, statement and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1E1416]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1E1416]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#241A1C] group-hover:text-[#1E1416]"
                              }
                            }
                          },
                          {
                            "id": "au-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FCF8F6] px-2 py-0.5 text-[10px] font-bold text-[#75686A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "au-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D9B77E] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#241A1C]"
                      }
                    }
                  },
                  {
                    "id": "au-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "au-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A0525E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-tag1-grid-c-ex",
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
                            "id": "au-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
                        "id": "au-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Collections",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Collections",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Each collection tells its own story, from everyday minimalism to evening sparkle.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FCF8F6] p-3"
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
                            "id": "au-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#241A1C] group-hover:text-[#1E1416]"
                              }
                            }
                          },
                          {
                            "id": "au-brand-grid-count",
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
                        "id": "au-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "au-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " pieces",
                      "singularSuffix": " piece"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A0525E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-brand1-grid-c-ex",
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
                            "id": "au-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
                        "id": "au-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Style Journal",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Edit",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "How to stack rings, layer necklaces, care for your gold and find the perfect gift.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8EEEB]"
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
                            "id": "au-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "au-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#241A1C] transition-colors group-hover:text-[#1E1416]"
                                  }
                                }
                              },
                              {
                                "id": "au-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#1E1416]"
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
                        "id": "au-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#241A1C] transition-colors hover:border-[#1E1416] hover:text-[#1E1416]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1E1416] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "au-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EEEB] via-white to-[#FCF8F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "au-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-post-k",
                    "type": "text",
                    "options": {
                      "text": "The Edit",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#75686A]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-post-author",
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
                            "classes": "font-body font-bold text-[#241A1C]"
                          }
                        }
                      },
                      {
                        "id": "au-post-dot",
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
                        "id": "au-post-date",
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
                    "id": "au-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
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
            "id": "au-post-body",
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
                "id": "au-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#241A1C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#241A1C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#1E1416] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D9B77E] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-16"
              }
            },
            "children": [
              {
                "id": "au-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#241A1C]"
                      }
                    }
                  },
                  {
                    "id": "au-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FCF8F6] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "au-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FCF8F6] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "au-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#F3ECEA]"
                              }
                            }
                          },
                          {
                            "id": "au-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#241A1C]"
                              }
                            }
                          },
                          {
                            "id": "au-post-cmt-co",
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
                        "id": "au-post-cmt-form",
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
                            "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(36,26,28,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#241A1C]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FCF8F6] px-4 py-3 text-sm text-[#241A1C] placeholder:text-gray-400 focus:border-[#A0525E] focus:outline-none focus:ring-2 focus:ring-[#A0525E]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#1E1416] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#3A2A2D] disabled:opacity-50"
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
            "id": "au-post-more",
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
                "id": "au-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From The Edit",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#241A1C]"
                      }
                    }
                  },
                  {
                    "id": "au-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(36,26,28,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F8EEEB]"
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
                            "id": "au-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "au-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                                  }
                                }
                              },
                              {
                                "id": "au-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#241A1C] transition-colors group-hover:text-[#1E1416]"
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
            "id": "au-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#F8EEEB] bg-[url('/templates/aurelle-pattern.svg')] bg-[length:120px_120px]"
              }
            },
            "children": [
              {
                "id": "au-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "au-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome Back, Darling",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBEDEE] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A0525E]"
                      }
                    }
                  },
                  {
                    "id": "au-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#241A1C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "au-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track your orders, manage exchanges and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "au-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-12"
              }
            },
            "children": [
              {
                "id": "au-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#241A1C] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#D9B77E]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#1E1416]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#1E1416]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#1E1416]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "au-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "au-acc-3",
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
                                "id": "au-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(36,26,28,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E1416] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3A2A2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "au-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(36,26,28,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E1416] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3A2A2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "au-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "au-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FCF8F6] px-5 py-2.5 font-body text-sm font-semibold text-[#241A1C] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#241A1C] !text-white shadow-md"
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
                                "id": "au-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E1416]/10 text-[#1E1416]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "au-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#1E1416] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "au-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E1416]/10 text-[#1E1416]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "au-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#1E1416]/40 hover:bg-[#1E1416]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E1416]/10 text-[#1E1416]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "au-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E1416]/10 text-[#1E1416]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1E1416] focus:outline-none focus:ring-2 focus:ring-[#1E1416]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E1416] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3A2A2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1416]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "au-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EEEB] via-white to-[#FCF8F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "au-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(36,26,28,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "au-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FBEDEE] text-[#A0525E]"
                          }
                        }
                      },
                      {
                        "id": "au-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F3ECEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1E1416]"
                          }
                        }
                      },
                      {
                        "id": "au-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You, Darling",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#241A1C] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "au-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your piece is being polished and gift-boxed. A confirmation is on its way, and you can follow the order from your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#75686A] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "au-ty-steps",
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
                              "text": "Your piece is polished, gift-boxed and finished with your note",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#FCF8F6] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#1E1416]"
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
                        "id": "au-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "au-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E1416] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#3A2A2D] w-full sm:w-auto"
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
                            "id": "au-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#A0525E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A0525E] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A0525E] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#A0525E] whitespace-nowrap group-hover:text-white"
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
            "id": "au-ty-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#8C6B3A]/15 bg-[#F8EEEB] py-10"
              }
            },
            "children": [
              {
                "id": "au-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free Gift Box",
                          "description": "Every order arrives in our signature box",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Hypoallergenic",
                          "description": "Nickel-free, gentle on sensitive skin",
                          "icon": "IconDroplet",
                          "iconSize": ""
                        },
                        {
                          "title": "1-Year Warranty",
                          "description": "On plating and stone settings",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on Delivery",
                          "description": "Fast delivery, pay when it arrives",
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
                        "classes": "flex flex-col items-center gap-2 p-3"
                      },
                      "title": {
                        "classes": "font-body text-xs font-medium uppercase tracking-[0.25em] text-[#241A1C]"
                      },
                      "description": {
                        "classes": "text-xs font-light text-[#75686A]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#8C6B3A]/40 bg-white text-[#A0525E]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-ty-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconGift",
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
                        "id": "au-ty-promise-fb-t",
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
                        "id": "au-ty-promise-fb-d",
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
            "id": "au-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F8EEEB] via-white to-[#FCF8F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "au-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#1E1416] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "au-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8EEEB] text-[#241A1C]"
                      }
                    }
                  },
                  {
                    "id": "au-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Could Not Be Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#241A1C] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "au-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the piece may have sold out. Head back home or browse the full collection.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#75686A] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "au-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "au-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E1416] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(30,20,22,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#3A2A2D] w-full sm:w-auto"
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
                        "id": "au-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Jewellery",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#A0525E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A0525E] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A0525E] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#A0525E] whitespace-nowrap group-hover:text-white"
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
            "id": "au-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FCF8F6] py-16"
              }
            },
            "children": [
              {
                "id": "au-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "au-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "au-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#D9B77E] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#241A1C]"
                          }
                        }
                      },
                      {
                        "id": "au-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#241A1C] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "au-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                      }
                    },
                    "children": [
                      {
                        "id": "au-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-2.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(160,82,94,0.45)]"
                          }
                        },
                        "children": [
                          {
                            "id": "au-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "au-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.5rem] bg-[#F8EEEB]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A0525E] backdrop-blur-sm"
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
                                "id": "au-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col items-center gap-1 px-2 text-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "au-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#D9B77E]"
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
                                    "id": "au-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-normal tracking-wide text-[#241A1C] transition-colors group-hover:text-[#A0525E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "au-nf-grid-c-ex",
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
                            "id": "au-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex flex-col items-center gap-3 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "au-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-row-reverse items-baseline gap-2"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-medium tracking-wide text-[#A0525E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1E1416]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1E1416] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "au-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to Bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex w-full items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1E1416] px-4 text-[#1E1416] transition-colors hover:bg-[#1E1416] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap"
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
