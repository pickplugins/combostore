/**
 * Template: Dutipata Tea.
 *
 * A garden-fresh tea store (dutipata, from "duti pata ekti kuri" - two
 * leaves and a bud, the tea-plucking phrase of Bengal): green, white, oolong,
 * black/CTC, masala chai and herbal teas, teaware and gift tins. Like the
 * other complete templates here it carries all sixteen page types - Header,
 * Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive, Blog
 * Single, Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to dp-, palette remapped, copy
 * rewritten); the Header is restyled and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A dark garden-green tea-tin label: a promo line, then a band ruled top and
 * bottom with double lines, the logo in an oval double-ruled cartouche (the
 * mark is a tiny top-down cup of tea), a menu where each tea type carries a
 * small dot in its own liquor colour (before: on each item's own `link`
 * classes), search, account and a copper cart - and a row of tea-garden
 * terraces (radial-gradient bushes, dp-hdr-terraces) along its foot.
 *
 * THE LIQUOR COLOUR SCALE
 *
 * The template's system: every tea type has a liquor colour - green #C7C46F,
 * white #E6CF8C, oolong #D2933B, black #A0461A, chai #B98256, herbal #B83A36
 * - drawn as top-down cups (radial gradients: tea, white rim, green line,
 * saucer). They appear in the menu, the "find your cup" section, the origins,
 * the brewing chart, the review avatars and the CTA.
 *
 * THE HERO
 *
 * Copy (the Bangla phrase in Tiro Bangla, "Two leaves and a bud.", buttons,
 * three facts) beside a top-down cup of tea on its saucer with a sprig of
 * two leaves and a bud (public/templates/dutipata-cup.svg) under three soft
 * columns of steam and a "First flush, Spring 2026" tag, over layered garden
 * terraces along the bottom of the section.
 *
 * DESIGN
 *
 *   garden green  #1F3D2B  primary: header, buttons, dark bands   #162E20 deep  #E3ECE1 tint
 *   copper        #B5651D  secondary: cart, labels, chai band     #94501A dark  #F6E4D2 tint
 *   leaf          #5E8B4E  accent: terraces, excerpts, icons      #E8F0E2 tint
 *   milk #F3E6D3   paper #FAF6EF / #F1EADD   ink #1C1A15   muted #6C665A   line #E4DCCB
 *
 * Fonts (template meta): Caprasimo (headings: a chunky retro serif like an
 * old tea-tin label; one weight, so headings carry font-normal), Be Vietnam
 * Pro (body), Tiro Bangla via `font-['Tiro_Bangla']` for the Bangla lines.
 *
 * Product cards read like tea tins: a green "lid" band across the top of the
 * photo that turns copper and thickens on hover, a copper discount pill,
 * the name, one spaced uppercase excerpt line (use it for type, garden and
 * weight, e.g. "Black · Srimangal · 100 g"), the price in Caprasimo and a
 * round green add button.
 *
 * HOME
 *
 *   Cup hero over terraces - find your cup, six liquor colours with brew
 *   temps (#find-your-cup) - this season's flush - origins, four growing
 *   regions (#origins) - customer favourites (#bestsellers) - brewing chart
 *   with temperature bars (#brewing) - black teas & CTC - tong-stall chai
 *   recipe band (#chai) - green & white teas - teaware - gift tins - reviews
 *   - the tea notebook (#journal) - FAQ (#faq) - tea-of-the-month
 *   subscription (#subscribe).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: green-tea, white-tea, oolong, black-tea, masala-chai,
 *     herbal, teaware, gift-tins. Tag slugs: new-flush, bestseller.
 *     Gardens/origins can be product_brand terms (the origins link to
 *     /brands).
 *   - The four origin regions, elevations and flavour notes are general
 *     placeholders: replace them with the gardens you actually buy from.
 *   - Brewing times/temperatures are common guidance; adjust to your teas.
 *   - Contact details, promo code FIRSTCUP, the 10% offer, the ৳1,200 free-
 *     delivery threshold, the subscription, "16,000+ tea drinkers" and the six
 *     reviews are sample copy.
 */

var template = [
  {
    "name": "Dutipata Tea",
    "description": "Garden-fresh tea store in garden green, copper and milk on paper; Caprasimo, Be Vietnam Pro and Tiro Bangla: a tea-tin-label header with a double-ruled band, an oval cartouche logo, liquor-coloured cups in the menu and garden terraces along its foot, a top-down cup hero over the terraces, a \"find your cup\" liquor colour scale, the new flush, origins, favourites, a brewing chart with temperature bars, black teas, a tong-stall chai band, green & white teas, teaware, gift tins, reviews, the tea notebook, FAQ and a tea-of-the-month subscription. All 16 pages.",
    "thumbnail": "/templates/dutipata.svg",
    "meta": {
      "fonts": [
        {
          "family": "Caprasimo",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Caprasimo&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Be Vietnam Pro",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
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
        "heading": "Caprasimo",
        "body": "Be Vietnam Pro"
      },
      "colors": {
        "primary": "#1F3D2B",
        "secondary": "#B5651D",
        "accent": "#5E8B4E",
        "background": "#FAF6EF",
        "foreground": "#1C1A15",
        "muted": "#6C665A"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "dp-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#1F3D2B]"
              }
            },
            "children": [
              {
                "id": "dp-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#162E20] px-4 py-2 text-center font-body text-xs font-medium text-[#F3E6D3]"
                  }
                },
                "children": [
                  {
                    "id": "dp-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "New season first flush is here · Free delivery over ৳1,200 · 10% off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "dp-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "FIRSTCUP",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#B5651D] px-2.5 py-0.5 font-body text-[11px] font-bold tracking-wider text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Brewing guide",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#brewing",
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
                        "classes": "font-body text-xs font-semibold text-[#E6CF8C] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "dp-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-y-[3px] border-double border-[#F3E6D3]/30"
                  }
                },
                "children": [
                  {
                    "id": "dp-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[78px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5 rounded-full border-[3px] border-double border-[#F3E6D3]/60 py-1.5 pl-1.5 pr-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "h-11 w-11 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                              }
                            }
                          },
                          {
                            "id": "dp-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Dutipata",
                                  "src": "https://placehold.co/200x64?text=Dutipata",
                                  "altText": "Dutipata Tea",
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
                                    "classes": "font-heading text-[26px] leading-none text-[#F3E6D3]"
                                  }
                                }
                              },
                              {
                                "id": "dp-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Tea from Bangladesh",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.22em] text-[#E6CF8C]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-hdr-menu",
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
                            "classes": "flex items-center gap-4 xl:gap-5"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "flex items-center gap-2 whitespace-nowrap font-body text-sm font-medium text-[#F3E6D3]/85 transition-colors hover:text-white"
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
                            "id": "dp-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Green",
                              "url": "/categories/green-tea"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#C7C46F] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "White",
                              "url": "/categories/white-tea"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#E6CF8C] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "Oolong",
                              "url": "/categories/oolong"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#D2933B] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Black",
                              "url": "/categories/black-tea"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#A0461A] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Masala chai",
                              "url": "/categories/masala-chai"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#B98256] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Herbal",
                              "url": "/categories/herbal"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#B83A36] before:ring-2 before:ring-white/70 before:content-['']"
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
                            "id": "dp-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Teaware",
                              "url": "/categories/teaware"
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
                            "id": "dp-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Gifts",
                              "url": "/categories/gift-tins"
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
                        "id": "dp-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search teas, gardens...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-52 rounded-full bg-white/10 py-1 pl-1 pr-3 transition-all focus-within:bg-white/15 md:block lg:hidden 2xl:block"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-body text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex h-7 w-7 items-center justify-center text-[#E6CF8C]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1F3D2B]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#1F3D2B]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1F3D2B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#162E20]"
                              }
                            }
                          },
                          {
                            "id": "dp-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
                            "id": "dp-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#B5651D] text-white transition-colors hover:bg-[#94501A]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#1F3D2B] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FAF6EF] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#1C1A15]"
                              },
                              "title-icon": {
                                "classes": "text-[#1F3D2B]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#1F3D2B] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#1F3D2B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#162E20]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#1F3D2B] px-4 py-2 text-sm font-medium text-[#1F3D2B] transition-colors hover:bg-[#1F3D2B] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F3D2B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#162E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "dp-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FAF6EF] p-2 text-[#1C1A15] transition-colors hover:bg-[#1F3D2B] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-11 w-11 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dp-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Dutipata",
                                          "src": "https://placehold.co/200x64?text=Dutipata",
                                          "altText": "Dutipata Tea",
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
                                            "classes": "font-heading text-[26px] leading-none text-[#1F3D2B]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dp-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Tea from Bangladesh",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[9px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B5651D]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "dp-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search teas...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FAF6EF] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#1F3D2B] focus-within:ring-2 focus-within:ring-[#1F3D2B]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1C1A15] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6C665A]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1F3D2B]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#1F3D2B]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1F3D2B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#162E20]"
                                  }
                                }
                              },
                              {
                                "id": "dp-hdr-m-menu",
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
                                    "classes": "flex items-center gap-2.5 border-b border-[#E4DCCB] py-3.5 font-body text-base font-semibold text-[#1C1A15] transition-colors hover:text-[#1F3D2B]"
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
                                    "id": "dp-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Green",
                                      "url": "/categories/green-tea"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#C7C46F] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "White",
                                      "url": "/categories/white-tea"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#E6CF8C] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Oolong",
                                      "url": "/categories/oolong"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#D2933B] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Black",
                                      "url": "/categories/black-tea"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#A0461A] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Masala chai",
                                      "url": "/categories/masala-chai"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#B98256] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Herbal",
                                      "url": "/categories/herbal"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "label": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "before:h-3 before:w-3 before:shrink-0 before:rounded-full before:bg-[#B83A36] before:ring-2 before:ring-white/70 before:content-['']"
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
                                    "id": "dp-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Teaware",
                                      "url": "/categories/teaware"
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
                                    "id": "dp-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Gifts",
                                      "url": "/categories/gift-tins"
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
                "id": "dp-hdr-terraces",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "h-3 w-full bg-[#1F3D2B] bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#2B5039_12px,transparent_12.5px)] bg-[length:24px_14px,30px_16px] bg-[position:0_0,12px_6px] bg-repeat-x"
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
            "id": "dp-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1C1A15] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "dp-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "dp-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[#B5651D] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Tea of the month",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F3E6D3]"
                              }
                            }
                          },
                          {
                            "id": "dp-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "A new garden in your cup, every month",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "dp-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "A 100 g tin each month with tasting notes and the garden’s story.",
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
                        "id": "dp-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Subscribe",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconCalendar",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1F3D2B] px-7 py-3.5 transition-colors hover:bg-[#B5651D]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
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
                "id": "dp-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "dp-ftr-grid",
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
                        "id": "dp-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-11 w-11 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                }
                              },
                              {
                                "id": "dp-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Dutipata",
                                      "src": "https://placehold.co/200x64?text=Dutipata",
                                      "altText": "Dutipata Tea",
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
                                        "classes": "font-heading text-[26px] leading-none text-[#F3E6D3]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "dp-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Garden-direct green, white, oolong, black and masala teas from the hills of Sylhet and Srimangal, packed fresh each season and delivered across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "dp-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1F3D2B]"
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
                                "id": "dp-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1F3D2B]"
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
                                "id": "dp-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1F3D2B]"
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
                                "id": "dp-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1F3D2B]"
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
                        "id": "dp-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Teas",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Green & White",
                                  "icon": "",
                                  "slug": "/categories/green-tea"
                                },
                                {
                                  "text": "Oolong",
                                  "icon": "",
                                  "slug": "/categories/oolong"
                                },
                                {
                                  "text": "Black & CTC",
                                  "icon": "",
                                  "slug": "/categories/black-tea"
                                },
                                {
                                  "text": "Masala Chai",
                                  "icon": "",
                                  "slug": "/categories/masala-chai"
                                },
                                {
                                  "text": "Herbal",
                                  "icon": "",
                                  "slug": "/categories/herbal"
                                },
                                {
                                  "text": "Teaware & Gifts",
                                  "icon": "",
                                  "slug": "/categories/teaware"
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
                                "classes": "transition-colors hover:text-[#B5651D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#B5651D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ftr-ll-care",
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
                                  "text": "Brewing Guide",
                                  "icon": "",
                                  "slug": "/#brewing"
                                },
                                {
                                  "text": "Delivery & FAQ",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Tea Notebook",
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
                                "classes": "transition-colors hover:text-[#B5651D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#B5651D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ftr-contact-h",
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
                            "id": "dp-ftr-address",
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
                                "label": "Gardens",
                                "value": "Srimangal, Sylhet",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#B5651D]"
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
                                "classes": "shrink-0 text-[#1F3D2B]"
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
                "id": "dp-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "dp-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Dutipata Tea. All rights reserved. Two leaves and a bud.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "dp-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-ftr-pay-txt",
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
            "id": "dp-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FAF6EF] pb-28 pt-12 lg:pb-36 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "dp-hero-terr-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[#1F3D2B]"
                  }
                },
                "children": []
              },
              {
                "id": "dp-hero-terr-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 bottom-24 h-4 bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] bg-[length:24px_14px,30px_16px] bg-[position:0_0,12px_6px] bg-repeat-x"
                  }
                },
                "children": []
              },
              {
                "id": "dp-hero-terr-3",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 bottom-8 h-4 opacity-60 bg-[radial-gradient(circle_at_50%_100%,#7FA868_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#5E8B4E_12px,transparent_12.5px)] bg-[length:24px_14px,30px_16px] bg-[position:0_0,12px_6px] bg-repeat-x"
                  }
                },
                "children": []
              },
              {
                "id": "dp-hero-terr-4",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute inset-x-0 bottom-16 h-4 opacity-40 bg-[radial-gradient(circle_at_50%_100%,#7FA868_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#5E8B4E_12px,transparent_12.5px)] bg-[length:24px_14px,30px_16px] bg-[position:0_0,12px_6px] bg-repeat-x"
                  }
                },
                "children": []
              },
              {
                "id": "dp-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-hero-bn",
                            "type": "text",
                            "options": {
                              "text": "দুটি পাতা একটি কুঁড়ি",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Tiro_Bangla'] text-2xl text-[#B5651D]"
                              }
                            }
                          },
                          {
                            "id": "dp-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Two leaves and a bud.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-6xl leading-[0.98] text-[#1C1A15] sm:text-7xl xl:text-8xl"
                              }
                            }
                          },
                          {
                            "id": "dp-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Hand-plucked tea from the hills of Sylhet and Srimangal: bright green teas, golden whites, malty blacks and the masala chai you grew up with, packed fresh from the garden.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#6C665A]"
                              }
                            }
                          },
                          {
                            "id": "dp-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop teas",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1F3D2B] px-7 py-3.5 transition-colors hover:bg-[#B5651D]"
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
                                "id": "dp-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find your cup",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#find-your-cup",
                                  "target": "",
                                  "icon": "IconCup",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#1F3D2B] px-7 py-3 transition-colors hover:bg-[#1F3D2B]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1F3D2B] group-hover:text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-hero-facts",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid max-w-md grid-cols-3 gap-3 border-t border-dashed border-[#E4DCCB] pt-6"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-hero-fact-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-hero-fact-1-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconMountain",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECE1] text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-hero-fact-1-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Garden-direct",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#1C1A15]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dp-hero-fact-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-hero-fact-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconCalendar",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECE1] text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-hero-fact-2-t",
                                    "type": "text",
                                    "options": {
                                      "text": "This season’s flush",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#1C1A15]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dp-hero-fact-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-hero-fact-3-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconLeaf",
                                      "size": 20,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECE1] text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-hero-fact-3-t",
                                    "type": "text",
                                    "options": {
                                      "text": "Whole leaf",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-[#1C1A15]"
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
                        "id": "dp-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-hero-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/dutipata-cup.svg",
                              "altText": "A cup of amber tea on a saucer seen from above, with a sprig of two leaves and a bud",
                              "link": "/shop",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto w-full max-w-[520px]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full transition-transform duration-[1500ms] hover:rotate-12"
                              }
                            }
                          },
                          {
                            "id": "dp-hero-tag",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute right-0 top-6 flex rotate-6 flex-col items-center rounded-2xl bg-[#1F3D2B] px-5 py-3 text-center shadow-lg ring-4 ring-[#FAF6EF] sm:right-6"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-hero-tag-k",
                                "type": "text",
                                "options": {
                                  "text": "First flush",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C7C46F]"
                                  }
                                }
                              },
                              {
                                "id": "dp-hero-tag-v",
                                "type": "text",
                                "options": {
                                  "text": "Spring 2026",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-xl text-white"
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
            "id": "dp-cups",
            "type": "section",
            "options": {
              "anchor": "find-your-cup"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#1F3D2B] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-cups-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-cups-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-cups-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cups-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cups-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#C7C46F]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cups-label",
                                "type": "text",
                                "options": {
                                  "text": "Find your cup",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6CF8C]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-cups-h",
                            "type": "heading",
                            "options": {
                              "text": "Pick by the colour in your cup",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#FAF6EF]"
                              }
                            }
                          },
                          {
                            "id": "dp-cups-sub",
                            "type": "text",
                            "options": {
                              "text": "From pale green to deep ruby: every tea has its own liquor, its own temperature and its own time.",
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
                    "id": "dp-cups-scale",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 h-2 w-full rounded-full bg-[linear-gradient(90deg,#C7C46F,#E6CF8C,#D2933B,#A0461A,#B98256,#B83A36)]"
                      }
                    },
                    "children": []
                  },
                  {
                    "id": "dp-cups-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-cup-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-1-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#C7C46F_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-1-btn",
                            "type": "button",
                            "options": {
                              "text": "Green",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/green-tea",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-1-n",
                            "type": "text",
                            "options": {
                              "text": "Fresh, grassy, light",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-1-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-1-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-1-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "80°C · 2 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-cup-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-2-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#E6CF8C_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-2-btn",
                            "type": "button",
                            "options": {
                              "text": "White",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/white-tea",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-2-n",
                            "type": "text",
                            "options": {
                              "text": "Delicate, honeyed",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-2-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-2-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-2-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "85°C · 4 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-cup-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-3-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#D2933B_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-3-btn",
                            "type": "button",
                            "options": {
                              "text": "Oolong",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/oolong",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-3-n",
                            "type": "text",
                            "options": {
                              "text": "Floral, toasty",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-3-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-3-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-3-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "90°C · 3 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-cup-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-4-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-4-btn",
                            "type": "button",
                            "options": {
                              "text": "Black",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/black-tea",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-4-n",
                            "type": "text",
                            "options": {
                              "text": "Malty, bold, brisk",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-4-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-4-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-4-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "100°C · 4 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-cup-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-5-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B98256_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-5-btn",
                            "type": "button",
                            "options": {
                              "text": "Masala chai",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/masala-chai",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-5-n",
                            "type": "text",
                            "options": {
                              "text": "Spiced, milky, warm",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-5-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-5-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-5-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "Simmer · 5 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-cup-6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cup-6-c",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "aspect-square w-full max-w-[150px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B83A36_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-105"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cup-6-btn",
                            "type": "button",
                            "options": {
                              "text": "Herbal",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/herbal",
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
                                "classes": "font-heading font-normal text-2xl text-[#FAF6EF] transition-colors hover:text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-6-n",
                            "type": "text",
                            "options": {
                              "text": "Caffeine-free, fruity",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/65"
                              }
                            }
                          },
                          {
                            "id": "dp-cup-6-brew",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cup-6-brew-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTemperature",
                                  "size": 14,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#E6CF8C]"
                                  }
                                }
                              },
                              {
                                "id": "dp-cup-6-brew-t",
                                "type": "text",
                                "options": {
                                  "text": "100°C · 5 min",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-white/85"
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
            "id": "dp-row-fresh-flush",
            "type": "section",
            "options": {
              "anchor": "fresh-flush"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-row-fresh-flush-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-row-fresh-flush-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-fresh-flush-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-fresh-flush-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-fresh-flush-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-fresh-flush-label",
                                "type": "text",
                                "options": {
                                  "text": "Just plucked",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-row-fresh-flush-h",
                            "type": "heading",
                            "options": {
                              "text": "This season’s flush",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-row-fresh-flush-sub",
                            "type": "text",
                            "options": {
                              "text": "New-season teas, packed within days of plucking.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-row-fresh-flush-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new-flush",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-row-fresh-flush-slider",
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
                                  "new-flush"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-fresh-flush-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-fresh-flush-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-fresh-flush-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-fresh-flush-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-row-fresh-flush-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-row-fresh-flush-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-fresh-flush-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-row-fresh-flush-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-row-fresh-flush-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-row-fresh-flush-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-fresh-flush-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-fresh-flush-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-origins",
            "type": "section",
            "options": {
              "anchor": "origins"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-origins-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-origins-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-origins-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-origins-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origins-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origins-label",
                                "type": "text",
                                "options": {
                                  "text": "Where it grows",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-origins-h",
                            "type": "heading",
                            "options": {
                              "text": "From the gardens of Bangladesh",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-origins-sub",
                            "type": "text",
                            "options": {
                              "text": "Every pack names its region, so you can taste the difference between hills.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-origins-all",
                        "type": "button",
                        "options": {
                          "text": "All origins",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-origins-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-origin-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-3 overflow-hidden rounded-[24px] bg-[#FAF6EF] p-6 pb-14 ring-1 ring-[#E4DCCB] transition-all hover:-translate-y-1 hover:ring-[#1F3D2B]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-origin-1-terr",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#E3ECE1] before:absolute before:inset-x-0 before:-top-3 before:h-4 before:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] before:bg-[length:24px_14px,30px_16px] before:bg-[position:0_0,12px_6px] before:bg-repeat-x before:content-[''] before:opacity-70"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-origin-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMapPin",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-1-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-9 w-9 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Srimangal hills",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-origin-1-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-1-r",
                                "type": "text",
                                "options": {
                                  "text": "Sylhet division",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-1-e",
                                "type": "text",
                                "options": {
                                  "text": "120-180 m",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-1-p",
                            "type": "text",
                            "options": {
                              "text": "Bright, brisk black teas with a coppery cup.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-sm leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-origin-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-3 overflow-hidden rounded-[24px] bg-[#FAF6EF] p-6 pb-14 ring-1 ring-[#E4DCCB] transition-all hover:-translate-y-1 hover:ring-[#1F3D2B]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-origin-2-terr",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#E3ECE1] before:absolute before:inset-x-0 before:-top-3 before:h-4 before:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] before:bg-[length:24px_14px,30px_16px] before:bg-[position:0_0,12px_6px] before:bg-repeat-x before:content-[''] before:opacity-70"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-origin-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMapPin",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-2-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-9 w-9 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B98256_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Moulvibazar valleys",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-origin-2-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-2-r",
                                "type": "text",
                                "options": {
                                  "text": "Sylhet division",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-2-e",
                                "type": "text",
                                "options": {
                                  "text": "60-150 m",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-2-p",
                            "type": "text",
                            "options": {
                              "text": "Mellow, malty teas for everyday milk chai.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-sm leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-origin-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-3 overflow-hidden rounded-[24px] bg-[#FAF6EF] p-6 pb-14 ring-1 ring-[#E4DCCB] transition-all hover:-translate-y-1 hover:ring-[#1F3D2B]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-origin-3-terr",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#E3ECE1] before:absolute before:inset-x-0 before:-top-3 before:h-4 before:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] before:bg-[length:24px_14px,30px_16px] before:bg-[position:0_0,12px_6px] before:bg-repeat-x before:content-[''] before:opacity-70"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-origin-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMapPin",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-3-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-9 w-9 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#C7C46F_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Sylhet highlands",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-origin-3-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-3-r",
                                "type": "text",
                                "options": {
                                  "text": "Sylhet division",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-3-e",
                                "type": "text",
                                "options": {
                                  "text": "150-200 m",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-3-p",
                            "type": "text",
                            "options": {
                              "text": "Floral greens and rare white teas, hand-rolled.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-sm leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-origin-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col gap-3 overflow-hidden rounded-[24px] bg-[#FAF6EF] p-6 pb-14 ring-1 ring-[#E4DCCB] transition-all hover:-translate-y-1 hover:ring-[#1F3D2B]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-origin-4-terr",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#E3ECE1] before:absolute before:inset-x-0 before:-top-3 before:h-4 before:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] before:bg-[length:24px_14px,30px_16px] before:bg-[position:0_0,12px_6px] before:bg-repeat-x before:content-[''] before:opacity-70"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-origin-4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconMapPin",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-4-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-9 w-9 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#D2933B_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Panchagarh plains",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-origin-4-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-origin-4-r",
                                "type": "text",
                                "options": {
                                  "text": "Rangpur division",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              },
                              {
                                "id": "dp-origin-4-e",
                                "type": "text",
                                "options": {
                                  "text": "70-90 m",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-white px-2.5 py-1 font-body text-[11px] font-semibold text-[#6C665A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-origin-4-p",
                            "type": "text",
                            "options": {
                              "text": "Small-farm organic teas from the far north.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative text-sm leading-relaxed text-[#6C665A]"
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
            "id": "dp-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-best-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-best-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-best-label",
                                "type": "text",
                                "options": {
                                  "text": "Most brewed",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Customer favourites",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The tins our regulars refill every month.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-best-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-best-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-best-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-brew",
            "type": "section",
            "options": {
              "anchor": "brewing"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-brew-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "dp-brew-copy",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-5 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-brew-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconLeaf",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#5E8B4E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-brew-label",
                                    "type": "text",
                                    "options": {
                                      "text": "The perfect cup",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-h",
                                "type": "heading",
                                "options": {
                                  "text": "How to brew it right",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-p",
                        "type": "text",
                        "options": {
                          "text": "Boiling water makes green tea bitter; under-steeped black tea tastes thin. Per 200 ml cup, follow the chart, then adjust to taste. Good leaves can be steeped again.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-base leading-relaxed text-[#6C665A]"
                          }
                        }
                      },
                      {
                        "id": "dp-brew-tip",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-3 rounded-2xl bg-[#F6E4D2] p-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-tip-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTeapot",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex shrink-0 text-[#B5651D]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-tip-t",
                            "type": "text",
                            "options": {
                              "text": "No thermometer? Let boiled water rest 3 minutes for about 80°C.",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-semibold text-[#1C1A15]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "dp-brew-table",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "overflow-hidden rounded-[24px] ring-1 ring-[#E4DCCB] lg:col-span-8"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-brew-th",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 bg-[#1F3D2B] px-5 py-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-th-1",
                            "type": "text",
                            "options": {
                              "text": "Tea",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-white/80"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-th-2",
                            "type": "text",
                            "options": {
                              "text": "Leaf",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-white/80"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-th-3",
                            "type": "text",
                            "options": {
                              "text": "Water",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-white/80"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-th-4",
                            "type": "text",
                            "options": {
                              "text": "Steep",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-white/80"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-th-5",
                            "type": "text",
                            "options": {
                              "text": "Re-steeps",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 px-5 py-4 bg-[#FAF6EF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-r1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r1-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-7 w-7 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#C7C46F_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dp-brew-r1-n",
                                "type": "text",
                                "options": {
                                  "text": "Green",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r1-g",
                            "type": "text",
                            "options": {
                              "text": "2 g",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r1-w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r1-track",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 flex-1 overflow-hidden rounded-full bg-[#F1EADD]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-r1-bar",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-[45%] rounded-full bg-[linear-gradient(90deg,#9CC3D9,#B5651D)]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-r1-temp",
                                "type": "text",
                                "options": {
                                  "text": "80°C",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-12 shrink-0 font-body text-sm font-semibold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r1-time",
                            "type": "text",
                            "options": {
                              "text": "2 min",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r1-re",
                            "type": "text",
                            "options": {
                              "text": "3",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 px-5 py-4 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-r2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r2-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-7 w-7 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#E6CF8C_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dp-brew-r2-n",
                                "type": "text",
                                "options": {
                                  "text": "White",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r2-g",
                            "type": "text",
                            "options": {
                              "text": "3 g",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r2-w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r2-track",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 flex-1 overflow-hidden rounded-full bg-[#F1EADD]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-r2-bar",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-[55%] rounded-full bg-[linear-gradient(90deg,#9CC3D9,#B5651D)]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-r2-temp",
                                "type": "text",
                                "options": {
                                  "text": "85°C",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-12 shrink-0 font-body text-sm font-semibold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r2-time",
                            "type": "text",
                            "options": {
                              "text": "4 min",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r2-re",
                            "type": "text",
                            "options": {
                              "text": "3",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 px-5 py-4 bg-[#FAF6EF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-r3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r3-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-7 w-7 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#D2933B_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dp-brew-r3-n",
                                "type": "text",
                                "options": {
                                  "text": "Oolong",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r3-g",
                            "type": "text",
                            "options": {
                              "text": "3 g",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r3-w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r3-track",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 flex-1 overflow-hidden rounded-full bg-[#F1EADD]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-r3-bar",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-[70%] rounded-full bg-[linear-gradient(90deg,#9CC3D9,#B5651D)]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-r3-temp",
                                "type": "text",
                                "options": {
                                  "text": "90°C",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-12 shrink-0 font-body text-sm font-semibold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r3-time",
                            "type": "text",
                            "options": {
                              "text": "3 min",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r3-re",
                            "type": "text",
                            "options": {
                              "text": "4+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 px-5 py-4 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-r4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r4-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-7 w-7 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dp-brew-r4-n",
                                "type": "text",
                                "options": {
                                  "text": "Black",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r4-g",
                            "type": "text",
                            "options": {
                              "text": "2.5 g",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r4-w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r4-track",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 flex-1 overflow-hidden rounded-full bg-[#F1EADD]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-r4-bar",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-full rounded-full bg-[linear-gradient(90deg,#9CC3D9,#B5651D)]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-r4-temp",
                                "type": "text",
                                "options": {
                                  "text": "100°C",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-12 shrink-0 font-body text-sm font-semibold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r4-time",
                            "type": "text",
                            "options": {
                              "text": "4 min",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r4-re",
                            "type": "text",
                            "options": {
                              "text": "2",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-brew-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-[1.2fr_0.7fr_1.6fr_0.8fr_0.8fr] items-center gap-3 px-5 py-4 bg-[#FAF6EF]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brew-r5-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r5-cup",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-7 w-7 shrink-0 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B83A36_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "dp-brew-r5-n",
                                "type": "text",
                                "options": {
                                  "text": "Herbal",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r5-g",
                            "type": "text",
                            "options": {
                              "text": "2 g",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r5-w",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brew-r5-track",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-2 flex-1 overflow-hidden rounded-full bg-[#F1EADD]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brew-r5-bar",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "h-full w-full rounded-full bg-[linear-gradient(90deg,#9CC3D9,#B5651D)]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-brew-r5-temp",
                                "type": "text",
                                "options": {
                                  "text": "100°C",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-12 shrink-0 font-body text-sm font-semibold text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-brew-r5-time",
                            "type": "text",
                            "options": {
                              "text": "5 min",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-brew-r5-re",
                            "type": "text",
                            "options": {
                              "text": "1",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm text-[#6C665A]"
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
            "id": "dp-row-black",
            "type": "section",
            "options": {
              "anchor": "black"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-row-black-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-row-black-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-black-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-black-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-black-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-black-label",
                                "type": "text",
                                "options": {
                                  "text": "Malty & brisk",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-row-black-h",
                            "type": "heading",
                            "options": {
                              "text": "Black teas & CTC",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-row-black-sub",
                            "type": "text",
                            "options": {
                              "text": "For strong morning cups and proper milk chai.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-row-black-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/black-tea",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-row-black-slider",
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
                                  "black-tea"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-black-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-black-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-black-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-black-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-row-black-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-row-black-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-black-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-row-black-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-row-black-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-row-black-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-black-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-black-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-chai",
            "type": "section",
            "options": {
              "anchor": "chai"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#B5651D] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-chai-cup",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -right-24 -top-24 h-96 w-96 opacity-40 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B98256_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                  }
                },
                "children": []
              },
              {
                "id": "dp-chai-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "dp-chai-t",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-4 lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-chai-bn",
                        "type": "text",
                        "options": {
                          "text": "টং দোকানের চা",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Tiro_Bangla'] text-2xl text-[#F3E6D3]"
                          }
                        }
                      },
                      {
                        "id": "dp-chai-h",
                        "type": "heading",
                        "options": {
                          "text": "Make it like the tong stall.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-4xl leading-[1.05] text-white sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "dp-chai-p",
                        "type": "text",
                        "options": {
                          "text": "Strong, milky, a little too sweet and perfect. Our Tong Stall CTC blend is made for exactly this.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-md text-base text-white/80"
                          }
                        }
                      },
                      {
                        "id": "dp-chai-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pt-2"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-chai-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop the chai blend",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/masala-chai",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 transition-colors hover:bg-[#F3E6D3]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#94501A]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#94501A] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "dp-chai-steps",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-chai-s1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[20px] bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-chai-s1-n",
                            "type": "text",
                            "options": {
                              "text": "1",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6D3] font-heading font-normal text-lg text-[#94501A]"
                              }
                            }
                          },
                          {
                            "id": "dp-chai-s1-t",
                            "type": "text",
                            "options": {
                              "text": "Boil 1 cup water with 2 tsp CTC tea",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-medium text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-chai-s2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[20px] bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-chai-s2-n",
                            "type": "text",
                            "options": {
                              "text": "2",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6D3] font-heading font-normal text-lg text-[#94501A]"
                              }
                            }
                          },
                          {
                            "id": "dp-chai-s2-t",
                            "type": "text",
                            "options": {
                              "text": "Add a crushed cardamom and a slice of ginger",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-medium text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-chai-s3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[20px] bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-chai-s3-n",
                            "type": "text",
                            "options": {
                              "text": "3",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6D3] font-heading font-normal text-lg text-[#94501A]"
                              }
                            }
                          },
                          {
                            "id": "dp-chai-s3-t",
                            "type": "text",
                            "options": {
                              "text": "Pour in ½ cup milk, sugar to taste",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-medium text-white"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-chai-s4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[20px] bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-chai-s4-n",
                            "type": "text",
                            "options": {
                              "text": "4",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6D3] font-heading font-normal text-lg text-[#94501A]"
                              }
                            }
                          },
                          {
                            "id": "dp-chai-s4-t",
                            "type": "text",
                            "options": {
                              "text": "Bring to a rolling boil twice, strain and pour from high",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-medium text-white"
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
            "id": "dp-row-green",
            "type": "section",
            "options": {
              "anchor": "green"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-row-green-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-row-green-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-green-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-green-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-green-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-green-label",
                                "type": "text",
                                "options": {
                                  "text": "Light & fresh",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-row-green-h",
                            "type": "heading",
                            "options": {
                              "text": "Green & white teas",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-row-green-sub",
                            "type": "text",
                            "options": {
                              "text": "Hand-rolled, gently made, best without milk.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-row-green-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/green-tea",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-row-green-slider",
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
                                  "green-tea"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-green-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-green-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-green-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-green-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-row-green-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-row-green-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-green-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-row-green-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-row-green-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-row-green-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-green-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-green-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-row-teaware",
            "type": "section",
            "options": {
              "anchor": "teaware"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-row-teaware-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-row-teaware-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-teaware-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-teaware-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-teaware-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-teaware-label",
                                "type": "text",
                                "options": {
                                  "text": "For the ritual",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-row-teaware-h",
                            "type": "heading",
                            "options": {
                              "text": "Teaware",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-row-teaware-sub",
                            "type": "text",
                            "options": {
                              "text": "Teapots, glass cups, infusers and kettles.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-row-teaware-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/teaware",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-row-teaware-slider",
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
                                  "teaware"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-teaware-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-teaware-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-teaware-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-teaware-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-row-teaware-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-row-teaware-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-teaware-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-row-teaware-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-row-teaware-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-row-teaware-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-teaware-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-teaware-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-row-gift-tins",
            "type": "section",
            "options": {
              "anchor": "gift-tins"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-row-gift-tins-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-row-gift-tins-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-gift-tins-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-gift-tins-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-gift-tins-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-gift-tins-label",
                                "type": "text",
                                "options": {
                                  "text": "For the tea lover",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-row-gift-tins-h",
                            "type": "heading",
                            "options": {
                              "text": "Gift tins & sets",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-row-gift-tins-sub",
                            "type": "text",
                            "options": {
                              "text": "Tasting flights and tins, ready to give.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-row-gift-tins-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/gift-tins",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-row-gift-tins-slider",
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
                                  "gift-tins"
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
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!py-2"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-row-gift-tins-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-row-gift-tins-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-gift-tins-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-gift-tins-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-row-gift-tins-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-row-gift-tins-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-row-gift-tins-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-row-gift-tins-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-row-gift-tins-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-row-gift-tins-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-row-gift-tins-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-row-gift-tins-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-reviews-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-reviews-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-reviews-label",
                                "type": "text",
                                "options": {
                                  "text": "Over a cup",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "What tea people say",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 16,000+ tea drinkers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "dp-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#1F3D2B] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#1C1A15] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#1C1A15]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#1F3D2B]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Finally a black tea with a real copper cup and that brisk bite. My morning is sorted.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "RK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rashed Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Black tea",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                        "id": "dp-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“I never liked green tea until I brewed it at 80°C like their chart says. Sweet, not bitter at all.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "AM",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#C7C46F_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Afsana Mim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Green tea",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                        "id": "dp-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Tastes exactly like the chai from the stall outside my old university. Pure nostalgia.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "ZH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B98256_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Zahid Hasan",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Tong Stall CTC",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                        "id": "dp-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Sent a tasting tin to my father in Chattogram. He now calls me to discuss which hill tastes best.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "NS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#D2933B_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadira Sultana",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Gift tin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                        "id": "dp-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Delicate and honey-like. I re-steeped the same leaves three times and every cup was lovely.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "FA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#E6CF8C_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Fahim Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "White tea",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                        "id": "dp-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-7 ring-1 ring-[#E4DCCB]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“The tea-of-the-month box is the best part of my month. Each one comes with a little note about the garden.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1C1A15]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E4DCCB] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#B83A36_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)] font-body text-xs font-bold text-white"
                                  }
                                }
                              },
                              {
                                "id": "dp-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Shirin Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Subscription",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
            "id": "dp-journal",
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
                "id": "dp-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "dp-journal-head-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-journal-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#5E8B4E]"
                                  }
                                }
                              },
                              {
                                "id": "dp-journal-label",
                                "type": "text",
                                "options": {
                                  "text": "The tea notebook",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Garden stories & brewing notes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#E3ECE1] px-5 py-2.5 transition-colors hover:bg-[#1F3D2B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-journal-grid",
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
                        "id": "dp-journal-loop",
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
                            "id": "dp-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[24px] bg-[#E3ECE1]"
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
                            "id": "dp-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[10px] text-[#B5651D]"
                                  }
                                }
                              },
                              {
                                "id": "dp-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                  }
                                }
                              },
                              {
                                "id": "dp-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read more",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6C665A]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-semibold text-[#1F3D2B]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#B5651D] transition-transform group-hover/rm:translate-x-1"
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
            "id": "dp-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "dp-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "dp-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "dp-faq-head-k",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-faq-k-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconLeaf",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#5E8B4E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-faq-label",
                                    "type": "text",
                                    "options": {
                                      "text": "Questions",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dp-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#1C1A15]"
                                  }
                                }
                              },
                              {
                                "id": "dp-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Freshness, storage, caffeine and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#6C665A]"
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
                    "id": "dp-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How fresh is your tea?",
                          "classes": ""
                        },
                        {
                          "label": "Loose leaf or tea bags?",
                          "classes": ""
                        },
                        {
                          "label": "How should I store tea?",
                          "classes": ""
                        },
                        {
                          "label": "How much caffeine is in each?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 font-body text-base font-semibold text-[#1C1A15] ring-1 ring-[#E4DCCB] transition-colors hover:bg-[#E3ECE1]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#1F3D2B] !text-white"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#B5651D]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "We buy each flush straight from the gardens and pack it within days. Every pack is printed with its plucking season.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Most teas come as whole loose leaf for the best cup; our everyday CTC blends also come in pyramid bags.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "In an airtight tin, away from light, heat and strong smells. Green and white teas are best within 6 months, black within a year.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Black and CTC teas have the most, oolong and green less, white tea little, and our herbal blends none at all.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24-48 hours, 2-4 days elsewhere in Bangladesh, with cash on delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6C665A]"
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
            "id": "dp-cta",
            "type": "section",
            "options": {
              "anchor": "subscribe"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "dp-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#1F3D2B] p-8 pb-16 sm:p-12 sm:pb-20 lg:grid-cols-12 lg:p-16 lg:pb-20"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-cta-terr",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-[#162E20] before:absolute before:inset-x-0 before:-top-3 before:h-4 before:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#162E20_12px,transparent_12.5px)] before:bg-[length:24px_14px,30px_16px] before:bg-[position:0_0,12px_6px] before:bg-repeat-x before:content-['']"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "dp-cta-cups",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute right-8 top-8 hidden gap-2 lg:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cta-cup-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-10 w-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#C7C46F_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cta-cup-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-10 w-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#D2933B_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "dp-cta-cup-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "h-10 w-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.45),transparent_32%),radial-gradient(circle,#A0461A_58%,#FFFFFF_59%,#FFFFFF_66%,#1F3D2B_67%,#1F3D2B_70%,#F1EADD_71%)] shadow-[0_14px_24px_-14px_rgba(28,26,21,0.5)]"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "dp-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cta-k",
                            "type": "text",
                            "options": {
                              "text": "Tea of the month",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E6CF8C]"
                              }
                            }
                          },
                          {
                            "id": "dp-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "A new garden in your cup, every month.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] text-[#FAF6EF] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "dp-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Subscribe for a 100 g tin of a different tea each month, with tasting notes and the story of the garden it came from. Pause any time.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Start my subscription",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconCalendar",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#B5651D] px-7 py-3.5 transition-colors hover:bg-[#94501A]"
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
            "id": "dp-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The tea room",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Teas",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every tea, tisane and teapot we stock, newest flush first. Each pack names its garden and season.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
                        "id": "dp-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-shop-promise",
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
                "id": "dp-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Garden-direct",
                          "description": "From Bangladeshi estates",
                          "icon": "IconMountain",
                          "iconSize": ""
                        },
                        {
                          "title": "Fresh flush",
                          "description": "Season on every pack",
                          "icon": "IconCalendar",
                          "iconSize": ""
                        },
                        {
                          "title": "Whole leaf",
                          "description": "No dust, no fillers",
                          "icon": "IconLeaf",
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
                        "classes": "font-heading text-xl text-[#1C1A15]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E3ECE1] text-[#1F3D2B]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-shop-promise-fb-ic",
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
                        "id": "dp-shop-promise-fb-t",
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
                        "id": "dp-shop-promise-fb-d",
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
            "id": "dp-pd",
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
                "id": "dp-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-pd-grid",
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
                        "id": "dp-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E8F0E2] via-white to-[#FAF6EF] p-4 shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1C1A15]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1C1A15]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#1F3D2B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-pd-cats",
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
                                "classes": "rounded-full bg-[#E8F0E2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white"
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
                            "id": "dp-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#1C1A15] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "dp-pd-rate",
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
                                "classes": "font-body font-bold text-[#1C1A15]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "dp-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#1C1A15]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#1C1A15]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#1C1A15]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#1F3D2B] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "dp-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6C665A]"
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
                            "id": "dp-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#1C1A15]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:bg-[#E8F0E2]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#1F3D2B] !bg-[#E8F0E2] !text-[#162E20]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "dp-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "This flush is finished · next season soon",
                              "inStockText": "Fresh stock · ships within 24 hours",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#1F3D2B]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#1F3D2B]"
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
                            "id": "dp-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1C1A15]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FAF6EF]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FAF6EF]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#1F3D2B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#162E20]"
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
                            "id": "dp-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Garden-direct",
                                  "description": "Named estate",
                                  "icon": "IconMountain",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Fresh flush",
                                  "description": "Season on pack",
                                  "icon": "IconCalendar",
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
                                "classes": "font-body text-base font-bold text-[#1C1A15]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F0E2] text-[#1F3D2B]"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-perks-ic",
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
                                "id": "dp-pd-perks-t",
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
                                "id": "dp-pd-perks-d",
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
                            "id": "dp-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-sku",
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
                                    "classes": "font-semibold text-[#1C1A15]"
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
                                "id": "dp-pd-brands",
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
                                    "classes": "font-semibold text-[#1C1A15]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1F3D2B]"
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
                                "id": "dp-pd-tags",
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
                                    "classes": "font-semibold text-[#1C1A15]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#1F3D2B]"
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
            "id": "dp-pd-tabs-sec",
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
                "id": "dp-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,21,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this tea",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "How to brew",
                              "icon": "IconTemperature"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FAF6EF] px-5 py-2.5 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1C1A15] !text-white shadow-md"
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
                            "id": "dp-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#1C1A15] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#1C1A15] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#1F3D2B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#B5651D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconTemperature",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Garden, region, season and tasting notes are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Brew per 200 ml cup; see the temperature and time on the pack",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store airtight, away from light, heat and strong smells",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Good whole-leaf teas can be steeped two or three times",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#1F3D2B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-ship-list",
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
                                      "text": "Free delivery on orders over ৳1,200",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged packs are replaced free",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#1F3D2B]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "dp-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FAF6EF] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FAF6EF] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "dp-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3ECE1]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dp-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "dp-pd-reviews-rate",
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
                                        "id": "dp-pd-reviews-co",
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
                                    "id": "dp-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How did it taste? How did you brew it?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,21,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#1C1A15]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FAF6EF] px-4 py-3 text-sm text-[#1C1A15] placeholder:text-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#162E20] disabled:opacity-50"
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
            "id": "dp-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16"
              }
            },
            "children": [
              {
                "id": "dp-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Brew it next",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3ECE1] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B]"
                          }
                        }
                      },
                      {
                        "id": "dp-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1C1A15]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
            "id": "dp-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Every kind of cup",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Green, white, oolong, black, masala chai, herbal, teaware and gifts.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E8F0E2] transition-transform"
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
                            "id": "dp-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                              }
                            }
                          },
                          {
                            "id": "dp-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " teas",
                              "singularSuffix": " tea",
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
                        "id": "dp-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dp-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " teas",
                      "singularSuffix": " tea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1F3D2B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
                        "id": "dp-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group teas by flush, mood and occasion: new flush, bestsellers, caffeine-free and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1F3D2B]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1F3D2B]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1C1A15] group-hover:text-[#1F3D2B]"
                              }
                            }
                          },
                          {
                            "id": "dp-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FAF6EF] px-2 py-0.5 text-[10px] font-bold text-[#6C665A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "dp-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dp-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " teas",
                      "singularSuffix": " tea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1F3D2B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
                        "id": "dp-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Where it grows",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Gardens & Origins",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every garden and region we buy from.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FAF6EF] p-3"
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
                            "id": "dp-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1C1A15] group-hover:text-[#1F3D2B]"
                              }
                            }
                          },
                          {
                            "id": "dp-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " teas",
                              "singularSuffix": " tea",
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
                        "id": "dp-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "dp-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " teas",
                      "singularSuffix": " tea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#1F3D2B] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
                        "id": "dp-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The tea notebook",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Garden Stories & Brewing Notes",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Visits to the gardens, brewing experiments and the history of Bangladeshi tea.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FAF6EF]"
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
                            "id": "dp-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B]"
                                  }
                                }
                              },
                              {
                                "id": "dp-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                  }
                                }
                              },
                              {
                                "id": "dp-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#1F3D2B]"
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
                        "id": "dp-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:border-[#1F3D2B] hover:text-[#1F3D2B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#1F3D2B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "dp-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FAF6EF] via-white to-[#FAF6EF] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dp-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-post-k",
                    "type": "text",
                    "options": {
                      "text": "The tea notebook",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E8F0E2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B]"
                      }
                    }
                  },
                  {
                    "id": "dp-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6C665A]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-post-author",
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
                            "classes": "font-body font-bold text-[#1C1A15]"
                          }
                        }
                      },
                      {
                        "id": "dp-post-dot",
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
                        "id": "dp-post-date",
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
                    "id": "dp-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
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
            "id": "dp-post-body",
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
                "id": "dp-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#1C1A15] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#1C1A15] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#1F3D2B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#B5651D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16"
              }
            },
            "children": [
              {
                "id": "dp-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#1C1A15]"
                      }
                    }
                  },
                  {
                    "id": "dp-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FAF6EF] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#FAF6EF] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E3ECE1]"
                              }
                            }
                          },
                          {
                            "id": "dp-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1C1A15]"
                              }
                            }
                          },
                          {
                            "id": "dp-post-cmt-co",
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
                        "id": "dp-post-cmt-form",
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
                            "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,21,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1C1A15]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FAF6EF] px-4 py-3 text-sm text-[#1C1A15] placeholder:text-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#162E20] disabled:opacity-50"
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
            "id": "dp-post-more",
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
                "id": "dp-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More from the Notebook",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#1C1A15]"
                      }
                    }
                  },
                  {
                    "id": "dp-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,26,21,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FAF6EF]"
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
                            "id": "dp-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B]"
                                  }
                                }
                              },
                              {
                                "id": "dp-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
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
            "id": "dp-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full bg-[#FAF6EF] pb-16 pt-14 sm:pb-20 sm:pt-16 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-[radial-gradient(circle_at_50%_100%,#5E8B4E_10px,transparent_10.5px),radial-gradient(circle_at_50%_100%,#1F3D2B_12px,transparent_12.5px)] after:bg-[length:24px_14px,30px_16px] after:bg-[position:0_0,12px_6px] after:bg-repeat-x after:opacity-50 after:content-['']"
              }
            },
            "children": [
              {
                "id": "dp-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "dp-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B5651D]"
                      }
                    }
                  },
                  {
                    "id": "dp-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#1C1A15] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "dp-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage your tea subscription and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "dp-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-12"
              }
            },
            "children": [
              {
                "id": "dp-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1C1A15] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#B5651D]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#1F3D2B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#1F3D2B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#1F3D2B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "dp-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "dp-acc-3",
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
                                "id": "dp-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,21,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F3D2B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#162E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "dp-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(28,26,21,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F3D2B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#162E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "dp-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "dp-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FAF6EF] px-5 py-2.5 font-body text-sm font-semibold text-[#1C1A15] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1C1A15] !text-white shadow-md"
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
                                "id": "dp-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1F3D2B]/10 text-[#1F3D2B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "dp-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#1F3D2B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1F3D2B]/10 text-[#1F3D2B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#1F3D2B]/40 hover:bg-[#1F3D2B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1F3D2B]/10 text-[#1F3D2B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "dp-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1F3D2B]/10 text-[#1F3D2B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1F3D2B] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F3D2B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#162E20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3D2B]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "dp-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FAF6EF] via-white to-[#FAF6EF] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dp-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(28,26,21,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F0E2] text-[#1F3D2B]"
                          }
                        }
                      },
                      {
                        "id": "dp-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E3ECE1] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1F3D2B]"
                          }
                        }
                      },
                      {
                        "id": "dp-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You! The Kettle Is On",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1C1A15] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "dp-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re packing your teas fresh. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6C665A] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "dp-ty-steps",
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
                              "text": "Your teas are packed fresh and sealed",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#FAF6EF] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#1F3D2B]"
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
                        "id": "dp-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F3D2B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#162E20] w-full sm:w-auto"
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
                            "id": "dp-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1F3D2B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#1F3D2B] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1F3D2B] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
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
            "id": "dp-ty-promise",
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
                "id": "dp-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Garden-direct",
                          "description": "From Bangladeshi estates",
                          "icon": "IconMountain",
                          "iconSize": ""
                        },
                        {
                          "title": "Fresh flush",
                          "description": "Season on every pack",
                          "icon": "IconCalendar",
                          "iconSize": ""
                        },
                        {
                          "title": "Whole leaf",
                          "description": "No dust, no fillers",
                          "icon": "IconLeaf",
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
                        "classes": "font-heading text-xl text-[#1C1A15]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E3ECE1] text-[#1F3D2B]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-ty-promise-fb-ic",
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
                        "id": "dp-ty-promise-fb-t",
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
                        "id": "dp-ty-promise-fb-d",
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
            "id": "dp-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FAF6EF] via-white to-[#FAF6EF] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "dp-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#1F3D2B] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "dp-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF6EF] text-[#1C1A15]"
                      }
                    }
                  },
                  {
                    "id": "dp-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Has Gone Cold",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#1C1A15] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "dp-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or this flush may have sold out. Head back home and put the kettle on.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6C665A] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "dp-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F3D2B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(31,61,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#162E20] w-full sm:w-auto"
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
                        "id": "dp-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Teas",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1F3D2B] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#1F3D2B] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1F3D2B] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#1F3D2B] whitespace-nowrap group-hover:text-white"
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
            "id": "dp-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FAF6EF] py-16"
              }
            },
            "children": [
              {
                "id": "dp-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "dp-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#B5651D] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1C1A15]"
                          }
                        }
                      },
                      {
                        "id": "dp-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#1C1A15] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "dp-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                      }
                    },
                    "children": [
                      {
                        "id": "dp-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[22px] bg-white p-3 ring-1 ring-[#E4DCCB] transition-all duration-300 hover:-translate-y-1 hover:ring-[#1F3D2B]/40 hover:shadow-[0_22px_36px_-26px_rgba(28,26,21,0.5)]"
                          }
                        },
                        "children": [
                          {
                            "id": "dp-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[16px] bg-[#F1EADD] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-[#1F3D2B] before:transition-all before:duration-300 before:content-[''] group-hover:before:h-3 group-hover:before:bg-[#B5651D]"
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
                                    "id": "dp-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-5 z-[11] flex items-center gap-1 rounded-full bg-[#B5651D] px-2.5 py-1 font-body text-[11px] font-bold uppercase text-white"
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
                                "id": "dp-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "dp-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#B5651D]"
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
                                    "id": "dp-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-base font-semibold leading-snug text-[#1C1A15] transition-colors group-hover:text-[#1F3D2B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "dp-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E8B4E]"
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
                            "id": "dp-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-center justify-between gap-2 px-1"
                              }
                            },
                            "children": [
                              {
                                "id": "dp-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6C665A] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#1F3D2B]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#1F3D2B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#1F3D2B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "dp-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to cart",
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
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1F3D2B] text-white transition-colors hover:bg-[#B5651D]"
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
