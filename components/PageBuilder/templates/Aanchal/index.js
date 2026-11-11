/**
 * Template: Aanchal Saree House.
 *
 * A modern Bengali saree store for women who love handloom: jamdani, tant
 * and cotton, silk and katan, the red-and-white lal-paar, plus blouses and
 * jewellery. Like WonderJoy.js, Nexora.js and Noorani.js it is a complete
 * storefront carrying all sixteen page types - Header, Footer, Home, Shop,
 * Product, the six taxonomy archives, Blog Archive, Blog Single, Account,
 * Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to ac-, palette remapped, radii calmed, copy
 * rewritten), so it uses only blocks and option shapes already proven on the
 * builder and the storefront. Home is built fresh from the same block types.
 * It is plain data: edit freely.
 *
 * DESIGN
 *
 *   alta red  #B3122E  primary buttons, links, borders      #8E0E24 hover  #FBE9EC tint
 *   marigold  #A15C07  kickers, secondary text on light     #7F4805 hover  #FDF1DC tint
 *   marigold  #F2B93B  on dark: Bangla lines, CTAs, stats   #F6CD70 hover
 *   maroon    #3A0D17  hero, heritage band, promo bar, CTA
 *   ink       #2A1215  text, footer        muted #6E5A5C   ivory #FBF7F0  cream #FDF4E3
 *
 * Fonts (template meta): Fraunces for display headings, DM Sans for body and
 * every small label (the build moves small `font-heading` labels, buttons,
 * prices and card titles to `font-body`), and Tiro Bangla for the Bangla
 * accents via `font-['Tiro_Bangla']`.
 *
 * Bengali motifs: an alpona lattice (public/templates/aanchal-alpona.svg)
 * over the dark bands and inner page heads; a red saree-border strip, the
 * "paar" (public/templates/aanchal-paar.svg), under the hero and on the
 * festive and CTA cards; a red border along the foot of every product and
 * category image, like a saree's paar; Bangla words over each section head.
 *
 * HOME
 *
 *   Maroon hero with alpona, a Bangla line and a draped saree illustration
 *   (public/templates/aanchal-hero.svg) - paar strip - four promises -
 *   shop by weave, a product_cat slider (#weaves) - new arrivals (#new) -
 *   the Lal-Paar festive edit (#festive) - rows for jamdani and tant-cotton
 *   (#jamdani, #tant-cotton) - jamdani heritage story (#heritage) - rows for
 *   silk-katan and blouse-jewellery (#silk-katan, #blouse-jewellery) -
 *   reviews slider - latest three posts (#journal) - FAQ (#faq) - "Join the
 *   Aanchal Circle" CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs the links and rows assume: jamdani, tant-cotton,
 *     silk-katan, lal-paar, blouse-jewellery.
 *   - Contact details (+880 1700-000000, hello@example.com, hours), social
 *     URLs, the promo code NOTUNSAREE and the 10% welcome offer.
 *   - Hero numbers (120+ weaver families, 4.9), the weaving regions named in
 *     the hero and heritage story, and the six reviews are sample copy.
 *   - Saree length (5.5 m + 0.8 m blouse piece), delivery times, COD and
 *     the 7-day exchange: check they match the shop.
 */

var template = [
  {
    "name": "Aanchal Saree House",
    "description": "Modern Bengali saree store in alta red, marigold and deep maroon with Bangla typography, alpona patterns and a red saree-border motif: dark hero, shop by weave, new arrivals, the Lal-Paar festive edit, jamdani, tant, silk and blouse rows, a jamdani heritage story, reviews, journal, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/aanchal.svg",
    "meta": {
      "fonts": [
        {
          "family": "Fraunces",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "DM Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Tiro Bangla",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Tiro+Bangla&display=swap",
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
        "primary": "#B3122E",
        "secondary": "#A15C07",
        "accent": "#F2B93B",
        "background": "#FBF7F0",
        "foreground": "#2A1215",
        "muted": "#6E5A5C"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "ac-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "ac-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#3A0D17] px-4 py-2 text-center text-xs font-medium text-white/80 md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "ac-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "❀ New festive weaves are in. Free delivery in Dhaka over ৳5,000. Code:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "ac-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "NOTUNSAREE",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#F2B93B] px-2 py-0.5 font-mono text-xs font-bold text-[#3A0D17]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-hdr-promo-btn",
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
                        "classes": "text-xs font-bold text-[#F2B93B] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "ac-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "আ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 text-2xl items-center justify-center rounded-full bg-[#B3122E] font-['Tiro_Bangla'] leading-none text-white ring-2 ring-[#F2B93B] ring-offset-2 ring-offset-white"
                              }
                            }
                          },
                          {
                            "id": "ac-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Aanchal",
                                  "src": "https://placehold.co/200x64?text=Aanchal",
                                  "altText": "Aanchal Saree House",
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
                                    "classes": "font-heading text-2xl font-bold tracking-tight text-[#2A1215]"
                                  }
                                }
                              },
                              {
                                "id": "ac-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Handloom Saree House",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#A15C07]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ac-hdr-menu",
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
                            "classes": "min-w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-base font-medium text-[#2A1215] transition-colors hover:text-[#B3122E]"
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
                            "id": "ac-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "New Arrivals",
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
                            "id": "ac-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Jamdani",
                              "url": "/categories/jamdani"
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
                            "id": "ac-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Tant & Cotton",
                              "url": "/categories/tant-cotton"
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
                            "id": "ac-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Silk & Katan",
                              "url": "/categories/silk-katan"
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
                            "id": "ac-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Lal-Paar Edit",
                              "url": "/#festive",
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
                                "classes": "!text-[#B3122E] font-bold"
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
                        "id": "ac-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search jamdani, tant, silk...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#FBF7F0] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#A15C07] focus-within:ring-2 focus-within:ring-[#A15C07]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2A1215] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#6E5A5C]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#B3122E]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#B3122E]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#B3122E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#8E0E24]"
                          }
                        }
                      },
                      {
                        "id": "ac-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FBF7F0] text-[#2A1215] transition-colors hover:bg-[#FBE9EC] hover:text-[#B3122E]"
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
                            "id": "ac-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#A15C07] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#7F4805]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#B3122E] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FBF7F0] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#2A1215]"
                              },
                              "title-icon": {
                                "classes": "text-[#B3122E]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#B3122E] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#B3122E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#8E0E24]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#B3122E] px-4 py-2 text-sm font-medium text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#B3122E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E0E24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "ac-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#FBF7F0] text-[#2A1215]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FBF7F0] p-2 text-[#2A1215] transition-colors hover:bg-[#B3122E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "আ",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#B3122E] font-['Tiro_Bangla'] leading-none text-white ring-2 ring-[#F2B93B] ring-offset-2 ring-offset-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Aanchal",
                                          "src": "https://placehold.co/200x64?text=Aanchal",
                                          "altText": "Aanchal Saree House",
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
                                            "classes": "font-heading text-2xl font-bold tracking-tight text-[#2A1215]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Handloom Saree House",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#A15C07]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "ac-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search jamdani, tant, silk...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FBF7F0] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#A15C07] focus-within:ring-2 focus-within:ring-[#A15C07]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2A1215] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6E5A5C]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#B3122E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#B3122E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#B3122E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#8E0E24]"
                                  }
                                }
                              },
                              {
                                "id": "ac-hdr-m-menu",
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
                                    "classes": "min-w-52 rounded-xl border border-gray-100 bg-white py-2 shadow-lg"
                                  },
                                  "menu-link": {
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#2A1215] transition-colors hover:text-[#B3122E]"
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
                                    "id": "ac-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New Arrivals",
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
                                    "id": "ac-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Jamdani",
                                      "url": "/categories/jamdani"
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
                                    "id": "ac-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Tant & Cotton",
                                      "url": "/categories/tant-cotton"
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
                                    "id": "ac-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Silk & Katan",
                                      "url": "/categories/silk-katan"
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
                                    "id": "ac-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Lal-Paar Edit",
                                      "url": "/#festive",
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
                                        "classes": "!text-[#B3122E] font-bold"
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
            "id": "ac-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2A1215] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "ac-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "ac-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border-b-[6px] border-[#F2B93B] bg-[#B3122E] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Join the Aanchal Circle",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-xs font-bold uppercase tracking-[0.25em] text-[#F6CD70]"
                              }
                            }
                          },
                          {
                            "id": "ac-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 10% Off Your First Saree",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ac-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for your welcome code, first look at new weaves and our monthly drape & care notes.",
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
                        "id": "ac-ftr-news-btn",
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
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F2B93B] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(242,185,59,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#F6CD70] sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#3A0D17]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#3A0D17] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ac-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "ac-ftr-grid",
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
                        "id": "ac-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "আ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-full bg-[#B3122E] font-['Tiro_Bangla'] leading-none text-white ring-2 ring-[#F2B93B] ring-offset-2 ring-offset-white"
                                  }
                                }
                              },
                              {
                                "id": "ac-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Aanchal",
                                      "src": "https://placehold.co/200x64?text=Aanchal",
                                      "altText": "Aanchal Saree House",
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
                                        "classes": "font-heading text-2xl font-bold tracking-tight text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ac-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Handloom sarees and Bengali wear for the modern woman: jamdani, tant, muslin and silk, sourced directly from weaving families across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "ac-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B3122E]"
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
                                "id": "ac-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B3122E]"
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
                                "id": "ac-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B3122E]"
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
                                "id": "ac-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#B3122E]"
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
                        "id": "ac-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop by Weave",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Jamdani",
                                  "icon": "",
                                  "slug": "/categories/jamdani"
                                },
                                {
                                  "text": "Tant & Cotton",
                                  "icon": "",
                                  "slug": "/categories/tant-cotton"
                                },
                                {
                                  "text": "Silk & Katan",
                                  "icon": "",
                                  "slug": "/categories/silk-katan"
                                },
                                {
                                  "text": "Lal-Paar Edit",
                                  "icon": "",
                                  "slug": "/categories/lal-paar"
                                },
                                {
                                  "text": "Blouses & Jewellery",
                                  "icon": "",
                                  "slug": "/categories/blouse-jewellery"
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
                                "classes": "transition-colors hover:text-[#F2B93B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#F2B93B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ftr-ll-care",
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
                                  "text": "Saree Care Guide",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Delivery & Exchange",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Drape Diaries",
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
                                "classes": "transition-colors hover:text-[#F2B93B]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#F2B93B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ftr-contact-h",
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
                            "id": "ac-ftr-address",
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
                                "value": "Sat-Thu: 10am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#F2B93B]"
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
                                "classes": "shrink-0 text-[#B3122E]"
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
                "id": "ac-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "ac-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Aanchal Saree House. All rights reserved. Woven with love in Bangladesh.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "ac-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-ftr-pay-txt",
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
            "id": "ac-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#3A0D17] pb-20 pt-12 lg:pb-28 lg:pt-20"
              }
            },
            "children": [
              {
                "id": "ac-hero-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] opacity-50"
                  }
                },
                "children": []
              },
              {
                "id": "ac-hero-glow",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] max-w-full rounded-full bg-[#B3122E] opacity-40 blur-[120px]"
                  }
                },
                "children": []
              },
              {
                "id": "ac-hero-glow-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#F2B93B] opacity-15 blur-[100px]"
                  }
                },
                "children": []
              },
              {
                "id": "ac-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "ac-hero-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-14 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-6 text-center lg:col-span-7 lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "ছয় গজের কবিতা",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Tiro_Bangla'] text-3xl leading-none text-[#F2B93B] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ac-hero-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 rounded-full border border-[#F2B93B]/30 bg-white/5 px-4 py-2 backdrop-blur-sm"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-badge-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSparkles",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-hero-badge-t",
                                "type": "text",
                                "options": {
                                  "text": "New festive weaves have arrived",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-[0.2em] text-white/90"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Six Yards of Poetry, Woven for You",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "ac-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Handloom jamdani, tant, muslin and Rajshahi silk, sourced straight from Bengal’s weaving villages. Timeless drapes, styled for the woman you are today.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0"
                              }
                            }
                          },
                          {
                            "id": "ac-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop New Arrivals",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F2B93B] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(242,185,59,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#F6CD70] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#3A0D17]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#3A0D17] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "ac-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Shop by Weave",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#weaves",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 transition-all hover:border-[#F2B93B] hover:bg-white/5 sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white group-hover:text-[#F2B93B]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap group-hover:text-[#F2B93B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 grid w-full max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-stat-0",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-stat-0-v",
                                    "type": "text",
                                    "options": {
                                      "text": "120+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hero-stat-0-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Weaver families",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ac-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "100%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hero-stat-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Handloom",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ac-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "4.9★",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-3xl font-semibold text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hero-stat-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "Avg. rating",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold uppercase tracking-wider text-white/60"
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
                        "id": "ac-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-hero-frame",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative overflow-hidden rounded-[2.5rem] rounded-tr-[8rem] border border-[#F2B93B]/40 bg-[#8E0E24] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-frame-in",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "overflow-hidden rounded-[2rem] rounded-tr-[7.25rem]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/aanchal-hero.svg",
                                      "altText": "A red-bordered white saree draped beside a stack of folded handloom sarees, framed by an alpona",
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
                            "id": "ac-hero-float-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-4 top-1/4 hidden items-center gap-3 rounded-2xl border border-[#F2B93B]/30 bg-[#3A0D17]/90 p-3.5 shadow-xl backdrop-blur-md sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-float-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconNeedleThread",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B93B]/15 text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-hero-float-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-float-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Handwoven in",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-bold uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hero-float-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Rupganj & Tangail",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "ac-hero-float-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-3 bottom-10 hidden items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl sm:flex"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-hero-float-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCash",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#FBE9EC] text-[#B3122E]"
                                  }
                                }
                              },
                              {
                                "id": "ac-hero-float-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-hero-float-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Pay on delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[10px] font-bold uppercase tracking-wider text-[#6E5A5C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-hero-float-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "All over Bangladesh",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm font-semibold text-[#2A1215]"
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
            "id": "ac-hero-paar",
            "type": "container",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "h-3.5 w-full bg-[url('/templates/aanchal-paar.svg')] bg-[length:56px_14px] bg-repeat-x"
              }
            },
            "children": []
          },
          {
            "id": "ac-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#B3122E]/10 bg-[#FDF4E3] py-10"
              }
            },
            "children": [
              {
                "id": "ac-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Unworn with tags? Swap it, no fuss",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Direct from Weavers",
                          "description": "Fair prices to 120+ handloom families",
                          "icon": "IconHeartHandshake",
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
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#2A1215]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6E5A5C]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white text-[#B3122E] ring-4 ring-[#FDF1DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "ac-promise-fb-t",
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
                        "id": "ac-promise-fb-d",
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
            "id": "ac-weaves",
            "type": "section",
            "options": {
              "anchor": "weaves"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ac-weaves-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-weaves-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-weaves-bn",
                        "type": "text",
                        "options": {
                          "text": "বুনন",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-weaves-k",
                        "type": "text",
                        "options": {
                          "text": "Shop by weave",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-weaves-h",
                        "type": "heading",
                        "options": {
                          "text": "Every Thread Tells a Story",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-[#2A1215] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-weaves-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-weaves-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ac-weaves-rule-f",
                            "type": "text",
                            "options": {
                              "text": "✿",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-none"
                              }
                            }
                          },
                          {
                            "id": "ac-weaves-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "ac-weaves-p",
                        "type": "text",
                        "options": {
                          "text": "From airy everyday tant to heirloom jamdani and gleaming Rajshahi silk: find your weave.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#6E5A5C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-weaves-slider",
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
                        "perPage": 5,
                        "perMove": 1,
                        "gap": "1.25rem",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "ac-weaves-slider-loop",
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
                            "id": "ac-weaves-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mb-4 w-full overflow-hidden rounded-2xl border-b-[6px] border-[#B3122E] bg-[#FDF1DC] transition-all duration-300 group-hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.45)]"
                              },
                              "link": {
                                "classes": "block overflow-hidden"
                              },
                              "image": {
                                "classes": "aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "ac-weaves-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-tight text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                              }
                            }
                          },
                          {
                            "id": "ac-weaves-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " sarees",
                              "singularSuffix": " saree",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] font-bold uppercase tracking-wider text-[#A15C07]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ac-weaves-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-weaves-all",
                        "type": "button",
                        "options": {
                          "text": "View all weaves",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center gap-2 border-b border-[#B3122E]/40 pb-1 transition-colors hover:border-[#B3122E]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#B3122E] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold uppercase tracking-[0.2em] text-[#B3122E]"
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
            "id": "ac-row-new",
            "type": "section",
            "options": {
              "anchor": "new"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-row-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-new-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-new-bn",
                        "type": "text",
                        "options": {
                          "text": "নতুন",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-new-k",
                        "type": "text",
                        "options": {
                          "text": "Fresh off the loom",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-new-h",
                        "type": "heading",
                        "options": {
                          "text": "New Arrivals",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-[#2A1215] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-new-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-new-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ac-new-rule-f",
                            "type": "text",
                            "options": {
                              "text": "✿",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-none"
                              }
                            }
                          },
                          {
                            "id": "ac-new-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "ac-new-p",
                        "type": "text",
                        "options": {
                          "text": "Small-batch handloom pieces, often one of a kind. When a colourway is gone, it is gone.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#6E5A5C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-row-new-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-new-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-new-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-new-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-new-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-row-new-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-row-new-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-new-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-row-new-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-row-new-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-row-new-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-new-slider-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-new-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                    "id": "ac-new-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-new-btn",
                        "type": "button",
                        "options": {
                          "text": "Shop all new arrivals",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B3122E] px-8 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#8E0E24]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap"
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
            "id": "ac-festive",
            "type": "section",
            "options": {
              "anchor": "festive"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-festive-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-festive-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 overflow-hidden rounded-3xl bg-[#B3122E] lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-festive-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] opacity-40"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ac-festive-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-center gap-5 p-8 text-center sm:p-12 lg:items-start lg:p-16 lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-festive-k",
                            "type": "text",
                            "options": {
                              "text": "The Lal-Paar Edit",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#F6CD70]"
                              }
                            }
                          },
                          {
                            "id": "ac-festive-h",
                            "type": "heading",
                            "options": {
                              "text": "Red Borders, White Grace, Every Celebration",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "ac-festive-p",
                            "type": "text",
                            "options": {
                              "text": "The classic white saree with a red border, reimagined in fine cotton, garad and soft silk: for Pohela Boishakh mornings, Puja evenings and every festive day in between.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base leading-relaxed text-white/80"
                              }
                            }
                          },
                          {
                            "id": "ac-festive-chips",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap justify-center gap-2 lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-festive-chip-1",
                                "type": "text",
                                "options": {
                                  "text": "Garad & korial",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ac-festive-chip-2",
                                "type": "text",
                                "options": {
                                  "text": "Fine cotton tant",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white"
                                  }
                                }
                              },
                              {
                                "id": "ac-festive-chip-3",
                                "type": "text",
                                "options": {
                                  "text": "Matching blouse piece",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-festive-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop the Lal-Paar Edit",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/lal-paar",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex mt-2 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#FDF4E3] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#B3122E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#B3122E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-festive-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex min-h-[300px] items-center justify-center p-10"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-festive-disc",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex aspect-square w-full max-w-[300px] flex-col items-center justify-center gap-3 rounded-full border-[10px] border-white bg-[#FDF4E3] text-center shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-4 ring-[#8E0E24]"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-festive-bn",
                                "type": "text",
                                "options": {
                                  "text": "শুভ উৎসব",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Tiro_Bangla'] text-5xl leading-tight text-[#B3122E]"
                                  }
                                }
                              },
                              {
                                "id": "ac-festive-disc-rule",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-px w-16 bg-[#B3122E]/40"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "ac-festive-en",
                                "type": "text",
                                "options": {
                                  "text": "Festive Greetings",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-[0.3em] text-[#A15C07]"
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
                    "id": "ac-festive-paar",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "h-3.5 w-full bg-[url('/templates/aanchal-paar.svg')] bg-[length:56px_14px] bg-repeat-x mt-0 rounded-b-xl"
                      }
                    },
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-row-jamdani",
            "type": "section",
            "options": {
              "anchor": "jamdani"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-row-jamdani-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-row-jamdani-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-dashed border-[#B3122E]/25 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-jamdani-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-jamdani-ic",
                            "type": "text",
                            "options": {
                              "text": "জা",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E] ring-4 ring-[#FDF1DC] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "ac-row-jamdani-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-jamdani-h",
                                "type": "heading",
                                "options": {
                                  "text": "Jamdani",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold tracking-tight text-[#2A1215] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-jamdani-p",
                                "type": "text",
                                "options": {
                                  "text": "Heirloom motifs woven by hand on the banks of the Shitalakshya.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#6E5A5C] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ac-row-jamdani-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/jamdani",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A15C07] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#A15C07] group-hover:text-[#7F4805]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-row-jamdani-slider",
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
                                  "jamdani"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-jamdani-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-jamdani-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-jamdani-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-jamdani-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-row-jamdani-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-row-jamdani-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-jamdani-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-row-jamdani-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-row-jamdani-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-row-jamdani-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-jamdani-slider-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-jamdani-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "ac-row-tant",
            "type": "section",
            "options": {
              "anchor": "tant-cotton"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-row-tant-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-row-tant-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-dashed border-[#B3122E]/25 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-tant-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-tant-ic",
                            "type": "text",
                            "options": {
                              "text": "তাঁ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E] ring-4 ring-[#FDF1DC] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "ac-row-tant-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-tant-h",
                                "type": "heading",
                                "options": {
                                  "text": "Tant & Cotton",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold tracking-tight text-[#2A1215] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-tant-p",
                                "type": "text",
                                "options": {
                                  "text": "Crisp, breathable sarees from Tangail and Pabna for every day.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#6E5A5C] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ac-row-tant-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/tant-cotton",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A15C07] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#A15C07] group-hover:text-[#7F4805]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-row-tant-slider",
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
                                  "tant-cotton"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-tant-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-tant-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-tant-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-tant-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-row-tant-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-row-tant-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-tant-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-row-tant-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-row-tant-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-row-tant-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-tant-slider-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-tant-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "ac-story",
            "type": "section",
            "options": {
              "anchor": "heritage"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#3A0D17] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ac-story-pattern",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] opacity-30"
                  }
                },
                "children": []
              },
              {
                "id": "ac-story-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "ac-story-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-story-card",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl rounded-tr-[8rem] border border-[#F2B93B]/30 bg-gradient-to-br from-[#B3122E]/60 to-transparent px-8 pb-12 pt-16 text-center sm:px-12"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-story-bn",
                            "type": "text",
                            "options": {
                              "text": "জামদানি",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Tiro_Bangla'] text-6xl leading-tight text-[#F2B93B] sm:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "ac-story-en",
                            "type": "text",
                            "options": {
                              "text": "A weave the world protects",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl italic text-white sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "ac-story-p",
                            "type": "text",
                            "options": {
                              "text": "The traditional art of Jamdani weaving was inscribed on UNESCO’s list of the Intangible Cultural Heritage of Humanity in 2013. A single saree can take a weaver weeks.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "ac-story-paar",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-3.5 w-full bg-[url('/templates/aanchal-paar.svg')] bg-[length:56px_14px] bg-repeat-x mt-4 max-w-[220px] rounded-full"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "ac-story-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-story-k",
                            "type": "text",
                            "options": {
                              "text": "Our heritage",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#F2B93B]"
                              }
                            }
                          },
                          {
                            "id": "ac-story-h",
                            "type": "heading",
                            "options": {
                              "text": "From the Loom to Your Aanchal",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "ac-story-p2",
                            "type": "text",
                            "options": {
                              "text": "We work directly with weaving families in Rupganj, Tangail, Pabna and Rajshahi. No middlemen, fair prices, and the weaver’s village on every tag, so the craft keeps living for the next generation.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base leading-relaxed text-white/70"
                              }
                            }
                          },
                          {
                            "id": "ac-story-grid",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-story-r1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-story-r1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconHeartHandshake",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2B93B]/15 text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-story-r1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-story-r1-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Direct from weavers",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-story-r1-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Fair, transparent prices to every family we work with.",
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
                              },
                              {
                                "id": "ac-story-r2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-story-r2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconNeedleThread",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2B93B]/15 text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-story-r2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-story-r2-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Genuine handloom",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-story-r2-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Every piece checked for weave, count and finish.",
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
                              },
                              {
                                "id": "ac-story-r3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-story-r3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRuler2",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2B93B]/15 text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-story-r3-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-story-r3-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Full length + blouse",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-story-r3-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Most sarees are 5.5 m with a 0.8 m blouse piece.",
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
                              },
                              {
                                "id": "ac-story-r4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-story-r4-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconGift",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2B93B]/15 text-[#F2B93B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-story-r4-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-story-r4-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "Gift-ready",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-base font-bold text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-story-r4-p",
                                        "type": "text",
                                        "options": {
                                          "text": "Folded in tissue with a hand-written note on request.",
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
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-row-silk",
            "type": "section",
            "options": {
              "anchor": "silk-katan"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-row-silk-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-row-silk-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-dashed border-[#B3122E]/25 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-silk-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-silk-ic",
                            "type": "text",
                            "options": {
                              "text": "রে",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E] ring-4 ring-[#FDF1DC] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "ac-row-silk-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-silk-h",
                                "type": "heading",
                                "options": {
                                  "text": "Silk & Katan",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold tracking-tight text-[#2A1215] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-silk-p",
                                "type": "text",
                                "options": {
                                  "text": "Rajshahi silk, Benarasi katan and soft half-silks for occasions.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#6E5A5C] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ac-row-silk-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/silk-katan",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A15C07] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#A15C07] group-hover:text-[#7F4805]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-row-silk-slider",
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
                                  "silk-katan"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-silk-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-silk-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-silk-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-silk-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-row-silk-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-row-silk-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-silk-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-row-silk-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-row-silk-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-row-silk-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-silk-slider-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-silk-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "ac-row-blouse",
            "type": "section",
            "options": {
              "anchor": "blouse-jewellery"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "ac-row-blouse-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-row-blouse-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex items-end justify-between gap-4 border-b border-dashed border-[#B3122E]/25 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-blouse-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-blouse-ic",
                            "type": "text",
                            "options": {
                              "text": "গ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E] ring-4 ring-[#FDF1DC] sm:h-16 sm:w-16"
                              }
                            }
                          },
                          {
                            "id": "ac-row-blouse-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-blouse-h",
                                "type": "heading",
                                "options": {
                                  "text": "Blouses & Jewellery",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold tracking-tight text-[#2A1215] sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-blouse-p",
                                "type": "text",
                                "options": {
                                  "text": "Ready blouses, oxidised jhumkas, bangles and the perfect teep.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-[#6E5A5C] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "ac-row-blouse-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/blouse-jewellery",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A15C07] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#A15C07] group-hover:text-[#7F4805]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-row-blouse-slider",
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
                                  "blouse-jewellery"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-row-blouse-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-row-blouse-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-blouse-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-blouse-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-row-blouse-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-row-blouse-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-row-blouse-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-row-blouse-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-row-blouse-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-row-blouse-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-row-blouse-slider-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-row-blouse-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "ac-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ac-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-reviews-bn",
                        "type": "text",
                        "options": {
                          "text": "ভালোবাসা",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-reviews-k",
                        "type": "text",
                        "options": {
                          "text": "Loved by 30,000+ women",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-reviews-h",
                        "type": "heading",
                        "options": {
                          "text": "Draped With Love",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-[#2A1215] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-reviews-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-reviews-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ac-reviews-rule-f",
                            "type": "text",
                            "options": {
                              "text": "✿",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-none"
                              }
                            }
                          },
                          {
                            "id": "ac-reviews-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ac-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(42,18,21,0.15)] transition-colors hover:!bg-[#B3122E] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#B3122E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#B3122E]/25 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#B3122E]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“My jamdani arrived in a tissue-wrapped box with a note about the weaver. The motifs are so fine. I wore it to my sister’s holud and felt like a queen.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "NJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusrat Jahan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
                        "id": "ac-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“The lal-paar tant for Pohela Boishakh was crisp, light and the red is exactly as in the photos. Delivered in two days with cash on delivery.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Farzana Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Chattogram",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
                        "id": "ac-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Rajshahi silk with a beautiful sheen and no rough edges. The blouse piece was generous. Already ordered a second colour.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "SR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sumaiya Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Sylhet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
                        "id": "ac-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought a katan for my wedding reception. Rich colour, soft fall, and the team helped me pick a matching jhumka over WhatsApp.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tahmina Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Khulna",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
                        "id": "ac-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Everyday cotton sarees that actually breathe in our summer. Washed well, and the colours have not faded. My new go-to shop.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "RS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Riya Saha",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Rajshahi",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
                        "id": "ac-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border-b-4 border-[#B3122E] bg-white p-7 shadow-sm"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.3em] text-[#F2B93B]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Exchanged a colour within the week, no questions. Lovely service and a real respect for the craft. It shows in every piece.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xl leading-snug text-[#2A1215]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#B3122E]/20 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white ring-4 ring-[#FBE9EC]"
                                  }
                                }
                              },
                              {
                                "id": "ac-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mehnaz Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified buyer • Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#A15C07]"
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
            "id": "ac-journal",
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
                "id": "ac-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-journal-bn",
                        "type": "text",
                        "options": {
                          "text": "গল্প",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-journal-k",
                        "type": "text",
                        "options": {
                          "text": "Drape Diaries",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-journal-h",
                        "type": "heading",
                        "options": {
                          "text": "Stories, Styling & Care",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-[#2A1215] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-journal-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-journal-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ac-journal-rule-f",
                            "type": "text",
                            "options": {
                              "text": "✿",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-none"
                              }
                            }
                          },
                          {
                            "id": "ac-journal-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "ac-journal-p",
                        "type": "text",
                        "options": {
                          "text": "Drape tutorials, weaver stories and how to keep your jamdani and silk beautiful for years.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-base leading-relaxed text-[#6E5A5C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-journal-grid",
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
                        "id": "ac-journal-loop",
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
                            "id": "ac-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-2xl rounded-tr-[4rem] border-b-4 border-[#B3122E] bg-[#FDF1DC]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "ac-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[11px] font-bold uppercase tracking-[0.2em] text-[#A15C07]"
                                  }
                                }
                              },
                              {
                                "id": "ac-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl font-semibold leading-snug tracking-tight text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                  }
                                }
                              },
                              {
                                "id": "ac-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 20,
                                  "readMoreText": "Read story",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6E5A5C]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B3122E]"
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
            "id": "ac-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "ac-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-faq-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-faq-bn",
                        "type": "text",
                        "options": {
                          "text": "জিজ্ঞাসা",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl leading-none text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-faq-k",
                        "type": "text",
                        "options": {
                          "text": "Good to know",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-faq-h",
                        "type": "heading",
                        "options": {
                          "text": "Frequently Asked Questions",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-4xl font-semibold leading-tight tracking-tight text-[#2A1215] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-faq-rule",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2 text-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-rule-l",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "ac-faq-rule-f",
                            "type": "text",
                            "options": {
                              "text": "✿",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-none"
                              }
                            }
                          },
                          {
                            "id": "ac-faq-rule-r",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-px w-12 bg-current opacity-50"
                              }
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "ac-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How long is a saree, and is a blouse piece included?",
                          "classes": ""
                        },
                        {
                          "label": "Why does the colour look slightly different from the photo?",
                          "classes": ""
                        },
                        {
                          "label": "How should I care for jamdani and silk?",
                          "classes": ""
                        },
                        {
                          "label": "Is cash on delivery available, and how fast is delivery?",
                          "classes": ""
                        },
                        {
                          "label": "Can I exchange a saree?",
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
                        "classes": "flex flex-col gap-3"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-[#B3122E]/15 bg-white px-6 py-5 font-body text-base font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E]/40"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !border-b-0 !border-[#B3122E]/40 text-[#B3122E]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#B3122E]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-xl border border-t-0 border-[#B3122E]/40 bg-white px-6 pb-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Most of our sarees are about 5.5 metres with an extra 0.8 metre blouse piece. Exact length, width and whether a blouse piece is included are listed on every product page.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Handloom sarees are dyed and woven by hand, so small variations in shade and weave are natural and part of their charm. We photograph in daylight to stay as true as possible.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Dry clean silk, katan and fine jamdani. Cotton and tant can be hand washed cold with mild detergent, starched if you like, and dried in shade. Store folded in muslin and refold every few months.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, cash on delivery is available across all 64 districts. Inside Dhaka usually within 24 hours, 48-72 hours elsewhere. bKash, Nagad and cards are accepted too.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Unworn sarees with tags and folds intact can be exchanged within 7 days of delivery. Message us and we will arrange the pickup.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
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
            "id": "ac-cta",
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
                "id": "ac-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-[#3A0D17] px-6 pb-16 pt-16 text-center sm:px-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-cta-pattern",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] opacity-40"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ac-cta-paar",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 bottom-0 h-3.5 w-full bg-[url('/templates/aanchal-paar.svg')] bg-[length:56px_14px] bg-repeat-x"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "ac-cta-bn",
                        "type": "text",
                        "options": {
                          "text": "স্বাগতম",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Tiro_Bangla'] text-4xl leading-none text-[#F2B93B]"
                          }
                        }
                      },
                      {
                        "id": "ac-cta-h",
                        "type": "heading",
                        "options": {
                          "text": "Join the Aanchal Circle",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "ac-cta-p",
                        "type": "text",
                        "options": {
                          "text": "Create a free account for 10% off your first saree, first look at new weaves and members-only festive previews.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-lg text-base text-white/75"
                          }
                        }
                      },
                      {
                        "id": "ac-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Create my account",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconUserPlus",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F2B93B] px-8 py-4 shadow-[0_12px_30px_-10px_rgba(242,185,59,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#F6CD70] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#3A0D17]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-[#3A0D17] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "ac-cta-btn-2",
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
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 transition-all hover:border-[#F2B93B] hover:bg-white/5 sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap group-hover:text-[#F2B93B]"
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
            "id": "ac-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The Full Collection",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All Sarees",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every jamdani, tant, silk and katan we carry, newest first. Open a saree for weave, length and care details, or add it straight to your bag.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-shop-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "ac-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-shop-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#B3122E]/10 bg-[#FDF4E3] py-10"
              }
            },
            "children": [
              {
                "id": "ac-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Unworn with tags? Swap it, no fuss",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Direct from Weavers",
                          "description": "Fair prices to 120+ handloom families",
                          "icon": "IconHeartHandshake",
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
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#2A1215]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6E5A5C]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white text-[#B3122E] ring-4 ring-[#FDF1DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-shop-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "ac-shop-promise-fb-t",
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
                        "id": "ac-shop-promise-fb-d",
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
            "id": "ac-pd",
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
                "id": "ac-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-pd-grid",
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
                        "id": "ac-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#FDF1DC] via-white to-[#FDF4E3] p-4 shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2A1215]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2A1215]!"
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
                                "classes": "overflow-hidden rounded-xl border-2 border-transparent hover:border-[#B3122E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-pd-cats",
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
                                "classes": "rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07] hover:bg-[#A15C07] hover:text-white"
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
                            "id": "ac-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#2A1215] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "ac-pd-rate",
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
                                "classes": "font-body font-bold text-[#2A1215]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "ac-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#B3122E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "ac-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E5A5C]"
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
                            "id": "ac-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#2A1215]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#2A1215] transition-colors hover:border-[#A15C07] hover:bg-[#FDF1DC]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#A15C07] !bg-[#FDF1DC] !text-[#7F4805]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "ac-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out: handloom pieces are often one of a kind",
                              "inStockText": "In stock, ships within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#B3122E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#A15C07]"
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
                            "id": "ac-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-xl border-2 border-gray-200 bg-white px-3 text-[#2A1215]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FBF7F0]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FBF7F0]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#B3122E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#8E0E24]"
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
                            "id": "ac-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Cash on delivery",
                                  "description": "All over Bangladesh",
                                  "icon": "IconCash",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Genuine handloom",
                                  "description": "Direct from weavers",
                                  "icon": "IconNeedleThread",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day exchange",
                                  "description": "Unworn, with tags",
                                  "icon": "IconArrowsExchange",
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
                                "classes": "font-body text-base font-bold text-[#2A1215]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDF1DC] text-[#A15C07]"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-perks-ic",
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
                                "id": "ac-pd-perks-t",
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
                                "id": "ac-pd-perks-d",
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
                            "id": "ac-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-sku",
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
                                    "classes": "font-semibold text-[#2A1215]"
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
                                "id": "ac-pd-brands",
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
                                    "classes": "font-semibold text-[#2A1215]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#B3122E]"
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
                                "id": "ac-pd-tags",
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
                                    "classes": "font-semibold text-[#2A1215]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#B3122E]"
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
            "id": "ac-pd-tabs-sec",
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
                "id": "ac-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,18,21,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Weave & Care",
                              "icon": "IconNeedleThread"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FBF7F0] px-5 py-2.5 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2A1215] !text-white shadow-md"
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
                            "id": "ac-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2A1215] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2A1215] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#B3122E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#F2B93B] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconNeedleThread",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Weave, fabric, length and blouse piece are listed in the description above",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Handloom: slight irregularities in weave and shade are the mark of the hand",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Silk, katan and fine jamdani: dry clean only",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cotton and tant: hand wash cold, dry in shade, store folded in muslin",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A15C07]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-ship-list",
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
                                      "text": "Outside Dhaka: 48-72 hours to all 64 districts",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Cash on delivery, bKash, Nagad or card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unworn with tags and folds intact? Exchange within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#A15C07]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "ac-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#FBF7F0] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#FBF7F0] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "ac-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBE9EC]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2A1215]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "ac-pd-reviews-rate",
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
                                        "id": "ac-pd-reviews-co",
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
                                    "id": "ac-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Tell us how the saree drapes and feels",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,18,21,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#2A1215]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#FBF7F0] px-4 py-3 text-sm text-[#2A1215] placeholder:text-gray-400 focus:border-[#A15C07] focus:outline-none focus:ring-2 focus:ring-[#A15C07]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#B3122E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#8E0E24] disabled:opacity-50"
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
            "id": "ac-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-16"
              }
            },
            "children": [
              {
                "id": "ac-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Complete the Look",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBE9EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Love",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2A1215]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-pd-rel-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "ac-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Weaves & Collections",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBE9EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B3122E]"
                      }
                    }
                  },
                  {
                    "id": "ac-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Weave",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Jamdani, tant, muslin, silk and the blouses and jewellery that complete them. Pick a weave to begin.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl bg-[#FDF1DC] transition-transform"
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
                            "id": "ac-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                              }
                            }
                          },
                          {
                            "id": "ac-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " sarees",
                              "singularSuffix": " saree",
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
                        "id": "ac-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FBE9EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B3122E]"
                      }
                    }
                  },
                  {
                    "id": "ac-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ac-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " sarees",
                      "singularSuffix": " saree"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A15C07] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-cat1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "ac-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2B93B] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1215]"
                      }
                    }
                  },
                  {
                    "id": "ac-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group sarees across weaves by colour, occasion and region: wedding, Boishakh, Puja, office and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#B3122E]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#B3122E]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2A1215] group-hover:text-[#B3122E]"
                              }
                            }
                          },
                          {
                            "id": "ac-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FBF7F0] px-2 py-0.5 text-[10px] font-bold text-[#6E5A5C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "ac-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2B93B] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1215]"
                      }
                    }
                  },
                  {
                    "id": "ac-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ac-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " sarees",
                      "singularSuffix": " saree"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A15C07] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-tag1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "ac-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Weavers & Ateliers",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Weavers",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "The weaving clusters and ateliers behind every saree we carry.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-[#FBF7F0] p-3"
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
                            "id": "ac-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2A1215] group-hover:text-[#B3122E]"
                              }
                            }
                          },
                          {
                            "id": "ac-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " sarees",
                              "singularSuffix": " saree",
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
                        "id": "ac-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "ac-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " sarees",
                      "singularSuffix": " saree"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#A15C07] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-brand1-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "ac-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Stories, Styling & Care",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Drape Diaries",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Drape tutorials, weaver stories and how to keep your jamdani and silk beautiful for years.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FDF4E3]"
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
                            "id": "ac-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                                  }
                                }
                              },
                              {
                                "id": "ac-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                  }
                                }
                              },
                              {
                                "id": "ac-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read story",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#B3122E]"
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
                        "id": "ac-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2A1215] transition-colors hover:border-[#B3122E] hover:text-[#B3122E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#B3122E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "ac-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FDF4E3] via-white to-[#FBF7F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ac-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-post-k",
                    "type": "text",
                    "options": {
                      "text": "Drape Diaries",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6E5A5C]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-post-author",
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
                            "classes": "font-body font-bold text-[#2A1215]"
                          }
                        }
                      },
                      {
                        "id": "ac-post-dot",
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
                        "id": "ac-post-date",
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
                    "id": "ac-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
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
            "id": "ac-post-body",
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
                "id": "ac-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#2A1215] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#2A1215] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#B3122E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#F2B93B] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-16"
              }
            },
            "children": [
              {
                "id": "ac-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2A1215]"
                      }
                    }
                  },
                  {
                    "id": "ac-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#FBF7F0] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#FBF7F0] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FBE9EC]"
                              }
                            }
                          },
                          {
                            "id": "ac-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2A1215]"
                              }
                            }
                          },
                          {
                            "id": "ac-post-cmt-co",
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
                        "id": "ac-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,18,21,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2A1215]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-xl border border-gray-200 bg-[#FBF7F0] px-4 py-3 text-sm text-[#2A1215] placeholder:text-gray-400 focus:border-[#A15C07] focus:outline-none focus:ring-2 focus:ring-[#A15C07]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#B3122E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#8E0E24] disabled:opacity-50"
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
            "id": "ac-post-more",
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
                "id": "ac-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From Drape Diaries",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#2A1215]"
                      }
                    }
                  },
                  {
                    "id": "ac-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(42,18,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FDF4E3]"
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
                            "id": "ac-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                                  }
                                }
                              },
                              {
                                "id": "ac-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
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
            "id": "ac-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 bg-[#FDF4E3] bg-[url('/templates/aanchal-alpona.svg')] bg-[length:160px_160px] border-b-4 border-[#B3122E]"
              }
            },
            "children": [
              {
                "id": "ac-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "ac-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome Back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FDF1DC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#A15C07]"
                      }
                    }
                  },
                  {
                    "id": "ac-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#2A1215] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "ac-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track your orders, manage exchanges and keep your address and details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "ac-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-12"
              }
            },
            "children": [
              {
                "id": "ac-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#2A1215] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#F2B93B]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#B3122E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#B3122E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#B3122E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "ac-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "ac-acc-3",
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
                                "id": "ac-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,18,21,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B3122E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E0E24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "ac-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(42,18,21,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B3122E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E0E24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "ac-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "ac-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FBF7F0] px-5 py-2.5 font-body text-sm font-semibold text-[#2A1215] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2A1215] !text-white shadow-md"
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
                                "id": "ac-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B3122E]/10 text-[#B3122E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "ac-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#B3122E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ac-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B3122E]/10 text-[#B3122E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ac-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#B3122E]/40 hover:bg-[#B3122E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B3122E]/10 text-[#B3122E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "ac-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B3122E]/10 text-[#B3122E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#B3122E] focus:outline-none focus:ring-2 focus:ring-[#B3122E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#B3122E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E0E24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B3122E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "ac-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FDF4E3] via-white to-[#FBF7F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ac-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(42,18,21,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FDF1DC] text-[#A15C07]"
                          }
                        }
                      },
                      {
                        "id": "ac-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FBE9EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#B3122E]"
                          }
                        }
                      },
                      {
                        "id": "ac-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You for Your Order",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2A1215] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "ac-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your saree is being folded with care. A confirmation is on its way, and you can follow the order from your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6E5A5C] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "ac-ty-steps",
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
                              "text": "Your saree is folded in tissue and packed with care",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#FBF7F0] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#B3122E]"
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
                        "id": "ac-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#B3122E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#8E0E24] w-full sm:w-auto"
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
                            "id": "ac-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#A15C07] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A15C07] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#A15C07] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#A15C07] whitespace-nowrap group-hover:text-white"
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
            "id": "ac-ty-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#B3122E]/10 bg-[#FDF4E3] py-10"
              }
            },
            "children": [
              {
                "id": "ac-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cash on Delivery",
                          "description": "Pay when it arrives, anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Fast Delivery",
                          "description": "24h inside Dhaka, 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-Day Easy Exchange",
                          "description": "Unworn with tags? Swap it, no fuss",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Direct from Weavers",
                          "description": "Fair prices to 120+ handloom families",
                          "icon": "IconHeartHandshake",
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
                        "classes": "font-body text-sm font-bold uppercase tracking-wider text-[#2A1215]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6E5A5C]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#B3122E] bg-white text-[#B3122E] ring-4 ring-[#FDF1DC]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-ty-promise-fb-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
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
                        "id": "ac-ty-promise-fb-t",
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
                        "id": "ac-ty-promise-fb-d",
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
            "id": "ac-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FDF4E3] via-white to-[#FBF7F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "ac-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#B3122E] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "ac-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-xl bg-[#FDF4E3] text-[#2A1215]"
                      }
                    }
                  },
                  {
                    "id": "ac-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Could Not Be Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#2A1215] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "ac-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the saree may have sold out. Head back home or browse the full collection.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6E5A5C] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "ac-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-xl bg-[#B3122E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(179,18,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#8E0E24] w-full sm:w-auto"
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
                        "id": "ac-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Sarees",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#A15C07] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#A15C07] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#A15C07] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#A15C07] whitespace-nowrap group-hover:text-white"
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
            "id": "ac-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF7F0] py-16"
              }
            },
            "children": [
              {
                "id": "ac-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "ac-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#F2B93B] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2A1215]"
                          }
                        }
                      },
                      {
                        "id": "ac-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#2A1215] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "ac-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "ac-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-2xl bg-white p-3 ring-1 ring-[#B3122E]/10 transition-all duration-300 hover:-translate-y-1 hover:ring-[#B3122E]/30 hover:shadow-[0_18px_40px_-18px_rgba(58,13,23,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "ac-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-t-2xl rounded-b-md border-b-4 border-[#B3122E] bg-[#FDF1DC]"
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
                                    "id": "ac-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-[#B3122E] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
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
                                "id": "ac-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "ac-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
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
                                    "id": "ac-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-semibold text-[#2A1215] transition-colors group-hover:text-[#B3122E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "ac-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-gray-400"
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
                            "id": "ac-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-dashed border-[#B3122E]/20 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "ac-nf-grid-c-price",
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
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-extrabold text-[#2A1215]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#B3122E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#B3122E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "ac-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingBag",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#FBE9EC] px-3.5 text-[#B3122E] transition-colors hover:bg-[#B3122E] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider whitespace-nowrap"
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
