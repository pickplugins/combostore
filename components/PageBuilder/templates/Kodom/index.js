/**
 * Template: Kodom Footwear.
 *
 * A bold shoe store styled like a shoebox (kodom is Bangla for "a step"):
 * kraft card with corrugated texture, end labels with style / colour / size
 * fields and barcodes, square corners and hard offset shadows. Sneakers,
 * formals, sandals and boots for men, women and kids. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to km-, palette remapped, copy
 * rewritten); the Header is rearranged and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * An ink promo bar, then a tilted red "K" stamp with the KODOM wordmark, a
 * numbered menu in display caps (each item's own `link` classes carry its
 * number, `before:content-['01']`, with a red underline that grows on hover),
 * search, account and cart - over a thin corrugated kraft rim (km-hdr-rim),
 * the edge of a shoebox.
 *
 * THE HERO
 *
 * A shoebox: ink lid, kraft body and a white end label (style, colour, upper,
 * an EU size run with the size highlighted, a CSS barcode), with the sneaker
 * (public/templates/kodom-hero.svg) bursting out of the top and a yellow
 * "New!" sticker. Beside it: headline, two buttons and a three-figure stat bar.
 *
 * DESIGN
 *
 *   ember red  #E4002B  primary: buttons, labels, sale     #B80023 hover  #FCE3E7 tint
 *   ink        #121212  text, borders, offset shadows      #2A2A2A
 *   kraft      #C8A27C  boxes, header rim                  #A8835E shade  #E9DCC8 tint
 *   yellow     #FFD23F  stickers, promise band, hovers
 *   paper #F3EEE6   muted #6B655C   line #DDD3C4
 *
 * Fonts (template meta): Big Shoulders Display (headings, in black caps),
 * Schibsted Grotesk (body), Space Mono via `font-['Space_Mono']` for labels,
 * prices' old values and box fields.
 *
 * Product cards: the shoe on paper, contained and multiplied so white-backed
 * product photos blend in, tilting on hover; a red square discount tag; the
 * name in bold; one mono excerpt line (use the excerpt for the colourway,
 * e.g. "Chalk / Ember"); the price in display caps; a black "Add" button.
 *
 * HOME (section heads are numbered 01-13 like box labels)
 *
 *   Shoebox hero - EU size run 36-46 (#sizes) - men / women / kids aisles
 *   with outlined giant words (#aisles) - new drops - categories as
 *   shoebox ends (#categories) - bestsellers (#bestsellers) - anatomy of a
 *   sneaker with numbered pins (#built) - sneakers - fit promise band
 *   (#promise) - formal & loafers - size guide with a foot-length chart
 *   (#size-guide) - sandals & slides - brands (#brands) - reviews - field
 *   notes (#journal) - FAQ (#faq) - club CTA (#club).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: men, women, kids, sneakers, formal, sandals (boots and
 *     loafers if you use them). Tag slugs: new-drop, bestseller, sale, and the
 *     size tags eu-36 ... eu-46. Brands are product_brand terms.
 *   - The anatomy pins sit on kodom-hero.svg; if you replace the art, move
 *     the pins (km-pin-1..5, left/top percentages).
 *   - The size chart is a general guide; replace it if your brands differ.
 *   - Contact details, promo code FIRSTSTEP, the 10% offer, the open-box
 *     try-on, free size exchanges, the club reward ("every fifth pair 20%
 *     off"), "120+ styles", "22,000+ customers" and the six reviews are
 *     sample copy.
 */

var template = [
  {
    "name": "Kodom Footwear",
    "description": "Bold shoebox-label shoe store on kraft and paper with ink black, ember red and sticker yellow; Big Shoulders Display caps, Schibsted Grotesk and Space Mono labels, square corners and hard offset shadows: a numbered-menu header over a corrugated kraft rim, a hero where the sneaker bursts out of a shoebox with its end label, an EU size run, men / women / kids aisles, new drops, shoebox-style categories, bestsellers, a sneaker anatomy with numbered pins, a fit promise, a foot-length size chart, sneakers, formal and sandal rows, brands, reviews, field notes, FAQ and a club CTA. All 16 pages.",
    "thumbnail": "/templates/kodom.svg",
    "meta": {
      "fonts": [
        {
          "family": "Big Shoulders Display",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Schibsted Grotesk",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Space Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Big Shoulders Display",
        "body": "Schibsted Grotesk"
      },
      "colors": {
        "primary": "#E4002B",
        "secondary": "#121212",
        "accent": "#FFD23F",
        "background": "#F3EEE6",
        "foreground": "#121212",
        "muted": "#6B655C"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "km-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b-2 border-[#121212] bg-white"
              }
            },
            "children": [
              {
                "id": "km-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#121212] px-4 py-2 text-center font-['Space_Mono'] text-[11px] uppercase tracking-[0.14em] text-white"
                  }
                },
                "children": [
                  {
                    "id": "km-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "km-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Try at your door, pay when they fit · 10% off your first pair:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "km-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "FIRSTSTEP",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "bg-[#E4002B] px-2 py-0.5 font-['Space_Mono'] text-[11px] font-bold text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Size guide",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#size-guide",
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
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase text-[#FFD23F] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "km-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[72px] items-center justify-between gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "km-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "km-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "K",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 text-3xl -rotate-6 items-center justify-center border-2 border-[#121212] bg-[#E4002B] font-heading font-black uppercase leading-none text-white shadow-[3px_3px_0_#121212] transition-transform group-hover:rotate-0"
                              }
                            }
                          },
                          {
                            "id": "km-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Kodom",
                                  "src": "https://placehold.co/200x64?text=Kodom",
                                  "altText": "Kodom Footwear",
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
                                    "classes": "font-heading font-black uppercase text-[34px] leading-[0.8] tracking-tight text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Footwear · Dhaka",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 block font-['Space_Mono'] text-[9px] font-bold uppercase leading-none tracking-[0.2em] text-[#6B655C]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "km-hdr-menu",
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
                            "classes": "flex items-center gap-6 xl:gap-8"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-sm border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "relative flex items-start gap-1 whitespace-nowrap font-heading text-xl font-extrabold uppercase leading-none tracking-wide text-[#121212] transition-colors hover:text-[#E4002B] before:font-['Space_Mono'] before:text-[9px] before:font-bold before:leading-none before:text-[#E4002B] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#E4002B] after:transition-all after:content-[''] hover:after:w-full"
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
                            "id": "km-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "New drops",
                              "url": "/tags/new-drop"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "before:content-['01'] "
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
                            "id": "km-hdr-menu-i2",
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
                                "classes": "before:content-['02'] "
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
                            "id": "km-hdr-menu-i3",
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
                                "classes": "before:content-['03'] "
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
                            "id": "km-hdr-menu-i4",
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
                                "classes": "before:content-['04'] "
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
                            "id": "km-hdr-menu-i5",
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
                                "classes": "before:content-['05'] "
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
                            "id": "km-hdr-menu-i6",
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
                                "classes": "before:content-['06'] "
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
                            "id": "km-hdr-menu-i7",
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
                                "classes": "before:content-['07'] !text-[#E4002B]"
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
                        "id": "km-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-hdr-search",
                            "type": "quickSearch",
                            "options": {
                              "placeholder": "Search shoes, brands...",
                              "iconPosition": "",
                              "icon": "IconSearch"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "hidden w-56 border-2 border-[#121212] bg-[#F3EEE6] py-1 pl-1 pr-3 transition-all focus-within:bg-white focus-within:shadow-[4px_4px_0_#121212] md:block xl:w-64"
                              },
                              "input-wrapper": {
                                "classes": "flex items-center gap-2"
                              },
                              "input-search": {
                                "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#6B655C]"
                              },
                              "filter-select": {
                                "classes": "min-w-[8rem] flex-1 rounded-sm border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15"
                              },
                              "result-title": {
                                "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#E4002B]"
                              },
                              "result-price": {
                                "classes": "font-semibold text-[#E4002B]"
                              },
                              "add-button": {
                                "classes": "inline-flex shrink-0 items-center gap-1 rounded-sm bg-[#E4002B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B80023]"
                              }
                            }
                          },
                          {
                            "id": "km-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-[#121212] bg-white text-[#121212] transition-colors hover:bg-[#FFD23F]"
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
                            "id": "km-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#121212] text-white shadow-[0_10px_25px_-5px_rgba(18,18,18,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#2A2A2A]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F3EEE6] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#121212]"
                              },
                              "title-icon": {
                                "classes": "text-[#E4002B]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#E4002B] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-sm bg-[#E4002B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B80023]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-sm border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-sm border border-[#E4002B] px-4 py-2 text-sm font-medium text-[#E4002B] transition-colors hover:bg-[#E4002B] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B80023] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "km-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-[#121212] bg-white text-[#121212]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F3EEE6] p-2 text-[#121212] transition-colors hover:bg-[#E4002B] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "km-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "K",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-2xl -rotate-6 items-center justify-center border-2 border-[#121212] bg-[#E4002B] font-heading font-black uppercase leading-none text-white shadow-[3px_3px_0_#121212] transition-transform group-hover:rotate-0"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "km-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Kodom",
                                          "src": "https://placehold.co/200x64?text=Kodom",
                                          "altText": "Kodom Footwear",
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
                                            "classes": "font-heading font-black uppercase text-[34px] leading-[0.8] tracking-tight text-[#121212]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "km-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Footwear · Dhaka",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-['Space_Mono'] text-[9px] font-bold uppercase leading-none tracking-[0.2em] text-[#6B655C]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "km-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search shoes...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F3EEE6] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#121212] focus-within:ring-2 focus-within:ring-[#121212]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B655C]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-sm border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#E4002B]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#E4002B]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-sm bg-[#E4002B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#B80023]"
                                  }
                                }
                              },
                              {
                                "id": "km-hdr-m-menu",
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
                                    "classes": "min-w-52 rounded-sm border border-gray-100 bg-white py-2 shadow-lg"
                                  },
                                  "menu-link": {
                                    "classes": "flex items-center gap-1.5 border-b border-[#DDD3C4] py-3 font-heading text-2xl font-extrabold uppercase text-[#121212] transition-colors hover:text-[#E4002B]"
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
                                    "id": "km-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "New drops",
                                      "url": "/tags/new-drop"
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
                                    "id": "km-hdr-m-menu-i2",
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
                                    "id": "km-hdr-m-menu-i3",
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
                                    "id": "km-hdr-m-menu-i4",
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
                                    "id": "km-hdr-m-menu-i5",
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
                                    "id": "km-hdr-m-menu-i6",
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
                                    "id": "km-hdr-m-menu-i7",
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
                                        "classes": "!text-[#E4002B]"
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
                "id": "km-hdr-rim",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "h-2 w-full border-t-2 border-[#121212] bg-[#C8A27C] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0_2px,transparent_2px_9px)]"
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
            "id": "km-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#121212] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "km-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "km-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden border-2 border-white bg-[#E4002B] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "km-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "km-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "The Kodom Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/70"
                              }
                            }
                          },
                          {
                            "id": "km-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Every fifth pair, 20% off",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-4xl leading-[0.9] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "km-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Save your size, get first dibs on new drops and a birthday voucher.",
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
                        "id": "km-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Join free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[#121212] bg-white px-7 py-4 shadow-[5px_5px_0_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#121212]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "km-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "km-ftr-grid",
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
                        "id": "km-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "K",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-2xl -rotate-6 items-center justify-center border-2 border-[#121212] bg-[#E4002B] font-heading font-black uppercase leading-none text-white shadow-[3px_3px_0_#121212] transition-transform group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "km-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Kodom",
                                      "src": "https://placehold.co/200x64?text=Kodom",
                                      "altText": "Kodom Footwear",
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
                                        "classes": "font-heading font-black uppercase text-[34px] leading-[0.8] tracking-tight text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Sneakers, formals, sandals and boots for the whole family, in sizes EU 36 to 46. Try them at your door, pay when they fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "km-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E4002B]"
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
                                "id": "km-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E4002B]"
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
                                "id": "km-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E4002B]"
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
                                "id": "km-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#E4002B]"
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
                        "id": "km-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
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
                                  "text": "Sneakers",
                                  "icon": "",
                                  "slug": "/categories/sneakers"
                                },
                                {
                                  "text": "Formal & Loafers",
                                  "icon": "",
                                  "slug": "/categories/formal"
                                },
                                {
                                  "text": "Sandals & Slides",
                                  "icon": "",
                                  "slug": "/categories/sandals"
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
                                "classes": "transition-colors hover:text-[#FFD23F]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD23F]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-ftr-ll-care",
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
                                  "text": "Exchanges & Delivery",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Field Notes",
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
                                "classes": "transition-colors hover:text-[#FFD23F]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD23F]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "km-ftr-contact-h",
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
                            "id": "km-ftr-address",
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
                                "value": "Every day, 10am - 9pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFD23F]"
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
                                "classes": "shrink-0 text-[#E4002B]"
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
                "id": "km-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "km-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Kodom Footwear Co. All rights reserved. One step at a time.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "km-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "km-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Cards",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Space_Mono'] text-[11px] uppercase tracking-widest"
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
            "id": "km-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#E9DCC8] pb-16 pt-12 lg:pb-24 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "km-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "km-hero-k-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-hero-k",
                                "type": "text",
                                "options": {
                                  "text": "SS26 · Drop 04",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "bg-[#121212] px-2.5 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-hero-k2",
                                "type": "text",
                                "options": {
                                  "text": "Now in store",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Every step, sorted.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-7xl leading-[0.85] tracking-tight text-[#121212] sm:text-8xl xl:text-[8.5rem]"
                              }
                            }
                          },
                          {
                            "id": "km-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Sneakers, formals, sandals and boots for men, women and kids, in sizes EU 36 to 46. Check them at your door, pay when they fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-lg leading-relaxed text-[#121212]/75"
                              }
                            }
                          },
                          {
                            "id": "km-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop new drops",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/tags/new-drop",
                                  "target": "",
                                  "icon": "IconArrowUpRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[#121212] bg-[#E4002B] px-7 py-4 shadow-[5px_5px_0_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#121212]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-white whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "km-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Find your size",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#size-guide",
                                  "target": "",
                                  "icon": "IconRulerMeasure",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[#121212] bg-white px-7 py-4 shadow-[5px_5px_0_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#121212]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#121212]"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid max-w-md grid-cols-3 border-y-2 border-[#121212]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "120+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-3xl leading-none text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-hero-stat-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "styles",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "km-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 border-l-2 border-[#121212] pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "36–46",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-3xl leading-none text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-hero-stat-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "EU sizes",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "km-hero-stat-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 py-3 border-l-2 border-[#121212] pl-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-hero-stat-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "7 days",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-3xl leading-none text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-hero-stat-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "size exchange",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative pt-10 lg:col-span-7 lg:pt-0"
                          }
                        },
                        "children": [
                          {
                            "id": "km-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative border-2 border-[#121212] bg-[#C8A27C] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0_2px,transparent_2px_9px)] shadow-[14px_14px_0_#121212]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-box-lid",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 items-center justify-end gap-4 border-b-2 border-[#121212] bg-[#121212] px-4 sm:pr-24"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-box-lid-a",
                                    "type": "text",
                                    "options": {
                                      "text": "KODOM / Footwear Co.",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white sm:block"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-box-lid-b",
                                    "type": "text",
                                    "options": {
                                      "text": "No. 04 — 2026",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "hidden font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 xl:block"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "km-box-body",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative grid grid-cols-1 gap-6 p-5 sm:grid-cols-12 sm:p-7"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-box-shoe",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative z-10 -mt-24 sm:col-span-7 sm:-mt-20"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "km-hero-img",
                                        "type": "image",
                                        "options": {
                                          "src": "/templates/kodom-hero.svg",
                                          "altText": "A chalk-white sneaker with an ember-red heel, black side panel and black sole",
                                          "link": "/tags/new-drop",
                                          "newTab": false
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative w-[115%] max-w-none sm:-ml-8 sm:w-[132%]"
                                          },
                                          "link": {
                                            "classes": "block"
                                          },
                                          "img": {
                                            "classes": "h-auto w-full -rotate-[8deg] drop-shadow-[0_24px_18px_rgba(18,18,18,0.35)] transition-transform duration-500 hover:-rotate-3"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "km-box-label",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex flex-col gap-2.5 self-end border-2 border-[#121212] bg-white p-4 sm:col-span-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "km-box-label-top",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center justify-between"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "km-box-label-brand",
                                            "type": "text",
                                            "options": {
                                              "text": "KODOM",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-heading font-black uppercase text-2xl leading-none text-[#121212]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-label-k",
                                            "type": "text",
                                            "options": {
                                              "text": "Runner 01",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "bg-[#E4002B] px-2 py-0.5 font-['Space_Mono'] text-[10px] font-bold uppercase text-white"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "km-box-f1",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline justify-between gap-3 border-b border-dashed border-[#121212]/30 pb-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "km-box-f1-k",
                                            "type": "text",
                                            "options": {
                                              "text": "Style",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-f1-v",
                                            "type": "text",
                                            "options": {
                                              "text": "KM-RN01",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase text-[#121212]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "km-box-f2",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline justify-between gap-3 border-b border-dashed border-[#121212]/30 pb-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "km-box-f2-k",
                                            "type": "text",
                                            "options": {
                                              "text": "Colour",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-f2-v",
                                            "type": "text",
                                            "options": {
                                              "text": "Chalk / Ember",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase text-[#121212]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "km-box-f3",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-baseline justify-between gap-3 border-b border-dashed border-[#121212]/30 pb-1.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "km-box-f3-k",
                                            "type": "text",
                                            "options": {
                                              "text": "Upper",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-f3-v",
                                            "type": "text",
                                            "options": {
                                              "text": "Knit mesh",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase text-[#121212]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "km-box-sizes-k",
                                        "type": "text",
                                        "options": {
                                          "text": "Size (EU)",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "km-box-sizes",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "grid grid-cols-6 border border-[#121212]"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "km-box-size-38",
                                            "type": "text",
                                            "options": {
                                              "text": "38",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold  text-[#121212]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-size-39",
                                            "type": "text",
                                            "options": {
                                              "text": "39",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold border-l border-[#121212] text-[#121212]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-size-40",
                                            "type": "text",
                                            "options": {
                                              "text": "40",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold border-l border-[#121212] text-[#121212]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-size-41",
                                            "type": "text",
                                            "options": {
                                              "text": "41",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold border-l border-[#121212] bg-[#121212] text-white"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-size-42",
                                            "type": "text",
                                            "options": {
                                              "text": "42",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold border-l border-[#121212] text-[#121212]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "km-box-size-43",
                                            "type": "text",
                                            "options": {
                                              "text": "43",
                                              "tag": "span"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "py-1 text-center font-['Space_Mono'] text-xs font-bold border-l border-[#121212] text-[#121212]"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "id": "km-box-barcode",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-1 h-10 w-full bg-[repeating-linear-gradient(90deg,#121212_0_2px,transparent_2px_4px,#121212_4px_5px,transparent_5px_8px,#121212_8px_11px,transparent_11px_13px)]"
                                          }
                                        },
                                        "children": []
                                      },
                                      {
                                        "id": "km-box-code",
                                        "type": "text",
                                        "options": {
                                          "text": "8 901234 567890",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-center font-['Space_Mono'] text-[10px] tracking-[0.3em] text-[#121212]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "km-box-print",
                                    "type": "text",
                                    "options": {
                                      "text": "↑↑ This side up · Handle with care",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute bottom-4 left-7 hidden font-['Space_Mono'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]/45 sm:block"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-box-sticker",
                                    "type": "text",
                                    "options": {
                                      "text": "New!",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "absolute -right-4 -top-4 z-20 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border-2 border-[#121212] bg-[#FFD23F] font-heading font-black uppercase text-2xl text-[#121212] sm:-top-16"
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
            "id": "km-sizes",
            "type": "section",
            "options": {
              "anchor": "sizes"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#121212] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "km-sizes-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "km-sizes-t",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col gap-2 lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "km-sizes-k",
                        "type": "text",
                        "options": {
                          "text": "Shop by size",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                          }
                        }
                      },
                      {
                        "id": "km-sizes-h",
                        "type": "heading",
                        "options": {
                          "text": "Your size, in stock.",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-black uppercase text-5xl leading-[0.9] text-white sm:text-6xl"
                          }
                        }
                      },
                      {
                        "id": "km-sizes-p",
                        "type": "text",
                        "options": {
                          "text": "Tap your EU size to see only what fits.",
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
                    "id": "km-sizes-run",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap gap-2 lg:col-span-8 lg:justify-end"
                      }
                    },
                    "children": [
                      {
                        "id": "km-size-36",
                        "type": "button",
                        "options": {
                          "text": "36",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-36",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-37",
                        "type": "button",
                        "options": {
                          "text": "37",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-37",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-38",
                        "type": "button",
                        "options": {
                          "text": "38",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-38",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-39",
                        "type": "button",
                        "options": {
                          "text": "39",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-39",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-40",
                        "type": "button",
                        "options": {
                          "text": "40",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-40",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-41",
                        "type": "button",
                        "options": {
                          "text": "41",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-41",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-42",
                        "type": "button",
                        "options": {
                          "text": "42",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-42",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-43",
                        "type": "button",
                        "options": {
                          "text": "43",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-43",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-44",
                        "type": "button",
                        "options": {
                          "text": "44",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-44",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-45",
                        "type": "button",
                        "options": {
                          "text": "45",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-45",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-46",
                        "type": "button",
                        "options": {
                          "text": "46",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eu-46",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 w-14 cursor-pointer items-center justify-center border-2 border-white/25 transition-all hover:-translate-y-1 hover:border-[#E4002B] hover:bg-[#E4002B] sm:h-16 sm:w-16"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-heading font-black uppercase text-2xl text-white sm:text-3xl"
                          }
                        }
                      },
                      {
                        "id": "km-size-guide",
                        "type": "button",
                        "options": {
                          "text": "Size guide",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#size-guide",
                          "target": "",
                          "icon": "IconRulerMeasure",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex h-14 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-white/40 px-4 transition-colors hover:border-white sm:h-16"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-widest text-white whitespace-nowrap"
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
            "id": "km-aisles",
            "type": "section",
            "options": {
              "anchor": "aisles"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-aisles-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-aisles-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-aisles-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-aisles-label",
                            "type": "text",
                            "options": {
                              "text": "01 / Aisles",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-aisles-h",
                            "type": "heading",
                            "options": {
                              "text": "Who’s it for?",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-aisles-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "km-aisle-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden border-2 border-[#121212] bg-[#121212] p-6 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-aisle-1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-1-no",
                                "type": "text",
                                "options": {
                                  "text": "Aisle 01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/60"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowUpRight",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-aisle-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Men",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-7xl leading-[0.8] tracking-tight text-transparent [-webkit-text-stroke:2px_#FFFFFF] transition-colors duration-300 group-hover:text-white xl:text-8xl"
                              }
                            }
                          },
                          {
                            "id": "km-aisle-1-b",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Sneakers, formals, loafers & sandals",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/75"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop men",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/men",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#121212] px-4 py-2.5 transition-colors"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "km-aisle-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden border-2 border-[#121212] bg-[#E4002B] p-6 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-aisle-2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-2-no",
                                "type": "text",
                                "options": {
                                  "text": "Aisle 02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/60"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowUpRight",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-aisle-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Women",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-7xl leading-[0.8] tracking-tight text-transparent [-webkit-text-stroke:2px_#FFFFFF] transition-colors duration-300 group-hover:text-white xl:text-8xl"
                              }
                            }
                          },
                          {
                            "id": "km-aisle-2-b",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Flats, heels, sneakers & sandals",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-white/75"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop women",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/women",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#121212] px-4 py-2.5 transition-colors"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "km-aisle-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[320px] flex-col justify-between overflow-hidden border-2 border-[#121212] bg-[#FFD23F] p-6 transition-transform duration-300 hover:-translate-y-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-aisle-3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-3-no",
                                "type": "text",
                                "options": {
                                  "text": "Aisle 03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#121212]/60"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-3-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconArrowUpRight",
                                  "size": 28,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-aisle-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Kids",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-7xl leading-[0.8] tracking-tight text-transparent [-webkit-text-stroke:2px_#121212] transition-colors duration-300 group-hover:text-[#121212] xl:text-8xl"
                              }
                            }
                          },
                          {
                            "id": "km-aisle-3-b",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-aisle-3-p",
                                "type": "text",
                                "options": {
                                  "text": "School shoes, sneakers & sandals",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#121212]/75"
                                  }
                                }
                              },
                              {
                                "id": "km-aisle-3-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop kids",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/kids",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex w-fit cursor-pointer items-center gap-2 border-2 border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white px-4 py-2.5 transition-colors"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
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
            "id": "km-row-new-drops",
            "type": "section",
            "options": {
              "anchor": "new-drops"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-row-new-drops-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-row-new-drops-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-new-drops-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-new-drops-label",
                            "type": "text",
                            "options": {
                              "text": "02 / Just dropped",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-row-new-drops-h",
                            "type": "heading",
                            "options": {
                              "text": "New drops",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-row-new-drops-sub",
                            "type": "text",
                            "options": {
                              "text": "Fresh pairs land every Thursday.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-row-new-drops-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new-drop",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-row-new-drops-slider",
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
                                  "new-drop"
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
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-new-drops-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-new-drops-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-new-drops-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-new-drops-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-new-drops-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-row-new-drops-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-new-drops-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-row-new-drops-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-new-drops-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-row-new-drops-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-new-drops-slider-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-row-new-drops-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cats-label",
                            "type": "text",
                            "options": {
                              "text": "03 / Stockroom",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Shop by style",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-cats-sub",
                            "type": "text",
                            "options": {
                              "text": "Every box on our shelves, sorted by style.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-cats-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col border-2 border-[#121212] bg-[#C8A27C] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0_2px,transparent_2px_9px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-cats-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex flex-col border-2 border-[#121212] bg-[#C8A27C] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0_2px,transparent_2px_9px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative m-3 mb-0 block overflow-hidden border-2 border-[#121212] bg-white"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                              }
                            }
                          },
                          {
                            "id": "km-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-3 pt-3 font-heading font-black uppercase text-2xl leading-none text-[#121212] transition-colors group-hover:text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-3 pb-3 pt-1 font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-[#121212]/70"
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
            "id": "km-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-best-label",
                            "type": "text",
                            "options": {
                              "text": "04 / Most worn",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Bestsellers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-best-sub",
                            "type": "text",
                            "options": {
                              "text": "The pairs Dhaka keeps coming back for.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-best-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-best-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-anatomy",
            "type": "section",
            "options": {
              "anchor": "built"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#121212] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-anatomy-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-anatomy-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-white pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-anatomy-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-anatomy-label",
                            "type": "text",
                            "options": {
                              "text": "05 / Anatomy of a pair",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/60"
                              }
                            }
                          },
                          {
                            "id": "km-anatomy-h",
                            "type": "heading",
                            "options": {
                              "text": "Built for Dhaka streets",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-white"
                              }
                            }
                          },
                          {
                            "id": "km-anatomy-sub",
                            "type": "text",
                            "options": {
                              "text": "What to look for in a shoe that lasts. Every pair we stock is checked against it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/65"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-anatomy-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "km-anatomy-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-anatomy-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/kodom-hero.svg",
                              "altText": "Side view of a sneaker with its parts numbered",
                              "link": "",
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
                                "classes": "h-auto w-full"
                              }
                            }
                          },
                          {
                            "id": "km-pin-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[31%] top-[33%] z-10 -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pin-1-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4002B] opacity-50"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "km-pin-1-n",
                                "type": "text",
                                "options": {
                                  "text": "1",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] font-['Space_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-pin-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[69%] top-[61%] z-10 -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pin-2-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4002B] opacity-50"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "km-pin-2-n",
                                "type": "text",
                                "options": {
                                  "text": "2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] font-['Space_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-pin-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[16%] top-[56%] z-10 -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pin-3-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4002B] opacity-50"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "km-pin-3-n",
                                "type": "text",
                                "options": {
                                  "text": "3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] font-['Space_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-pin-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[52%] top-[76%] z-10 -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pin-4-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4002B] opacity-50"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "km-pin-4-n",
                                "type": "text",
                                "options": {
                                  "text": "4",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] font-['Space_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-pin-5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[73%] top-[84%] z-10 -translate-x-1/2 -translate-y-1/2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pin-5-ping",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-0 animate-ping rounded-full bg-[#E4002B] opacity-50"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "km-pin-5-n",
                                "type": "text",
                                "options": {
                                  "text": "5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E4002B] font-['Space_Mono'] text-xs font-bold text-white"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "km-anatomy-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "km-part-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 border-t border-white/15 py-4 "
                              }
                            },
                            "children": [
                              {
                                "id": "km-part-1-n",
                                "type": "text",
                                "options": {
                                  "text": "01",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-part-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-part-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Padded collar",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-2xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-part-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Soft around the ankle, no rubbing on day one.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/60"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-part-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 border-t border-white/15 py-4 "
                              }
                            },
                            "children": [
                              {
                                "id": "km-part-2-n",
                                "type": "text",
                                "options": {
                                  "text": "02",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-part-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-part-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Breathable knit",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-2xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-part-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Air moves through, so feet stay cool in the heat.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/60"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-part-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 border-t border-white/15 py-4 "
                              }
                            },
                            "children": [
                              {
                                "id": "km-part-3-n",
                                "type": "text",
                                "options": {
                                  "text": "03",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-part-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-part-3-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Firm heel counter",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-2xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-part-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Holds your heel in place, keeps the shape for years.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/60"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-part-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 border-t border-white/15 py-4 "
                              }
                            },
                            "children": [
                              {
                                "id": "km-part-4-n",
                                "type": "text",
                                "options": {
                                  "text": "04",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-part-4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-part-4-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Cushioned midsole",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-2xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-part-4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Light foam that takes the sting out of long walks.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/60"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-part-5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4 border-t border-white/15 py-4 border-b"
                              }
                            },
                            "children": [
                              {
                                "id": "km-part-5-n",
                                "type": "text",
                                "options": {
                                  "text": "05",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-sm font-bold text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-part-5-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-part-5-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Grip rubber outsole",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-black uppercase text-2xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-part-5-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Stitched-on, wet-road grip for monsoon season.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/60"
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
            "id": "km-row-sneakers",
            "type": "section",
            "options": {
              "anchor": "sneakers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-row-sneakers-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-row-sneakers-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-sneakers-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-sneakers-label",
                            "type": "text",
                            "options": {
                              "text": "06 / Everyday kicks",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-row-sneakers-h",
                            "type": "heading",
                            "options": {
                              "text": "Sneakers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-row-sneakers-sub",
                            "type": "text",
                            "options": {
                              "text": "Runners, court classics and canvas low-tops.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-row-sneakers-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/sneakers",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-row-sneakers-slider",
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
                                  "sneakers"
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
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-sneakers-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-sneakers-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-sneakers-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-sneakers-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-sneakers-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-row-sneakers-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-sneakers-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-row-sneakers-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-sneakers-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-row-sneakers-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-sneakers-slider-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-row-sneakers-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-promise",
            "type": "section",
            "options": {
              "anchor": "promise"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-y-2 border-[#121212] bg-[#FFD23F]"
              }
            },
            "children": [
              {
                "id": "km-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  }
                },
                "children": [
                  {
                    "id": "km-promise-1",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-start gap-4 py-8    "
                      }
                    },
                    "children": [
                      {
                        "id": "km-promise-1-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconPackage",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#121212] bg-white text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-promise-1-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-promise-1-h",
                            "type": "heading",
                            "options": {
                              "text": "Open-box check",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-2xl leading-none text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-promise-1-p",
                            "type": "text",
                            "options": {
                              "text": "Try them on at your door. Pay only if they fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#121212]/75"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-promise-2",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-start gap-4 py-8 border-t-2 border-[#121212] sm:border-t-0 lg:border-l-2 lg:pl-6   sm:border-l-2 sm:pl-6"
                      }
                    },
                    "children": [
                      {
                        "id": "km-promise-2-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconArrowsExchange",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#121212] bg-white text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-promise-2-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-promise-2-h",
                            "type": "heading",
                            "options": {
                              "text": "Free size exchange",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-2xl leading-none text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-promise-2-p",
                            "type": "text",
                            "options": {
                              "text": "Wrong size? Swap it within 7 days, free inside Dhaka.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#121212]/75"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-promise-3",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-start gap-4 py-8 border-t-2 border-[#121212] sm:border-t-0 lg:border-l-2 lg:pl-6 sm:border-t-2 lg:border-t-0  "
                      }
                    },
                    "children": [
                      {
                        "id": "km-promise-3-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconShieldCheck",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#121212] bg-white text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-promise-3-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-promise-3-h",
                            "type": "heading",
                            "options": {
                              "text": "Real materials",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-2xl leading-none text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-promise-3-p",
                            "type": "text",
                            "options": {
                              "text": "Leather is labelled leather. No surprises, ever.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#121212]/75"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-promise-4",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex items-start gap-4 py-8 border-t-2 border-[#121212] sm:border-t-0 lg:border-l-2 lg:pl-6  sm:border-l-2 sm:border-t-2 sm:pl-6 lg:border-t-0 "
                      }
                    },
                    "children": [
                      {
                        "id": "km-promise-4-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconTruckDelivery",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#121212] bg-white text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-promise-4-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-1"
                          }
                        },
                        "children": [
                          {
                            "id": "km-promise-4-h",
                            "type": "heading",
                            "options": {
                              "text": "Fast delivery",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-2xl leading-none text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-promise-4-p",
                            "type": "text",
                            "options": {
                              "text": "24–48 hours in Dhaka, 2–4 days nationwide.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-[#121212]/75"
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
            "id": "km-row-formal",
            "type": "section",
            "options": {
              "anchor": "formal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-row-formal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-row-formal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-formal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-formal-label",
                            "type": "text",
                            "options": {
                              "text": "07 / Office & occasions",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-row-formal-h",
                            "type": "heading",
                            "options": {
                              "text": "Formal & loafers",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-row-formal-sub",
                            "type": "text",
                            "options": {
                              "text": "Oxfords, derbies and loafers in real leather.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-row-formal-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/formal",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-row-formal-slider",
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
                                  "formal"
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
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-formal-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-formal-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-formal-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-formal-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-formal-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-row-formal-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-formal-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-row-formal-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-formal-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-row-formal-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-formal-slider-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-row-formal-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-size",
            "type": "section",
            "options": {
              "anchor": "size-guide"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-size-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-size-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-size-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-size-label",
                            "type": "text",
                            "options": {
                              "text": "08 / Fit room",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-size-h",
                            "type": "heading",
                            "options": {
                              "text": "Size guide",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-size-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-10 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "km-size-steps",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-5 lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "km-step-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-step-1-n",
                                "type": "text",
                                "options": {
                                  "text": "1",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-step-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-step-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Stand on paper",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-step-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Heel against a wall, in the socks you’ll wear.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B655C]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-step-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-step-2-n",
                                "type": "text",
                                "options": {
                                  "text": "2",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-step-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-step-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mark your longest toe",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-step-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Measure wall to mark, in centimetres.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B655C]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-step-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-step-3-n",
                                "type": "text",
                                "options": {
                                  "text": "3",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-xl text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-step-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-step-3-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Match it below",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-base font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-step-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Between two sizes? Take the bigger one.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B655C]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "km-size-note",
                            "type": "text",
                            "options": {
                              "text": "A general guide: some brands run small or large, so check the size chart on each product too.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "border-l-4 border-[#E4002B] pl-4 text-sm text-[#6B655C]"
                              }
                            }
                          },
                          {
                            "id": "km-size-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-btn",
                                "type": "button",
                                "options": {
                                  "text": "Still unsure? Ask us",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#faq",
                                  "target": "",
                                  "icon": "IconMessageCircle",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[#121212] bg-white px-7 py-4 shadow-[5px_5px_0_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#121212]"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#121212]"
                                  },
                                  "label": {
                                    "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "km-size-table",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "border-2 border-[#121212] lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "km-size-th",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center bg-[#121212] px-4 py-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-th-1",
                                "type": "text",
                                "options": {
                                  "text": "Foot (cm)",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-size-th-2",
                                "type": "text",
                                "options": {
                                  "text": "EU",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-th-3",
                                "type": "text",
                                "options": {
                                  "text": "UK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-size-th-4",
                                "type": "text",
                                "options": {
                                  "text": "US men",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-size-th-5",
                                "type": "text",
                                "options": {
                                  "text": "US women",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] font-bold uppercase tracking-widest text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r1-1",
                                "type": "text",
                                "options": {
                                  "text": "23.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r1-2",
                                "type": "text",
                                "options": {
                                  "text": "36",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r1-3",
                                "type": "text",
                                "options": {
                                  "text": "3.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r1-4",
                                "type": "text",
                                "options": {
                                  "text": "4.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r1-5",
                                "type": "text",
                                "options": {
                                  "text": "6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-white transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r2-1",
                                "type": "text",
                                "options": {
                                  "text": "23.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r2-2",
                                "type": "text",
                                "options": {
                                  "text": "37",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r2-3",
                                "type": "text",
                                "options": {
                                  "text": "4",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r2-4",
                                "type": "text",
                                "options": {
                                  "text": "5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r2-5",
                                "type": "text",
                                "options": {
                                  "text": "6.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r3-1",
                                "type": "text",
                                "options": {
                                  "text": "24.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r3-2",
                                "type": "text",
                                "options": {
                                  "text": "38",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r3-3",
                                "type": "text",
                                "options": {
                                  "text": "5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r3-4",
                                "type": "text",
                                "options": {
                                  "text": "6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r3-5",
                                "type": "text",
                                "options": {
                                  "text": "7.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-white transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r4-1",
                                "type": "text",
                                "options": {
                                  "text": "25.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r4-2",
                                "type": "text",
                                "options": {
                                  "text": "39",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r4-3",
                                "type": "text",
                                "options": {
                                  "text": "6",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r4-4",
                                "type": "text",
                                "options": {
                                  "text": "7",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r4-5",
                                "type": "text",
                                "options": {
                                  "text": "8.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r5-1",
                                "type": "text",
                                "options": {
                                  "text": "25.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r5-2",
                                "type": "text",
                                "options": {
                                  "text": "40",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r5-3",
                                "type": "text",
                                "options": {
                                  "text": "6.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r5-4",
                                "type": "text",
                                "options": {
                                  "text": "7.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r5-5",
                                "type": "text",
                                "options": {
                                  "text": "9",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r6",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-white transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r6-1",
                                "type": "text",
                                "options": {
                                  "text": "26.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r6-2",
                                "type": "text",
                                "options": {
                                  "text": "41",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r6-3",
                                "type": "text",
                                "options": {
                                  "text": "7.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r6-4",
                                "type": "text",
                                "options": {
                                  "text": "8.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r6-5",
                                "type": "text",
                                "options": {
                                  "text": "10",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r7",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r7-1",
                                "type": "text",
                                "options": {
                                  "text": "27.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r7-2",
                                "type": "text",
                                "options": {
                                  "text": "42",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r7-3",
                                "type": "text",
                                "options": {
                                  "text": "8",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r7-4",
                                "type": "text",
                                "options": {
                                  "text": "9",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r7-5",
                                "type": "text",
                                "options": {
                                  "text": "10.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r8",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-white transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r8-1",
                                "type": "text",
                                "options": {
                                  "text": "27.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r8-2",
                                "type": "text",
                                "options": {
                                  "text": "43",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r8-3",
                                "type": "text",
                                "options": {
                                  "text": "9",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r8-4",
                                "type": "text",
                                "options": {
                                  "text": "10",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r8-5",
                                "type": "text",
                                "options": {
                                  "text": "11.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r9",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r9-1",
                                "type": "text",
                                "options": {
                                  "text": "28.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r9-2",
                                "type": "text",
                                "options": {
                                  "text": "44",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r9-3",
                                "type": "text",
                                "options": {
                                  "text": "9.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r9-4",
                                "type": "text",
                                "options": {
                                  "text": "10.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r9-5",
                                "type": "text",
                                "options": {
                                  "text": "12",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r10",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-white transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r10-1",
                                "type": "text",
                                "options": {
                                  "text": "29.0",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r10-2",
                                "type": "text",
                                "options": {
                                  "text": "45",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r10-3",
                                "type": "text",
                                "options": {
                                  "text": "10.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r10-4",
                                "type": "text",
                                "options": {
                                  "text": "11.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r10-5",
                                "type": "text",
                                "options": {
                                  "text": "13",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-size-r11",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "grid grid-cols-5 items-center px-4 py-2 bg-[#F3EEE6] transition-colors hover:bg-[#FFD23F]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-size-r11-1",
                                "type": "text",
                                "options": {
                                  "text": "29.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r11-2",
                                "type": "text",
                                "options": {
                                  "text": "46",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r11-3",
                                "type": "text",
                                "options": {
                                  "text": "11",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r11-4",
                                "type": "text",
                                "options": {
                                  "text": "12",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-size-r11-5",
                                "type": "text",
                                "options": {
                                  "text": "13.5",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-xs text-[#121212]"
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
            "id": "km-row-sandals",
            "type": "section",
            "options": {
              "anchor": "sandals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-row-sandals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-row-sandals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-sandals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-sandals-label",
                            "type": "text",
                            "options": {
                              "text": "09 / Summer pairs",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-row-sandals-h",
                            "type": "heading",
                            "options": {
                              "text": "Sandals & slides",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-row-sandals-sub",
                            "type": "text",
                            "options": {
                              "text": "Easy on, easy off, built for 35°C.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-row-sandals-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/sandals",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-row-sandals-slider",
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
                                  "sandals"
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
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-row-sandals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-row-sandals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-sandals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-sandals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-sandals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-row-sandals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-row-sandals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-row-sandals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-row-sandals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-row-sandals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-row-sandals-slider-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-row-sandals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-brandsec-label",
                            "type": "text",
                            "options": {
                              "text": "10 / On our shelves",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Brands we stock",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-brandsec-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-brands-slider",
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
                        "gap": "0px",
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
                        "classes": "relative border-l-2 border-[#121212]"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 border-y-2 border-r-2 border-[#121212] bg-white p-5 text-center transition-colors hover:bg-[#FFD23F]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 border-y-2 border-r-2 border-[#121212] bg-white p-5 text-center transition-colors hover:bg-[#FFD23F]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-brands-slider-thumb",
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
                            "id": "km-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-brands-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
            "id": "km-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "11 / Worn & reviewed",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Step by step, 5 stars",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          },
                          {
                            "id": "km-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 by 22,000+ customers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "km-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-none !border-2 !border-[#121212] !bg-white !opacity-100 transition-colors hover:!bg-[#121212] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#121212] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-4 !rounded-none !bg-[#121212]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-8 [&.is-active]:!bg-[#E4002B]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Walked 15,000 steps at the trade fair on day one. No blisters, no regrets.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "SR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sakib Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Size 42 · Runner",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“I tried two sizes at the door and sent one back with the rider. Easiest shoe shopping ever.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "NI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadia Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Size 38 · Flats",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Real leather, polished well, and it was half the price of the mall for the same brand.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "AC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Size 43 · Oxford",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Survived a full monsoon week on Dhaka roads. The grip is no joke.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tania Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Size 37 · Sandals",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Hard to find my size anywhere. Here I just tapped 44 and everything fit.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imtiaz Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Size 44 · Boots",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
                        "id": "km-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between border-2 border-[#121212] bg-white p-7"
                          }
                        },
                        "children": [
                          {
                            "id": "km-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base tracking-[0.2em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“School shoes for my son that lasted the whole year. Ordering the next size now.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#121212]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t-2 border-dashed border-[#DDD3C4] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "RH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center bg-[#121212] font-heading font-black uppercase text-lg text-white"
                                  }
                                }
                              },
                              {
                                "id": "km-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rumana Haque",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Kids size 31 · School",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#6B655C]"
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
            "id": "km-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-3xl flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "km-journal-label",
                            "type": "text",
                            "options": {
                              "text": "12 / Field notes",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Care, fit & style guides",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All articles",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-[#121212] pb-1 transition-colors hover:border-[#E4002B]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#121212]"
                          },
                          "label": {
                            "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap group-hover:text-[#E4002B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-journal-grid",
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
                        "classes": "group flex flex-col border-2 border-[#121212] bg-white transition-shadow hover:shadow-[6px_6px_0_#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-journal-loop",
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
                            "classes": "group flex flex-col border-2 border-[#121212] bg-white transition-shadow hover:shadow-[6px_6px_0_#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden border-b-2 border-[#121212] bg-[#F3EEE6]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/10] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "km-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "km-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading font-black uppercase text-2xl leading-none text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read",
                                  "readMoreIcon": "IconArrowUpRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6B655C]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-3"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-['Space_Mono'] text-[11px] font-bold uppercase tracking-widest text-[#121212]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex transition-transform group-hover/rm:translate-x-0.5 group-hover/rm:-translate-y-0.5"
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
            "id": "km-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "km-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "km-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "km-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4 border-t-2 border-[#121212] pt-4 lg:mb-10"
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-3xl flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "km-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "13 / Help desk",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-black uppercase text-5xl leading-[0.9] tracking-tight sm:text-6xl text-[#121212]"
                                  }
                                }
                              },
                              {
                                "id": "km-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Try-on, sizes, exchanges and delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base text-[#6B655C]"
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
                    "id": "km-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Can I try the shoes before paying?",
                          "classes": ""
                        },
                        {
                          "label": "How do I find my size?",
                          "classes": ""
                        },
                        {
                          "label": "Can I exchange for another size?",
                          "classes": ""
                        },
                        {
                          "label": "Are your products original?",
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
                        "classes": "flex flex-col border-t-2 border-[#121212]"
                      },
                      "accordion-header": {
                        "classes": "flex cursor-pointer items-center justify-between gap-4 border-b-2 border-[#121212] px-1 py-5 font-body text-lg font-bold text-[#121212] transition-colors hover:text-[#E4002B]"
                      },
                      "accordion-header-open": {
                        "classes": "text-[#E4002B]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#121212]"
                      },
                      "accordion-content": {
                        "classes": "border-b-2 border-[#121212] px-1 pb-5 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "km-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. With cash on delivery you can open the box and try the pair on while the rider waits. Pay only if they fit.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Measure your foot in centimetres and match it to our size guide. Between two sizes? Take the bigger one.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Unworn pairs in their original box can be exchanged within 7 days. Size exchanges are free inside Dhaka.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "We buy from brands and authorised distributors only. Materials are listed honestly on every product page.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka 24–48 hours, 2–4 days elsewhere in Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#6B655C]"
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
            "id": "km-cta",
            "type": "section",
            "options": {
              "anchor": "club"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] pb-14 lg:pb-20"
              }
            },
            "children": [
              {
                "id": "km-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden border-2 border-[#121212] bg-[#E4002B] p-8 shadow-[10px_10px_0_#121212] sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "km-cta-ghost",
                        "type": "text",
                        "options": {
                          "text": "KODOM",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-10 right-0 font-heading font-black uppercase text-[11rem] leading-none text-white/10"
                          }
                        }
                      },
                      {
                        "id": "km-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cta-k",
                            "type": "text",
                            "options": {
                              "text": "The Kodom Club",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-white/70"
                              }
                            }
                          },
                          {
                            "id": "km-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Every fifth pair, 20% off.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-black uppercase text-5xl leading-[0.9] text-white sm:text-6xl"
                              }
                            }
                          },
                          {
                            "id": "km-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Join free to save your size, get first dibs on new drops and a birthday voucher.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-4 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Join the club",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-[#121212] bg-white px-7 py-4 shadow-[5px_5px_0_#121212] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#121212]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#121212]"
                              },
                              "label": {
                                "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-[#121212] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "km-cta-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Shop new drops",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/new-drop",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-white/60 px-7 py-4 transition-colors hover:bg-white/10"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
                              },
                              "label": {
                                "classes": "font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.14em] text-white whitespace-nowrap"
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
            "id": "km-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "The stockroom",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Shoes",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every pair on our shelves, newest first. Open one for its sizes, materials and fit notes.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-shop-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "km-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-shop-promise",
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
                "id": "km-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Open-box check",
                          "description": "Try on, then pay",
                          "icon": "IconPackage",
                          "iconSize": ""
                        },
                        {
                          "title": "Free size exchange",
                          "description": "Inside Dhaka, 7 days",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Real materials",
                          "description": "Honestly labelled",
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
                        "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center border-2 border-[#121212] bg-[#FFD23F] text-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-shop-promise-fb-ic",
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
                        "id": "km-shop-promise-fb-t",
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
                        "id": "km-shop-promise-fb-d",
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
            "id": "km-pd",
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
                "id": "km-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-pd-grid",
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
                        "id": "km-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "km-pd-gallery",
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
                                "classes": "rounded-sm border-4 border-white bg-gradient-to-tr from-[#E9DCC8] via-white to-[#F3EEE6] p-4 shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-sm bg-white [&_img]:aspect-square [&_img]:object-contain"
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
                                "classes": "overflow-hidden rounded-sm border-2 border-transparent hover:border-[#E4002B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "km-pd-cats",
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
                                "classes": "rounded-full bg-[#E9DCC8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212] hover:bg-[#121212] hover:text-white"
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
                            "id": "km-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-black leading-tight text-[#121212] sm:text-4xl uppercase leading-[0.9]"
                              }
                            }
                          },
                          {
                            "id": "km-pd-rate",
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
                            "id": "km-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#E4002B] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "km-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B655C]"
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
                            "id": "km-pd-vars",
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
                                "classes": "cursor-pointer rounded-sm border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#E9DCC8]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#121212] !bg-[#E9DCC8] !text-[#2A2A2A]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "km-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out in this size · try another",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#E4002B]"
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
                            "id": "km-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-sm border-2 border-gray-200 bg-white px-3 text-[#121212]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm hover:bg-[#F3EEE6]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm hover:bg-[#F3EEE6]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#B80023]"
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
                            "id": "km-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Open-box check",
                                  "description": "Try, then pay",
                                  "icon": "IconPackage",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Free size exchange",
                                  "description": "Within 7 days",
                                  "icon": "IconArrowsExchange",
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
                                "classes": "font-body text-base font-bold text-[#121212]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-[#E9DCC8] text-[#121212]"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-perks-ic",
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
                                "id": "km-pd-perks-t",
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
                                "id": "km-pd-perks-d",
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
                            "id": "km-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-sku",
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
                                "id": "km-pd-brands",
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
                                    "classes": "hover:text-[#E4002B]"
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
                                "id": "km-pd-tags",
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
                                    "classes": "hover:text-[#E4002B]"
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
            "id": "km-pd-tabs-sec",
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
                "id": "km-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-sm border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,18,18,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "km-pd-tabs",
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
                              "icon": "IconRulerMeasure"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3EEE6] px-5 py-2.5 font-body text-sm font-semibold text-[#121212] transition-colors hover:bg-gray-200"
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
                            "id": "km-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-[#121212] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-[#121212] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-black [&_a]:text-[#E4002B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-sm [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD23F] [&_blockquote]:pl-4 [&_blockquote]:italic uppercase leading-[0.9]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "km-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconRulerMeasure",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Measure your foot in cm and match it to the size guide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Between two sizes? Take the bigger one",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Fit notes (runs small, wide toe box...) are in the description",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Materials are listed honestly: leather, synthetic, knit or canvas",
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
                            "id": "km-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-ship-list",
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
                                      "text": "Open the box and try them on before you pay (cash on delivery)",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Wrong size? Exchange unworn pairs in the original box within 7 days",
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
                            "id": "km-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-sm border border-gray-100 bg-[#F3EEE6] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-sm border border-gray-100 bg-[#F3EEE6] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "km-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FCE3E7]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "km-pd-reviews-au",
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
                                        "id": "km-pd-reviews-rate",
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
                                        "id": "km-pd-reviews-co",
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
                                    "id": "km-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How is the fit and comfort? Which size did you take, and your usual size?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-sm border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,18,18,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#121212]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-sm border border-gray-200 bg-[#F3EEE6] px-4 py-3 text-sm text-[#121212] placeholder:text-gray-400 focus:border-[#121212] focus:outline-none focus:ring-2 focus:ring-[#121212]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#E4002B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B80023] disabled:opacity-50"
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
            "id": "km-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-16"
              }
            },
            "children": [
              {
                "id": "km-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "km-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Pairs well with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FCE3E7] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E4002B]"
                          }
                        }
                      },
                      {
                        "id": "km-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-pd-rel-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
            "id": "km-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Stockroom",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Men, women, kids, sneakers, formals, sandals and boots. Pick a shelf.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-sm border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-sm border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-sm bg-[#E9DCC8] transition-transform"
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
                            "id": "km-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
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
                        "id": "km-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "km-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
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
            "id": "km-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-cat1-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "km-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group pairs by size, drop and deal: new drops, bestsellers, sale and every EU size.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E4002B]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E4002B]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#121212] group-hover:text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F3EEE6] px-2 py-0.5 text-[10px] font-bold text-[#6B655C]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "km-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "km-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
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
            "id": "km-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-tag1-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "km-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "On our shelves",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every footwear brand we stock.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-sm border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-sm border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-sm bg-[#F3EEE6] p-3"
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
                            "id": "km-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#121212] group-hover:text-[#E4002B]"
                              }
                            }
                          },
                          {
                            "id": "km-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " styles",
                              "singularSuffix": " style",
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
                        "id": "km-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "km-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " styles",
                      "singularSuffix": " style"
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
            "id": "km-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-brand1-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
                        "id": "km-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Field notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Care, Fit & Style Guides",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "How to measure your feet, clean white sneakers and keep leather looking new.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F3EEE6]"
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
                            "id": "km-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "km-blog-grid-date",
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
                                "id": "km-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                  }
                                }
                              },
                              {
                                "id": "km-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#E4002B]"
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
                        "id": "km-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#121212] transition-colors hover:border-[#E4002B] hover:text-[#E4002B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#E4002B] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "km-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F3EEE6] via-white to-[#F3EEE6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-post-k",
                    "type": "text",
                    "options": {
                      "text": "Field notes",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E9DCC8] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "km-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-black leading-tight text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B655C]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-post-author",
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
                        "id": "km-post-dot",
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
                        "id": "km-post-date",
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
                    "id": "km-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-sm border-4 border-white shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
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
            "id": "km-post-body",
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
                "id": "km-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-[#121212] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-[#121212] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-black [&_a]:text-[#E4002B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-sm [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD23F] [&_blockquote]:pl-4 [&_blockquote]:italic uppercase leading-[0.9]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-16"
              }
            },
            "children": [
              {
                "id": "km-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-sm border border-gray-100 bg-[#F3EEE6] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "km-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-sm border border-gray-100 bg-[#F3EEE6] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "km-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FCE3E7]"
                              }
                            }
                          },
                          {
                            "id": "km-post-cmt-au",
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
                            "id": "km-post-cmt-co",
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
                        "id": "km-post-cmt-form",
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
                            "classes": "rounded-sm border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,18,18,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#121212]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-sm border border-gray-200 bg-[#F3EEE6] px-4 py-3 text-sm text-[#121212] placeholder:text-gray-400 focus:border-[#121212] focus:outline-none focus:ring-2 focus:ring-[#121212]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#E4002B] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#B80023] disabled:opacity-50"
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
            "id": "km-post-more",
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
                "id": "km-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Field Notes",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-black text-[#121212] uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F3EEE6]"
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
                            "id": "km-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "km-post-more-grid-date",
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
                                "id": "km-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
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
            "id": "km-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b-2 border-[#121212] bg-[#E9DCC8] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "km-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#E4002B]"
                      }
                    }
                  },
                  {
                    "id": "km-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-black text-[#121212] sm:text-5xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders and exchanges, and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "km-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-12"
              }
            },
            "children": [
              {
                "id": "km-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-sm bg-[#121212] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#FFD23F]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-black text-white uppercase leading-[0.9]"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-sm bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#E4002B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#E4002B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#E4002B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "km-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "km-acc-3",
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
                                "id": "km-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-sm border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,18,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-sm border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B80023] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "km-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-sm border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(18,18,18,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-sm border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B80023] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "km-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "km-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3EEE6] px-5 py-2.5 font-body text-sm font-semibold text-[#121212] transition-colors hover:bg-gray-200"
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
                                "id": "km-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#E4002B]/10 text-[#E4002B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "km-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#E4002B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "km-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#E4002B]/10 text-[#E4002B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "km-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-sm border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#E4002B]/40 hover:bg-[#E4002B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#E4002B]/10 text-[#E4002B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "km-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#E4002B]/10 text-[#E4002B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#E4002B] focus:outline-none focus:ring-2 focus:ring-[#E4002B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B80023] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "km-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F3EEE6] via-white to-[#F3EEE6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-sm border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(18,18,18,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "km-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E9DCC8] text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FCE3E7] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#E4002B]"
                          }
                        }
                      },
                      {
                        "id": "km-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You. Your Pairs Are on the Way",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-black text-[#121212] sm:text-4xl uppercase leading-[0.9]"
                          }
                        }
                      },
                      {
                        "id": "km-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re boxing your order now. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B655C] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "km-ty-steps",
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
                              "text": "Your pairs are checked, boxed and sent out",
                              "icon": ""
                            },
                            {
                              "text": "Open the box at your door, try them on, then pay if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-sm bg-[#F3EEE6] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#E4002B]"
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
                        "id": "km-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "km-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B80023] w-full sm:w-auto"
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
                            "id": "km-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#121212] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#121212] w-full sm:w-auto"
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
            "id": "km-ty-promise",
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
                "id": "km-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Open-box check",
                          "description": "Try on, then pay",
                          "icon": "IconPackage",
                          "iconSize": ""
                        },
                        {
                          "title": "Free size exchange",
                          "description": "Inside Dhaka, 7 days",
                          "icon": "IconArrowsExchange",
                          "iconSize": ""
                        },
                        {
                          "title": "Cash on delivery",
                          "description": "Anywhere in Bangladesh",
                          "icon": "IconCash",
                          "iconSize": ""
                        },
                        {
                          "title": "Real materials",
                          "description": "Honestly labelled",
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
                        "classes": "font-heading font-black uppercase text-xl leading-none text-[#121212]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center border-2 border-[#121212] bg-[#FFD23F] text-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-ty-promise-fb-ic",
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
                        "id": "km-ty-promise-fb-t",
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
                        "id": "km-ty-promise-fb-d",
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
            "id": "km-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#F3EEE6] via-white to-[#F3EEE6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "km-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#E4002B] sm:text-9xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-sm bg-[#F3EEE6] text-[#121212]"
                      }
                    }
                  },
                  {
                    "id": "km-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "This Page Walked Off",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-black text-[#121212] sm:text-4xl uppercase leading-[0.9]"
                      }
                    }
                  },
                  {
                    "id": "km-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the pair may have sold out. Head back home or browse the stockroom.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B655C] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "km-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "km-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-sm bg-[#E4002B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(228,0,43,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#B80023] w-full sm:w-auto"
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
                        "id": "km-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Shoes",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#121212] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#121212] w-full sm:w-auto"
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
            "id": "km-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3EEE6] py-16"
              }
            },
            "children": [
              {
                "id": "km-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "km-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "km-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD23F] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#121212]"
                          }
                        }
                      },
                      {
                        "id": "km-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-black text-[#121212] sm:text-4xl uppercase leading-[0.9]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "km-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                      }
                    },
                    "children": [
                      {
                        "id": "km-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between border border-[#DDD3C4] bg-white transition-colors duration-300 hover:border-[#121212]"
                          }
                        },
                        "children": [
                          {
                            "id": "km-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "km-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden bg-[#F3EEE6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-0 z-[3] flex items-center gap-1 bg-[#E4002B] px-2 py-1 font-['Space_Mono'] text-[11px] font-bold uppercase text-white"
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
                                "id": "km-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 border-t border-[#DDD3C4] px-4 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "km-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
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
                                  },
                                  {
                                    "id": "km-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-body text-[15px] font-bold text-[#121212] transition-colors group-hover:text-[#E4002B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "km-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 5,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#6B655C]"
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
                            "id": "km-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-4 pb-4 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "km-nf-grid-c-price",
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
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Space_Mono'] text-[11px] text-[#6B655C] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-2xl font-black leading-none text-[#121212]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#E4002B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#E4002B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "km-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconPlus",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 bg-[#121212] px-3 text-white transition-colors hover:bg-[#E4002B]"
                                  },
                                  "button-label": {
                                    "classes": "font-['Space_Mono'] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
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
