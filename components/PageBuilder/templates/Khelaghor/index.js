/**
 * Template: Khelaghor Kids Marketplace.
 *
 * A Bangla-language kids marketplace (khelaghor: "playhouse"): toys, baby
 * care, diapers, feeding, kidswear, shoes and bags, school supplies and
 * ride-ons from many sellers, with a flash sale, coupons, official brand
 * stores (Khelaghor Mall) and a "sell on Khelaghor" band. Every piece of
 * copy is Bangla. Like the other complete templates here it carries all
 * sixteen page types - Header, Footer, Home, Shop, Product, the six
 * taxonomy archives, Blog Archive, Blog Single, Account, Thank you and 404
 * - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to kg-, palette remapped,
 * copy translated to Bangla); the Header is rebuilt marketplace style and
 * Home is built fresh from the same block types. It is plain data: edit
 * freely.
 *
 * THE LOOK
 *
 * Toy alphabet blocks: rounded cubes with a shaded base and a Bangla letter
 * on the face (অ আ ক খ ...). One heads every section, one is the logo
 * mark (খ), and four stacked blocks, a beach ball and a balloon make the
 * hero art. They are plain CSS and Atma text, so there is no picture to
 * load. A crayon stripe (five crayon colours) runs under the header,
 * along the hero banner, the seller band and the other pages' heroes, and
 * shows along a product card's foot on hover.
 *
 * DESIGN
 *
 *   grape   #6C3CE9  primary: buttons, search, links      #5326C9 deep  #EFE9FE tint
 *   tomato  #FF5B3A  secondary: flash sale, prices, cart   #E0411F deep  #FFE9E3 tint
 *   lemon   #FFC83D  accent: chips, codes, ratings         #E8A400 deep  #FFF6DA tint
 *   mint #1DB57E  sky #2B9FE6  pink #FF5FA2 (category and age colours)
 *   lavender #F4F2FA (page)  ink #231A3D  muted #6E6886  line #E6E1F2
 *
 * Fonts (template meta): Atma (headings: rounded, playful, with Bangla)
 * and Noto Sans Bengali (body). Kickers are not upper-cased or tracked:
 * Bangla has no capitals and letter-spacing breaks its conjuncts.
 *
 * Product cards, marketplace style: dense, a lavender photo well, a tomato
 * discount tab on the left edge, a two-line name, the price in tomato, the
 * rating under it and a square grape cart button.
 *
 * HOME (every band is a white card on lavender, marketplace style)
 *
 *   Hero: a category sidebar (lg), the grape alphabet-block banner and two
 *   deal tiles (flash sale, free delivery), then eight quick links - flash
 *   sale with a slider of the flash-sale tag (#flash-sale) - categories,
 *   live product_cat terms as round tiles (#categories) - shop by age, five
 *   cards with Bangla numerals (#ages) - toys - coupons, three tickets
 *   (#coupons) - Khelaghor Mall, live product_brand terms with an
 *   "official store" badge (#mall) - baby care - kidswear - school & books
 *   (each a coloured promo panel beside a product slider) - just for you, a
 *   ten-product grid (#for-you) - trust strip - sell on Khelaghor (#sell) -
 *   parent reviews (#reviews) - parenting tips (#journal) - FAQ (#faq).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: toys, baby-care, diapering, feeding, kids-fashion,
 *     shoes-bags, school-books, ride-ons. Tag slugs: flash-sale, new,
 *     bestseller, gift, under-299, age-0-1, age-1-3, age-3-5, age-6-8,
 *     age-9-12. Brands are product_brand terms; give each a logo.
 *   - "Until midnight" on the flash sale is static text, not a timer.
 *   - Coupon codes KHELA10, FREEDEL and BABY150, the ৳999 free-delivery
 *     threshold, the 7-day returns, the seller figures (2,500+ sellers,
 *     0% commission in the first month), the hotline, the reviews and the
 *     "60% off" headline are sample copy: offer only what you actually run.
 *   - The cart drawer, login, register and account panels draw their own
 *     labels; translate those in the storefront's settings if they show
 *     English.
 */

var template = [
  {
    "name": "Khelaghor Kids Marketplace",
    "description": "Bangla kids marketplace in grape, tomato and lemon on soft lavender, with toy alphabet blocks (অ আ ক খ) and a crayon stripe; Atma and Noto Sans Bengali: a utility line, a wide search, a category bar, a hero with a category sidebar, an alphabet-block banner and deal tiles, quick links, flash sale, round category tiles, shop by age, category blocks with promo panels, coupons, Khelaghor Mall official brand stores, just for you, a seller band, parent reviews, parenting tips and FAQ. All copy in Bangla. All 16 pages.",
    "thumbnail": "/templates/khelaghor.svg",
    "meta": {
      "fonts": [
        {
          "family": "Atma",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Atma:wght@500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Noto Sans Bengali",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Atma",
        "body": "Noto Sans Bengali"
      },
      "colors": {
        "primary": "#6C3CE9",
        "secondary": "#FF5B3A",
        "accent": "#FFC83D",
        "background": "#F4F2FA",
        "foreground": "#231A3D",
        "muted": "#6E6886"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "kg-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-white shadow-[0_6px_20px_-16px_rgba(35,26,61,0.5)]"
              }
            },
            "children": [
              {
                "id": "kg-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-[#231A3D] px-4 py-2 text-center font-body text-xs text-white/80 sm:justify-between sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
                  }
                },
                "children": [
                  {
                    "id": "kg-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "সারা দেশে ক্যাশ অন ডেলিভারি · প্রথম অর্ডারে ১০% ছাড়, কোড",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "kg-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "KHELA10",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-[6px] bg-[#FFC83D] px-2 py-0.5 font-mono text-[11px] font-bold text-[#231A3D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kg-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "খেলাঘরে বিক্রি করুন",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#sell",
                      "target": "",
                      "icon": "IconBuildingStore",
                      "iconSize": 14
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "hidden items-center gap-1.5 sm:inline-flex"
                      },
                      "icon": {
                        "classes": "flex text-[#FFC83D]"
                      },
                      "label": {
                        "classes": "font-body text-xs font-semibold text-white hover:underline underline-offset-4"
                      }
                    }
                  }
                ]
              },
              {
                "id": "kg-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[72px] items-center justify-between gap-3 sm:gap-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2.5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "খ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-2xl rounded-[13px] bg-[#FF5B3A] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6 transition-transform duration-300 group-hover:rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "খেলাঘর",
                                  "src": "https://placehold.co/200x64?text=Khelaghor",
                                  "altText": "খেলাঘর - শিশুদের অনলাইন মার্কেটপ্লেস",
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
                                    "classes": "font-heading text-[28px] font-bold leading-none text-[#6C3CE9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "শিশুদের অনলাইন মার্কেটপ্লেস",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-0.5 hidden font-body text-[11px] font-medium leading-none text-[#6E6886] sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kg-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "খেলনা, ডায়াপার, জামা, ব্র্যান্ড খুঁজুন...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden max-w-2xl flex-1 rounded-[14px] bg-[#F4F2FA] py-1 pl-1 pr-1 ring-2 ring-[#6C3CE9] transition-all focus-within:bg-white sm:block"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1.5 font-body text-sm text-[#231A3D] placeholder:text-[#6E6886] focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex h-9 w-11 items-center justify-center rounded-[10px] bg-[#6C3CE9] text-white"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#6C3CE9]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#6C3CE9]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#6C3CE9] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#5326C9]"
                          }
                        }
                      },
                      {
                        "id": "kg-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-[14px] bg-[#F4F2FA] text-[#231A3D] transition-colors hover:bg-[#EFE9FE] hover:text-[#6C3CE9]"
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
                            "id": "kg-hdr-cart",
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
                              "crossSellsTitle": "একসাথে প্রায়ই কেনা হয়",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-[14px] bg-[#FF5B3A] text-white shadow-[inset_0_-4px_0_#E0411F] transition-colors hover:bg-[#E0411F]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#6C3CE9] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F4F2FA] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#231A3D]"
                              },
                              "title-icon": {
                                "classes": "text-[#6C3CE9]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#6C3CE9] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#6C3CE9] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5326C9]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#6C3CE9] px-4 py-2 text-sm font-medium text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#6C3CE9] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5326C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "kg-hdr-mobile",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-[14px] bg-[#F4F2FA] text-[#231A3D]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F4F2FA] p-2 text-[#231A3D] transition-colors hover:bg-[#6C3CE9] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2.5 pb-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "খ",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-2xl rounded-[13px] bg-[#FF5B3A] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6 transition-transform duration-300 group-hover:rotate-6"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "খেলাঘর",
                                          "src": "https://placehold.co/200x64?text=Khelaghor",
                                          "altText": "খেলাঘর - শিশুদের অনলাইন মার্কেটপ্লেস",
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
                                            "classes": "font-heading text-[28px] font-bold leading-none text-[#6C3CE9]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "শিশুদের অনলাইন মার্কেটপ্লেস",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "mt-0.5 block font-body text-[11px] font-medium leading-none text-[#6E6886]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "kg-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "খেলাঘরে খুঁজুন...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F4F2FA] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#FF5B3A] focus-within:ring-2 focus-within:ring-[#FF5B3A]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#231A3D] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#6E6886]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#6C3CE9]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#6C3CE9]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#6C3CE9] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#5326C9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-hdr-m-menu",
                                "type": "menu",
                                "options": {
                                  "showFrom": "all",
                                  "label": "মোবাইল মেনু"
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
                                    "classes": "!justify-start !gap-3 border-b border-dashed border-[#E6E1F2] py-3 font-body text-base font-semibold text-[#231A3D]"
                                  },
                                  "link-label": {
                                    "classes": ""
                                  },
                                  "icon": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#F4F2FA]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "খেলনা",
                                      "url": "/categories/toys",
                                      "icon": "IconHorseToy",
                                      "iconSize": 18
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
                                        "classes": "!text-[#FF5B3A]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "বেবি কেয়ার",
                                      "url": "/categories/baby-care",
                                      "icon": "IconBabyBottle",
                                      "iconSize": 18
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
                                        "classes": "!text-[#FF5FA2]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "শিশুর পোশাক",
                                      "url": "/categories/kids-fashion",
                                      "icon": "IconShirt",
                                      "iconSize": 18
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
                                        "classes": "!text-[#2B9FE6]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "স্কুল ও বই",
                                      "url": "/categories/school-books",
                                      "icon": "IconBackpack",
                                      "iconSize": 18
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
                                        "classes": "!text-[#1DB57E]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "রাইড ও সাইকেল",
                                      "url": "/categories/ride-ons",
                                      "icon": "IconBike",
                                      "iconSize": 18
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
                                        "classes": "!text-[#FF5B3A]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "বয়স অনুযায়ী",
                                      "url": "/#ages",
                                      "icon": "IconMoodKid",
                                      "iconSize": 18
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
                                        "classes": "!text-[#E8A400]"
                                      },
                                      "sub-menu": {
                                        "classes": ""
                                      }
                                    },
                                    "children": []
                                  },
                                  {
                                    "id": "kg-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "ব্র্যান্ড মল",
                                      "url": "/brands",
                                      "icon": "IconCrown",
                                      "iconSize": 18
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
                                        "classes": "!text-[#6C3CE9]"
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
                "id": "kg-hdr-nav",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "hidden border-t border-[#E6E1F2] bg-white lg:block"
                  }
                },
                "children": [
                  {
                    "id": "kg-hdr-nav-in",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-12 items-center gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-hdr-allcats",
                        "type": "button",
                        "options": {
                          "text": "সব ক্যাটাগরি",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconLayoutGrid",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-[12px] bg-[#6C3CE9] px-4 shadow-[inset_0_-3px_0_#5326C9] transition-colors hover:bg-[#5326C9]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-white whitespace-nowrap"
                          }
                        }
                      },
                      {
                        "id": "kg-hdr-menu",
                        "type": "menu",
                        "options": {
                          "showFrom": "lg",
                          "label": "প্রধান মেনু"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0"
                          },
                          "menu": {
                            "classes": "flex items-center gap-0.5"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "!gap-1.5 whitespace-nowrap rounded-[10px] px-2.5 py-1.5 font-body text-sm font-semibold text-[#231A3D] transition-colors"
                          },
                          "link-label": {
                            "classes": ""
                          },
                          "icon": {
                            "classes": "hidden items-center xl:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "খেলনা",
                              "url": "/categories/toys",
                              "icon": "IconHorseToy",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#FFE9E3] hover:!text-[#FF5B3A]"
                              },
                              "icon": {
                                "classes": "!text-[#FF5B3A]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "বেবি কেয়ার",
                              "url": "/categories/baby-care",
                              "icon": "IconBabyBottle",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#FFE6F1] hover:!text-[#FF5FA2]"
                              },
                              "icon": {
                                "classes": "!text-[#FF5FA2]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "শিশুর পোশাক",
                              "url": "/categories/kids-fashion",
                              "icon": "IconShirt",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#E1F1FC] hover:!text-[#2B9FE6]"
                              },
                              "icon": {
                                "classes": "!text-[#2B9FE6]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "স্কুল ও বই",
                              "url": "/categories/school-books",
                              "icon": "IconBackpack",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#DDF6EC] hover:!text-[#1DB57E]"
                              },
                              "icon": {
                                "classes": "!text-[#1DB57E]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "রাইড ও সাইকেল",
                              "url": "/categories/ride-ons",
                              "icon": "IconBike",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#FFE9E3] hover:!text-[#FF5B3A]"
                              },
                              "icon": {
                                "classes": "!text-[#FF5B3A]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "বয়স অনুযায়ী",
                              "url": "/#ages",
                              "icon": "IconMoodKid",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#FFF6DA] hover:!text-[#E8A400]"
                              },
                              "icon": {
                                "classes": "!text-[#E8A400]"
                              },
                              "sub-menu": {
                                "classes": ""
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "ব্র্যান্ড মল",
                              "url": "/brands",
                              "icon": "IconCrown",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "label": {
                                "classes": ""
                              },
                              "link": {
                                "classes": "hover:!bg-[#EFE9FE] hover:!text-[#6C3CE9]"
                              },
                              "icon": {
                                "classes": "!text-[#6C3CE9]"
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
                        "id": "kg-hdr-nav-sp",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex-1"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "kg-hdr-flash",
                        "type": "button",
                        "options": {
                          "text": "ফ্ল্যাশ সেল",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#flash-sale",
                          "target": "",
                          "icon": "IconBolt",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-[12px] bg-[#FFE9E3] px-3.5 transition-colors hover:bg-[#FF5B3A]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#FF5B3A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#E0411F] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "kg-hdr-crayon",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "h-1.5 w-full bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
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
            "id": "kg-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#231A3D] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "kg-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "kg-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[28px] bg-[#6C3CE9] p-7 sm:p-10 lg:flex-row lg:items-center"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "খেলাঘর ক্লাব",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-body text-sm font-semibold text-[#FFC83D]"
                              }
                            }
                          },
                          {
                            "id": "kg-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "প্রথম অর্ডারে ১০% ছাড়!",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold text-3xl leading-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "kg-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "ফ্রি অ্যাকাউন্ট খুলুন: স্বাগত কুপন, বয়স অনুযায়ী খেলনার গাইড আর জন্মদিনের অফার পাবেন।",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm leading-relaxed text-white/80"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "অ্যাকাউন্ট খুলুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#FFC83D] px-6 py-3.5 shadow-[inset_0_-4px_0_#E8A400] transition-all hover:brightness-105"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#231A3D]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#231A3D] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "kg-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "kg-ftr-grid",
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
                        "id": "kg-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "খ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-2xl rounded-[13px] bg-[#FF5B3A] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6 transition-transform duration-300 group-hover:rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "খেলাঘর",
                                      "src": "https://placehold.co/200x64?text=Khelaghor",
                                      "altText": "খেলাঘর - শিশুদের অনলাইন মার্কেটপ্লেস",
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
                                        "classes": "font-heading text-[28px] font-bold leading-none text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "শিশুদের খেলনা, পোশাক, বেবি কেয়ার আর স্কুলের সব কিছু এক জায়গায়। যাচাই করা বিক্রেতা, আসল পণ্য, সারা দেশে ক্যাশ অন ডেলিভারি।",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "kg-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#6C3CE9]"
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
                                "id": "kg-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#6C3CE9]"
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
                                "id": "kg-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#6C3CE9]"
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
                                "id": "kg-ftr-pin",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://wa.me/",
                                  "target": "_blank",
                                  "icon": "IconBrandWhatsapp",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#6C3CE9]"
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
                        "id": "kg-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "কেনাকাটা",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "খেলনা",
                                  "icon": "",
                                  "slug": "/categories/toys"
                                },
                                {
                                  "text": "বেবি কেয়ার",
                                  "icon": "",
                                  "slug": "/categories/baby-care"
                                },
                                {
                                  "text": "শিশুর পোশাক",
                                  "icon": "",
                                  "slug": "/categories/kids-fashion"
                                },
                                {
                                  "text": "স্কুল ও বই",
                                  "icon": "",
                                  "slug": "/categories/school-books"
                                },
                                {
                                  "text": "সব ক্যাটাগরি",
                                  "icon": "",
                                  "slug": "/categories"
                                },
                                {
                                  "text": "খেলাঘর মল",
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
                                "classes": "font-heading text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#FFC83D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC83D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "গ্রাহক সেবা",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "অর্ডার ট্র্যাক করুন",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "আমার অ্যাকাউন্ট",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "ডেলিভারি ও রিটার্ন",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "খেলাঘরে বিক্রি করুন",
                                  "icon": "",
                                  "slug": "/#sell"
                                },
                                {
                                  "text": "প্যারেন্টিং ব্লগ",
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
                                "classes": "font-heading text-base font-bold text-white"
                              },
                              "ul": {
                                "classes": "flex flex-col gap-2"
                              },
                              "li": {
                                "classes": "list-none"
                              },
                              "link": {
                                "classes": "transition-colors hover:text-[#FFC83D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFC83D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ftr-contact-h",
                            "type": "heading",
                            "options": {
                              "text": "যোগাযোগ",
                              "tag": "h4"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-white"
                              }
                            }
                          },
                          {
                            "id": "kg-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "ফোন",
                                "value": "+880 9612-345678"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "ইমেইল",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconMapPin",
                                "label": "ঠিকানা",
                                "value": "ঢাকা, বাংলাদেশ",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFC83D]"
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
                                "classes": "shrink-0 text-[#6C3CE9]"
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
                "id": "kg-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "kg-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© ২০২৬ খেলাঘর। সর্বস্বত্ব সংরক্ষিত। শিশুদের হাসির জন্য ভালোবাসা দিয়ে তৈরি।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "kg-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "ক্যাশ অন ডেলিভারি · বিকাশ · নগদ · কার্ড",
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
            "id": "kg-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] pb-4 pt-4 lg:pt-6"
              }
            },
            "children": [
              {
                "id": "kg-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-hero-cats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden flex-col gap-0.5 rounded-[24px] bg-white p-3 ring-1 ring-[#E6E1F2] lg:col-span-3 lg:flex"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hero-cats-h",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2 px-2.5 pb-2 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hero-cats-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconLayoutGrid",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex text-[#6C3CE9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-cats-t",
                                "type": "text",
                                "options": {
                                  "text": "ক্যাটাগরি",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-lg text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-hero-cat-1",
                            "type": "button",
                            "options": {
                              "text": "খেলনা",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/toys",
                              "target": "",
                              "icon": "IconHorseToy",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#FFE9E3]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFE9E3] text-[#FF5B3A]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-2",
                            "type": "button",
                            "options": {
                              "text": "বেবি কেয়ার",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/baby-care",
                              "target": "",
                              "icon": "IconBabyBottle",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#FFE6F1]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFE6F1] text-[#FF5FA2]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-3",
                            "type": "button",
                            "options": {
                              "text": "ডায়াপার ও ওয়াইপস",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/diapering",
                              "target": "",
                              "icon": "IconBabyCarriage",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#E1F1FC]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#E1F1FC] text-[#2B9FE6]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-4",
                            "type": "button",
                            "options": {
                              "text": "খাবার ও ফিডিং",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/feeding",
                              "target": "",
                              "icon": "IconBottle",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#FFF6DA]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF6DA] text-[#E8A400]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-5",
                            "type": "button",
                            "options": {
                              "text": "শিশুর পোশাক",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kids-fashion",
                              "target": "",
                              "icon": "IconShirt",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#EFE9FE]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#EFE9FE] text-[#6C3CE9]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-6",
                            "type": "button",
                            "options": {
                              "text": "জুতা ও ব্যাগ",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/shoes-bags",
                              "target": "",
                              "icon": "IconShoe",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#DDF6EC]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#DDF6EC] text-[#1DB57E]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-7",
                            "type": "button",
                            "options": {
                              "text": "স্কুল ও বই",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/school-books",
                              "target": "",
                              "icon": "IconBackpack",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#E1F1FC]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#E1F1FC] text-[#2B9FE6]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cat-8",
                            "type": "button",
                            "options": {
                              "text": "রাইড ও সাইকেল",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/ride-ons",
                              "target": "",
                              "icon": "IconBike",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex w-full cursor-pointer items-center gap-3 rounded-[14px] px-2.5 py-2 transition-colors hover:bg-[#FFE9E3]"
                              },
                              "icon": {
                                "classes": "flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFE9E3] text-[#FF5B3A]"
                              },
                              "label": {
                                "classes": "flex-1 text-left font-body text-sm font-semibold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-hero-cats-all",
                            "type": "button",
                            "options": {
                              "text": "সব ক্যাটাগরি দেখুন",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group mt-1 flex w-full cursor-pointer items-center justify-center gap-1 rounded-[14px] border-2 border-dashed border-[#E6E1F2] px-3 py-2 transition-colors hover:border-[#6C3CE9] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#6C3CE9] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#6C3CE9] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-hero-banner",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#6C3CE9] p-6 sm:min-h-[400px] sm:p-9 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hero-dots",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1.5px,transparent_2px)] bg-[length:22px_22px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hero-glow",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF5FA2]/40 blur-3xl"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-hero-copy",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-[2] flex max-w-[22rem] flex-col items-start gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hero-chip",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-[#FFC83D] py-1 pl-1.5 pr-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hero-chip-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconConfetti",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#231A3D] text-[#FFC83D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-chip-t",
                                    "type": "text",
                                    "options": {
                                      "text": "মেগা খেলনা উৎসব",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-bold text-[#231A3D]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "সব খেলনায় ৬০% পর্যন্ত ছাড়",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-[40px] leading-[1.15] text-white sm:text-5xl"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-p",
                                "type": "text",
                                "options": {
                                  "text": "৫০০+ ব্র্যান্ডের খেলনা, পোশাক আর বেবি পণ্য। সারা দেশে ক্যাশ অন ডেলিভারি।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xs text-[15px] leading-relaxed text-white/85"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-btns",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-3 pt-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hero-btn-1",
                                    "type": "button",
                                    "options": {
                                      "text": "এখনই কিনুন",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/shop",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#FFC83D] px-6 py-3.5 shadow-[inset_0_-4px_0_#E8A400] transition-all hover:brightness-105 flex-row-reverse"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#231A3D]"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D] whitespace-nowrap"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-btn-2",
                                    "type": "button",
                                    "options": {
                                      "text": "ফ্ল্যাশ সেল",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#flash-sale",
                                      "target": "",
                                      "icon": "IconBolt",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white/15 px-6 py-3.5 ring-1 ring-white/30 transition-colors hover:bg-white/25"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#FFC83D]"
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
                            "id": "kg-hero-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none relative z-[1] -mb-2 ml-auto h-[200px] w-[260px] sm:absolute sm:bottom-6 sm:right-6 sm:mb-0 sm:h-[250px] sm:w-[300px] lg:right-4 lg:w-[270px] xl:right-8 xl:w-[300px]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hero-b1",
                                "type": "text",
                                "options": {
                                  "text": "অ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute bottom-0 left-[14%] -rotate-3 flex items-center justify-center rounded-[20px] bg-[#FF5B3A] pt-2 font-heading font-bold leading-none text-white shadow-[inset_0_-10px_0_rgba(0,0,0,0.16),inset_0_3px_0_rgba(255,255,255,0.35),0_18px_24px_-14px_rgba(20,8,60,0.7)] ring-4 ring-white/25 h-20 w-20 text-5xl sm:h-24 sm:w-24 sm:text-6xl"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-b2",
                                "type": "text",
                                "options": {
                                  "text": "আ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute bottom-0 left-[46%] rotate-2 flex items-center justify-center rounded-[20px] bg-[#FFC83D] pt-2 font-heading font-bold leading-none text-white shadow-[inset_0_-10px_0_rgba(0,0,0,0.16),inset_0_3px_0_rgba(255,255,255,0.35),0_18px_24px_-14px_rgba(20,8,60,0.7)] ring-4 ring-white/25 h-20 w-20 text-5xl sm:h-24 sm:w-24 sm:text-6xl"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-b3",
                                "type": "text",
                                "options": {
                                  "text": "ক",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute bottom-[76px] left-[30%] rotate-[8deg] sm:bottom-[92px] flex items-center justify-center rounded-[20px] bg-[#1DB57E] pt-2 font-heading font-bold leading-none text-white shadow-[inset_0_-10px_0_rgba(0,0,0,0.16),inset_0_3px_0_rgba(255,255,255,0.35),0_18px_24px_-14px_rgba(20,8,60,0.7)] ring-4 ring-white/25 h-20 w-20 text-5xl sm:h-24 sm:w-24 sm:text-6xl"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-b4",
                                "type": "text",
                                "options": {
                                  "text": "খ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute bottom-[150px] left-[40%] -rotate-[10deg] sm:bottom-[180px] flex items-center justify-center rounded-[20px] bg-[#2B9FE6] pt-2 font-heading font-bold leading-none text-white shadow-[inset_0_-10px_0_rgba(0,0,0,0.16),inset_0_3px_0_rgba(255,255,255,0.35),0_18px_24px_-14px_rgba(20,8,60,0.7)] ring-4 ring-white/25 h-14 w-14 text-3xl sm:h-16 sm:w-16 sm:text-4xl"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-ball",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute bottom-0 right-0 h-14 w-14 rounded-full bg-[conic-gradient(#FF5B3A_0_60deg,#FFFFFF_60deg_120deg,#2B9FE6_120deg_180deg,#FFFFFF_180deg_240deg,#FFC83D_240deg_300deg,#FFFFFF_300deg)] shadow-[inset_-6px_-6px_0_rgba(0,0,0,0.12),0_10px_16px_-10px_rgba(20,8,60,0.7)] sm:h-16 sm:w-16"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kg-hero-balloon",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBalloon",
                                  "size": 54,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute right-[6%] top-0 flex text-[#FF5FA2] animate-[bounce_3.5s_ease-in-out_infinite] drop-shadow-[0_8px_8px_rgba(20,8,60,0.35)]"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-star",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconSparkles",
                                  "size": 30,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute right-[2%] top-[40%] flex text-[#FFC83D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-hero-crayon",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute inset-x-0 bottom-0 h-2 bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#FF5FA2_80%_100%)]"
                              }
                            },
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "kg-hero-deals",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-4 lg:col-span-3 lg:flex lg:flex-col"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-hero-d1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-[#FF5B3A] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hero-d1-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBolt",
                                  "size": 96,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-4 -right-3 flex rotate-[-12deg] text-white/20 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-d1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hero-d1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "প্রতিদিন রাত ১২টায়",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-white/80"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-d1-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "ফ্ল্যাশ সেল",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-d1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "নতুন ডিল, সীমিত স্টক",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/85"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-hero-d1-btn",
                                "type": "button",
                                "options": {
                                  "text": "দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#flash-sale",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative mt-3 inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-1.5 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#E0411F] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#E0411F] whitespace-nowrap"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-hero-d2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-[#1DB57E] p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-hero-d2-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 96,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-4 -right-3 flex rotate-[-12deg] text-white/20 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "kg-hero-d2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-hero-d2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "৯৯৯৳ বা তার বেশি অর্ডারে",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-white/80"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-d2-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "ফ্রি ডেলিভারি",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-hero-d2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "সারা দেশের ৬৪ জেলায়",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-white/85"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-hero-d2-btn",
                                "type": "button",
                                "options": {
                                  "text": "কিনুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative mt-3 inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-1.5 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#0F8A5C] transition-transform group-hover:translate-x-0.5"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#0F8A5C] whitespace-nowrap"
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
                    "id": "kg-quick",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 grid grid-cols-4 gap-x-2 gap-y-4 rounded-[24px] bg-white px-3 py-4 ring-1 ring-[#E6E1F2] sm:px-5 lg:grid-cols-8"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-quick-1",
                        "type": "button",
                        "options": {
                          "text": "ফ্ল্যাশ সেল",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#flash-sale",
                          "target": "",
                          "icon": "IconBolt",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFE9E3] text-[#FF5B3A] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-2",
                        "type": "button",
                        "options": {
                          "text": "নতুন এসেছে",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new",
                          "target": "",
                          "icon": "IconSparkles",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#DDF6EC] text-[#1DB57E] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-3",
                        "type": "button",
                        "options": {
                          "text": "২৯৯৳ এর নিচে",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/under-299",
                          "target": "",
                          "icon": "IconCoin",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFF6DA] text-[#E8A400] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-4",
                        "type": "button",
                        "options": {
                          "text": "ব্র্যান্ড মল",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/brands",
                          "target": "",
                          "icon": "IconCrown",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#EFE9FE] text-[#6C3CE9] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-5",
                        "type": "button",
                        "options": {
                          "text": "উপহার",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/gift",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFE6F1] text-[#FF5FA2] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-6",
                        "type": "button",
                        "options": {
                          "text": "কুপন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#coupons",
                          "target": "",
                          "icon": "IconTicket",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E1F1FC] text-[#2B9FE6] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-7",
                        "type": "button",
                        "options": {
                          "text": "বেস্টসেলার",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/bestseller",
                          "target": "",
                          "icon": "IconFlame",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFE9E3] text-[#FF5B3A] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
                          }
                        }
                      },
                      {
                        "id": "kg-quick-8",
                        "type": "button",
                        "options": {
                          "text": "বয়স অনুযায়ী",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/#ages",
                          "target": "",
                          "icon": "IconMoodKid",
                          "iconSize": 24
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex cursor-pointer flex-col items-center gap-2 text-center"
                          },
                          "icon": {
                            "classes": "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#DDF6EC] text-[#1DB57E] shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
                          },
                          "label": {
                            "classes": "font-body text-xs font-semibold leading-tight text-[#231A3D] sm:text-[13px]"
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
            "id": "kg-flash",
            "type": "section",
            "options": {
              "anchor": "flash-sale"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-flash-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-flash-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "overflow-hidden rounded-[28px] bg-white ring-1 ring-[#E6E1F2]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-flash-band",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap items-center justify-between gap-3 overflow-hidden bg-[#FF5B3A] px-4 py-3.5 sm:px-6"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-flash-zig",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0_12px,transparent_12px_24px)]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "kg-flash-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-flash-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBolt",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FFC83D] text-[#231A3D] shadow-[inset_0_-3px_0_#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-flash-h",
                                "type": "heading",
                                "options": {
                                  "text": "ফ্ল্যাশ সেল",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-2xl text-white sm:text-[28px]"
                                  }
                                }
                              },
                              {
                                "id": "kg-flash-when",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5 rounded-full bg-black/15 px-3 py-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-flash-when-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconClock",
                                      "size": 14,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-flash-when-t",
                                    "type": "text",
                                    "options": {
                                      "text": "আজ রাত ১২টা পর্যন্ত",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-flash-all",
                            "type": "button",
                            "options": {
                              "text": "সব ডিল",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/tags/flash-sale",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative inline-flex cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-1.5 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#E0411F] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#E0411F] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-flash-body",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "p-3 sm:p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-flash-slider",
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
                                "perPage": 5,
                                "perMove": 1,
                                "gap": "0.875rem",
                                "arrows": true,
                                "pagination": false,
                                "rewind": false,
                                "mediaQuery": "max",
                                "breakpoints": {
                                  "479": {
                                    "perPage": 2,
                                    "gap": "0.625rem",
                                    "arrows": false
                                  },
                                  "767": {
                                    "perPage": 2,
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
                                "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-3 [&_.splide__track]:!pt-1"
                              },
                              "arrows-wrap": {
                                "classes": ""
                              },
                              "arrow-item": {
                                "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
                              },
                              "arrow-prev": {
                                "classes": "!-left-3 !top-[38%]"
                              },
                              "arrow-next": {
                                "classes": "!-right-3 !top-[38%]"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-flash-slider-loop",
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
                                    "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-flash-slider-c-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-flash-slider-c-media",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-flash-slider-c-thumb",
                                            "type": "postThumbnail",
                                            "options": {
                                              "linkTo": "postUrl"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                              },
                                              "link": {
                                                "classes": "block"
                                              },
                                              "image": {
                                                "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-flash-slider-c-off",
                                            "type": "productDiscount",
                                            "options": {
                                              "label": "ছাড়"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                        "id": "kg-flash-slider-c-info",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-flash-slider-c-rate",
                                            "type": "productRatings",
                                            "options": {
                                              "hideIfEmpty": true
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                              },
                                              "star-rate": {
                                                "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                                "classes": "hidden"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-flash-slider-c-title",
                                            "type": "postTitle",
                                            "options": {
                                              "linkTo": "postUrl",
                                              "tag": "h3"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-flash-slider-c-ex",
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
                                    "id": "kg-flash-slider-c-foot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-flash-slider-c-price",
                                        "type": "productPrice",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "simple-price-wrap": {
                                            "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                          },
                                          "simple-price-sale": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "simple-price-regular": {
                                            "classes": "font-body text-xs text-[#6E6886] line-through"
                                          },
                                          "variable-price-wrap": {
                                            "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                          },
                                          "variable-price-min": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "variable-price-max": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "price-separator": {
                                            "classes": "text-[#6E6886]"
                                          },
                                          "pwyw-price": {
                                            "classes": "text-2xl text-[#6C3CE9]"
                                          },
                                          "pwyw-edit": {
                                            "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-flash-slider-c-add",
                                        "type": "addToCart",
                                        "options": {
                                          "buttonText": "কার্টে যোগ করুন",
                                          "hideQuantity": true,
                                          "hideButton": false,
                                          "icon": "IconShoppingCartPlus",
                                          "iconSize": 19
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "button-wrapper": {
                                            "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
              }
            ]
          },
          {
            "id": "kg-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-cats-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E6E1F2] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-cats-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-cats-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cats-k",
                                "type": "text",
                                "options": {
                                  "text": "ক",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#6C3CE9] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-cats-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cats-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "ক্যাটাগরি অনুযায়ী কিনুন",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-cats-all",
                            "type": "button",
                            "options": {
                              "text": "সব ক্যাটাগরি",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-[#EFE9FE] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#6C3CE9] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#6C3CE9] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-cats-grid",
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
                            "classes": "grid grid-cols-4 gap-x-3 gap-y-5 lg:grid-cols-8"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col items-center gap-1.5 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-cats-grid-loop",
                            "type": "termsLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-4 gap-x-3 gap-y-5 lg:grid-cols-8"
                              },
                              "loop-item": {
                                "classes": "group flex flex-col items-center gap-1.5 text-center"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cats-grid-thumb",
                                "type": "termThumbnail",
                                "options": {
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "block w-full overflow-hidden rounded-full bg-[#F4F2FA] ring-4 ring-[#EFE9FE] transition-all duration-300 group-hover:ring-[#6C3CE9]"
                                  },
                                  "link": {
                                    "classes": "block h-full w-full"
                                  },
                                  "image": {
                                    "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  }
                                }
                              },
                              {
                                "id": "kg-cats-grid-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h4",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-xs font-semibold leading-tight text-[#231A3D] transition-colors group-hover:text-[#6C3CE9] sm:text-sm"
                                  }
                                }
                              },
                              {
                                "id": "kg-cats-grid-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": "টি পণ্য",
                                  "singularSuffix": "টি পণ্য",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden font-body text-[11px] text-[#6E6886] sm:block"
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
            "id": "kg-ages",
            "type": "section",
            "options": {
              "anchor": "ages"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-ages-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-ages-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E6E1F2] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-ages-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ages-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-ages-k",
                                "type": "text",
                                "options": {
                                  "text": "খ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#1DB57E] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-ages-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-ages-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "বয়স অনুযায়ী খেলনা",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-ages-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "বাচ্চার বয়স বেছে নিন, বাকিটা আমরা সাজিয়ে দেব।",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6E6886]"
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
                        "id": "kg-ages-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-age-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#FFE6F1] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-age-1-ch",
                                "type": "text",
                                "options": {
                                  "text": "অ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-3 -right-1 flex h-14 w-14 rotate-12 items-center justify-center rounded-[16px] bg-[#FF5FA2] pt-1 font-heading text-4xl sm:h-20 sm:w-20 sm:rounded-[18px] sm:text-5xl font-bold text-white opacity-90 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "kg-age-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-age-1-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "০-১ বছর",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-0-1",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-fit cursor-pointer items-baseline"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-heading font-bold text-[28px] leading-tight text-[#FF5FA2]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "নবজাতক ও শিশু",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "র‍্যাটল, টিদার, নরম খেলনা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[9.5rem] pr-6 pt-0.5 sm:pr-0 text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-age-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#FFF6DA] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-age-2-ch",
                                "type": "text",
                                "options": {
                                  "text": "আ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-3 -right-1 flex h-14 w-14 rotate-12 items-center justify-center rounded-[16px] bg-[#E8A400] pt-1 font-heading text-4xl sm:h-20 sm:w-20 sm:rounded-[18px] sm:text-5xl font-bold text-white opacity-90 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "kg-age-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-age-2-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "১-৩ বছর",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-1-3",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-fit cursor-pointer items-baseline"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-heading font-bold text-[28px] leading-tight text-[#E8A400]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "হাঁটি হাঁটি পা পা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "স্ট্যাকার, পুশ টয়, ছবির বই",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[9.5rem] pr-6 pt-0.5 sm:pr-0 text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-age-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#DDF6EC] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-age-3-ch",
                                "type": "text",
                                "options": {
                                  "text": "ক",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-3 -right-1 flex h-14 w-14 rotate-12 items-center justify-center rounded-[16px] bg-[#1DB57E] pt-1 font-heading text-4xl sm:h-20 sm:w-20 sm:rounded-[18px] sm:text-5xl font-bold text-white opacity-90 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "kg-age-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-age-3-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "৩-৫ বছর",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-3-5",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-fit cursor-pointer items-baseline"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-heading font-bold text-[28px] leading-tight text-[#1DB57E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "ছোট্ট আবিষ্কারক",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "পাজল, ব্লক, রং-তুলি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[9.5rem] pr-6 pt-0.5 sm:pr-0 text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-age-4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#E1F1FC] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-age-4-ch",
                                "type": "text",
                                "options": {
                                  "text": "খ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-3 -right-1 flex h-14 w-14 rotate-12 items-center justify-center rounded-[16px] bg-[#2B9FE6] pt-1 font-heading text-4xl sm:h-20 sm:w-20 sm:rounded-[18px] sm:text-5xl font-bold text-white opacity-90 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "kg-age-4-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-age-4-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "৬-৮ বছর",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-6-8",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-fit cursor-pointer items-baseline"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-heading font-bold text-[28px] leading-tight text-[#2B9FE6]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-4-k",
                                    "type": "text",
                                    "options": {
                                      "text": "স্কুলের বন্ধু",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-4-p",
                                    "type": "text",
                                    "options": {
                                      "text": "বিজ্ঞান কিট, বোর্ড গেম",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[9.5rem] pr-6 pt-0.5 sm:pr-0 text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-age-5",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#EFE9FE] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 col-span-2 sm:col-span-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-age-5-ch",
                                "type": "text",
                                "options": {
                                  "text": "গ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pointer-events-none absolute -bottom-3 -right-1 flex h-14 w-14 rotate-12 items-center justify-center rounded-[16px] bg-[#6C3CE9] pt-1 font-heading text-4xl sm:h-20 sm:w-20 sm:rounded-[18px] sm:text-5xl font-bold text-white opacity-90 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:rotate-0"
                                  }
                                }
                              },
                              {
                                "id": "kg-age-5-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-age-5-btn",
                                    "type": "button",
                                    "options": {
                                      "text": "৯-১২ বছর",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/tags/age-9-12",
                                      "target": "",
                                      "icon": "",
                                      "iconSize": 18
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex w-fit cursor-pointer items-baseline"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0"
                                      },
                                      "label": {
                                        "classes": "font-heading font-bold text-[28px] leading-tight text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-5-k",
                                    "type": "text",
                                    "options": {
                                      "text": "বড়দের মতো",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-age-5-p",
                                    "type": "text",
                                    "options": {
                                      "text": "রোবটিক্স, সাইকেল, খেলাধুলা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "max-w-[9.5rem] pr-6 pt-0.5 sm:pr-0 text-xs leading-snug text-[#6E6886]"
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
            "id": "kg-row-toys",
            "type": "section",
            "options": {
              "anchor": "toys"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-row-toys-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-row-toys-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 rounded-[28px] bg-white p-3 ring-1 ring-[#E6E1F2] sm:p-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-row-toys-panel",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-[#FF5B3A] p-5 sm:p-6 lg:col-span-3 lg:min-h-0"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-toys-ch",
                            "type": "text",
                            "options": {
                              "text": "গ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-8 -right-4 font-heading text-[180px] font-bold leading-none text-white/15 transition-transform duration-700 group-hover:-rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-row-toys-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHorseToy",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#E0411F] shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)]"
                              }
                            }
                          },
                          {
                            "id": "kg-row-toys-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-toys-k",
                                "type": "text",
                                "options": {
                                  "text": "খেলতে খেলতে শেখা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-white/80"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-toys-h",
                                "type": "heading",
                                "options": {
                                  "text": "খেলনা",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-[28px] leading-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-toys-p",
                                "type": "text",
                                "options": {
                                  "text": "ব্লক, পাজল, রিমোট কার, পুতুল আর বিজ্ঞান কিট।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/85"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-row-toys-all",
                            "type": "button",
                            "options": {
                              "text": "সব দেখুন",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/toys",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#E0411F] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#E0411F] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-row-toys-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:col-span-9 lg:py-1 lg:pr-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-toys-slider",
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
                                          "toys"
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
                                "gap": "0.875rem",
                                "arrows": true,
                                "pagination": false,
                                "rewind": false,
                                "mediaQuery": "max",
                                "breakpoints": {
                                  "479": {
                                    "perPage": 2,
                                    "gap": "0.625rem",
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
                                "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-3 [&_.splide__track]:!pt-1"
                              },
                              "arrows-wrap": {
                                "classes": ""
                              },
                              "arrow-item": {
                                "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
                              },
                              "arrow-prev": {
                                "classes": "!-left-3 !top-[38%]"
                              },
                              "arrow-next": {
                                "classes": "!-right-3 !top-[38%]"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-toys-slider-loop",
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
                                    "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-row-toys-slider-c-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-toys-slider-c-media",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-toys-slider-c-thumb",
                                            "type": "postThumbnail",
                                            "options": {
                                              "linkTo": "postUrl"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                              },
                                              "link": {
                                                "classes": "block"
                                              },
                                              "image": {
                                                "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-toys-slider-c-off",
                                            "type": "productDiscount",
                                            "options": {
                                              "label": "ছাড়"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                        "id": "kg-row-toys-slider-c-info",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-toys-slider-c-rate",
                                            "type": "productRatings",
                                            "options": {
                                              "hideIfEmpty": true
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                              },
                                              "star-rate": {
                                                "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                                "classes": "hidden"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-toys-slider-c-title",
                                            "type": "postTitle",
                                            "options": {
                                              "linkTo": "postUrl",
                                              "tag": "h3"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-toys-slider-c-ex",
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
                                    "id": "kg-row-toys-slider-c-foot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-toys-slider-c-price",
                                        "type": "productPrice",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "simple-price-wrap": {
                                            "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                          },
                                          "simple-price-sale": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "simple-price-regular": {
                                            "classes": "font-body text-xs text-[#6E6886] line-through"
                                          },
                                          "variable-price-wrap": {
                                            "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                          },
                                          "variable-price-min": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "variable-price-max": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "price-separator": {
                                            "classes": "text-[#6E6886]"
                                          },
                                          "pwyw-price": {
                                            "classes": "text-2xl text-[#6C3CE9]"
                                          },
                                          "pwyw-edit": {
                                            "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-row-toys-slider-c-add",
                                        "type": "addToCart",
                                        "options": {
                                          "buttonText": "কার্টে যোগ করুন",
                                          "hideQuantity": true,
                                          "hideButton": false,
                                          "icon": "IconShoppingCartPlus",
                                          "iconSize": 19
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "button-wrapper": {
                                            "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
              }
            ]
          },
          {
            "id": "kg-coupons",
            "type": "section",
            "options": {
              "anchor": "coupons"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-coupons-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-coupons-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E6E1F2] sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-coupons-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-coupons-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-coupons-k",
                                "type": "text",
                                "options": {
                                  "text": "ঘ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#2B9FE6] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-coupons-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-coupons-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "কুপন ও অফার",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-coupons-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "চেকআউটে কোডটি লিখুন, ছাড় সাথে সাথে।",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6E6886]"
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
                        "id": "kg-coupons-grid",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "grid grid-cols-1 gap-3 md:grid-cols-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-cp-1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex overflow-hidden rounded-[18px] bg-white ring-1 ring-[#E6E1F2]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cp-1-stub",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex w-28 shrink-0 flex-col items-center justify-center bg-[#6C3CE9] py-5 text-center before:absolute before:-right-2.5 before:-top-2.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:content-[''] after:absolute after:-bottom-2.5 after:-right-2.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:content-['']"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "১০%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-3xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-1-u",
                                    "type": "text",
                                    "options": {
                                      "text": "ছাড়",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pt-1 font-body text-xs font-semibold text-white/90"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-cp-1-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-center gap-1 border-l-2 border-dashed border-[#E6E1F2] px-4 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-1-h",
                                    "type": "text",
                                    "options": {
                                      "text": "নতুন গ্রাহক",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-1-p",
                                    "type": "text",
                                    "options": {
                                      "text": "প্রথম অর্ডারে ১০% ছাড়, সর্বোচ্চ ৩০০৳",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-1-code",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1.5 pt-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-cp-1-ck",
                                        "type": "text",
                                        "options": {
                                          "text": "কোড:",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs text-[#6E6886]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-cp-1-c",
                                        "type": "text",
                                        "options": {
                                          "text": "KHELA10",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "rounded-[8px] border border-dashed border-[#6C3CE9] bg-[#F4F2FA] px-2 py-0.5 font-mono text-xs font-bold text-[#231A3D]"
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
                            "id": "kg-cp-2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex overflow-hidden rounded-[18px] bg-white ring-1 ring-[#E6E1F2]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cp-2-stub",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex w-28 shrink-0 flex-col items-center justify-center bg-[#1DB57E] py-5 text-center before:absolute before:-right-2.5 before:-top-2.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:content-[''] after:absolute after:-bottom-2.5 after:-right-2.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:content-['']"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "ফ্রি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-3xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-2-u",
                                    "type": "text",
                                    "options": {
                                      "text": "ডেলিভারি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pt-1 font-body text-xs font-semibold text-white/90"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-cp-2-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-center gap-1 border-l-2 border-dashed border-[#E6E1F2] px-4 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-2-h",
                                    "type": "text",
                                    "options": {
                                      "text": "ফ্রি ডেলিভারি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-2-p",
                                    "type": "text",
                                    "options": {
                                      "text": "৯৯৯৳ বা তার বেশি অর্ডারে সারা দেশে",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-2-code",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1.5 pt-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-cp-2-ck",
                                        "type": "text",
                                        "options": {
                                          "text": "কোড:",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs text-[#6E6886]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-cp-2-c",
                                        "type": "text",
                                        "options": {
                                          "text": "FREEDEL",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "rounded-[8px] border border-dashed border-[#1DB57E] bg-[#F4F2FA] px-2 py-0.5 font-mono text-xs font-bold text-[#231A3D]"
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
                            "id": "kg-cp-3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex overflow-hidden rounded-[18px] bg-white ring-1 ring-[#E6E1F2]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cp-3-stub",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex w-28 shrink-0 flex-col items-center justify-center bg-[#FF5FA2] py-5 text-center before:absolute before:-right-2.5 before:-top-2.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:content-[''] after:absolute after:-bottom-2.5 after:-right-2.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:content-['']"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "১৫০৳",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-3xl leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-3-u",
                                    "type": "text",
                                    "options": {
                                      "text": "ছাড়",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pt-1 font-body text-xs font-semibold text-white/90"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-cp-3-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-center gap-1 border-l-2 border-dashed border-[#E6E1F2] px-4 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cp-3-h",
                                    "type": "text",
                                    "options": {
                                      "text": "বেবি কেয়ার",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-3-p",
                                    "type": "text",
                                    "options": {
                                      "text": "ডায়াপার ও বেবি কেয়ারে ১,৫০০৳+ অর্ডারে",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs leading-snug text-[#6E6886]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cp-3-code",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1.5 pt-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-cp-3-ck",
                                        "type": "text",
                                        "options": {
                                          "text": "কোড:",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-xs text-[#6E6886]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-cp-3-c",
                                        "type": "text",
                                        "options": {
                                          "text": "BABY150",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "rounded-[8px] border border-dashed border-[#FF5FA2] bg-[#F4F2FA] px-2 py-0.5 font-mono text-xs font-bold text-[#231A3D]"
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
            "id": "kg-mall",
            "type": "section",
            "options": {
              "anchor": "mall"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-mall-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-mall-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative overflow-hidden rounded-[28px] bg-[#EFE9FE] p-4 ring-1 ring-[#6C3CE9]/15 sm:p-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-mall-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-mall-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-mall-k",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconCrown",
                                  "size": 20,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 shrink-0 -rotate-6 items-center justify-center rounded-[10px] bg-[#6C3CE9] text-[#FFC83D] shadow-[inset_0_-4px_0_#5326C9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-mall-head-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-mall-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "খেলাঘর মল",
                                      "tag": "h2"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-mall-sub",
                                    "type": "text",
                                    "options": {
                                      "text": "অফিশিয়াল ব্র্যান্ড স্টোর · ১০০% আসল পণ্যের নিশ্চয়তা",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#6E6886]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "kg-mall-all",
                            "type": "button",
                            "options": {
                              "text": "সব ব্র্যান্ড",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/brands",
                              "target": "",
                              "icon": "IconChevronRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 transition-colors bg-white hover:bg-white/70 flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#6C3CE9] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#6C3CE9] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-mall-grid",
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
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group relative flex flex-col items-center gap-1.5 rounded-[20px] bg-white p-4 text-center ring-1 ring-[#E6E1F2] transition-all hover:-translate-y-1 hover:ring-[#6C3CE9]/50"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-mall-grid-loop",
                            "type": "termsLoop",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              },
                              "loop-items": {
                                "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                              },
                              "loop-item": {
                                "classes": "group relative flex flex-col items-center gap-1.5 rounded-[20px] bg-white p-4 text-center ring-1 ring-[#E6E1F2] transition-all hover:-translate-y-1 hover:ring-[#6C3CE9]/50"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-mall-grid-thumb",
                                "type": "termThumbnail",
                                "options": {
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                  },
                                  "link": {
                                    "classes": "block h-full w-full"
                                  },
                                  "image": {
                                    "classes": "h-full w-full object-cover transition-transform group-hover:scale-105"
                                  }
                                }
                              },
                              {
                                "id": "kg-mall-grid-title",
                                "type": "termTitle",
                                "options": {
                                  "tag": "h3",
                                  "linkTo": "termUrl"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-1 font-body text-sm font-bold text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-mall-grid-count",
                                "type": "termCount",
                                "options": {
                                  "label": "",
                                  "suffix": "টি পণ্য",
                                  "singularSuffix": "টি পণ্য",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-[11px] text-[#6E6886]"
                                  }
                                }
                              },
                              {
                                "id": "kg-mall-badge",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#EFE9FE] px-2 py-0.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-mall-badge-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconRosetteDiscountCheck",
                                      "size": 13,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-mall-badge-t",
                                    "type": "text",
                                    "options": {
                                      "text": "অফিশিয়াল স্টোর",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-[10px] font-bold text-[#6C3CE9]"
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
            "id": "kg-row-baby-care",
            "type": "section",
            "options": {
              "anchor": "baby-care"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-row-baby-care-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-row-baby-care-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 rounded-[28px] bg-white p-3 ring-1 ring-[#E6E1F2] sm:p-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-row-baby-care-panel",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-[#FF5FA2] p-5 sm:p-6 lg:col-span-3 lg:min-h-0"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-baby-care-ch",
                            "type": "text",
                            "options": {
                              "text": "ঙ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-8 -right-4 font-heading text-[180px] font-bold leading-none text-white/15 transition-transform duration-700 group-hover:-rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-row-baby-care-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBabyBottle",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#D63A7E] shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)]"
                              }
                            }
                          },
                          {
                            "id": "kg-row-baby-care-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-baby-care-k",
                                "type": "text",
                                "options": {
                                  "text": "মায়ের ভরসা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-white/80"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-baby-care-h",
                                "type": "heading",
                                "options": {
                                  "text": "বেবি কেয়ার",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-[28px] leading-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-baby-care-p",
                                "type": "text",
                                "options": {
                                  "text": "লোশন, শ্যাম্পু, ফিডার আর নরম তোয়ালে: কোমল ত্বকের যত্নে।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/85"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-row-baby-care-all",
                            "type": "button",
                            "options": {
                              "text": "সব দেখুন",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/baby-care",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#D63A7E] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#D63A7E] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-row-baby-care-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:col-span-9 lg:py-1 lg:pr-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-baby-care-slider",
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
                                          "baby-care"
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
                                "gap": "0.875rem",
                                "arrows": true,
                                "pagination": false,
                                "rewind": false,
                                "mediaQuery": "max",
                                "breakpoints": {
                                  "479": {
                                    "perPage": 2,
                                    "gap": "0.625rem",
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
                                "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-3 [&_.splide__track]:!pt-1"
                              },
                              "arrows-wrap": {
                                "classes": ""
                              },
                              "arrow-item": {
                                "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
                              },
                              "arrow-prev": {
                                "classes": "!-left-3 !top-[38%]"
                              },
                              "arrow-next": {
                                "classes": "!-right-3 !top-[38%]"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-baby-care-slider-loop",
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
                                    "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-row-baby-care-slider-c-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-baby-care-slider-c-media",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-baby-care-slider-c-thumb",
                                            "type": "postThumbnail",
                                            "options": {
                                              "linkTo": "postUrl"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                              },
                                              "link": {
                                                "classes": "block"
                                              },
                                              "image": {
                                                "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-baby-care-slider-c-off",
                                            "type": "productDiscount",
                                            "options": {
                                              "label": "ছাড়"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                        "id": "kg-row-baby-care-slider-c-info",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-baby-care-slider-c-rate",
                                            "type": "productRatings",
                                            "options": {
                                              "hideIfEmpty": true
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                              },
                                              "star-rate": {
                                                "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                                "classes": "hidden"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-baby-care-slider-c-title",
                                            "type": "postTitle",
                                            "options": {
                                              "linkTo": "postUrl",
                                              "tag": "h3"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-baby-care-slider-c-ex",
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
                                    "id": "kg-row-baby-care-slider-c-foot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-baby-care-slider-c-price",
                                        "type": "productPrice",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "simple-price-wrap": {
                                            "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                          },
                                          "simple-price-sale": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "simple-price-regular": {
                                            "classes": "font-body text-xs text-[#6E6886] line-through"
                                          },
                                          "variable-price-wrap": {
                                            "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                          },
                                          "variable-price-min": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "variable-price-max": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "price-separator": {
                                            "classes": "text-[#6E6886]"
                                          },
                                          "pwyw-price": {
                                            "classes": "text-2xl text-[#6C3CE9]"
                                          },
                                          "pwyw-edit": {
                                            "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-row-baby-care-slider-c-add",
                                        "type": "addToCart",
                                        "options": {
                                          "buttonText": "কার্টে যোগ করুন",
                                          "hideQuantity": true,
                                          "hideButton": false,
                                          "icon": "IconShoppingCartPlus",
                                          "iconSize": 19
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "button-wrapper": {
                                            "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
              }
            ]
          },
          {
            "id": "kg-row-kids-fashion",
            "type": "section",
            "options": {
              "anchor": "kids-fashion"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-row-kids-fashion-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-row-kids-fashion-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 rounded-[28px] bg-white p-3 ring-1 ring-[#E6E1F2] sm:p-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-row-kids-fashion-panel",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-[#2B9FE6] p-5 sm:p-6 lg:col-span-3 lg:min-h-0"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-kids-fashion-ch",
                            "type": "text",
                            "options": {
                              "text": "চ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-8 -right-4 font-heading text-[180px] font-bold leading-none text-white/15 transition-transform duration-700 group-hover:-rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-row-kids-fashion-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShirt",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#1A7BBF] shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)]"
                              }
                            }
                          },
                          {
                            "id": "kg-row-kids-fashion-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-kids-fashion-k",
                                "type": "text",
                                "options": {
                                  "text": "নতুন কালেকশন",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-white/80"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-kids-fashion-h",
                                "type": "heading",
                                "options": {
                                  "text": "শিশুর পোশাক",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-[28px] leading-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-kids-fashion-p",
                                "type": "text",
                                "options": {
                                  "text": "আরামদায়ক সুতির জামা, ফ্রক, পাঞ্জাবি আর নাইটওয়্যার।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/85"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-row-kids-fashion-all",
                            "type": "button",
                            "options": {
                              "text": "সব দেখুন",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/kids-fashion",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#1A7BBF] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#1A7BBF] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-row-kids-fashion-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:col-span-9 lg:py-1 lg:pr-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-kids-fashion-slider",
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
                                          "kids-fashion"
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
                                "gap": "0.875rem",
                                "arrows": true,
                                "pagination": false,
                                "rewind": false,
                                "mediaQuery": "max",
                                "breakpoints": {
                                  "479": {
                                    "perPage": 2,
                                    "gap": "0.625rem",
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
                                "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-3 [&_.splide__track]:!pt-1"
                              },
                              "arrows-wrap": {
                                "classes": ""
                              },
                              "arrow-item": {
                                "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
                              },
                              "arrow-prev": {
                                "classes": "!-left-3 !top-[38%]"
                              },
                              "arrow-next": {
                                "classes": "!-right-3 !top-[38%]"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-kids-fashion-slider-loop",
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
                                    "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-row-kids-fashion-slider-c-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-kids-fashion-slider-c-media",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-kids-fashion-slider-c-thumb",
                                            "type": "postThumbnail",
                                            "options": {
                                              "linkTo": "postUrl"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                              },
                                              "link": {
                                                "classes": "block"
                                              },
                                              "image": {
                                                "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-kids-fashion-slider-c-off",
                                            "type": "productDiscount",
                                            "options": {
                                              "label": "ছাড়"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                        "id": "kg-row-kids-fashion-slider-c-info",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-kids-fashion-slider-c-rate",
                                            "type": "productRatings",
                                            "options": {
                                              "hideIfEmpty": true
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                              },
                                              "star-rate": {
                                                "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                                "classes": "hidden"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-kids-fashion-slider-c-title",
                                            "type": "postTitle",
                                            "options": {
                                              "linkTo": "postUrl",
                                              "tag": "h3"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-kids-fashion-slider-c-ex",
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
                                    "id": "kg-row-kids-fashion-slider-c-foot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-kids-fashion-slider-c-price",
                                        "type": "productPrice",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "simple-price-wrap": {
                                            "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                          },
                                          "simple-price-sale": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "simple-price-regular": {
                                            "classes": "font-body text-xs text-[#6E6886] line-through"
                                          },
                                          "variable-price-wrap": {
                                            "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                          },
                                          "variable-price-min": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "variable-price-max": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "price-separator": {
                                            "classes": "text-[#6E6886]"
                                          },
                                          "pwyw-price": {
                                            "classes": "text-2xl text-[#6C3CE9]"
                                          },
                                          "pwyw-edit": {
                                            "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-row-kids-fashion-slider-c-add",
                                        "type": "addToCart",
                                        "options": {
                                          "buttonText": "কার্টে যোগ করুন",
                                          "hideQuantity": true,
                                          "hideButton": false,
                                          "icon": "IconShoppingCartPlus",
                                          "iconSize": 19
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "button-wrapper": {
                                            "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
              }
            ]
          },
          {
            "id": "kg-row-school-books",
            "type": "section",
            "options": {
              "anchor": "school-books"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-row-school-books-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-row-school-books-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 rounded-[28px] bg-white p-3 ring-1 ring-[#E6E1F2] sm:p-4 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-row-school-books-panel",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex min-h-[170px] flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-[#1DB57E] p-5 sm:p-6 lg:col-span-3 lg:min-h-0"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-school-books-ch",
                            "type": "text",
                            "options": {
                              "text": "ছ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-8 -right-4 font-heading text-[180px] font-bold leading-none text-white/15 transition-transform duration-700 group-hover:-rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-row-school-books-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconBackpack",
                              "size": 26,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#0F8A5C] shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)]"
                              }
                            }
                          },
                          {
                            "id": "kg-row-school-books-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-1.5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-school-books-k",
                                "type": "text",
                                "options": {
                                  "text": "স্কুলে ফেরা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-white/80"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-school-books-h",
                                "type": "heading",
                                "options": {
                                  "text": "স্কুল ও বই",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-[28px] leading-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-row-school-books-p",
                                "type": "text",
                                "options": {
                                  "text": "ব্যাগ, টিফিন বক্স, রং-পেন্সিল আর ছবির বই।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm leading-relaxed text-white/85"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-row-school-books-all",
                            "type": "button",
                            "options": {
                              "text": "সব দেখুন",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/school-books",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 14
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-4 py-2 shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] flex-row-reverse"
                              },
                              "icon": {
                                "classes": "flex items-center text-[#0F8A5C] transition-transform group-hover:translate-x-0.5"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#0F8A5C] whitespace-nowrap"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-row-school-books-list",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:col-span-9 lg:py-1 lg:pr-2"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-row-school-books-slider",
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
                                          "school-books"
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
                                "gap": "0.875rem",
                                "arrows": true,
                                "pagination": false,
                                "rewind": false,
                                "mediaQuery": "max",
                                "breakpoints": {
                                  "479": {
                                    "perPage": 2,
                                    "gap": "0.625rem",
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
                                "classes": "relative min-w-0 [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-3 [&_.splide__track]:!pt-1"
                              },
                              "arrows-wrap": {
                                "classes": ""
                              },
                              "arrow-item": {
                                "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
                              },
                              "arrow-prev": {
                                "classes": "!-left-3 !top-[38%]"
                              },
                              "arrow-next": {
                                "classes": "!-right-3 !top-[38%]"
                              },
                              "pagination": {
                                "classes": ""
                              },
                              "page-item": {
                                "classes": ""
                              },
                              "loop-item": {
                                "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-row-school-books-slider-loop",
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
                                    "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-row-school-books-slider-c-top",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-school-books-slider-c-media",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "relative"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-school-books-slider-c-thumb",
                                            "type": "postThumbnail",
                                            "options": {
                                              "linkTo": "postUrl"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                              },
                                              "link": {
                                                "classes": "block"
                                              },
                                              "image": {
                                                "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-school-books-slider-c-off",
                                            "type": "productDiscount",
                                            "options": {
                                              "label": "ছাড়"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                        "id": "kg-row-school-books-slider-c-info",
                                        "type": "container",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                          }
                                        },
                                        "children": [
                                          {
                                            "id": "kg-row-school-books-slider-c-rate",
                                            "type": "productRatings",
                                            "options": {
                                              "hideIfEmpty": true
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                              },
                                              "star-rate": {
                                                "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                                "classes": "hidden"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-school-books-slider-c-title",
                                            "type": "postTitle",
                                            "options": {
                                              "linkTo": "postUrl",
                                              "tag": "h3"
                                            },
                                            "cssSelectors": {
                                              "*": {
                                                "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                              }
                                            }
                                          },
                                          {
                                            "id": "kg-row-school-books-slider-c-ex",
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
                                    "id": "kg-row-school-books-slider-c-foot",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-row-school-books-slider-c-price",
                                        "type": "productPrice",
                                        "options": {},
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "simple-price-wrap": {
                                            "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                          },
                                          "simple-price-sale": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "simple-price-regular": {
                                            "classes": "font-body text-xs text-[#6E6886] line-through"
                                          },
                                          "variable-price-wrap": {
                                            "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                          },
                                          "variable-price-min": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "variable-price-max": {
                                            "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                          },
                                          "price-separator": {
                                            "classes": "text-[#6E6886]"
                                          },
                                          "pwyw-price": {
                                            "classes": "text-2xl text-[#6C3CE9]"
                                          },
                                          "pwyw-edit": {
                                            "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-row-school-books-slider-c-add",
                                        "type": "addToCart",
                                        "options": {
                                          "buttonText": "কার্টে যোগ করুন",
                                          "hideQuantity": true,
                                          "hideButton": false,
                                          "icon": "IconShoppingCartPlus",
                                          "iconSize": 19
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex items-center"
                                          },
                                          "button-wrapper": {
                                            "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
              }
            ]
          },
          {
            "id": "kg-foryou",
            "type": "section",
            "options": {
              "anchor": "for-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-foryou-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-foryou-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-foryou-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "kg-foryou-k",
                            "type": "text",
                            "options": {
                              "text": "জ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#FF5B3A] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-foryou-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-foryou-h",
                                "type": "heading",
                                "options": {
                                  "text": "আপনার জন্য",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                  }
                                }
                              },
                              {
                                "id": "kg-foryou-sub",
                                "type": "text",
                                "options": {
                                  "text": "সবচেয়ে নতুন পণ্য, প্রতিদিন আপডেট।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6E6886]"
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
                    "id": "kg-foryou-grid",
                    "type": "postGrid",
                    "options": {
                      "queryPrams": {
                        "post_type": [
                          "cmb_product"
                        ],
                        "order": "DESC",
                        "orderby": "date",
                        "posts_per_page": "10",
                        "taxQuery": []
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      },
                      "loop-items": {
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-foryou-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-foryou-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-foryou-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-foryou-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-foryou-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-foryou-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-foryou-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-foryou-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-foryou-grid-c-ex",
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
                            "id": "kg-foryou-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-foryou-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-foryou-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
                    "id": "kg-foryou-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex justify-center pt-6"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-foryou-btn",
                        "type": "button",
                        "options": {
                          "text": "আরও পণ্য দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#6C3CE9] px-6 py-3.5 shadow-[inset_0_-4px_0_#5326C9] transition-all hover:bg-[#5326C9] px-10 flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
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
          },
          {
            "id": "kg-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-trust-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-[#E6E1F2] ring-1 ring-[#E6E1F2] lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-trust-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 bg-white p-4 sm:p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-trust-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconShieldCheck",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#EFE9FE] text-[#6C3CE9]"
                              }
                            }
                          },
                          {
                            "id": "kg-trust-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-trust-1-h",
                                "type": "text",
                                "options": {
                                  "text": "১০০% আসল পণ্য",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#231A3D]"
                                  }
                                }
                              },
                              {
                                "id": "kg-trust-1-p",
                                "type": "text",
                                "options": {
                                  "text": "যাচাই করা বিক্রেতা ও ব্র্যান্ড",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kg-trust-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 bg-white p-4 sm:p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-trust-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTruckDelivery",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#FFE9E3] text-[#FF5B3A]"
                              }
                            }
                          },
                          {
                            "id": "kg-trust-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-trust-2-h",
                                "type": "text",
                                "options": {
                                  "text": "দ্রুত ডেলিভারি",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#231A3D]"
                                  }
                                }
                              },
                              {
                                "id": "kg-trust-2-p",
                                "type": "text",
                                "options": {
                                  "text": "ঢাকায় ২৪ ঘণ্টা, সারা দেশে ২-৪ দিন",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kg-trust-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 bg-white p-4 sm:p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-trust-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconRefresh",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#DDF6EC] text-[#1DB57E]"
                              }
                            }
                          },
                          {
                            "id": "kg-trust-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-trust-3-h",
                                "type": "text",
                                "options": {
                                  "text": "৭ দিনে সহজ রিটার্ন",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#231A3D]"
                                  }
                                }
                              },
                              {
                                "id": "kg-trust-3-p",
                                "type": "text",
                                "options": {
                                  "text": "পছন্দ না হলে টাকা ফেরত",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kg-trust-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 bg-white p-4 sm:p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-trust-4-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconCash",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#E1F1FC] text-[#2B9FE6]"
                              }
                            }
                          },
                          {
                            "id": "kg-trust-4-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-trust-4-h",
                                "type": "text",
                                "options": {
                                  "text": "ক্যাশ অন ডেলিভারি",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-bold text-[#231A3D]"
                                  }
                                }
                              },
                              {
                                "id": "kg-trust-4-p",
                                "type": "text",
                                "options": {
                                  "text": "বিকাশ, নগদ ও কার্ডও চলে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs leading-snug text-[#6E6886]"
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
            "id": "kg-sell",
            "type": "section",
            "options": {
              "anchor": "sell"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-sell-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-sell-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] bg-[#231A3D] p-6 pt-9 sm:p-10 sm:pt-12 lg:grid-cols-12 lg:p-12 lg:pt-14"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-sell-crayon",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "kg-sell-dots",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1.5px,transparent_2px)] bg-[length:22px_22px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "kg-sell-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col items-start gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-sell-k",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-k-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBuildingStore",
                                  "size": 16,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#FFC83D] text-[#231A3D]"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-k-t",
                                "type": "text",
                                "options": {
                                  "text": "বিক্রেতা হোন",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-sm font-semibold text-[#FFC83D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-sell-h",
                            "type": "heading",
                            "options": {
                              "text": "খেলাঘরে আপনার দোকান খুলুন",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-bold text-3xl leading-tight text-white sm:text-[40px]"
                              }
                            }
                          },
                          {
                            "id": "kg-sell-p",
                            "type": "text",
                            "options": {
                              "text": "খেলনা, শিশুর পোশাক বা বেবি পণ্য বিক্রি করেন? সারা দেশের লক্ষ মা-বাবার কাছে পৌঁছান। ডেলিভারি, পেমেন্ট আর গ্রাহক সেবা আমরা সামলাব।",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base leading-relaxed text-white/75"
                              }
                            }
                          },
                          {
                            "id": "kg-sell-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "বিক্রেতা হিসেবে যোগ দিন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/register",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#FFC83D] px-6 py-3.5 shadow-[inset_0_-4px_0_#E8A400] transition-all hover:brightness-105 flex-row-reverse"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#231A3D]"
                                  },
                                  "label": {
                                    "classes": "font-body text-sm font-bold text-[#231A3D] whitespace-nowrap"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "কীভাবে কাজ করে",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#faq",
                                  "target": "",
                                  "icon": "IconHelpCircle",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white/15 px-6 py-3.5 ring-1 ring-white/30 transition-colors hover:bg-white/25"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-white"
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
                        "id": "kg-sell-stats",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative grid grid-cols-2 gap-3 lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-sell-s1",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-s1-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-8 rounded-full bg-[#FF5B3A]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kg-sell-s1-v",
                                "type": "text",
                                "options": {
                                  "text": "২,৫০০+",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold pt-2 text-3xl leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-s1-k",
                                "type": "text",
                                "options": {
                                  "text": "যাচাই করা বিক্রেতা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-sell-s2",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-s2-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-8 rounded-full bg-[#FFC83D]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kg-sell-s2-v",
                                "type": "text",
                                "options": {
                                  "text": "৬৪",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold pt-2 text-3xl leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-s2-k",
                                "type": "text",
                                "options": {
                                  "text": "জেলায় ডেলিভারি",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-sell-s3",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-s3-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-8 rounded-full bg-[#1DB57E]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kg-sell-s3-v",
                                "type": "text",
                                "options": {
                                  "text": "৭ দিনে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold pt-2 text-3xl leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-s3-k",
                                "type": "text",
                                "options": {
                                  "text": "বিক্রির টাকা হাতে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70 sm:text-sm"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-sell-s4",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1 rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-sell-s4-bar",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "h-1.5 w-8 rounded-full bg-[#2B9FE6]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "kg-sell-s4-v",
                                "type": "text",
                                "options": {
                                  "text": "০%",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold pt-2 text-3xl leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-sell-s4-k",
                                "type": "text",
                                "options": {
                                  "text": "কমিশন প্রথম মাসে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs text-white/70 sm:text-sm"
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
            "id": "kg-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "kg-reviews-k",
                            "type": "text",
                            "options": {
                              "text": "ঝ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#FF5FA2] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-reviews-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-reviews-h",
                                "type": "heading",
                                "options": {
                                  "text": "মা-বাবারা যা বলছেন",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                  }
                                }
                              },
                              {
                                "id": "kg-reviews-sub",
                                "type": "text",
                                "options": {
                                  "text": "৫০,০০০+ পরিবারের গড় রেটিং ৪.৯",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6E6886]"
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
                    "id": "kg-reviews-slider",
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
                        "classes": "!h-10 !w-10 !rounded-[12px] !bg-white !opacity-100 !shadow-[0_6px_16px_-6px_rgba(35,26,61,0.4)] transition-colors hover:!bg-[#6C3CE9] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#231A3D] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#231A3D]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#6C3CE9]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“কাঠের ব্লকগুলোর মান দারুণ! কোনো ধারালো কোণা নেই, রংও বিষমুক্ত। আমার ২ বছরের মেয়ে সারাদিন খেলে।”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "নু",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#6C3CE9] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "নুসরাত জাহান",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · মিরপুর, ঢাকা · দুই সন্তানের মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
                        "id": "kg-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“ছেলের জন্মদিনের সাইকেল অর্ডার দিয়েছিলাম, দুই দিনেই পৌঁছেছে। ক্যাশ অন ডেলিভারি থাকায় নিশ্চিন্ত ছিলাম।”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "রা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#FF5B3A] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "রাশেদ করিম",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · চট্টগ্রাম · বাবা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
                        "id": "kg-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“ডায়াপার আর ওয়াইপস প্রতি মাসে এখান থেকেই নিই। দাম বাজারের চেয়ে কম, আর সব আসল।”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "তা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#1DB57E] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "তানিয়া আক্তার",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · সিলেট · নতুন মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
                        "id": "kg-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“বিজ্ঞান কিটটা মেয়ের এত ভালো লেগেছে যে এখন প্রতিদিন নতুন এক্সপেরিমেন্ট চায়!”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "মে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#2B9FE6] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "মেহেদী হাসান",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · রাজশাহী · বাবা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
                        "id": "kg-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“ঈদের জামার সাইজ মেলেনি। ৭ দিনের মধ্যে বদলে দিয়েছে, কোনো ঝামেলা ছাড়াই।”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "সা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#FF5FA2] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "সাদিয়া ইসলাম",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · খুলনা · মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
                        "id": "kg-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-[24px] bg-white p-6 ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-base text-[#E8A400]"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“নাতির জন্য উপহার পাঠালাম গিফট র‍্যাপ করে, সাথে শুভেচ্ছা কার্ড। খুব সুন্দর প্যাকিং।”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "pt-2 font-body text-[15px] leading-relaxed text-[#231A3D]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-5 flex items-center gap-3 border-t border-dashed border-[#E6E1F2] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "ফা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex shrink-0 items-center justify-center h-11 w-11 text-lg rounded-[12px] bg-[#E8A400] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "kg-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "ফারহানা রহমান",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাই করা ক্রেতা · উত্তরা, ঢাকা · দাদি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs text-[#6E6886]"
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
            "id": "kg-journal",
            "type": "section",
            "options": {
              "anchor": "journal"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-4"
              }
            },
            "children": [
              {
                "id": "kg-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3 "
                          }
                        },
                        "children": [
                          {
                            "id": "kg-journal-k",
                            "type": "text",
                            "options": {
                              "text": "ঞ",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#2B9FE6] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                              }
                            }
                          },
                          {
                            "id": "kg-journal-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col "
                              }
                            },
                            "children": [
                              {
                                "id": "kg-journal-h",
                                "type": "heading",
                                "options": {
                                  "text": "প্যারেন্টিং টিপস",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                  }
                                }
                              },
                              {
                                "id": "kg-journal-sub",
                                "type": "text",
                                "options": {
                                  "text": "খেলার আইডিয়া, উপহারের গাইড আর বেড়ে ওঠার গল্প।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "kg-journal-all",
                        "type": "button",
                        "options": {
                          "text": "সব লেখা",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconChevronRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-[#EFE9FE] flex-row-reverse"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#6C3CE9] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#6C3CE9] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kg-journal-grid",
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
                        "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-[22px] bg-white ring-1 ring-[#E6E1F2]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-journal-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-[22px] bg-white ring-1 ring-[#E6E1F2]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#EFE9FE]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "kg-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "DD MMM YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-semibold text-[#FF5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "kg-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "পড়ুন",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#6E6886]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex flex-row-reverse items-center justify-end gap-1.5 font-body text-sm font-bold text-[#6C3CE9]"
                                  },
                                  "read-more-icon": {
                                    "classes": "flex text-[#FF5B3A] transition-transform group-hover/rm:translate-x-1"
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
            "id": "kg-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] pb-12 pt-4 lg:pb-16"
              }
            },
            "children": [
              {
                "id": "kg-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-faq-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[28px] bg-white p-4 ring-1 ring-[#E6E1F2] sm:p-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-faq-side",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-faq-head",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-5 flex flex-wrap items-center justify-between gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-head-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-3 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-faq-k",
                                    "type": "text",
                                    "options": {
                                      "text": "ট",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "inline-flex shrink-0 items-center justify-center h-9 w-9 text-lg rounded-[10px] bg-[#E8A400] pt-0.5 font-heading font-bold leading-none text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.18)] -rotate-6"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-faq-head-tt",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col "
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-faq-h",
                                        "type": "heading",
                                        "options": {
                                          "text": "সাধারণ জিজ্ঞাসা",
                                          "tag": "h2"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading font-bold text-2xl leading-tight text-[#231A3D] sm:text-[28px]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-faq-sub",
                                        "type": "text",
                                        "options": {
                                          "text": "অর্ডার, ডেলিভারি, রিটার্ন আর বিক্রি নিয়ে।",
                                          "tag": "p"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-sm text-[#6E6886]"
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
                            "id": "kg-faq-help",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-3 rounded-[18px] bg-[#F4F2FA] p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-help-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHeadset",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#6C3CE9] text-white"
                                  }
                                }
                              },
                              {
                                "id": "kg-faq-help-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-faq-help-k",
                                    "type": "text",
                                    "options": {
                                      "text": "আরও প্রশ্ন আছে?",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-bold text-[#231A3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-faq-help-v",
                                    "type": "text",
                                    "options": {
                                      "text": "হটলাইন ০৯৬১২-৩৪৫৬৭৮ · সকাল ৯টা - রাত ১০টা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs text-[#6E6886]"
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
                        "id": "kg-faq-acc",
                        "type": "accordion",
                        "options": {
                          "items": [
                            {
                              "label": "পণ্যগুলো কি আসল?",
                              "classes": ""
                            },
                            {
                              "label": "ডেলিভারিতে কত দিন লাগে?",
                              "classes": ""
                            },
                            {
                              "label": "ক্যাশ অন ডেলিভারি আছে?",
                              "classes": ""
                            },
                            {
                              "label": "পণ্য ফেরত বা বদল করা যায়?",
                              "classes": ""
                            },
                            {
                              "label": "খেলাঘরে কীভাবে বিক্রি করব?",
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
                            "classes": "flex flex-col gap-2.5"
                          },
                          "accordion-header": {
                            "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[16px] bg-[#F4F2FA] px-5 py-4 font-body text-[15px] font-bold text-[#231A3D] transition-colors hover:bg-[#EFE9FE]"
                          },
                          "accordion-header-open": {
                            "classes": "!bg-[#6C3CE9] !text-white"
                          },
                          "header-label": {
                            "classes": ""
                          },
                          "header-icon": {
                            "classes": "flex shrink-0 text-[#FF5B3A]"
                          },
                          "accordion-content": {
                            "classes": "px-5 pb-2 pt-3"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-faq-i1",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-i1-a",
                                "type": "text",
                                "options": {
                                  "text": "হ্যাঁ। খেলাঘরের প্রতিটি বিক্রেতা যাচাই করা, আর খেলাঘর মলের পণ্য আসে সরাসরি ব্র্যান্ড বা তাদের অনুমোদিত পরিবেশকের কাছ থেকে।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-faq-i2",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-i2-a",
                                "type": "text",
                                "options": {
                                  "text": "ঢাকার ভেতরে ২৪ ঘণ্টায়, অন্যান্য শহরে ২-৪ দিনে। ৯৯৯ টাকা বা তার বেশি অর্ডারে ডেলিভারি ফ্রি।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-faq-i3",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-i3-a",
                                "type": "text",
                                "options": {
                                  "text": "আছে, সারা দেশে। চাইলে বিকাশ, নগদ বা কার্ডে আগেও পেমেন্ট করতে পারেন।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-faq-i4",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-i4-a",
                                "type": "text",
                                "options": {
                                  "text": "পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে, না-খোলা অবস্থায় ফেরত বা সাইজ বদল করা যায়। টাকা ফেরত পাবেন ৩-৫ কর্মদিবসে।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6E6886]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-faq-i5",
                            "type": "accordionItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-faq-i5-a",
                                "type": "text",
                                "options": {
                                  "text": "“বিক্রেতা হিসেবে যোগ দিন” থেকে অ্যাকাউন্ট খুলুন, ট্রেড লাইসেন্স ও এনআইডি দিন। যাচাইয়ের পর ৪৮ ঘণ্টার মধ্যে আপনার দোকান চালু হবে।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-[15px] leading-relaxed text-[#6E6886]"
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "kg-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "সব এক জায়গায়",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "সব পণ্য",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "খেলনা, পোশাক, বেবি কেয়ার আর স্কুলের জিনিস, নতুনগুলো আগে। বিস্তারিত দেখতে কার্ডে চাপুন, অথবা সরাসরি কার্টে যোগ করুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-shop-grid-c-ex",
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
                            "id": "kg-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-shop-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
                        "id": "kg-shop-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-shop-promise",
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
                "id": "kg-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "১০০% আসল পণ্য",
                          "description": "যাচাই করা বিক্রেতা ও ব্র্যান্ড",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "দ্রুত ডেলিভারি",
                          "description": "ঢাকায় ২৪ ঘণ্টা, সারা দেশে ২-৪ দিন",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "৭ দিনে সহজ রিটার্ন",
                          "description": "পছন্দ না হলে টাকা ফেরত",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "ক্যাশ অন ডেলিভারি",
                          "description": "বিকাশ, নগদ ও কার্ডও চলে",
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
                        "classes": "font-heading text-lg font-bold text-[#231A3D]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#EFE9FE] text-[#6C3CE9] shadow-[inset_0_-4px_0_rgba(108,60,233,0.15)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-shop-promise-fb-ic",
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
                        "id": "kg-shop-promise-fb-t",
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
                        "id": "kg-shop-promise-fb-d",
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
            "id": "kg-pd",
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
                "id": "kg-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-pd-grid",
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
                        "id": "kg-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FFE9E3] via-white to-[#FFF6DA] p-4 shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#231A3D]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#231A3D]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#6C3CE9]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-pd-cats",
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
                                "classes": "rounded-full bg-[#FFE9E3] px-3 py-1 font-heading text-xs font-bold text-[#FF5B3A] hover:bg-[#FF5B3A] hover:text-white"
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
                            "id": "kg-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#231A3D] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "kg-pd-rate",
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
                                "classes": "font-heading font-bold text-[#231A3D]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "kg-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#231A3D]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#231A3D]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#231A3D]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "ছাড় আজ"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#6C3CE9] px-3 py-1 text-xs font-extrabold text-white"
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
                            "id": "kg-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#6E6886]"
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
                            "id": "kg-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#231A3D]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#231A3D] transition-colors hover:border-[#FF5B3A] hover:bg-[#FFE9E3]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#FF5B3A] !bg-[#FFE9E3] !text-[#E0411F]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "kg-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "স্টক শেষ · শিগগিরই আসছে",
                              "inStockText": "স্টকে আছে · আজই পাঠানো হবে",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#6C3CE9]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#FF5B3A]"
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
                            "id": "kg-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "কার্টে যোগ করুন",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#231A3D]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F2FA]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F4F2FA]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#6C3CE9] px-8 text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#5326C9]"
                              },
                              "button-icon": {
                                "classes": "flex items-center"
                              },
                              "button-label": {
                                "classes": "font-heading text-lg font-bold whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "kg-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "নিরাপদ উপকরণ",
                                  "description": "BPA ও সিসামুক্ত",
                                  "icon": "IconShieldCheck",
                                  "iconSize": ""
                                },
                                {
                                  "title": "ফ্রি ডেলিভারি",
                                  "description": "৯৯৯৳+ অর্ডারে",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "৭ দিনে রিটার্ন",
                                  "description": "সহজ ও ঝামেলাহীন",
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
                                "classes": "font-heading text-base font-bold text-[#231A3D]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE9E3] text-[#FF5B3A]"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-perks-ic",
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
                                "id": "kg-pd-perks-t",
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
                                "id": "kg-pd-perks-d",
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
                            "id": "kg-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-sku",
                                "type": "productSku",
                                "options": {
                                  "label": "এসকেইউ:",
                                  "icon": "",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#231A3D]"
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
                                "id": "kg-pd-brands",
                                "type": "productBrands",
                                "options": {
                                  "label": "ব্র্যান্ড:",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#231A3D]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#6C3CE9]"
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
                                "id": "kg-pd-tags",
                                "type": "productTags",
                                "options": {
                                  "label": "ট্যাগ:",
                                  "separator": ", "
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap items-center gap-1.5"
                                  },
                                  "label": {
                                    "classes": "font-semibold text-[#231A3D]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#6C3CE9]"
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
            "id": "kg-pd-tabs-sec",
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
                "id": "kg-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,26,61,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "বিবরণ",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "নিরাপত্তা ও বয়স",
                              "icon": "IconShieldHeart"
                            },
                            {
                              "label": "ডেলিভারি ও রিটার্ন",
                              "icon": "IconTruckDelivery"
                            },
                            {
                              "label": "রিভিউ",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F2FA] px-5 py-2.5 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#231A3D] !text-white shadow-md"
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
                            "id": "kg-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#231A3D] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#231A3D] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#6C3CE9] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC83D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconShieldCheck",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "আন্তর্জাতিক খেলনা-নিরাপত্তা মান (EN71, ASTM) মেনে তৈরি",
                                      "icon": ""
                                    },
                                    {
                                      "text": "বিষমুক্ত পানিভিত্তিক রং আর BPA-মুক্ত প্লাস্টিক",
                                      "icon": ""
                                    },
                                    {
                                      "text": "বক্সে বয়সের নির্দেশনা দেখুন: ছোট অংশ ৩ বছরের কম বয়সীদের জন্য নয়",
                                      "icon": ""
                                    },
                                    {
                                      "text": "ভেজা কাপড়ে মুছে পরিষ্কার করুন; কাঠের খেলনা পানিতে ভেজাবেন না",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF5B3A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "৯৯৯ টাকা বা তার বেশি অর্ডারে ফ্রি ডেলিভারি",
                                      "icon": ""
                                    },
                                    {
                                      "text": "দুপুর ২টার আগে অর্ডারে আজই পাঠানো হয়",
                                      "icon": ""
                                    },
                                    {
                                      "text": "৭ দিনের মধ্যে না-খোলা পণ্য ফেরত দিলে পুরো টাকা ফেরত",
                                      "icon": ""
                                    },
                                    {
                                      "text": "চেকআউটে ফ্রি গিফট র‍্যাপ ও শুভেচ্ছা কার্ড",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#FF5B3A]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "kg-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F4F2FA] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F4F2FA] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "kg-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE9FE]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#231A3D]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "kg-pd-reviews-rate",
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
                                        "id": "kg-pd-reviews-co",
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
                                    "id": "kg-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "আপনার রেটিং",
                                      "commentLabel": "অন্য মা-বাবাদের জানান কেমন লাগলো",
                                      "placeholder": "",
                                      "submitLabel": "রিভিউ দিন",
                                      "loadingLabel": "একটু অপেক্ষা করুন।",
                                      "loginRequiredText": "মতামত দিতে লগইন করুন।",
                                      "successText": "ধন্যবাদ! আপনার মতামত পেয়েছি।"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,26,61,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#231A3D]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4F2FA] px-4 py-3 text-sm text-[#231A3D] placeholder:text-gray-400 focus:border-[#FF5B3A] focus:outline-none focus:ring-2 focus:ring-[#FF5B3A]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#6C3CE9] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#5326C9] disabled:opacity-50"
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
            "id": "kg-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-16"
              }
            },
            "children": [
              {
                "id": "kg-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "আরও পছন্দ হতে পারে",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE9FE] px-3 py-1 font-heading text-xs font-bold text-[#6C3CE9]"
                          }
                        }
                      },
                      {
                        "id": "kg-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "এগুলোও দেখুন",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#231A3D]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kg-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-pd-rel-c-ex",
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
                            "id": "kg-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-pd-rel-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
            "id": "kg-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "খেলার জগৎ",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "সব ক্যাটাগরি",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "খেলনা থেকে বেবি কেয়ার, পোশাক থেকে স্কুলব্যাগ। একটা বেছে নিয়ে শুরু করুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[24px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FFE9E3] transition-transform group-hover:rotate-6"
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
                            "id": "kg-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                              }
                            }
                          },
                          {
                            "id": "kg-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "টি পণ্য",
                              "singularSuffix": "টি পণ্য",
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
                        "id": "kg-cat-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ক্যাটাগরি",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kg-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": "টি পণ্য",
                      "singularSuffix": "টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF5B3A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-cat1-grid-c-ex",
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
                            "id": "kg-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-cat1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
                        "id": "kg-cat1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "দ্রুত খুঁজুন",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "ট্যাগ দিয়ে খুঁজুন",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "বয়স, উপলক্ষ আর দক্ষতা অনুযায়ী সাজানো পণ্য, সব ক্যাটাগরি মিলিয়ে।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#6C3CE9]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#6C3CE9]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#231A3D] group-hover:text-[#6C3CE9]"
                              }
                            }
                          },
                          {
                            "id": "kg-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F4F2FA] px-2 py-0.5 text-[10px] font-bold text-[#6E6886]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "kg-tag-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ট্যাগ",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kg-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": "টি পণ্য",
                      "singularSuffix": "টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF5B3A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-tag1-grid-c-ex",
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
                            "id": "kg-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-tag1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
                        "id": "kg-tag1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "খেলাঘর মল",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "অফিশিয়াল ব্র্যান্ড স্টোর",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "যাচাই করা ব্র্যান্ড আর তাদের অনুমোদিত পরিবেশকের আসল পণ্য।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F4F2FA] p-3"
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
                            "id": "kg-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#231A3D] group-hover:text-[#6C3CE9]"
                              }
                            }
                          },
                          {
                            "id": "kg-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "টি পণ্য",
                              "singularSuffix": "টি পণ্য",
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
                        "id": "kg-brand-grid-pg",
                        "type": "termsGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ব্র্যান্ড",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "kg-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": "টি পণ্য",
                      "singularSuffix": "টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#FF5B3A] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-brand1-grid-c-ex",
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
                            "id": "kg-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-brand1-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
                        "id": "kg-brand1-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "প্যারেন্টিং",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "খেলাঘর ব্লগ",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "খেলার আইডিয়া, উপহারের গাইড আর প্রতিটি বয়সে বেড়ে ওঠার টিপস।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF6DA]"
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
                            "id": "kg-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold text-[#FF5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "kg-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                  }
                                }
                              },
                              {
                                "id": "kg-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "পড়ুন",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#6C3CE9]"
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
                        "id": "kg-blog-grid-pg",
                        "type": "postGridPagination",
                        "options": {
                          "style": "numbers",
                          "prevText": "আগের",
                          "prevIcon": "",
                          "nextText": "পরের",
                          "nextIcon": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mt-12 flex items-center justify-center gap-2"
                          },
                          "previous": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:border-[#6C3CE9] hover:text-[#6C3CE9]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#6C3CE9] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "kg-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DA] via-white to-[#F4F2FA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kg-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-post-k",
                    "type": "text",
                    "options": {
                      "text": "ব্লগ থেকে",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFE9E3] px-3 py-1 font-heading text-xs font-bold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#6E6886]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-post-author",
                        "type": "postAuthor",
                        "options": {
                          "linkTo": "",
                          "label": "লিখেছেন",
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
                            "classes": "font-heading font-bold text-[#231A3D]"
                          }
                        }
                      },
                      {
                        "id": "kg-post-dot",
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
                        "id": "kg-post-date",
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
                    "id": "kg-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
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
            "id": "kg-post-body",
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
                "id": "kg-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#231A3D] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#231A3D] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#6C3CE9] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[24px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFC83D] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-16"
              }
            },
            "children": [
              {
                "id": "kg-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "আলোচনায় যোগ দিন",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#231A3D]"
                      }
                    }
                  },
                  {
                    "id": "kg-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F4F2FA] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[24px] border border-gray-100 bg-[#F4F2FA] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#EFE9FE]"
                              }
                            }
                          },
                          {
                            "id": "kg-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#231A3D]"
                              }
                            }
                          },
                          {
                            "id": "kg-post-cmt-co",
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
                        "id": "kg-post-cmt-form",
                        "type": "commentsForm",
                        "options": {
                          "showRate": false,
                          "rateLabel": "আপনার রেটিং",
                          "commentLabel": "মন্তব্য লিখুন",
                          "placeholder": "",
                          "submitLabel": "মন্তব্য পাঠান",
                          "loadingLabel": "একটু অপেক্ষা করুন।",
                          "loginRequiredText": "মতামত দিতে লগইন করুন।",
                          "successText": "ধন্যবাদ! আপনার মতামত পেয়েছি।"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-[24px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,26,61,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#231A3D]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F4F2FA] px-4 py-3 text-sm text-[#231A3D] placeholder:text-gray-400 focus:border-[#FF5B3A] focus:outline-none focus:ring-2 focus:ring-[#FF5B3A]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#6C3CE9] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#5326C9] disabled:opacity-50"
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
            "id": "kg-post-more",
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
                "id": "kg-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "ব্লগের আরও লেখা",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#231A3D]"
                      }
                    }
                  },
                  {
                    "id": "kg-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(35,26,61,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF6DA]"
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
                            "id": "kg-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold text-[#FF5B3A]"
                                  }
                                }
                              },
                              {
                                "id": "kg-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
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
            "id": "kg-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#EFE9FE] pb-14 pt-14 sm:pb-16 sm:pt-16 bg-[radial-gradient(circle,rgba(108,60,233,0.12)_1.5px,transparent_2px)] bg-[length:22px_22px] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1.5 after:content-[''] after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
              }
            },
            "children": [
              {
                "id": "kg-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "kg-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "আবার স্বাগতম",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-semibold text-[#FF5B3A]"
                      }
                    }
                  },
                  {
                    "id": "kg-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "আমার অ্যাকাউন্ট",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#231A3D] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "kg-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "অর্ডার ট্র্যাক করুন, ঠিকানা ও প্রোফাইল আপডেট করুন, সাপোর্ট টিকিট দেখুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "kg-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-12"
              }
            },
            "children": [
              {
                "id": "kg-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#231A3D] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#FFC83D]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#6C3CE9]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#6C3CE9]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#6C3CE9]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "kg-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "kg-acc-3",
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
                                "id": "kg-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,26,61,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6C3CE9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5326C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "kg-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(35,26,61,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6C3CE9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5326C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "kg-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "kg-acc-9",
                            "type": "tabs",
                            "options": {
                              "orientation": "",
                              "tabsItems": [
                                {
                                  "label": "অর্ডার",
                                  "icon": "IconPackage"
                                },
                                {
                                  "label": "প্রোফাইল",
                                  "icon": "IconUser"
                                },
                                {
                                  "label": "সাবস্ক্রিপশন",
                                  "icon": "IconRepeat"
                                },
                                {
                                  "label": "সাপোর্ট",
                                  "icon": "IconLifebuoy"
                                },
                                {
                                  "label": "প্রোফাইল এডিট",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F4F2FA] px-5 py-2.5 font-heading text-sm font-semibold text-[#231A3D] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#231A3D] !text-white shadow-md"
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
                                "id": "kg-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C3CE9]/10 text-[#6C3CE9]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "kg-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#6C3CE9] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kg-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C3CE9]/10 text-[#6C3CE9]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kg-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#6C3CE9]/40 hover:bg-[#6C3CE9]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C3CE9]/10 text-[#6C3CE9]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "kg-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6C3CE9]/10 text-[#6C3CE9]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#6C3CE9] focus:outline-none focus:ring-2 focus:ring-[#6C3CE9]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#6C3CE9] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5326C9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C3CE9]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "kg-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DA] via-white to-[#F4F2FA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kg-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(35,26,61,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FFE9E3] text-[#FF5B3A]"
                          }
                        }
                      },
                      {
                        "id": "kg-ty-k",
                        "type": "text",
                        "options": {
                          "text": "অর্ডার পেয়েছি",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#EFE9FE] px-3 py-1 font-heading text-xs font-bold text-[#6C3CE9]"
                          }
                        }
                      },
                      {
                        "id": "kg-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "ধন্যবাদ! আপনার অর্ডার নিশ্চিত হয়েছে",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#231A3D] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "kg-ty-p",
                        "type": "text",
                        "options": {
                          "text": "আমরা প্যাক করা শুরু করেছি। শিগগিরই এসএমএসে নিশ্চিতকরণ পাবেন, আর অ্যাকাউন্ট থেকে অর্ডারটি ট্র্যাক করতে পারবেন।",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#6E6886] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "kg-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "আমরা ফোন বা এসএমএসে অর্ডারটি নিশ্চিত করি",
                              "icon": ""
                            },
                            {
                              "text": "বিক্রেতা পণ্য প্যাক করে আমাদের হাবে পাঠান",
                              "icon": ""
                            },
                            {
                              "text": "ঢাকায় ২৪ ঘণ্টায়, সারা দেশে ২-৪ দিনে পৌঁছে যায়: হাতে পেয়ে টাকা দিন",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[24px] bg-[#F4F2FA] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#6C3CE9]"
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
                        "id": "kg-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-ty-shop",
                            "type": "button",
                            "options": {
                              "text": "কেনাকাটা চালিয়ে যান",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/shop",
                              "target": "",
                              "icon": "IconArrowRight",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C3CE9] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#5326C9] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "kg-ty-orders",
                            "type": "button",
                            "options": {
                              "text": "আমার অর্ডার",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/account",
                              "target": "",
                              "icon": "IconPackage",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF5B3A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF5B3A] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#FF5B3A] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#FF5B3A] whitespace-nowrap group-hover:text-white"
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
            "id": "kg-ty-promise",
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
                "id": "kg-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "১০০% আসল পণ্য",
                          "description": "যাচাই করা বিক্রেতা ও ব্র্যান্ড",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "দ্রুত ডেলিভারি",
                          "description": "ঢাকায় ২৪ ঘণ্টা, সারা দেশে ২-৪ দিন",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "৭ দিনে সহজ রিটার্ন",
                          "description": "পছন্দ না হলে টাকা ফেরত",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        },
                        {
                          "title": "ক্যাশ অন ডেলিভারি",
                          "description": "বিকাশ, নগদ ও কার্ডও চলে",
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
                        "classes": "font-heading text-lg font-bold text-[#231A3D]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#EFE9FE] text-[#6C3CE9] shadow-[inset_0_-4px_0_rgba(108,60,233,0.15)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-ty-promise-fb-ic",
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
                        "id": "kg-ty-promise-fb-t",
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
                        "id": "kg-ty-promise-fb-d",
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
            "id": "kg-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF6DA] via-white to-[#F4F2FA] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "kg-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#6C3CE9] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "kg-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF6DA] text-[#231A3D]"
                      }
                    }
                  },
                  {
                    "id": "kg-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "এই পাতাটা খেলতে খেলতে হারিয়ে গেছে!",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#231A3D] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "kg-nf-p",
                    "type": "text",
                    "options": {
                      "text": "লিংকটি ভুল হতে পারে, অথবা পণ্যটি আর নেই। হোমে ফিরে যান বা সব পণ্য দেখুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#6E6886] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "kg-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-nf-home",
                        "type": "button",
                        "options": {
                          "text": "হোমে ফিরুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C3CE9] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(108,60,233,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#5326C9] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-white whitespace-nowrap"
                          }
                        }
                      },
                      {
                        "id": "kg-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "সব পণ্য",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF5B3A] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#FF5B3A] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF5B3A] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#FF5B3A] whitespace-nowrap group-hover:text-white"
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
            "id": "kg-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F4F2FA] py-16"
              }
            },
            "children": [
              {
                "id": "kg-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "kg-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "এখনও খুঁজছেন?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFC83D] px-3 py-1 font-heading text-xs font-bold text-[#231A3D]"
                          }
                        }
                      },
                      {
                        "id": "kg-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "এখন জনপ্রিয়",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#231A3D] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "kg-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                      }
                    },
                    "children": [
                      {
                        "id": "kg-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-2.5 ring-1 ring-[#E6E1F2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(35,26,61,0.35)] hover:ring-[#6C3CE9]/40 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:opacity-0 after:transition-opacity after:content-[''] group-hover:after:opacity-100 after:bg-[linear-gradient(90deg,#FF5B3A_0_20%,#FFC83D_20%_40%,#1DB57E_40%_60%,#2B9FE6_60%_80%,#6C3CE9_80%_100%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "kg-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[14px] bg-[#F4F2FA]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-2.5 z-[11] flex items-center gap-1 rounded-r-full bg-[#FF5B3A] py-1 pl-2 pr-2.5 font-body text-[11px] font-bold text-white"
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
                                "id": "kg-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-1 px-1 pt-2.5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "kg-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px] text-[#6E6886]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E8A400]"
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
                                        "classes": "hidden"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#231A3D] transition-colors group-hover:text-[#6C3CE9]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "kg-nf-grid-c-ex",
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
                            "id": "kg-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-end justify-between gap-2 px-1 pb-1"
                              }
                            },
                            "children": [
                              {
                                "id": "kg-nf-grid-c-price",
                                "type": "productPrice",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "simple-price-wrap": {
                                    "classes": "flex flex-col-reverse items-start leading-tight [&>*:nth-child(2)]:hidden"
                                  },
                                  "simple-price-sale": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#6E6886] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex flex-wrap items-baseline gap-x-1 leading-tight"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-body text-lg font-bold text-[#FF5B3A]"
                                  },
                                  "price-separator": {
                                    "classes": "text-[#6E6886]"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#6C3CE9]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#6C3CE9] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "kg-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "কার্টে যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 19
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#EFE9FE] text-[#6C3CE9] transition-colors hover:bg-[#6C3CE9] hover:text-white"
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
