/**
 * Template: Glowbie Beauty.
 *
 * A bright, playful-modern cosmetics store for young women: skincare,
 * makeup, lips, sunscreen, hair and body. Like the other complete templates
 * here it carries all sixteen page types - Header, Footer, Home, Shop,
 * Product, the six taxonomy archives, Blog Archive, Blog Single, Account,
 * Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to gb-, palette remapped, copy rewritten), so it
 * uses only blocks and option shapes already proven on the builder and the
 * storefront. Home is built fresh from the same block types. It is plain
 * data: edit freely.
 *
 * DESIGN
 *
 * Deliberately unlike the other templates: light pastel hero instead of a
 * dark one, left-aligned numbered section heads (01-10) with outline
 * numerals, hard 2px ink outlines with offset "pressed" shadows on buttons
 * and cards, rotated sticker badges, a ticker strip, blob-shaped category
 * images, and pastel fills that rotate lilac / peach / mint / butter across
 * tiles via `[&:nth-child(4n+k)]:` variants.
 *
 *   cherry  #E0245E  primary buttons, prices on sale, serif accents  #B81B4B hover  #FFE4EC tint
 *   violet  #6D3FD6  secondary, ingredients panel                    #5630B0 hover  #EFE8FF tint
 *   lime    #D4F25A  stickers, promo bar, CTA, ticker accents        #E3F78F
 *   pastels lilac #EDE4FF  peach #FFD9C7  mint #D9F5E8  butter #FFF1B8
 *   ink     #1B1320  text, outlines, shadows, ticker, values band, footer
 *   muted   #6B5F70  background #FFF8F5  cream #FFF1EA
 *
 * Fonts (template meta): Unbounded (wide, rounded display) for headings,
 * Instrument Sans for body and every small label (the build moves small
 * `font-heading` labels to `font-body`), and Instrument Serif italic for the
 * contrast lines under headings via `font-['Instrument_Serif']`. Outline
 * numerals use `[-webkit-text-stroke:1.5px_#1B1320] text-transparent`.
 *
 * HOME
 *
 *   Pastel gradient hero, "Your skin, / but glowier." with a product still
 *   life in a blob frame (public/templates/glowbie-hero.svg) and sticker
 *   badges - ticker strip - 01 categories, blob tiles (#categories) - 02 cult
 *   favourites (#bestsellers) - 03 routine builder: cleanse, treat,
 *   moisturise, protect (#routine) - Lip Lab banner with 8 swatches
 *   (#lip-lab) - 04 skincare and 05 makeup rows (#skincare, #makeup) - 06
 *   ingredients and values band (#ingredients) - 07 hair & body row
 *   (#hair-body) - 08 reviews - 09 beauty notes (#journal) - 10 FAQ (#faq) -
 *   lime "Join the Glow Club" CTA to /register (#join).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs the links and rows assume: skincare, makeup, lips,
 *     sunscreen, hair-body, cleansers, serums, moisturisers.
 *   - Contact details (+880 1700-000000, hello@example.com, hours), social
 *     URLs, the promo code GLOWUP, the 15% welcome offer and the free mini
 *     over ৳2,000.
 *   - "18,000+ reviews", 4.9, "24 shades", the ingredient chips and the six
 *     reviews are sample copy.
 *   - Cruelty-free / vegan / derm-tested claims, delivery times and the
 *     7-day return (unopened only): check every claim is true for what the
 *     shop sells.
 */

var template = [
  {
    "name": "Glowbie Beauty",
    "description": "Bright, playful-modern cosmetics store for young women in cherry, violet and lime over lilac and peach: oversized Unbounded type with Instrument Serif italics, sticker badges, a ticker strip, numbered section heads, blob category tiles, a routine builder, a Lip Lab swatch banner, an ingredients band, reviews, journal, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/glowbie.svg",
    "meta": {
      "fonts": [
        {
          "family": "Unbounded",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;600;700;800;900&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Instrument Sans",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Instrument Serif",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Unbounded",
        "body": "Instrument Sans"
      },
      "colors": {
        "primary": "#E0245E",
        "secondary": "#6D3FD6",
        "accent": "#D4F25A",
        "background": "#FFF8F5",
        "foreground": "#1B1320",
        "muted": "#6B5F70"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "gb-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "gb-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 border-b-2 border-[#1B1320] bg-[#D4F25A] px-4 py-2 text-center text-xs font-bold text-[#1B1320] md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "gb-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "✦ Free mini on orders over ৳2,000 ✦ 15% off your first order with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "gb-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "GLOWUP",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#1B1320] px-2.5 py-0.5 font-mono text-xs font-bold text-[#D4F25A]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-hdr-promo-btn",
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
                        "classes": "text-xs font-bold text-[#1B1320] underline decoration-2 underline-offset-4 hover:opacity-70"
                      }
                    }
                  }
                ]
              },
              {
                "id": "gb-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 text-xl rotate-[-8deg] items-center justify-center rounded-[42%_58%_55%_45%/50%_42%_58%_50%] border-2 border-[#1B1320] bg-[#D4F25A] leading-none text-[#1B1320] transition-transform group-hover:rotate-[8deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "glowbie",
                                  "src": "https://placehold.co/200x64?text=glowbie",
                                  "altText": "Glowbie Beauty",
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
                                    "classes": "font-heading text-2xl font-black lowercase tracking-tight text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "skin, but glowier",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#6D3FD6]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-hdr-menu",
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-base font-medium text-[#1B1320] transition-colors hover:text-[#E0245E]"
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
                            "id": "gb-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "Bestsellers",
                              "url": "/#bestsellers"
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
                            "id": "gb-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Skincare",
                              "url": "/categories/skincare"
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
                            "id": "gb-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Makeup",
                              "url": "/categories/makeup"
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
                            "id": "gb-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Lip Lab",
                              "url": "/#lip-lab"
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
                            "id": "gb-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Build a Routine",
                              "url": "/#routine",
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
                                "classes": "!text-[#E0245E] font-bold"
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
                        "id": "gb-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search serums, tints, SPF...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#FFF8F5] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#6D3FD6] focus-within:ring-2 focus-within:ring-[#6D3FD6]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1B1320] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#6B5F70]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#E0245E]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#E0245E]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#E0245E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B81B4B]"
                          }
                        }
                      },
                      {
                        "id": "gb-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF8F5] text-[#1B1320] transition-colors hover:bg-[#FFE4EC] hover:text-[#E0245E]"
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
                            "id": "gb-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#6D3FD6] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#5630B0]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#E0245E] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFF8F5] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#1B1320]"
                              },
                              "title-icon": {
                                "classes": "text-[#E0245E]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#E0245E] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#E0245E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B81B4B]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#E0245E] px-4 py-2 text-sm font-medium text-[#E0245E] transition-colors hover:bg-[#E0245E] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#E0245E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B81B4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "gb-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#FFF8F5] text-[#1B1320]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFF8F5] p-2 text-[#1B1320] transition-colors hover:bg-[#E0245E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "✦",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-lg rotate-[-8deg] items-center justify-center rounded-[42%_58%_55%_45%/50%_42%_58%_50%] border-2 border-[#1B1320] bg-[#D4F25A] leading-none text-[#1B1320] transition-transform group-hover:rotate-[8deg]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "gb-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "glowbie",
                                          "src": "https://placehold.co/200x64?text=glowbie",
                                          "altText": "Glowbie Beauty",
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
                                            "classes": "font-heading text-2xl font-black lowercase tracking-tight text-[#1B1320]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gb-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "skin, but glowier",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#6D3FD6]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "gb-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search serums, tints, SPF...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FFF8F5] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#6D3FD6] focus-within:ring-2 focus-within:ring-[#6D3FD6]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1B1320] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B5F70]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#E0245E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#E0245E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#E0245E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B81B4B]"
                                  }
                                }
                              },
                              {
                                "id": "gb-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#1B1320] transition-colors hover:text-[#E0245E]"
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
                                    "id": "gb-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bestsellers",
                                      "url": "/#bestsellers"
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
                                    "id": "gb-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Skincare",
                                      "url": "/categories/skincare"
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
                                    "id": "gb-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Makeup",
                                      "url": "/categories/makeup"
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
                                    "id": "gb-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Lip Lab",
                                      "url": "/#lip-lab"
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
                                    "id": "gb-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Build a Routine",
                                      "url": "/#routine",
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
                                        "classes": "!text-[#E0245E] font-bold"
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
            "id": "gb-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1B1320] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "gb-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "gb-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] border-2 border-[#D4F25A] bg-[#E0245E] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Join the Glow Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D4F25A] px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#1B1320] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-3deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 15% Off Your First Order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-black tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "gb-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for your welcome code, first dibs on new drops and a birthday treat.",
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
                        "id": "gb-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Claim 15% Off",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconSparkles",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D4F25A] px-8 py-4 shadow-[0_6px_0_0_#1B1320] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_0_#1B1320]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#1B1320]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "gb-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "gb-ftr-grid",
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
                        "id": "gb-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "✦",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-lg rotate-[-8deg] items-center justify-center rounded-[42%_58%_55%_45%/50%_42%_58%_50%] border-2 border-[#1B1320] bg-[#D4F25A] leading-none text-[#1B1320] transition-transform group-hover:rotate-[8deg]"
                                  }
                                }
                              },
                              {
                                "id": "gb-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "glowbie",
                                      "src": "https://placehold.co/200x64?text=glowbie",
                                      "altText": "Glowbie Beauty",
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
                                        "classes": "font-heading text-2xl font-black lowercase tracking-tight text-[#1B1320]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "gb-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Clean-formulated, cruelty-free skincare and makeup for real skin and real budgets. Made with love, tested with care.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "gb-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E0245E]"
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
                                "id": "gb-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E0245E]"
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
                                "id": "gb-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E0245E]"
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
                                "id": "gb-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E0245E]"
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
                        "id": "gb-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Skincare",
                                  "icon": "",
                                  "slug": "/categories/skincare"
                                },
                                {
                                  "text": "Makeup",
                                  "icon": "",
                                  "slug": "/categories/makeup"
                                },
                                {
                                  "text": "Lips",
                                  "icon": "",
                                  "slug": "/categories/lips"
                                },
                                {
                                  "text": "Sunscreen",
                                  "icon": "",
                                  "slug": "/categories/sunscreen"
                                },
                                {
                                  "text": "Hair & Body",
                                  "icon": "",
                                  "slug": "/categories/hair-body"
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
                                "classes": "transition-colors hover:text-[#D4F25A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D4F25A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ftr-ll-care",
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
                                  "text": "Build a Routine",
                                  "icon": "",
                                  "slug": "/#routine"
                                },
                                {
                                  "text": "Delivery & Returns",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Beauty Notes",
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
                                "classes": "transition-colors hover:text-[#D4F25A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#D4F25A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ftr-contact-h",
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
                            "id": "gb-ftr-address",
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
                                "value": "Every day: 10am - 10pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#D4F25A]"
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
                                "classes": "shrink-0 text-[#E0245E]"
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
                "id": "gb-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "gb-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Glowbie Beauty. All rights reserved. Cruelty-free, always.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "gb-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "Cash on Delivery · bKash · Nagad · Cards",
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
            "id": "gb-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7] pb-16 pt-10 lg:pb-24 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "gb-hero-blob-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#6D3FD6] opacity-20 blur-[90px]"
                  }
                },
                "children": []
              },
              {
                "id": "gb-hero-blob-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute -bottom-20 right-1/3 h-72 w-72 rounded-full bg-[#E0245E] opacity-15 blur-[90px]"
                  }
                },
                "children": []
              },
              {
                "id": "gb-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "gb-hero-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-6 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-hero-stickers",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hero-st-1",
                                "type": "text",
                                "options": {
                                  "text": "New drop",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D4F25A] px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#1B1320] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-4deg]"
                                  }
                                }
                              },
                              {
                                "id": "gb-hero-st-2",
                                "type": "text",
                                "options": {
                                  "text": "Dewy Skin Tint is here",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-hero-title",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Your skin,",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-black leading-[0.95] tracking-tight text-[#1B1320] sm:text-7xl xl:text-8xl"
                                  }
                                }
                              },
                              {
                                "id": "gb-hero-h1-tail",
                                "type": "text",
                                "options": {
                                  "text": "but glowier.",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-6xl leading-[0.95] text-[#E0245E] sm:text-8xl xl:text-9xl"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Skincare that actually works and makeup that feels like nothing. Clean-formulated, cruelty-free and made for real skin, real budgets and real 3 a.m. glow-ups.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-lg leading-relaxed text-[#6B5F70]"
                              }
                            }
                          },
                          {
                            "id": "gb-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop bestsellers",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#bestsellers",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E0245E] px-8 py-4 shadow-[0_6px_0_0_#1B1320] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_0_#1B1320] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "gb-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Build my routine",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#routine",
                                  "target": "",
                                  "icon": "IconSparkles",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#1B1320] bg-white px-8 py-[14px] transition-all hover:bg-[#1B1320] sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B1320] whitespace-nowrap group-hover:text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-hero-proof",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-4 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hero-avs",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-space-x-3 flex"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-hero-av-1",
                                    "type": "text",
                                    "options": {
                                      "text": "NR",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#D4F25A] font-body text-xs font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-hero-av-2",
                                    "type": "text",
                                    "options": {
                                      "text": "SA",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#FFD9C7] font-body text-xs font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-hero-av-3",
                                    "type": "text",
                                    "options": {
                                      "text": "TJ",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#EDE4FF] font-body text-xs font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-hero-av-4",
                                    "type": "text",
                                    "options": {
                                      "text": "+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#FFE4EC] font-body text-xs font-bold text-[#1B1320]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-hero-proof-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-hero-proof-v",
                                    "type": "text",
                                    "options": {
                                      "text": "★★★★★ 4.9",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-hero-proof-l",
                                    "type": "text",
                                    "options": {
                                      "text": "from 18,000+ glowing reviews",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                        "id": "gb-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-hero-blob",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "overflow-hidden rounded-[42%_58%_55%_45%/50%_42%_58%_50%] border-2 border-[#1B1320] bg-[#EDE4FF] shadow-[10px_10px_0_0_#1B1320]"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/glowbie-hero.svg",
                                  "altText": "A serum dropper bottle, a cherry lipstick, a peach cream jar and a compact on a lilac backdrop",
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
                          },
                          {
                            "id": "gb-hero-badge-1",
                            "type": "text",
                            "options": {
                              "text": "Cruelty free",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -left-2 top-8 inline-flex items-center gap-1.5 rounded-full bg-[#D4F25A] px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#1B1320] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-10deg] sm:-left-6"
                              }
                            }
                          },
                          {
                            "id": "gb-hero-badge-2",
                            "type": "text",
                            "options": {
                              "text": "Derm tested",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute -right-2 top-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#E0245E] px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[8deg] sm:-right-4"
                              }
                            }
                          },
                          {
                            "id": "gb-hero-badge-3",
                            "type": "text",
                            "options": {
                              "text": "Vegan ✦",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-6 left-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#6D3FD6] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-4deg]"
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
            "id": "gb-ticker",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full overflow-hidden border-y-2 border-[#1B1320] bg-[#1B1320] py-4"
              }
            },
            "children": [
              {
                "id": "gb-ticker-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-6 whitespace-nowrap"
                  }
                },
                "children": [
                  {
                    "id": "gb-ticker-0",
                    "type": "text",
                    "options": {
                      "text": "Cruelty-free  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-1",
                    "type": "text",
                    "options": {
                      "text": "Vegan formulas  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-2",
                    "type": "text",
                    "options": {
                      "text": "Derm-tested  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-3",
                    "type": "text",
                    "options": {
                      "text": "Fragrance-free options  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-4",
                    "type": "text",
                    "options": {
                      "text": "Recyclable packs  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-5",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-6",
                    "type": "text",
                    "options": {
                      "text": "Free mini over ৳2,000  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-7",
                    "type": "text",
                    "options": {
                      "text": "Cruelty-free  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-8",
                    "type": "text",
                    "options": {
                      "text": "Vegan formulas  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-9",
                    "type": "text",
                    "options": {
                      "text": "Derm-tested  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-10",
                    "type": "text",
                    "options": {
                      "text": "Fragrance-free options  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-11",
                    "type": "text",
                    "options": {
                      "text": "Recyclable packs  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-12",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-white"
                      }
                    }
                  },
                  {
                    "id": "gb-ticker-13",
                    "type": "text",
                    "options": {
                      "text": "Free mini over ৳2,000  ✦",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-lg font-bold uppercase tracking-tight text-[#D4F25A]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-cats-num",
                            "type": "text",
                            "options": {
                              "text": "01",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-cats-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-cats-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop by category",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-cats-tail",
                                "type": "text",
                                "options": {
                                  "text": "find your thing",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-cats-p",
                                "type": "text",
                                "options": {
                                  "text": "Skincare, makeup, hair, body and the little extras that make the routine fun.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-cats-slider",
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center gap-1 rounded-[2rem] border-2 border-[#1B1320] p-4 pb-5 text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)]:bg-[#EDE4FF] [&:nth-child(4n+2)]:bg-[#FFD9C7] [&:nth-child(4n+3)]:bg-[#D9F5E8] [&:nth-child(4n+4)]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-cats-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center gap-1 rounded-[2rem] border-2 border-[#1B1320] p-4 pb-5 text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)]:bg-[#EDE4FF] [&:nth-child(4n+2)]:bg-[#FFD9C7] [&:nth-child(4n+3)]:bg-[#D9F5E8] [&:nth-child(4n+4)]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-cats-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-4 w-full overflow-hidden rounded-[42%_58%_55%_45%/50%_42%_58%_50%] bg-white transition-all duration-500 group-hover:rounded-[58%_42%_45%_55%/42%_58%_42%_58%]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          },
                          {
                            "id": "gb-cats-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-lg font-bold text-[#1B1320]"
                              }
                            }
                          },
                          {
                            "id": "gb-cats-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs font-semibold text-[#6B5F70]"
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
            "id": "gb-row-best",
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
                "id": "gb-row-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-row-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-best-num",
                            "type": "text",
                            "options": {
                              "text": "02",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-row-best-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-best-h",
                                "type": "heading",
                                "options": {
                                  "text": "Cult favourites",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-best-tail",
                                "type": "text",
                                "options": {
                                  "text": "sold out twice",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-best-p",
                                "type": "text",
                                "options": {
                                  "text": "The products our community keeps re-buying. Restocked, for now.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-row-best-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-row-best-slider",
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-best-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-best-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-best-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-best-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-best-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-row-best-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-best-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-row-best-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-best-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-row-best-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-best-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-best-slider-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
            "id": "gb-routine",
            "type": "section",
            "options": {
              "anchor": "routine"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF1EA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-routine-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-routine-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-routine-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-routine-num",
                            "type": "text",
                            "options": {
                              "text": "03",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-routine-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-h",
                                "type": "heading",
                                "options": {
                                  "text": "Build your routine",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-tail",
                                "type": "text",
                                "options": {
                                  "text": "in four easy steps",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-p",
                                "type": "text",
                                "options": {
                                  "text": "Not sure where to start? Every great routine is just these four. Pick one product per step and you are glowing.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-routine-all",
                        "type": "button",
                        "options": {
                          "text": "Take me to the shop",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-routine-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-routine-s1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-[#EDE4FF] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-routine-s1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s1-n",
                                "type": "text",
                                "options": {
                                  "text": "1",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-6xl font-black leading-none [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconDroplet",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-routine-s1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s1-h",
                                "type": "heading",
                                "options": {
                                  "text": "Cleanse",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s1-tail",
                                "type": "text",
                                "options": {
                                  "text": "start fresh",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-2xl leading-none text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s1-p",
                                "type": "text",
                                "options": {
                                  "text": "Gel, balm or foam: melt off the day without stripping your skin.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-sm leading-relaxed text-[#1B1320]/70"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop step",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/cleansers",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/b mt-4 inline-flex cursor-pointer items-center gap-1.5 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B1320] transition-transform group-hover/b:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B1320] underline decoration-2 underline-offset-4"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-routine-s2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-[#FFD9C7] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-routine-s2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s2-n",
                                "type": "text",
                                "options": {
                                  "text": "2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-6xl font-black leading-none [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlask",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-routine-s2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s2-h",
                                "type": "heading",
                                "options": {
                                  "text": "Treat",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s2-tail",
                                "type": "text",
                                "options": {
                                  "text": "the magic step",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-2xl leading-none text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s2-p",
                                "type": "text",
                                "options": {
                                  "text": "Serums with niacinamide, vitamin C or retinal, targeted to your concern.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-sm leading-relaxed text-[#1B1320]/70"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop step",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/serums",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/b mt-4 inline-flex cursor-pointer items-center gap-1.5 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B1320] transition-transform group-hover/b:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B1320] underline decoration-2 underline-offset-4"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-routine-s3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-[#D9F5E8] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-routine-s3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s3-n",
                                "type": "text",
                                "options": {
                                  "text": "3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-6xl font-black leading-none [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBottle",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-routine-s3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s3-h",
                                "type": "heading",
                                "options": {
                                  "text": "Moisturise",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s3-tail",
                                "type": "text",
                                "options": {
                                  "text": "lock it in",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-2xl leading-none text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s3-p",
                                "type": "text",
                                "options": {
                                  "text": "Barrier-loving creams and gel creams for every skin type.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-sm leading-relaxed text-[#1B1320]/70"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop step",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/moisturisers",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/b mt-4 inline-flex cursor-pointer items-center gap-1.5 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B1320] transition-transform group-hover/b:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B1320] underline decoration-2 underline-offset-4"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-routine-s4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-[#FFF1B8] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-routine-s4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s4-n",
                                "type": "text",
                                "options": {
                                  "text": "4",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-6xl font-black leading-none [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSun",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-routine-s4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-routine-s4-h",
                                "type": "heading",
                                "options": {
                                  "text": "Protect",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s4-tail",
                                "type": "text",
                                "options": {
                                  "text": "non-negotiable",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-2xl leading-none text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s4-p",
                                "type": "text",
                                "options": {
                                  "text": "Featherlight SPF 50 that leaves no white cast. Every. Single. Day.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-sm leading-relaxed text-[#1B1320]/70"
                                  }
                                }
                              },
                              {
                                "id": "gb-routine-s4-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop step",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/sunscreen",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group/b mt-4 inline-flex cursor-pointer items-center gap-1.5 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#1B1320] transition-transform group-hover/b:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#1B1320] underline decoration-2 underline-offset-4"
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
            "id": "gb-lip",
            "type": "section",
            "options": {
              "anchor": "lip-lab"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-20"
              }
            },
            "children": [
              {
                "id": "gb-lip-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-lip-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] border-2 border-[#1B1320] bg-[#E0245E] shadow-[10px_10px_0_0_#1B1320] lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-lip-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-start gap-5 p-8 sm:p-12 lg:p-16"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-lip-st",
                            "type": "text",
                            "options": {
                              "text": "The Lip Lab",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-full bg-[#D4F25A] px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#1B1320] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-4deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-lip-h",
                            "type": "heading",
                            "options": {
                              "text": "Kiss-proof colour,",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "gb-lip-tail",
                            "type": "text",
                            "options": {
                              "text": "zero dryness.",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Instrument_Serif'] italic font-normal -mt-3 text-5xl leading-none text-[#D4F25A] sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "gb-lip-p",
                            "type": "text",
                            "options": {
                              "text": "Velvet-matte liquid lips and buttery tints in 24 shades, from your-lips-but-better to main-character red. Transfer-proof, shea-loaded and tested on every skin tone.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-base leading-relaxed text-white/85"
                              }
                            }
                          },
                          {
                            "id": "gb-lip-btn",
                            "type": "button",
                            "options": {
                              "text": "Find my shade",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/lips",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-4 shadow-[0_6px_0_0_#1B1320] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_0_#1B1320] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#E0245E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#E0245E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-lip-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col items-center justify-center gap-6 border-t-2 border-[#1B1320] bg-[#B81B4B] p-10 lg:border-l-2 lg:border-t-0"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-lip-num",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-baseline gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-lip-24",
                                "type": "text",
                                "options": {
                                  "text": "24",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-8xl font-black leading-none text-white sm:text-9xl"
                                  }
                                }
                              },
                              {
                                "id": "gb-lip-shades",
                                "type": "text",
                                "options": {
                                  "text": "shades",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-4xl text-[#D4F25A]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-lip-sws",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-4 gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-lip-sw-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#7A1033] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#B81B4B] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#E0245E] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#F2557D] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#E9846B] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-6",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#C9705A] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-7",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#9E4E3F] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "gb-lip-sw-8",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-12 w-12 rounded-full border-2 border-white bg-[#D99AA5] shadow-[0_4px_0_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 sm:h-14 sm:w-14"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "gb-lip-note",
                            "type": "text",
                            "options": {
                              "text": "Swatched on 12 skin tones. Find yours.",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-xs font-semibold uppercase tracking-wider text-white/70"
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
            "id": "gb-row-skin",
            "type": "section",
            "options": {
              "anchor": "skincare"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-row-skin-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-row-skin-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-skin-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-skin-num",
                            "type": "text",
                            "options": {
                              "text": "04",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-row-skin-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-skin-h",
                                "type": "heading",
                                "options": {
                                  "text": "Skincare",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-skin-tail",
                                "type": "text",
                                "options": {
                                  "text": "barrier first",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-skin-p",
                                "type": "text",
                                "options": {
                                  "text": "Gentle, science-backed formulas for oily, dry, combo and everything-at-once skin.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-row-skin-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/skincare",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-row-skin-slider",
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
                                  "skincare"
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-skin-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-skin-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-skin-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-skin-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-skin-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-row-skin-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-skin-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-row-skin-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-skin-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-row-skin-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-skin-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-skin-slider-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
            "id": "gb-row-makeup",
            "type": "section",
            "options": {
              "anchor": "makeup"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-row-makeup-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-row-makeup-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-makeup-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-makeup-num",
                            "type": "text",
                            "options": {
                              "text": "05",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-row-makeup-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-makeup-h",
                                "type": "heading",
                                "options": {
                                  "text": "Makeup",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-makeup-tail",
                                "type": "text",
                                "options": {
                                  "text": "skin, but better",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-makeup-p",
                                "type": "text",
                                "options": {
                                  "text": "Tints, blush, brows and lashes. Buildable, breathable, never cakey.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-row-makeup-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/makeup",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-row-makeup-slider",
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
                                  "makeup"
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-makeup-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-makeup-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-makeup-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-makeup-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-makeup-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-row-makeup-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-makeup-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-row-makeup-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-makeup-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-row-makeup-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-makeup-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-makeup-slider-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
            "id": "gb-values",
            "type": "section",
            "options": {
              "anchor": "ingredients"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#1B1320] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-values-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-values-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-values-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-values-num",
                            "type": "text",
                            "options": {
                              "text": "06",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#D4F25A] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-values-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-values-h",
                                "type": "heading",
                                "options": {
                                  "text": "What goes in",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-tail",
                                "type": "text",
                                "options": {
                                  "text": "and what never does",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#D4F25A]"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-p",
                                "type": "text",
                                "options": {
                                  "text": "Clinically loved actives at honest percentages. No mystery fillers, no animal testing, no nonsense.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-white/70"
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
                    "id": "gb-values-cols",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-values-chips",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-wrap content-center items-center justify-center gap-3 rounded-[2.5rem] bg-[#6D3FD6] p-8 sm:p-12"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-values-c1",
                            "type": "text",
                            "options": {
                              "text": "Niacinamide 10%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#D4F25A] px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[-4deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c2",
                            "type": "text",
                            "options": {
                              "text": "Hyaluronic acid",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-white px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[3deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c3",
                            "type": "text",
                            "options": {
                              "text": "Ceramides",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#FFD9C7] px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[-2deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c4",
                            "type": "text",
                            "options": {
                              "text": "Vitamin C 15%",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#FFF1B8] px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[5deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c5",
                            "type": "text",
                            "options": {
                              "text": "Centella asiatica",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#D9F5E8] px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[-6deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c6",
                            "type": "text",
                            "options": {
                              "text": "SPF 50 PA++++",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#E0245E] px-4 py-2 font-body text-sm font-bold text-white rotate-[2deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c7",
                            "type": "text",
                            "options": {
                              "text": "Squalane",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-white px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[-3deg]"
                              }
                            }
                          },
                          {
                            "id": "gb-values-c8",
                            "type": "text",
                            "options": {
                              "text": "Peptides",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full border-2 border-[#1B1320] bg-[#EDE4FF] px-4 py-2 font-body text-sm font-bold text-[#1B1320] rotate-[4deg]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-values-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-values-v1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 rounded-2xl border-2 border-white/15 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-values-v1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconPaw",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4F25A] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-v1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-values-v1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Cruelty-free, always",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-values-v1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Never tested on animals, at any stage.",
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
                            "id": "gb-values-v2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 rounded-2xl border-2 border-white/15 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-values-v2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLeaf",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4F25A] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-v2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-values-v2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Vegan formulas",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-values-v2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Most of our range is free from animal ingredients.",
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
                            "id": "gb-values-v3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 rounded-2xl border-2 border-white/15 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-values-v3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconFlask",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4F25A] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-v3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-values-v3-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Derm-tested",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-values-v3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Patch-tested for irritation on sensitive skin.",
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
                            "id": "gb-values-v4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 rounded-2xl border-2 border-white/15 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-values-v4-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconRecycle",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4F25A] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-values-v4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-values-v4-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lighter packaging",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-values-v4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Recyclable tubes, jars and shipping boxes.",
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
          },
          {
            "id": "gb-row-body",
            "type": "section",
            "options": {
              "anchor": "hair-body"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-row-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-row-body-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-body-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-body-num",
                            "type": "text",
                            "options": {
                              "text": "07",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-row-body-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-body-h",
                                "type": "heading",
                                "options": {
                                  "text": "Hair & Body",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-body-tail",
                                "type": "text",
                                "options": {
                                  "text": "head to toe",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-body-p",
                                "type": "text",
                                "options": {
                                  "text": "Scalp serums, body butters, mists and everything for the shower-to-bed glow.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-row-body-all",
                        "type": "button",
                        "options": {
                          "text": "Shop all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/hair-body",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-row-body-slider",
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
                                  "hair-body"
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-row-body-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-row-body-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-body-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-body-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-body-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-row-body-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-row-body-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-row-body-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-row-body-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-row-body-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-row-body-slider-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-row-body-slider-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
            "id": "gb-reviews",
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
                "id": "gb-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-reviews-num",
                            "type": "text",
                            "options": {
                              "text": "08",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-reviews-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "#GlowGang says",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-reviews-tail",
                                "type": "text",
                                "options": {
                                  "text": "and we blushed",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
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
                    "id": "gb-reviews-slider",
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
                        "classes": "!h-12 !w-12 !rounded-full !border-2 !border-[#1B1320] !bg-white !opacity-100 transition-colors hover:!bg-[#D4F25A] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#1B1320] disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#1B1320]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#E0245E]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#EDE4FF] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“The niacinamide serum cleared my texture in about three weeks. I genuinely did not believe it until my mum asked what I had changed.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "NR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nusaiba R.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Combination skin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
                        "id": "gb-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#FFD9C7] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“Finally a sunscreen that does not leave me looking like a ghost or an oil spill. It sits so well under makeup.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sadia A.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Oily, acne-prone",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
                        "id": "gb-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#D9F5E8] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“The barrier cream is like a hug for my face. No more flaky patches by lunchtime. Already on my second jar.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "TJ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tasnia J.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Dry skin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
                        "id": "gb-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#FFF1B8] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“I react to almost everything, but not this cleanser. Gentle, no tightness, and it actually removes my mascara.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "RK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Raisa K.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Sensitive skin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
                        "id": "gb-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#FFE4EC] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Bought the lip tint in Cherry Cola on a whim. Now I own four shades. It lasts through biryani, which is the real test.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "MH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mim H.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Normal skin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
                        "id": "gb-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[2rem] border-2 border-[#1B1320] bg-[#EFE8FF] p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“Fast delivery, cute packaging and a free mini. The skin tint gives that no-makeup glow everyone keeps asking about.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-medium leading-snug text-[#1B1320]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-[#1B1320]/10 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "FS",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1B1320] bg-white font-body text-sm font-bold text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Fariha S.",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified • Combination skin",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#1B1320]/60"
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
            "id": "gb-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF1EA] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "gb-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 sm:gap-6"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-journal-num",
                            "type": "text",
                            "options": {
                              "text": "09",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                              }
                            }
                          },
                          {
                            "id": "gb-journal-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-journal-h",
                                "type": "heading",
                                "options": {
                                  "text": "Beauty notes",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-journal-tail",
                                "type": "text",
                                "options": {
                                  "text": "from the lab",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-journal-p",
                                "type": "text",
                                "options": {
                                  "text": "Ingredient explainers, routine how-tos and honest answers to your skin questions.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "gb-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All stories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-[#1B1320] hover:bg-[#1B1320] px-5 py-2.5 transition-colors md:self-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-journal-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-journal-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[2rem] border-2 border-[#1B1320] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_0_0_#1B1320]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden border-b-2 border-[#1B1320] bg-[#EDE4FF]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "gb-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "self-start rounded-full bg-[#D4F25A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1B1320]"
                                  }
                                }
                              },
                              {
                                "id": "gb-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold leading-snug text-[#1B1320] transition-colors group-hover:text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read it",
                                  "readMoreIcon": "IconArrowUpRight",
                                  "readMoreIconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6B5F70]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1 font-body text-sm font-bold text-[#1B1320] underline decoration-2 underline-offset-4"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex transition-transform group-hover/rm:-translate-y-0.5 group-hover/rm:translate-x-0.5"
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
            "id": "gb-faq",
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
                "id": "gb-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "gb-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-5"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-start gap-4 sm:gap-6"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-faq-num",
                                "type": "text",
                                "options": {
                                  "text": "10",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-5xl font-black leading-none sm:text-7xl [-webkit-text-stroke:1.5px_#1B1320] text-transparent"
                                  }
                                }
                              },
                              {
                                "id": "gb-faq-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-faq-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Questions?",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-faq-tail",
                                    "type": "text",
                                    "options": {
                                      "text": "we have answers",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Instrument_Serif'] italic font-normal text-3xl leading-none sm:text-4xl text-[#E0245E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-faq-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Anything else, message us on WhatsApp. Real humans, fast replies.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 max-w-lg text-base leading-relaxed text-[#6B5F70]"
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
                    "id": "gb-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "How do I know what suits my skin type?",
                          "classes": ""
                        },
                        {
                          "label": "Are your products cruelty-free and vegan?",
                          "classes": ""
                        },
                        {
                          "label": "Can I use actives together, like vitamin C and niacinamide?",
                          "classes": ""
                        },
                        {
                          "label": "Are the products authentic and fresh?",
                          "classes": ""
                        },
                        {
                          "label": "Delivery, payment and returns?",
                          "classes": ""
                        }
                      ],
                      "multiple": false
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full lg:col-span-7"
                      },
                      "spacing": {
                        "classes": "p-0"
                      },
                      "accordion-items": {
                        "classes": "flex flex-col gap-3"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-2xl border-2 border-[#1B1320] bg-white px-6 py-5 font-body text-base font-bold text-[#1B1320] transition-colors hover:bg-[#EDE4FF]"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !bg-[#D4F25A]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#1B1320]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-2xl border-2 border-t-0 border-[#1B1320] bg-white px-6 pb-5 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Every product page lists the skin types and concerns it is made for. Still unsure? Message us with your skin type and routine and our team will suggest a starter set, free.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "All of our products are cruelty-free and never tested on animals. Most formulas are vegan, and each product page tells you clearly.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, they play nicely together. Introduce one new active at a time, patch-test first, and always follow with sunscreen in the morning.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Everything ships directly from us with batch and expiry dates printed on the pack. We never sell grey-market or near-expiry stock.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Cash on delivery is available nationwide: about 24 hours inside Dhaka, 48-72 hours elsewhere. bKash, Nagad and cards work too. Unopened, sealed products can be returned within 7 days; for hygiene, opened items cannot.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
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
            "id": "gb-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "gb-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center gap-4 overflow-hidden rounded-[2.5rem] border-2 border-[#1B1320] bg-[#D4F25A] px-6 py-16 text-center shadow-[10px_10px_0_0_#1B1320] sm:px-12"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-cta-blob",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-[42%_58%_55%_45%/50%_42%_58%_50%] bg-[#6D3FD6] opacity-90"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "gb-cta-blob-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#E0245E]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "gb-cta-st",
                        "type": "text",
                        "options": {
                          "text": "Members get more",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#1B1320] shadow-[0_6px_0_0_rgba(27,19,32,0.9)] rotate-[-3deg]"
                          }
                        }
                      },
                      {
                        "id": "gb-cta-h",
                        "type": "heading",
                        "options": {
                          "text": "Join the Glow Club",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading text-4xl font-black tracking-tight text-[#1B1320] sm:text-6xl"
                          }
                        }
                      },
                      {
                        "id": "gb-cta-tail",
                        "type": "text",
                        "options": {
                          "text": "and get 15% off, babe.",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-['Instrument_Serif'] italic font-normal text-4xl leading-none text-[#1B1320] sm:text-5xl"
                          }
                        }
                      },
                      {
                        "id": "gb-cta-p",
                        "type": "text",
                        "options": {
                          "text": "First dibs on drops, birthday treats, a free mini with every order over ৳2,000 and skin tips that actually make sense.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative max-w-lg text-base text-[#1B1320]/80"
                          }
                        }
                      },
                      {
                        "id": "gb-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join for free",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconSparkles",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E0245E] px-8 py-4 shadow-[0_6px_0_0_#1B1320] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_0_#1B1320] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "gb-cta-btn-2",
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
                                "classes": "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#1B1320] bg-white px-8 py-[14px] transition-all hover:bg-[#1B1320] sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#1B1320] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1B1320] whitespace-nowrap group-hover:text-white"
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
            "id": "gb-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Everything we make",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All Beauty",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Skincare, makeup, hair and body, newest first. Tap any product for ingredients, skin types and how to use it.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-shop-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-shop-grid-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
                        "id": "gb-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-shop-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y-2 border-[#1B1320] bg-[#EDE4FF] py-10"
              }
            },
            "children": [
              {
                "id": "gb-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cruelty-free",
                          "description": "Never tested on animals",
                          "icon": "IconPaw",
                          "iconSize": ""
                        },
                        {
                          "title": "Derm-tested",
                          "description": "Gentle on sensitive skin",
                          "icon": "IconFlask",
                          "iconSize": ""
                        },
                        {
                          "title": "Free mini",
                          "description": "On orders over ৳2,000",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "24h Dhaka, 48-72h nationwide",
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
                        "classes": "font-body text-base font-bold text-[#1B1320]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6B5F70]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-[#D4F25A] text-[#1B1320]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-shop-promise-fb-ic",
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
                        "id": "gb-shop-promise-fb-t",
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
                        "id": "gb-shop-promise-fb-d",
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
            "id": "gb-pd",
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
                "id": "gb-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-pd-grid",
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
                        "id": "gb-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#EFE8FF] via-white to-[#FFF1EA] p-4 shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1B1320]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1B1320]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#E0245E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-pd-cats",
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
                                "classes": "rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6] hover:bg-[#6D3FD6] hover:text-white"
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
                            "id": "gb-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#1B1320] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "gb-pd-rate",
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
                                "classes": "font-body font-bold text-[#1B1320]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "gb-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF today"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#E0245E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "gb-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B5F70]"
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
                            "id": "gb-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#1B1320]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#1B1320] transition-colors hover:border-[#6D3FD6] hover:bg-[#EFE8FF]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#6D3FD6] !bg-[#EFE8FF] !text-[#5630B0]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "gb-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out (again). Restock coming soon",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#E0245E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#6D3FD6]"
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
                            "id": "gb-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1B1320]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8F5]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8F5]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#E0245E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#B81B4B]"
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
                            "id": "gb-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Cruelty-free",
                                  "description": "Never tested on animals",
                                  "icon": "IconPaw",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free mini",
                                  "description": "Orders over ৳2,000",
                                  "icon": "IconGift",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on delivery",
                                  "description": "Nationwide",
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
                                "classes": "font-body text-base font-bold text-[#1B1320]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE8FF] text-[#6D3FD6]"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-perks-ic",
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
                                "id": "gb-pd-perks-t",
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
                                "id": "gb-pd-perks-d",
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
                            "id": "gb-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-sku",
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
                                    "classes": "font-semibold text-[#1B1320]"
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
                                "id": "gb-pd-brands",
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
                                    "classes": "font-semibold text-[#1B1320]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#E0245E]"
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
                                "id": "gb-pd-tags",
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
                                    "classes": "font-semibold text-[#1B1320]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#E0245E]"
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
            "id": "gb-pd-tabs-sec",
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
                "id": "gb-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(27,19,32,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Description",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Ingredients & Use",
                              "icon": "IconFlask"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8F5] px-5 py-2.5 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1B1320] !text-white shadow-md"
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
                            "id": "gb-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1B1320] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1B1320] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#E0245E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4F25A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconFlask",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Full ingredient list (INCI) and key actives are in the description above",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Patch-test on your inner arm 24 hours before first use",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Introduce one new active at a time; use SPF every morning with acids or retinoids",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Store below 30°C, away from direct sunlight; check the PAO symbol after opening",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#6D3FD6]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-ship-list",
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
                                      "text": "Unopened, sealed products can be returned within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#6D3FD6]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "gb-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8F5] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8F5] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "gb-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFE4EC]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gb-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#1B1320]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "gb-pd-reviews-rate",
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
                                        "id": "gb-pd-reviews-co",
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
                                    "id": "gb-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "Your skin type and how it worked for you",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review is glowing in our inbox."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(27,19,32,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#1B1320]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8F5] px-4 py-3 text-sm text-[#1B1320] placeholder:text-gray-400 focus:border-[#6D3FD6] focus:outline-none focus:ring-2 focus:ring-[#6D3FD6]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#E0245E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B81B4B] disabled:opacity-50"
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
            "id": "gb-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16"
              }
            },
            "children": [
              {
                "id": "gb-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Routine buddies",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFE4EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E0245E]"
                          }
                        }
                      },
                      {
                        "id": "gb-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Pairs Well With",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1B1320]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-pd-rel-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-pd-rel-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
            "id": "gb-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Categories",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFE4EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E0245E]"
                      }
                    }
                  },
                  {
                    "id": "gb-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop by Category",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Skincare, makeup, lips, sunscreen, hair and body. Pick a lane, or try them all.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#EFE8FF] transition-transform group-hover:rotate-6"
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
                            "id": "gb-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1B1320] transition-colors group-hover:text-[#E0245E]"
                              }
                            }
                          },
                          {
                            "id": "gb-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
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
                        "id": "gb-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFE4EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E0245E]"
                      }
                    }
                  },
                  {
                    "id": "gb-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gb-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#6D3FD6] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-cat1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-cat1-grid-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
                        "id": "gb-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D4F25A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1B1320]"
                      }
                    }
                  },
                  {
                    "id": "gb-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by concern and ingredient: acne, dryness, glow, niacinamide, vitamin C and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E0245E]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E0245E]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1B1320] group-hover:text-[#E0245E]"
                              }
                            }
                          },
                          {
                            "id": "gb-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF8F5] px-2 py-0.5 text-[10px] font-bold text-[#6B5F70]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "gb-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#D4F25A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1B1320]"
                      }
                    }
                  },
                  {
                    "id": "gb-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gb-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#6D3FD6] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-tag1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-tag1-grid-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
                        "id": "gb-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brands we love",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Our own lines and the cruelty-free brands we stock alongside them.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF8F5] p-3"
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
                            "id": "gb-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#1B1320] group-hover:text-[#E0245E]"
                              }
                            }
                          },
                          {
                            "id": "gb-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
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
                        "id": "gb-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "gb-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#6D3FD6] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-brand1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-brand1-grid-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
                        "id": "gb-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "From the lab",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Beauty Notes",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Ingredient explainers, routine how-tos and honest answers to your skin questions.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF1EA]"
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
                            "id": "gb-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                                  }
                                }
                              },
                              {
                                "id": "gb-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#1B1320] transition-colors group-hover:text-[#E0245E]"
                                  }
                                }
                              },
                              {
                                "id": "gb-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read it",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#E0245E]"
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
                        "id": "gb-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#1B1320] transition-colors hover:border-[#E0245E] hover:text-[#E0245E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E0245E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "gb-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1EA] via-white to-[#FFF8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gb-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-post-k",
                    "type": "text",
                    "options": {
                      "text": "Beauty Notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B5F70]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-post-author",
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
                            "classes": "font-body font-bold text-[#1B1320]"
                          }
                        }
                      },
                      {
                        "id": "gb-post-dot",
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
                        "id": "gb-post-date",
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
                    "id": "gb-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
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
            "id": "gb-post-body",
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
                "id": "gb-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1B1320] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1B1320] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#E0245E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4F25A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16"
              }
            },
            "children": [
              {
                "id": "gb-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1B1320]"
                      }
                    }
                  },
                  {
                    "id": "gb-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8F5] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#FFF8F5] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFE4EC]"
                              }
                            }
                          },
                          {
                            "id": "gb-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#1B1320]"
                              }
                            }
                          },
                          {
                            "id": "gb-post-cmt-co",
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
                        "id": "gb-post-cmt-form",
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
                            "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(27,19,32,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#1B1320]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8F5] px-4 py-3 text-sm text-[#1B1320] placeholder:text-gray-400 focus:border-[#6D3FD6] focus:outline-none focus:ring-2 focus:ring-[#6D3FD6]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#E0245E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B81B4B] disabled:opacity-50"
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
            "id": "gb-post-more",
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
                "id": "gb-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Beauty Notes",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1B1320]"
                      }
                    }
                  },
                  {
                    "id": "gb-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,19,32,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF1EA]"
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
                            "id": "gb-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                                  }
                                }
                              },
                              {
                                "id": "gb-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#1B1320] transition-colors group-hover:text-[#E0245E]"
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
            "id": "gb-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full py-14 sm:py-16 border-b-2 border-[#1B1320] bg-gradient-to-br from-[#EDE4FF] via-[#FFF8F5] to-[#FFD9C7]"
              }
            },
            "children": [
              {
                "id": "gb-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "gb-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Hey gorgeous",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EFE8FF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#6D3FD6]"
                      }
                    }
                  },
                  {
                    "id": "gb-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1B1320] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "gb-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage returns and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "gb-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-12"
              }
            },
            "children": [
              {
                "id": "gb-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1B1320] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#D4F25A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#E0245E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#E0245E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#E0245E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "gb-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "gb-acc-3",
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
                                "id": "gb-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(27,19,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E0245E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B81B4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "gb-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(27,19,32,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E0245E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B81B4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "gb-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "gb-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8F5] px-5 py-2.5 font-body text-sm font-semibold text-[#1B1320] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1B1320] !text-white shadow-md"
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
                                "id": "gb-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0245E]/10 text-[#E0245E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "gb-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#E0245E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gb-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0245E]/10 text-[#E0245E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gb-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#E0245E]/40 hover:bg-[#E0245E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0245E]/10 text-[#E0245E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "gb-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E0245E]/10 text-[#E0245E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E0245E] focus:outline-none focus:ring-2 focus:ring-[#E0245E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#E0245E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B81B4B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0245E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "gb-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1EA] via-white to-[#FFF8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gb-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(27,19,32,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EFE8FF] text-[#6D3FD6]"
                          }
                        }
                      },
                      {
                        "id": "gb-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFE4EC] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E0245E]"
                          }
                        }
                      },
                      {
                        "id": "gb-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Yay! Your Glow Is On Its Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1B1320] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "gb-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We are already packing your goodies. A confirmation is on its way, and you can follow the order from your account any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B5F70] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "gb-ty-steps",
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
                              "text": "Your goodies are packed (with a little surprise if you spent over ৳2,000)",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#FFF8F5] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#E0245E]"
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
                        "id": "gb-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E0245E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B81B4B] w-full sm:w-auto"
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
                            "id": "gb-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#6D3FD6] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#6D3FD6] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#6D3FD6] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#6D3FD6] whitespace-nowrap group-hover:text-white"
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
            "id": "gb-ty-promise",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y-2 border-[#1B1320] bg-[#EDE4FF] py-10"
              }
            },
            "children": [
              {
                "id": "gb-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Cruelty-free",
                          "description": "Never tested on animals",
                          "icon": "IconPaw",
                          "iconSize": ""
                        },
                        {
                          "title": "Derm-tested",
                          "description": "Gentle on sensitive skin",
                          "icon": "IconFlask",
                          "iconSize": ""
                        },
                        {
                          "title": "Free mini",
                          "description": "On orders over ৳2,000",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "24h Dhaka, 48-72h nationwide",
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
                        "classes": "font-body text-base font-bold text-[#1B1320]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6B5F70]"
                      },
                      "icon": {
                        "classes": "mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1B1320] bg-[#D4F25A] text-[#1B1320]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-ty-promise-fb-ic",
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
                        "id": "gb-ty-promise-fb-t",
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
                        "id": "gb-ty-promise-fb-d",
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
            "id": "gb-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF1EA] via-white to-[#FFF8F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "gb-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#E0245E] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "gb-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF1EA] text-[#1B1320]"
                      }
                    }
                  },
                  {
                    "id": "gb-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Oops, This Page Ghosted Us",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#1B1320] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "gb-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the product may have sold out. Head back home or browse everything in the shop.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B5F70] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "gb-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E0245E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(224,36,94,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B81B4B] w-full sm:w-auto"
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
                        "id": "gb-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Beauty",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#6D3FD6] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#6D3FD6] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#6D3FD6] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#6D3FD6] whitespace-nowrap group-hover:text-white"
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
            "id": "gb-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F5] py-16"
              }
            },
            "children": [
              {
                "id": "gb-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "gb-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#D4F25A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#1B1320]"
                          }
                        }
                      },
                      {
                        "id": "gb-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1B1320] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "gb-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                      }
                    },
                    "children": [
                      {
                        "id": "gb-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-[2rem] bg-white p-2.5 ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-[#1B1320] hover:shadow-[0_8px_0_0_#1B1320] [&:nth-child(4n+1)_img]:bg-[#EDE4FF] [&:nth-child(4n+2)_img]:bg-[#FFD9C7] [&:nth-child(4n+3)_img]:bg-[#D9F5E8] [&:nth-child(4n+4)_img]:bg-[#FFF1B8]"
                          }
                        },
                        "children": [
                          {
                            "id": "gb-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-[1.75rem] bg-[#EDE4FF]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute right-3 top-3 z-[2] flex rotate-[8deg] items-center gap-1 rounded-full bg-[#D4F25A] px-3 py-1.5 text-[11px] font-black uppercase text-[#1B1320] shadow-[0_3px_0_0_#1B1320]"
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
                                "id": "gb-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1 px-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "gb-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 text-xs"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0245E]"
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
                                    "id": "gb-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-base font-bold text-[#1B1320]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "gb-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 14,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6B5F70]"
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
                            "id": "gb-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 px-2 pb-2"
                              }
                            },
                            "children": [
                              {
                                "id": "gb-nf-grid-c-price",
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
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-bold text-[#1B1320]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E0245E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E0245E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "gb-nf-grid-c-add",
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
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full bg-[#1B1320] px-4 text-white transition-colors hover:bg-[#E0245E]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-bold whitespace-nowrap"
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
