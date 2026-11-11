/**
 * Template: Fashora Marketplace.
 *
 * A marketplace-style fashion store - many departments, many brands, dense
 * product grids and constant deals - for women, men and kids. Like the other
 * complete templates here it carries all sixteen page types - Header,
 * Footer, Home, Shop, Product, the six taxonomy archives, Blog Archive, Blog
 * Single, Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to fs-, palette remapped, radii tightened, copy
 * rewritten). The header is reshaped: brand, a wide search and the cart on
 * one row, the desktop menu (eight departments, Flash Sale in red) on a
 * second. Home is built fresh from the same block types. Product cards
 * everywhere are compact marketplace cards: 3:4 image, red discount flag,
 * two-line title, red price over the struck one, icon-only add-to-cart. It is
 * plain data: edit freely.
 *
 * DESIGN
 *
 *   vermillion #F23A2E  sale, prices, primary CTAs, "See all"   #D42A1F hover  #FFEDEB tint
 *   ink        #111111  text, buttons, header search, banners   #2B2B2B hover  #F2F2F2 tint
 *   yellow     #FFD60A  flash sale, mega-sale slide, labels     #FFE45C
 *   page       #F4F4F5  marketplace grey behind white panels    line #E7E7E9   muted #6B6B6B
 *   beige #F1E4DA, sky #DCE6EE, sand #FBEFC7: department banners
 *
 * Fonts (template meta): Archivo (variable width) for headings, set wide with
 * `font-stretch-expanded uppercase` at display sizes; Inter Tight for body
 * and every small label.
 *
 * HOME
 *
 *   Department sidebar (linkList with icons, desktop) + three-slide banner
 *   slider (contentSlider: Linen Edit with public/templates/fashora-hero.svg,
 *   Mega Sale, Payday) + two side promos - trust bar - category circles
 *   (termsGrid, 16) - flash sale with countdown and product slider
 *   (#flash-sale) - Women / Men / Kids banners - trending grid (#trending) -
 *   shop by budget - top brands slider (#brands) - new arrivals slider -
 *   members banner - "Just for you" grid of 18 with Load more (#just-for-you).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: women, men, kids, shoes, bags, ethnic-wear,
 *     winter-wear, accessories, jewellery-watches, new-arrivals. Tag slugs:
 *     flash-sale, trending, sale, under-499, under-999, under-1999, premium.
 *     Brand logos come from product_brand term thumbnails.
 *   - The flash-sale countdown (08:24:51) is static text: update it, or
 *     replace it with a real timer block if one is added.
 *   - Contact details, social URLs, promo codes FIRST15 / PAYDAY15, the 15%
 *     welcome offer, "up to 70%", style counts and the free-delivery
 *     threshold (৳1,500) are sample copy.
 *   - Delivery times and the 7-day return: check they match the shop.
 */

var template = [
  {
    "name": "Fashora Marketplace",
    "description": "Marketplace-style fashion store in ink black, vermillion and flash yellow with wide Archivo Expanded headlines: department sidebar beside a banner slider, trust bar, category circles, a flash sale with countdown, department banners, dense product grids, shop-by-budget, a brand slider and a \"Just for you\" feed. All 16 pages.",
    "thumbnail": "/templates/fashora.svg",
    "meta": {
      "fonts": [
        {
          "family": "Archivo",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Inter Tight",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Archivo",
        "body": "Inter Tight"
      },
      "colors": {
        "primary": "#F23A2E",
        "secondary": "#111111",
        "accent": "#FFD60A",
        "background": "#F4F4F5",
        "foreground": "#111111",
        "muted": "#6B6B6B"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "fs-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E7E7E9] bg-white"
              }
            },
            "children": [
              {
                "id": "fs-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#111111] px-4 py-2 text-center text-xs font-medium text-white/85"
                  }
                },
                "children": [
                  {
                    "id": "fs-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Free delivery over ৳1,500 · Cash on delivery · 7-day returns · 15% off your first order:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "fs-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "FIRST15",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-sm bg-[#FFD60A] px-2 py-0.5 font-mono text-xs font-bold text-[#111111]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "fs-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Shop deals",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#flash-sale",
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
                        "classes": "text-xs font-bold text-[#FFD60A] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "fs-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 items-center justify-between gap-4 lg:h-[76px]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "F",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 text-2xl items-center justify-center rounded-md bg-[#F23A2E] font-heading font-stretch-expanded uppercase font-black leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "fs-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Fashora",
                                  "src": "https://placehold.co/200x64?text=Fashora",
                                  "altText": "Fashora",
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
                                    "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black tracking-tight text-[#111111]"
                                  }
                                }
                              },
                              {
                                "id": "fs-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Fashion marketplace",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "fs-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search for products, brands and more",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "ml-2 hidden max-w-3xl flex-1 rounded-md border-2 border-[#111111] bg-white py-1 pl-1 pr-3 transition-all focus-within:border-[#F23A2E] md:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#6B6B6B]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#F23A2E]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#F23A2E]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#F23A2E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#D42A1F]"
                          }
                        }
                      },
                      {
                        "id": "fs-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F5] text-[#111111] transition-colors hover:bg-[#FFEDEB] hover:text-[#F23A2E]"
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
                            "id": "fs-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#111111] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#2B2B2B]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#F23A2E] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F4F4F5] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#111111]"
                              },
                              "title-icon": {
                                "classes": "text-[#F23A2E]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#F23A2E] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#F23A2E] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#D42A1F]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#F23A2E] px-4 py-2 text-sm font-medium text-[#F23A2E] transition-colors hover:bg-[#F23A2E] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#D42A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "fs-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F4F4F5] text-[#111111]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F4F4F5] p-2 text-[#111111] transition-colors hover:bg-[#F23A2E] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "F",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-md bg-[#F23A2E] font-heading font-stretch-expanded uppercase font-black leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Fashora",
                                          "src": "https://placehold.co/200x64?text=Fashora",
                                          "altText": "Fashora",
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
                                            "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black tracking-tight text-[#111111]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Fashion marketplace",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#111111]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "fs-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search products & brands",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F4F4F5] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-[#111111]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6B6B6B]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#F23A2E]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#F23A2E]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#F23A2E] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#D42A1F]"
                                  }
                                }
                              },
                              {
                                "id": "fs-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#111111] transition-colors hover:text-[#F23A2E]"
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
                                    "id": "fs-hdr-m-menu-i1",
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
                                    "id": "fs-hdr-m-menu-i2",
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
                                    "id": "fs-hdr-m-menu-i3",
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
                                    "id": "fs-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Shoes",
                                      "url": "/categories/shoes"
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
                                    "id": "fs-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Bags",
                                      "url": "/categories/bags"
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
                                    "id": "fs-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Ethnic Wear",
                                      "url": "/categories/ethnic-wear"
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
                                    "id": "fs-hdr-m-menu-i7",
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
                                    "id": "fs-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Flash Sale",
                                      "url": "/#flash-sale"
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
                    "id": "fs-hdr-nav",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden border-t border-[#E7E7E9] lg:block"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-hdr-menu",
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-sm font-semibold text-[#111111] transition-colors hover:text-[#F23A2E]"
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
                            "id": "fs-hdr-menu-i1",
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
                            "id": "fs-hdr-menu-i2",
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
                            "id": "fs-hdr-menu-i3",
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
                            "id": "fs-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "Shoes",
                              "url": "/categories/shoes"
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
                            "id": "fs-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Bags",
                              "url": "/categories/bags"
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
                            "id": "fs-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Ethnic Wear",
                              "url": "/categories/ethnic-wear"
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
                            "id": "fs-hdr-menu-i7",
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
                            "id": "fs-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Flash Sale",
                              "url": "/#flash-sale"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": "text-[#F23A2E]"
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
            "id": "fs-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#111111] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "fs-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "fs-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-xl bg-[#F23A2E] p-8 sm:p-10 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "Members only",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-sm bg-[#FFD60A] px-2 py-1 font-body text-[11px] font-bold uppercase tracking-widest text-[#111111]"
                              }
                            }
                          },
                          {
                            "id": "fs-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 15% off your first order",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-stretch-expanded uppercase text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "fs-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Sign up free for the welcome code, early sale access and member-only drops.",
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
                        "id": "fs-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Sign up free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconUserPlus",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 transition-colors hover:bg-[#2B2B2B]"
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
                "id": "fs-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "fs-ftr-grid",
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
                        "id": "fs-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "F",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 text-xl items-center justify-center rounded-md bg-[#F23A2E] font-heading font-stretch-expanded uppercase font-black leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "fs-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Fashora",
                                      "src": "https://placehold.co/200x64?text=Fashora",
                                      "altText": "Fashora",
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
                                        "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black tracking-tight text-[#111111]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "fs-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Your one-stop fashion marketplace: thousands of styles from trusted brands and verified sellers, delivered nationwide with cash on delivery.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "fs-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F23A2E]"
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
                                "id": "fs-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F23A2E]"
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
                                "id": "fs-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F23A2E]"
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
                                "id": "fs-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F23A2E]"
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
                        "id": "fs-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Women",
                                  "icon": "",
                                  "slug": "/categories/women"
                                },
                                {
                                  "text": "Men",
                                  "icon": "",
                                  "slug": "/categories/men"
                                },
                                {
                                  "text": "Kids & Baby",
                                  "icon": "",
                                  "slug": "/categories/kids"
                                },
                                {
                                  "text": "Shoes & Bags",
                                  "icon": "",
                                  "slug": "/categories/shoes"
                                },
                                {
                                  "text": "Flash Sale",
                                  "icon": "",
                                  "slug": "/#flash-sale"
                                },
                                {
                                  "text": "All Brands",
                                  "icon": "",
                                  "slug": "/brands"
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
                                "classes": "transition-colors hover:text-[#FFD60A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD60A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ftr-ll-care",
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
                                  "text": "Returns & Exchanges",
                                  "icon": "",
                                  "slug": "#"
                                },
                                {
                                  "text": "Size Guide",
                                  "icon": "",
                                  "slug": "#"
                                },
                                {
                                  "text": "Style Blog",
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
                                "classes": "transition-colors hover:text-[#FFD60A]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD60A]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ftr-contact-h",
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
                            "id": "fs-ftr-address",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFD60A]"
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
                                "classes": "shrink-0 text-[#F23A2E]"
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
                "id": "fs-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "fs-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Fashora. All rights reserved.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "fs-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-ftr-pay-txt",
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
            "id": "fs-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-5"
              }
            },
            "children": [
              {
                "id": "fs-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-hero-depts",
                        "type": "linkList",
                        "options": {
                          "headerText": "Departments",
                          "tag": "ul",
                          "icon": "",
                          "iconSize": 18,
                          "items": [
                            {
                              "text": "Women",
                              "icon": "IconWoman",
                              "slug": "/categories/women"
                            },
                            {
                              "text": "Men",
                              "icon": "IconMan",
                              "slug": "/categories/men"
                            },
                            {
                              "text": "Kids & Baby",
                              "icon": "IconBabyCarriage",
                              "slug": "/categories/kids"
                            },
                            {
                              "text": "Shoes",
                              "icon": "IconShoe",
                              "slug": "/categories/shoes"
                            },
                            {
                              "text": "Bags",
                              "icon": "IconBackpack",
                              "slug": "/categories/bags"
                            },
                            {
                              "text": "Ethnic Wear",
                              "icon": "IconHanger",
                              "slug": "/categories/ethnic-wear"
                            },
                            {
                              "text": "Winter Wear",
                              "icon": "IconJacket",
                              "slug": "/categories/winter-wear"
                            },
                            {
                              "text": "Accessories",
                              "icon": "IconEyeglass",
                              "slug": "/categories/accessories"
                            },
                            {
                              "text": "Jewellery & Watches",
                              "icon": "IconDiamond",
                              "slug": "/categories/jewellery-watches"
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden h-full flex-col rounded-xl bg-white py-3 lg:col-span-3 lg:flex xl:col-span-2"
                          },
                          "header-text": {
                            "classes": "px-5 pb-2 pt-1 font-body text-xs font-bold uppercase tracking-widest text-[#6B6B6B]"
                          },
                          "ul": {
                            "classes": "flex flex-col"
                          },
                          "li": {
                            "classes": "list-none"
                          },
                          "link": {
                            "classes": "group flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-[#FFEDEB]"
                          },
                          "icon": {
                            "classes": "flex shrink-0 text-[#6B6B6B] group-hover:text-[#F23A2E]"
                          },
                          "text": {
                            "classes": "font-body text-sm font-medium text-[#111111] group-hover:text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-hero-slider",
                        "type": "contentSlider",
                        "options": {
                          "sliderOptions": {
                            "type": "loop",
                            "perPage": 1,
                            "perMove": 1,
                            "gap": "0rem",
                            "arrows": true,
                            "pagination": true,
                            "autoplay": true,
                            "interval": 5000,
                            "pauseOnHover": true,
                            "pauseOnFocus": true,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "767": {
                                "arrows": false
                              }
                            }
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative h-full overflow-hidden rounded-xl lg:col-span-6 xl:col-span-7 [&_.splide__track]:h-full [&_.splide__list]:h-full"
                          },
                          "slide": {
                            "classes": ""
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": "!h-10 !w-10 !rounded-full !bg-white/90 !opacity-100 transition-colors hover:!bg-white [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#111111] disabled:!opacity-0"
                          },
                          "arrow-prev": {
                            "classes": "!left-3"
                          },
                          "arrow-next": {
                            "classes": "!right-3"
                          },
                          "pagination": {
                            "classes": "!bottom-4 !gap-1.5"
                          },
                          "page-item": {
                            "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-white/50 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-slide-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-full min-h-[340px] overflow-hidden rounded-xl bg-[#111111] sm:min-h-[400px]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-slide-1-copy",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex w-full flex-col items-start justify-center gap-4 p-7 sm:w-3/5 sm:p-10"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-slide-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "New season",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-sm bg-[#FFD60A] px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[#111111]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "The Linen Edit",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Breathable shirts, co-ords and summer dresses. Starting at ৳990.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-sm text-base text-white/70"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-1-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop now",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/categories/new-arrivals",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 transition-colors hover:bg-white/85"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold uppercase tracking-wide text-[#111111] whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-slide-1-art",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-y-0 right-0 hidden w-1/2 sm:block"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-slide-1-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/fashora-hero.svg",
                                      "altText": "A clothes rail with linen shirts, a dress and a tote bag",
                                      "link": "/categories/new-arrivals",
                                      "newTab": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "link": {
                                        "classes": "block h-full"
                                      },
                                      "img": {
                                        "classes": "h-full w-full object-cover object-left"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "fs-slide-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-full min-h-[340px] overflow-hidden rounded-xl bg-[#FFD60A] sm:min-h-[400px]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-slide-2-copy",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex w-full flex-col items-start justify-center gap-4 p-7 sm:w-3/5 sm:p-10"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-slide-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Mega sale",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-sm bg-[#111111] px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[#FFD60A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Up to 70% off",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-stretch-expanded uppercase text-5xl font-black leading-[0.9] tracking-tight text-[#111111] sm:text-7xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "2,000+ styles across women, men and kids. Ends Sunday midnight.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-sm text-base font-medium text-[#111111]/75"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-2-btn",
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
                                        "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 transition-colors hover:bg-[#2B2B2B]"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold uppercase tracking-wide text-white whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-slide-2-big",
                                "type": "text",
                                "options": {
                                  "text": "%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-16 -right-6 font-heading font-stretch-expanded uppercase text-[18rem] font-black leading-none text-[#111111]/10"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-slide-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-full min-h-[340px] overflow-hidden rounded-xl bg-[#F23A2E] sm:min-h-[400px]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-slide-3-copy",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative z-10 flex w-full flex-col items-start justify-center gap-4 p-7 sm:w-3/5 sm:p-10"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-slide-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Payday drop",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-sm bg-white px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[#F23A2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-3-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Extra 15% off",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-stretch-expanded uppercase text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "On top of sale prices, with code PAYDAY15 at checkout. App and web.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-sm text-base text-white/80"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-slide-3-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "Grab the deal",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/shop",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 transition-colors hover:bg-white/85"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold uppercase tracking-wide text-[#F23A2E] whitespace-nowrap"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-slide-3-big",
                                "type": "text",
                                "options": {
                                  "text": "15",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-14 -right-4 font-heading font-stretch-expanded uppercase text-[16rem] font-black leading-none text-white/15"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "fs-hero-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-3 lg:grid-cols-1 xl:col-span-3"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-promo-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex flex-1 flex-col justify-between gap-3 overflow-hidden rounded-xl bg-[#111111] p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-promo-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-promo-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Sneaker week",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold uppercase tracking-widest text-[#FFD60A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-promo-1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Up to 40% off",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black leading-none tracking-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-promo-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Top brands, fresh pairs.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/70"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-promo-1-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/shoes",
                                  "target": "",
                                  "icon": "IconChevronRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-white"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold underline underline-offset-4 text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-promo-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex flex-1 flex-col justify-between gap-3 overflow-hidden rounded-xl bg-[#F1E4DA] p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-promo-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-promo-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Free delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-bold uppercase tracking-widest text-[#F23A2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-promo-2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Orders over ৳1,500",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black leading-none tracking-tight text-[#111111]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-promo-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Nationwide, cash on delivery.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6B6B6B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-promo-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "Shop now",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconChevronRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex cursor-pointer items-center gap-1 self-start"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 transition-transform group-hover:translate-x-0.5 text-[#111111]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold underline underline-offset-4 text-[#111111]"
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
            "id": "fs-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-trust-fb",
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
                        "classes": "grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[#E7E7E9] lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "grid grid-cols-[auto_1fr] items-center gap-x-3 bg-white p-4 text-left"
                      },
                      "title": {
                        "classes": "font-body text-sm font-bold text-[#111111]"
                      },
                      "description": {
                        "classes": "text-xs text-[#6B6B6B]"
                      },
                      "icon": {
                        "classes": "row-span-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEDEB] text-[#F23A2E]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-trust-fb-ic",
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
                        "id": "fs-trust-fb-t",
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
                        "id": "fs-trust-fb-d",
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
            "id": "fs-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-cats-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-cats-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-cats-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-cats-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop by category",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-cats-all",
                            "type": "button",
                            "options": {
                              "text": "All categories",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F23A2E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#F23A2E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-cats-grid",
                        "type": "termsGrid",
                        "options": {
                          "queryPrams": {
                            "taxonomy": "product_cat",
                            "number": "16",
                            "per_page": "16",
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
                            "classes": "grid grid-cols-4 gap-x-2 gap-y-5 sm:grid-cols-6 lg:grid-cols-8"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-2 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-cats-grid-loop",
                            "type": "termsLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-4 gap-x-2 gap-y-5 sm:grid-cols-6 lg:grid-cols-8"
                              },
                              "loop-item": {
                                "classes": "group flex flex-col items-center gap-2 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-cats-grid-thumb",
                                "type": "termThumbnail",
                                "options": {
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "w-full max-w-[96px] overflow-hidden rounded-full bg-[#F2F2F2] ring-2 ring-transparent ring-offset-2 transition-all group-hover:ring-[#F23A2E]"
                                  },
                                  "link": {
                                    "classes": "block"
                                  },
                                  "image": {
                                    "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "fs-cats-grid-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h4",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xs font-semibold text-[#111111] group-hover:text-[#F23A2E] sm:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "fs-cats-grid-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "singularSuffix": " item",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden"
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
            "id": "fs-flash",
            "type": "section",
            "options": {
              "anchor": "flash-sale"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-flash-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-flash-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-flash-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-flash-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-flash-h",
                                "type": "heading",
                                "options": {
                                  "text": "Flash sale",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-flash-timer",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-flash-bolt",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconBolt",
                                      "size": 16,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-8 w-8 items-center justify-center rounded-md bg-[#FFD60A] text-[#111111]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-ends",
                                    "type": "text",
                                    "options": {
                                      "text": "Ends in",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mr-1 text-sm font-semibold text-[#6B6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-hh",
                                    "type": "text",
                                    "options": {
                                      "text": "08",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-8 min-w-8 items-center justify-center rounded-md bg-[#111111] px-1.5 font-body text-sm font-bold tabular-nums text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-c1",
                                    "type": "text",
                                    "options": {
                                      "text": ":",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-bold text-[#111111]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-mm",
                                    "type": "text",
                                    "options": {
                                      "text": "24",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-8 min-w-8 items-center justify-center rounded-md bg-[#111111] px-1.5 font-body text-sm font-bold tabular-nums text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-c2",
                                    "type": "text",
                                    "options": {
                                      "text": ":",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-bold text-[#111111]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-ss",
                                    "type": "text",
                                    "options": {
                                      "text": "51",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-8 min-w-8 items-center justify-center rounded-md bg-[#111111] px-1.5 font-body text-sm font-bold tabular-nums text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "fs-flash-all",
                            "type": "button",
                            "options": {
                              "text": "Shop all deals",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/flash-sale",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F23A2E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#F23A2E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-flash-slider",
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
                                      "flash-sale"
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
                            "perPage": 6,
                            "perMove": 1,
                            "gap": "0.75rem",
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
                                "perPage": 3,
                                "arrows": false
                              },
                              "1023": {
                                "perPage": 4
                              },
                              "1279": {
                                "perPage": 5
                              }
                            }
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative [&_.splide__track]:!pb-1"
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": "!h-10 !w-10 !rounded-full !border !border-[#E7E7E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#111111] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#111111] hover:[&>svg]:!fill-white disabled:!opacity-0"
                          },
                          "arrow-prev": {
                            "classes": "!-left-3"
                          },
                          "arrow-next": {
                            "classes": "!-right-3"
                          },
                          "pagination": {
                            "classes": ""
                          },
                          "page-item": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-flash-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-flash-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-flash-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-flash-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                        "id": "fs-flash-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                    "id": "fs-flash-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1 px-3 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-flash-slider-c-rate",
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
                                        "id": "fs-flash-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-flash-slider-c-ex",
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
                                "id": "fs-flash-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-flash-slider-c-price",
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
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-[11px] text-[#6B6B6B] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#F23A2E]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-flash-slider-c-add",
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
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
            ]
          },
          {
            "id": "fs-depts",
            "type": "section",
            "options": {
              "anchor": "departments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-depts-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
                  }
                },
                "children": [
                  {
                    "id": "fs-dept-women",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-xl bg-[#F1E4DA] p-6 sm:min-h-[260px]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-dept-women-big",
                        "type": "text",
                        "options": {
                          "text": "W",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-3 -top-6 font-heading font-stretch-expanded uppercase text-[9rem] font-black leading-none text-[#111111]/[0.06] transition-transform duration-500 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-women-k",
                        "type": "text",
                        "options": {
                          "text": "2,400+ styles",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative text-[11px] font-bold uppercase tracking-widest text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-women-h",
                        "type": "heading",
                        "options": {
                          "text": "Women",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading font-stretch-expanded uppercase text-3xl font-black tracking-tight text-[#111111] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-women-p",
                        "type": "text",
                        "options": {
                          "text": "Dresses, tops, ethnic & more",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-1 text-sm text-[#111111]/70"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-women-btn",
                        "type": "button",
                        "options": {
                          "text": "Explore",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/women",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 transition-colors hover:bg-[#2B2B2B] self-start !px-5 !py-2.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "fs-dept-men",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-xl bg-[#DCE6EE] p-6 sm:min-h-[260px]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-dept-men-big",
                        "type": "text",
                        "options": {
                          "text": "M",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-3 -top-6 font-heading font-stretch-expanded uppercase text-[9rem] font-black leading-none text-[#111111]/[0.06] transition-transform duration-500 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-men-k",
                        "type": "text",
                        "options": {
                          "text": "1,800+ styles",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative text-[11px] font-bold uppercase tracking-widest text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-men-h",
                        "type": "heading",
                        "options": {
                          "text": "Men",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading font-stretch-expanded uppercase text-3xl font-black tracking-tight text-[#111111] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-men-p",
                        "type": "text",
                        "options": {
                          "text": "Shirts, denim, panjabi & more",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-1 text-sm text-[#111111]/70"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-men-btn",
                        "type": "button",
                        "options": {
                          "text": "Explore",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/men",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 transition-colors hover:bg-[#2B2B2B] self-start !px-5 !py-2.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "fs-dept-kids",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-xl bg-[#FBEFC7] p-6 sm:min-h-[260px]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-dept-kids-big",
                        "type": "text",
                        "options": {
                          "text": "K",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-3 -top-6 font-heading font-stretch-expanded uppercase text-[9rem] font-black leading-none text-[#111111]/[0.06] transition-transform duration-500 group-hover:scale-110"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-kids-k",
                        "type": "text",
                        "options": {
                          "text": "900+ styles",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative text-[11px] font-bold uppercase tracking-widest text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-kids-h",
                        "type": "heading",
                        "options": {
                          "text": "Kids",
                          "tag": "h3"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative font-heading font-stretch-expanded uppercase text-3xl font-black tracking-tight text-[#111111] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-kids-p",
                        "type": "text",
                        "options": {
                          "text": "Playwear, party & school",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-1 text-sm text-[#111111]/70"
                          }
                        }
                      },
                      {
                        "id": "fs-dept-kids-btn",
                        "type": "button",
                        "options": {
                          "text": "Explore",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/kids",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 14
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 transition-colors hover:bg-[#2B2B2B] self-start !px-5 !py-2.5"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap"
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
            "id": "fs-trend",
            "type": "section",
            "options": {
              "anchor": "trending"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-trend-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-trend-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-trend-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-trend-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-trend-h",
                                "type": "heading",
                                "options": {
                                  "text": "Trending now",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-trend-sub",
                                "type": "text",
                                "options": {
                                  "text": "What everyone is adding to cart",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-trend-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/trending",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F23A2E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#F23A2E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-trend-grid",
                        "type": "postGrid",
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
                                      "trending"
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
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 2xl:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-trend-grid-loop",
                            "type": "postLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 2xl:grid-cols-6"
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-trend-grid-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-trend-grid-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-trend-grid-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                        "id": "fs-trend-grid-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                    "id": "fs-trend-grid-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1 px-3 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-trend-grid-c-rate",
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
                                        "id": "fs-trend-grid-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-trend-grid-c-ex",
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
                                "id": "fs-trend-grid-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-trend-grid-c-price",
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
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-[11px] text-[#6B6B6B] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#F23A2E]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-trend-grid-c-add",
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
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
            ]
          },
          {
            "id": "fs-prices",
            "type": "section",
            "options": {
              "anchor": "budget"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-prices-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-prices-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6 flex flex-col gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-prices-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-prices-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-prices-h",
                                "type": "heading",
                                "options": {
                                  "text": "Shop by budget",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-prices-sub",
                                "type": "text",
                                "options": {
                                  "text": "Style that fits your wallet",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "fs-prices-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-price-1",
                            "type": "button",
                            "options": {
                              "text": "Under ৳499",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-499",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex cursor-pointer items-center justify-center rounded-xl bg-[#FFD60A] px-4 py-6 text-center transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-heading font-stretch-expanded uppercase text-lg font-black tracking-tight text-[#111111] sm:text-2xl"
                              }
                            }
                          },
                          {
                            "id": "fs-price-2",
                            "type": "button",
                            "options": {
                              "text": "Under ৳999",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-999",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex cursor-pointer items-center justify-center rounded-xl bg-[#FFEDEB] px-4 py-6 text-center transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-heading font-stretch-expanded uppercase text-lg font-black tracking-tight text-[#111111] sm:text-2xl"
                              }
                            }
                          },
                          {
                            "id": "fs-price-3",
                            "type": "button",
                            "options": {
                              "text": "Under ৳1,999",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/under-1999",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex cursor-pointer items-center justify-center rounded-xl bg-[#DCE6EE] px-4 py-6 text-center transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-heading font-stretch-expanded uppercase text-lg font-black tracking-tight text-[#111111] sm:text-2xl"
                              }
                            }
                          },
                          {
                            "id": "fs-price-4",
                            "type": "button",
                            "options": {
                              "text": "Premium picks",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/premium",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex cursor-pointer items-center justify-center rounded-xl bg-[#F1E4DA] px-4 py-6 text-center transition-transform hover:-translate-y-0.5"
                              },
                              "icon": {
                                "classes": "hidden"
                              },
                              "label": {
                                "classes": "font-heading font-stretch-expanded uppercase text-lg font-black tracking-tight text-[#111111] sm:text-2xl"
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
            "id": "fs-brandsec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-brandsec-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-brandsec-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-brandsec-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-brandsec-h",
                                "type": "heading",
                                "options": {
                                  "text": "Top brands",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-brandsec-sub",
                                "type": "text",
                                "options": {
                                  "text": "Official stores & verified sellers",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-brandsec-all",
                            "type": "button",
                            "options": {
                              "text": "All brands",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/brands",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F23A2E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#F23A2E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-brands-slider",
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
                            "perPage": 8,
                            "perMove": 1,
                            "gap": "0.75rem",
                            "arrows": true,
                            "pagination": false,
                            "rewind": false,
                            "mediaQuery": "max",
                            "breakpoints": {
                              "479": {
                                "perPage": 3,
                                "arrows": false
                              },
                              "767": {
                                "perPage": 4,
                                "arrows": false
                              },
                              "1023": {
                                "perPage": 6
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
                            "classes": "!h-10 !w-10 !rounded-full !border !border-[#E7E7E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#111111] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#111111] hover:[&>svg]:!fill-white disabled:!opacity-0"
                          },
                          "arrow-prev": {
                            "classes": "!-left-3"
                          },
                          "arrow-next": {
                            "classes": "!-right-3"
                          },
                          "pagination": {
                            "classes": ""
                          },
                          "page-item": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-[#E7E7E9] bg-white p-3 text-center transition-colors hover:border-[#111111]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-brands-slider-loop",
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
                                "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-lg border border-[#E7E7E9] bg-white p-3 text-center transition-colors hover:border-[#111111]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-brands-slider-thumb",
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
                                    "classes": "max-h-12 w-auto max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
                                  }
                                }
                              },
                              {
                                "id": "fs-brands-slider-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h4",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-1 font-body text-xs font-bold uppercase tracking-wide text-[#111111]"
                                  }
                                }
                              },
                              {
                                "id": "fs-brands-slider-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": " items",
                                  "singularSuffix": " item",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden"
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
            "id": "fs-new",
            "type": "section",
            "options": {
              "anchor": "new-arrivals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-new-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-new-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-new-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-new-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-new-h",
                                "type": "heading",
                                "options": {
                                  "text": "New arrivals",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-new-sub",
                                "type": "text",
                                "options": {
                                  "text": "Fresh drops, every day",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-new-all",
                            "type": "button",
                            "options": {
                              "text": "See all",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#F23A2E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#F23A2E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-new-slider",
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
                            "perPage": 6,
                            "perMove": 1,
                            "gap": "0.75rem",
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
                                "perPage": 3,
                                "arrows": false
                              },
                              "1023": {
                                "perPage": 4
                              },
                              "1279": {
                                "perPage": 5
                              }
                            }
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative [&_.splide__track]:!pb-1"
                          },
                          "arrows-wrap": {
                            "classes": ""
                          },
                          "arrow-item": {
                            "classes": "!h-10 !w-10 !rounded-full !border !border-[#E7E7E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#111111] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#111111] hover:[&>svg]:!fill-white disabled:!opacity-0"
                          },
                          "arrow-prev": {
                            "classes": "!-left-3"
                          },
                          "arrow-next": {
                            "classes": "!-right-3"
                          },
                          "pagination": {
                            "classes": ""
                          },
                          "page-item": {
                            "classes": ""
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-new-slider-loop",
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
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-new-slider-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-new-slider-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-new-slider-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                        "id": "fs-new-slider-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                    "id": "fs-new-slider-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1 px-3 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-new-slider-c-rate",
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
                                        "id": "fs-new-slider-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-new-slider-c-ex",
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
                                "id": "fs-new-slider-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-new-slider-c-price",
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
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-[11px] text-[#6B6B6B] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#F23A2E]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-new-slider-c-add",
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
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
            ]
          },
          {
            "id": "fs-mid",
            "type": "section",
            "options": {
              "anchor": "app"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pt-3 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-mid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-mid-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-[#111111] p-7 sm:flex-row sm:items-center sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-mid-big",
                        "type": "text",
                        "options": {
                          "text": "NEW",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-10 right-10 font-heading font-stretch-expanded uppercase text-[10rem] font-black leading-none text-white/[0.05]"
                          }
                        }
                      },
                      {
                        "id": "fs-mid-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-mid-k",
                            "type": "text",
                            "options": {
                              "text": "Members only",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "self-start rounded-sm bg-[#FFD60A] px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[#111111]"
                              }
                            }
                          },
                          {
                            "id": "fs-mid-h",
                            "type": "heading",
                            "options": {
                              "text": "Get 15% off your first order",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-stretch-expanded uppercase text-2xl font-black tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "fs-mid-p",
                            "type": "text",
                            "options": {
                              "text": "Sign up free for the welcome code, early sale access and member-only drops.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm text-white/70 sm:text-base"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-mid-btn",
                        "type": "button",
                        "options": {
                          "text": "Sign up free",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconUserPlus",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#F23A2E] px-6 py-3 transition-colors hover:bg-[#D42A1F] shrink-0"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold uppercase tracking-wide text-white whitespace-nowrap"
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
            "id": "fs-jfy",
            "type": "section",
            "options": {
              "anchor": "just-for-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] pb-10 pt-3 sm:pb-14 sm:pt-4"
              }
            },
            "children": [
              {
                "id": "fs-jfy-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-[90rem] px-3 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-jfy-panel",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl bg-white p-4 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-jfy-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E7E9] pb-4 sm:mb-6"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-jfy-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-x-4 gap-y-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-jfy-h",
                                "type": "heading",
                                "options": {
                                  "text": "Just for you",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-xl font-black tracking-tight text-[#111111] sm:text-2xl"
                                  }
                                }
                              },
                              {
                                "id": "fs-jfy-sub",
                                "type": "text",
                                "options": {
                                  "text": "Picks based on what is popular this week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6B6B6B]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "fs-jfy-grid",
                        "type": "postGrid",
                        "options": {
                          "queryPrams": {
                            "post_type": [
                              "cmb_product"
                            ],
                            "order": "DESC",
                            "orderby": "date",
                            "posts_per_page": "18",
                            "taxQuery": []
                          }
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 2xl:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-jfy-grid-loop",
                            "type": "postLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 2xl:grid-cols-6"
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-jfy-grid-c-top",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-jfy-grid-c-media",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-jfy-grid-c-thumb",
                                        "type": "postThumbnail",
                                        "options": {
                                          "linkTo": "postUrl"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                        "id": "fs-jfy-grid-c-off",
                                        "type": "productDiscount",
                                        "options": {
                                          "label": "OFF"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                    "id": "fs-jfy-grid-c-info",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col gap-1 px-3 pt-3"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-jfy-grid-c-rate",
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
                                        "id": "fs-jfy-grid-c-title",
                                        "type": "postTitle",
                                        "options": {
                                          "linkTo": "postUrl",
                                          "tag": "h3"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-jfy-grid-c-ex",
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
                                "id": "fs-jfy-grid-c-foot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-jfy-grid-c-price",
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
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "simple-price-regular": {
                                        "classes": "text-[11px] text-[#6B6B6B] line-through"
                                      },
                                      "variable-price-wrap": {
                                        "classes": "flex items-baseline gap-1"
                                      },
                                      "variable-price-min": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "variable-price-max": {
                                        "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                      },
                                      "price-separator": {
                                        "classes": "text-gray-400"
                                      },
                                      "pwyw-price": {
                                        "classes": "text-2xl text-[#F23A2E]"
                                      },
                                      "pwyw-edit": {
                                        "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-jfy-grid-c-add",
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
                                        "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
                      },
                      {
                        "id": "fs-jfy-more",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-6 flex justify-center"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-jfy-btn",
                            "type": "button",
                            "options": {
                              "text": "Load more",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-[#111111] px-10 py-3 transition-colors hover:bg-[#111111] group"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#111111] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold uppercase tracking-wide text-[#111111] group-hover:text-white whitespace-nowrap"
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
            "id": "fs-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "All products",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop Everything",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Thousands of styles for women, men and kids, newest first.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-shop-grid-c-rate",
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
                                    "id": "fs-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-shop-grid-c-ex",
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
                            "id": "fs-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-shop-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-shop-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
                        "id": "fs-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-shop-promise",
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
                "id": "fs-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-shop-promise-fb",
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
                        "classes": "font-body text-base font-bold text-[#111111]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#111111]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-shop-promise-fb-ic",
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
                        "id": "fs-shop-promise-fb-t",
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
                        "id": "fs-shop-promise-fb-d",
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
            "id": "fs-pd",
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
                "id": "fs-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-pd-grid",
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
                        "id": "fs-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-pd-gallery",
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
                                "classes": "rounded-xl border-4 border-white bg-gradient-to-tr from-[#F2F2F2] via-white to-[#FFFFFF] p-4 shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#111111]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#111111]!"
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
                                "classes": "overflow-hidden rounded-lg border-2 border-transparent hover:border-[#F23A2E]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-pd-cats",
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
                                "classes": "rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-white"
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
                            "id": "fs-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold leading-tight text-[#111111] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "fs-pd-rate",
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
                                "classes": "font-body font-bold text-[#111111]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "fs-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-price",
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
                                    "classes": "font-heading font-stretch-expanded uppercase text-3xl font-black text-[#111111]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-3xl font-black text-[#111111]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading font-stretch-expanded uppercase text-3xl font-black text-[#111111]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#F23A2E] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "fs-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6B6B6B]"
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
                            "id": "fs-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#111111]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-lg border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#111111] transition-colors hover:border-[#111111] hover:bg-[#F2F2F2]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#111111] !bg-[#F2F2F2] !text-[#2B2B2B]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "fs-pd-stock",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#F23A2E]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#111111]"
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
                            "id": "fs-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-lg border-2 border-gray-200 bg-white px-3 text-[#111111]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F4F5]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F4F5]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-8 text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#D42A1F]"
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
                            "id": "fs-pd-perks",
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
                                "classes": "font-body text-base font-bold text-[#111111]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#111111]"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-perks-ic",
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
                                "id": "fs-pd-perks-t",
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
                                "id": "fs-pd-perks-d",
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
                            "id": "fs-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-sku",
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
                                    "classes": "font-semibold text-[#111111]"
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
                                "id": "fs-pd-brands",
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
                                    "classes": "font-semibold text-[#111111]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#F23A2E]"
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
                                "id": "fs-pd-tags",
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
                                    "classes": "font-semibold text-[#111111]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#F23A2E]"
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
            "id": "fs-pd-tabs-sec",
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
                "id": "fs-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-pd-tabs",
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
                              "icon": "IconHanger"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F4F5] px-5 py-2.5 font-body text-sm font-semibold text-[#111111] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#111111] !text-white shadow-md"
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
                            "id": "fs-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading font-stretch-expanded uppercase [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#111111] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading font-stretch-expanded uppercase [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#111111] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#F23A2E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD60A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconHanger",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Check the size chart in the photos: measurements are of the garment, laid flat",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Model sizes and heights are listed in the description where available",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Between sizes? For a relaxed fit, size up",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Follow the care label; wash dark colours separately the first time",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#111111]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-ship-list",
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
                                      "text": "Free delivery on orders over ৳1,500",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Unworn with tags? Return or exchange within 7 days",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#111111]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "fs-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F4F4F5] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F4F4F5] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "fs-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFEDEB]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#111111]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "fs-pd-reviews-rate",
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
                                        "id": "fs-pd-reviews-co",
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
                                    "id": "fs-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How was the fit and quality?",
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
                                        "classes": "font-body text-sm font-bold text-[#111111]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-lg border border-gray-200 bg-[#F4F4F5] px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#F23A2E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#D42A1F] disabled:opacity-50"
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
            "id": "fs-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-16"
              }
            },
            "children": [
              {
                "id": "fs-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "Similar products",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFEDEB] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You May Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "fs-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-pd-rel-c-rate",
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
                                    "id": "fs-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-pd-rel-c-ex",
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
                            "id": "fs-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-pd-rel-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-pd-rel-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
            "id": "fs-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Browse",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFEDEB] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#F23A2E]"
                      }
                    }
                  },
                  {
                    "id": "fs-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Women, men, kids, shoes, bags and more. Pick a category to start shopping.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-cat-grid",
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
                        "id": "fs-cat-grid-loop",
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
                            "id": "fs-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-lg bg-[#F2F2F2] transition-transform"
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
                            "id": "fs-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#111111] transition-colors group-hover:text-[#F23A2E]"
                              }
                            }
                          },
                          {
                            "id": "fs-cat-grid-count",
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
                        "id": "fs-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFEDEB] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#F23A2E]"
                      }
                    }
                  },
                  {
                    "id": "fs-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "fs-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111111] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-cat1-grid-c-rate",
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
                                    "id": "fs-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-cat1-grid-c-ex",
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
                            "id": "fs-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-cat1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-cat1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
                        "id": "fs-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Find It Fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFD60A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group products by trend, occasion and deal: sale, trending, party wear and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F23A2E]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F23A2E]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#111111] group-hover:text-[#F23A2E]"
                              }
                            }
                          },
                          {
                            "id": "fs-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F4F4F5] px-2 py-0.5 text-[10px] font-bold text-[#6B6B6B]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "fs-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFD60A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "fs-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111111] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-tag1-grid-c-rate",
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
                                    "id": "fs-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-tag1-grid-c-ex",
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
                            "id": "fs-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-tag1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-tag1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
                        "id": "fs-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Official stores",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every brand and verified seller on the marketplace, A to Z.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-brand-grid",
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
                        "id": "fs-brand-grid-loop",
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
                            "id": "fs-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F4F4F5] p-3"
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
                            "id": "fs-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#111111] group-hover:text-[#F23A2E]"
                              }
                            }
                          },
                          {
                            "id": "fs-brand-grid-count",
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
                        "id": "fs-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "fs-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " items",
                      "singularSuffix": " item"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#111111] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-brand1-grid-c-rate",
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
                                    "id": "fs-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-brand1-grid-c-ex",
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
                            "id": "fs-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-brand1-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-brand1-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
                        "id": "fs-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Style blog",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "The Style Feed",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Trend reports, outfit ideas and how-to-wear guides.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-blog-grid",
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
                        "id": "fs-blog-grid-loop",
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
                            "id": "fs-blog-grid-thumb",
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
                            "id": "fs-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                                  }
                                }
                              },
                              {
                                "id": "fs-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#111111] transition-colors group-hover:text-[#F23A2E]"
                                  }
                                }
                              },
                              {
                                "id": "fs-blog-grid-ex",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#F23A2E]"
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
                        "id": "fs-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#111111] transition-colors hover:border-[#F23A2E] hover:text-[#F23A2E]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#F23A2E] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "fs-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F4F4F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "fs-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-post-k",
                    "type": "text",
                    "options": {
                      "text": "The Style Feed",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold leading-tight text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6B6B6B]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-post-author",
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
                            "classes": "font-body font-bold text-[#111111]"
                          }
                        }
                      },
                      {
                        "id": "fs-post-dot",
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
                        "id": "fs-post-date",
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
                    "id": "fs-post-thumb",
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
            "id": "fs-post-body",
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
                "id": "fs-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading font-stretch-expanded uppercase [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#111111] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading font-stretch-expanded uppercase [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#111111] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#F23A2E] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD60A] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-16"
              }
            },
            "children": [
              {
                "id": "fs-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F4F4F5] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-xl border border-gray-100 bg-[#F4F4F5] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFEDEB]"
                              }
                            }
                          },
                          {
                            "id": "fs-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#111111]"
                              }
                            }
                          },
                          {
                            "id": "fs-post-cmt-co",
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
                        "id": "fs-post-cmt-form",
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
                            "classes": "font-body text-sm font-bold text-[#111111]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-lg border border-gray-200 bg-[#F4F4F5] px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#F23A2E] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#D42A1F] disabled:opacity-50"
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
            "id": "fs-post-more",
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
                "id": "fs-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From the Style Feed",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-post-more-grid",
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
                        "id": "fs-post-more-grid-loop",
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
                            "id": "fs-post-more-grid-thumb",
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
                            "id": "fs-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                                  }
                                }
                              },
                              {
                                "id": "fs-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#111111] transition-colors group-hover:text-[#F23A2E]"
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
            "id": "fs-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E7E7E9] bg-white py-8 sm:py-10"
              }
            },
            "children": [
              {
                "id": "fs-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "fs-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#F2F2F2] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-4xl font-bold text-[#111111] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "fs-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage returns and keep your addresses up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "fs-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-12"
              }
            },
            "children": [
              {
                "id": "fs-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#111111] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#FFD60A]"
                      },
                      "welcome-name": {
                        "classes": "font-heading font-stretch-expanded uppercase text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-lg bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#F23A2E]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#F23A2E]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#F23A2E]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "fs-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "fs-acc-3",
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
                                "id": "fs-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#D42A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "fs-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#D42A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "fs-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "fs-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F4F5] px-5 py-2.5 font-body text-sm font-semibold text-[#111111] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#111111] !text-white shadow-md"
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
                                "id": "fs-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F23A2E]/10 text-[#F23A2E]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "fs-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#F23A2E] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "fs-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F23A2E]/10 text-[#F23A2E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "fs-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#F23A2E]/40 hover:bg-[#F23A2E]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F23A2E]/10 text-[#F23A2E]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "fs-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F23A2E]/10 text-[#F23A2E]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#F23A2E] focus:outline-none focus:ring-2 focus:ring-[#F23A2E]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#D42A1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F23A2E]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "fs-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F4F4F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "fs-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(17,17,17,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F2F2] text-[#111111]"
                          }
                        }
                      },
                      {
                        "id": "fs-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFEDEB] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#F23A2E]"
                          }
                        }
                      },
                      {
                        "id": "fs-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Thank You for Your Order!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "fs-ty-p",
                        "type": "text",
                        "options": {
                          "text": "Your order is confirmed. A confirmation is on its way, and you can track every item from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "fs-ty-steps",
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
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-xl bg-[#F4F4F5] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#F23A2E]"
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
                        "id": "fs-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#D42A1F] w-full sm:w-auto"
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
                            "id": "fs-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#111111] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#111111] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#111111] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#111111] whitespace-nowrap group-hover:text-white"
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
            "id": "fs-ty-promise",
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
                "id": "fs-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-ty-promise-fb",
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
                        "classes": "font-body text-base font-bold text-[#111111]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#111111]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-ty-promise-fb-ic",
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
                        "id": "fs-ty-promise-fb-t",
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
                        "id": "fs-ty-promise-fb-d",
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
            "id": "fs-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F4F4F5] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "fs-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-8xl font-black text-[#F23A2E] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "fs-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-lg bg-[#FFFFFF] text-[#111111]"
                      }
                    }
                  },
                  {
                    "id": "fs-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "fs-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the product may no longer be available. Head back home or keep shopping.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6B6B6B] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "fs-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#F23A2E] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(242,58,46,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#D42A1F] w-full sm:w-auto"
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
                        "id": "fs-nf-shop",
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
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#111111] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#111111] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#111111] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#111111] whitespace-nowrap group-hover:text-white"
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
            "id": "fs-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F4F5] py-16"
              }
            },
            "children": [
              {
                "id": "fs-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "fs-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD60A] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#111111]"
                          }
                        }
                      },
                      {
                        "id": "fs-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-stretch-expanded uppercase text-3xl font-bold text-[#111111] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "fs-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                      }
                    },
                    "children": [
                      {
                        "id": "fs-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-[#E7E7E9] bg-white transition-all duration-200 hover:border-transparent hover:shadow-[0_10px_28px_-10px_rgba(17,17,17,0.28)]"
                          }
                        },
                        "children": [
                          {
                            "id": "fs-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden bg-[#F2F2F2]"
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
                                    "id": "fs-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[2] flex items-center gap-0.5 rounded-r-md bg-[#F23A2E] px-2 py-0.5 text-[11px] font-bold text-white"
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
                                "id": "fs-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-3 pt-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "fs-nf-grid-c-rate",
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
                                    "id": "fs-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.5em] font-body text-[13px] leading-snug text-[#111111] group-hover:underline"
                                      }
                                    }
                                  },
                                  {
                                    "id": "fs-nf-grid-c-ex",
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
                            "id": "fs-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-end justify-between gap-2 px-3 pb-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "fs-nf-grid-c-price",
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
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-[11px] text-[#6B6B6B] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-base font-extrabold text-[#F23A2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#F23A2E]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#F23A2E] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "fs-nf-grid-c-add",
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
                                    "classes": "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
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
