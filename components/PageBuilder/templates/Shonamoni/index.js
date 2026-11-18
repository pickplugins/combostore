/**
 * Template: Shonamoni Baby Shop (সোনামণি).
 *
 * A Bangla copy of WonderJoy (templates/WonderJoy) for a baby essentials
 * store: diapers and wipes, formula milk, feeders and water bottles, feeding
 * sets and bath care. The layout, blocks and coral / teal / butter palette are
 * WonderJoy's, page for page (all sixteen page types); the copy is Bangla and
 * the catalog is baby essentials.
 *
 * GENERATED from WonderJoy by a script (ids wj-* became sm-*). It is plain
 * data: edit freely.
 *
 * WHAT CHANGED FROM WONDERJOY
 *
 *   - Every visible string is Bangla. Fonts are Baloo Da 2 (headings, the
 *     rounded Bangla counterpart of Fredoka) and Hind Siliguri (body), since
 *     Fredoka and Plus Jakarta Sans have no Bengali glyphs.
 *   - Category slugs (the links, sliders and age cards use them):
 *       diapers-wipes, formula-milk, feeders-bottles, feeding-sets,
 *       bath-skincare, combo-packs; age bands age-0-6m, age-6-12m, age-1-2y,
 *       age-2-plus; the tag trending. The diaper row's anchor is #diaper-zone
 *       (the "ডায়াপার" menu link).
 *   - The hero art is public/templates/shonamoni-hero.svg (a feeder, a formula
 *     tin and a diaper pack); the picker thumbnail is public/templates/shonamoni.svg.
 *   - Promises are Bangladesh-style: genuine products with expiry checked,
 *     24-hour Dhaka delivery, 7-day return of sealed items, cash on delivery
 *     and bKash / Nagad. The footer payment icons are cards, cash and mobile
 *     banking; Pinterest became TikTok.
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Phone (+৮৮০ ১৭০০-০০০০০০), hello@example.com, social URLs, and the
 *     "ডেলিভারি তথ্য" / "রিটার্ন ও রিফান্ড" links (#).
 *   - The free-delivery threshold (১৫০০৳), the SHONAMONI code, the 15% club
 *     offer, delivery times and the return window: match them to the shop.
 *   - The six reviews on the home page are sample copy: replace them.
 */

var template = [
  {
    "name": "Shonamoni Baby Shop",
    "description": "বাংলা বেবি এসেনশিয়ালস শপ (Bangla baby essentials store) on WonderJoy's layout, in coral, teal and butter with Baloo Da 2 and Hind Siliguri: a gradient promo bar, a hero with floating badges, shop-by-age cards (0-6 months to 2+ years), live categories and bestsellers, product rows for diapers and wipes, formula milk, feeders and water bottles, feeding sets and bath care, parent reviews and a club footer. All 16 pages.",
    "thumbnail": "/templates/shonamoni.svg",
    "meta": {
      "fonts": [
        {
          "family": "Baloo Da 2",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Hind Siliguri",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Baloo Da 2",
        "body": "Hind Siliguri"
      },
      "colors": {
        "primary": "#FF6B6B",
        "secondary": "#00C9A7",
        "accent": "#FFD166",
        "background": "#F7F9FC",
        "foreground": "#1D1E2C",
        "muted": "#5C5E78"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "sm-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "sm-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFD166] to-[#00C9A7] px-4 py-2 text-center text-xs font-semibold text-[#1D1E2C] md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "sm-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "🚚 ১৫০০৳ এর বেশি অর্ডারে ফ্রি হোম ডেলিভারি! কোড ব্যবহার করুন:",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "sm-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "SHONAMONI",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-white/80 px-2 py-0.5 font-mono font-bold text-[#FF6B6B]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "অফার নিন",
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
                        "classes": "text-xs font-bold text-[#1D1E2C] underline hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "sm-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "স",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 rounded-2xl text-2xl items-center justify-center bg-[#FF6B6B] font-black text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform group-hover:rotate-6"
                              }
                            }
                          },
                          {
                            "id": "sm-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "সোনামণি",
                                  "src": "https://placehold.co/200x64?text=Shonamoni",
                                  "altText": "সোনামণি বেবি শপ",
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
                                    "classes": "font-heading text-2xl font-bold tracking-tight text-[#1D1E2C]"
                                  }
                                }
                              },
                              {
                                "id": "sm-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "বেবি এসেনশিয়ালস",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#00C9A7]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-hdr-menu",
                        "type": "menu",
                        "options": {
                          "showFrom": "lg",
                          "label": "প্রধান মেনু"
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-heading text-base font-medium text-[#1D1E2C] transition-colors hover:text-[#FF6B6B]"
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
                            "id": "sm-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "বয়স অনুযায়ী",
                              "url": "/#age-groups"
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
                            "id": "sm-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "ক্যাটাগরি",
                              "url": "/categories"
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
                            "id": "sm-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "বেস্টসেলার",
                              "url": "/#featured"
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
                            "id": "sm-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "ডায়াপার",
                              "url": "/#diaper-zone"
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
                            "id": "sm-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "কম্বো অফার",
                              "url": "/categories/combo-packs",
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
                                "classes": "!text-[#FF6B6B] font-bold"
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
                        "id": "sm-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "ডায়াপার, ফর্মুলা দুধ, ফিডার খুঁজুন...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#F7F9FC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#00C9A7] focus-within:ring-2 focus-within:ring-[#00C9A7]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1D1E2C] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#5C5E78]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF6B6B]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#FF6B6B]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF6B6B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E05252]"
                          }
                        }
                      },
                      {
                        "id": "sm-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F7F9FC] text-[#1D1E2C] transition-colors hover:bg-[#FFF0F0] hover:text-[#FF6B6B]"
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
                            "id": "sm-hdr-cart",
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
                              "crossSellsTitle": "একসাথে বেশি কেনা হয়",
                              "crossSellsLimit": 4
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative"
                              },
                              "trigger-icon": {
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#00C9A7] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#00A387]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#FF6B6B] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F7F9FC] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-heading text-xl font-bold text-[#1D1E2C]"
                              },
                              "title-icon": {
                                "classes": "text-[#FF6B6B]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#FF6B6B] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#FF6B6B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#E05252]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#FF6B6B] px-4 py-2 text-sm font-medium text-[#FF6B6B] transition-colors hover:bg-[#FF6B6B] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF6B6B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E05252] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "sm-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F7F9FC] text-[#1D1E2C]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F7F9FC] p-2 text-[#1D1E2C] transition-colors hover:bg-[#FF6B6B] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "স",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 rounded-xl text-xl items-center justify-center bg-[#FF6B6B] font-black text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform group-hover:rotate-6"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sm-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "সোনামণি",
                                          "src": "https://placehold.co/200x64?text=Shonamoni",
                                          "altText": "সোনামণি বেবি শপ",
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
                                            "classes": "font-heading text-2xl font-bold tracking-tight text-[#1D1E2C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sm-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "বেবি এসেনশিয়ালস",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#00C9A7]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "sm-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "ডায়াপার, ফর্মুলা দুধ, ফিডার খুঁজুন...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F7F9FC] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#00C9A7] focus-within:ring-2 focus-within:ring-[#00C9A7]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#1D1E2C] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5C5E78]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#FF6B6B]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#FF6B6B]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#FF6B6B] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#E05252]"
                                  }
                                }
                              },
                              {
                                "id": "sm-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-heading font-medium text-[#1D1E2C] transition-colors hover:text-[#FF6B6B]"
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
                                    "id": "sm-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "বয়স অনুযায়ী",
                                      "url": "/#age-groups"
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
                                    "id": "sm-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "ক্যাটাগরি",
                                      "url": "/categories"
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
                                    "id": "sm-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "বেস্টসেলার",
                                      "url": "/#featured"
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
                                    "id": "sm-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "ডায়াপার",
                                      "url": "/#diaper-zone"
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
                                    "id": "sm-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "কম্বো অফার",
                                      "url": "/categories/combo-packs",
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
                                        "classes": "!text-[#FF6B6B] font-bold"
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
            "id": "sm-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#1D1E2C] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "sm-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "sm-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-gradient-to-r from-[#FF6B6B] to-[#E05252] p-8 shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "সোনামণি ক্লাবে যোগ দিন",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-full bg-[#FFFFFF33] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FFFFFF]"
                              }
                            }
                          },
                          {
                            "id": "sm-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "প্রথম অর্ডারে ১৫% ছাড়! 🎁",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-bold text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "sm-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "ফ্রি অ্যাকাউন্ট খুলে স্বাগতম কোড নিন, সাথে প্রতি মাসে ডায়াপার ও ফর্মুলার রিফিল রিমাইন্ডার আর বয়স অনুযায়ী শিশুযত্নের টিপস।",
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
                        "id": "sm-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "১৫% ছাড় নিন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconGift",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center gap-2 rounded-2xl bg-[#FFD166] px-7 py-3.5 cursor-pointer shadow-md transition-all hover:bg-[#FFE099]"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#1D1E2C]"
                          },
                          "label": {
                            "classes": "font-heading font-bold text-[#1D1E2C] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": "sm-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "sm-ftr-grid",
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
                        "id": "sm-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "স",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 rounded-xl text-xl items-center justify-center bg-[#FF6B6B] font-black text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform group-hover:rotate-6"
                                  }
                                }
                              },
                              {
                                "id": "sm-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "সোনামণি",
                                      "src": "https://placehold.co/200x64?text=Shonamoni",
                                      "altText": "সোনামণি বেবি শপ",
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
                            "id": "sm-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "নবজাতক থেকে হাঁটি হাঁটি পা পা: আসল ডায়াপার, ফর্মুলা দুধ, ফিডার ও ফিডিং সেট, সবই যাচাই করা ও মেয়াদসহ, পৌঁছে যায় আপনার দরজায়।",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "sm-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF6B6B]"
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
                                "id": "sm-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF6B6B]"
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
                                "id": "sm-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF6B6B]"
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
                                "id": "sm-ftr-pin",
                                "type": "button",
                                "options": {
                                  "text": "",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "https://tiktok.com/",
                                  "target": "_blank",
                                  "icon": "IconBrandTiktok",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF6B6B]"
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
                        "id": "sm-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "কেনাকাটা",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "বয়স অনুযায়ী",
                                  "icon": "",
                                  "slug": "/#age-groups"
                                },
                                {
                                  "text": "সব ক্যাটাগরি",
                                  "icon": "",
                                  "slug": "/categories"
                                },
                                {
                                  "text": "সব পণ্য",
                                  "icon": "",
                                  "slug": "/shop"
                                },
                                {
                                  "text": "ব্র্যান্ড",
                                  "icon": "",
                                  "slug": "/brands"
                                },
                                {
                                  "text": "কম্বো অফার",
                                  "icon": "",
                                  "slug": "/categories/combo-packs"
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
                                "classes": "transition-colors hover:text-[#FFD166]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD166]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sm-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ftr-ll-care",
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
                                  "text": "ডেলিভারি তথ্য",
                                  "icon": "",
                                  "slug": "#"
                                },
                                {
                                  "text": "রিটার্ন ও রিফান্ড",
                                  "icon": "",
                                  "slug": "#"
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
                                "classes": "transition-colors hover:text-[#FFD166]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#FFD166]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sm-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ftr-contact-h",
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
                            "id": "sm-ftr-address",
                            "type": "address",
                            "options": {
                              "phone": {
                                "icon": "IconPhone",
                                "label": "ফোন",
                                "value": "+৮৮০ ১৭০০-০০০০০০"
                              },
                              "email": {
                                "icon": "IconMail",
                                "label": "ইমেইল",
                                "value": "hello@example.com"
                              },
                              "location": {
                                "icon": "IconClock",
                                "label": "সময়",
                                "value": "প্রতিদিন: সকাল ৯টা - রাত ১০টা",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#FFD166]"
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
                                "classes": "shrink-0 text-[#FF6B6B]"
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
                "id": "sm-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "sm-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© ২০২৬ সোনামণি বেবি শপ। সর্বস্বত্ব সংরক্ষিত। সোনামণিদের জন্য ভালোবাসা দিয়ে তৈরি ❤️",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "sm-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-ftr-pay-visa",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBrandVisa",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex"
                          }
                        }
                      },
                      {
                        "id": "sm-ftr-pay-mc",
                        "type": "icon",
                        "options": {
                          "iconName": "IconBrandMastercard",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex"
                          }
                        }
                      },
                      {
                        "id": "sm-ftr-pay-apple",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCash",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex"
                          }
                        }
                      },
                      {
                        "id": "sm-ftr-pay-pp",
                        "type": "icon",
                        "options": {
                          "iconName": "IconDeviceMobile",
                          "size": 26,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex"
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
            "id": "sm-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] pb-16 pt-8 lg:pb-24 lg:pt-16"
              }
            },
            "children": [
              {
                "id": "sm-hero-blob-1",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute left-8 top-10 h-16 w-16 animate-pulse rounded-full bg-[#FFD166] opacity-40 blur-xl"
                  }
                },
                "children": []
              },
              {
                "id": "sm-hero-blob-2",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute bottom-10 right-10 h-32 w-32 animate-pulse rounded-full bg-[#00C9A7] opacity-20 blur-2xl"
                  }
                },
                "children": []
              },
              {
                "id": "sm-hero-blob-3",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "pointer-events-none absolute left-1/3 top-1/2 h-24 w-24 rounded-full bg-[#FF6B6B] opacity-20 blur-xl"
                  }
                },
                "children": []
              },
              {
                "id": "sm-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
                  }
                },
                "children": [
                  {
                    "id": "sm-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-6 text-center lg:col-span-7 lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-hero-badge",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#FFD166]/60 bg-white px-4 py-2 shadow-sm"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hero-badge-emoji",
                                "type": "text",
                                "options": {
                                  "text": "🍼",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-hero-badge-txt",
                                "type": "text",
                                "options": {
                                  "text": "আসল • নিরাপদ • মেয়াদ যাচাই করা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                                  }
                                }
                              },
                              {
                                "id": "sm-hero-badge-new",
                                "type": "text",
                                "options": {
                                  "text": "নতুন ২০২৬",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full bg-[#FF6B6B] px-2 py-0.5 text-[10px] font-extrabold uppercase text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "সোনামণির যত্নে যা যা দরকার, সব এক জায়গায় ✨",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-4xl font-extrabold leading-[1.1] text-[#1D1E2C] sm:text-5xl lg:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "sm-hero-p",
                            "type": "text",
                            "options": {
                              "text": "আসল ডায়াপার, আমদানিকৃত ফর্মুলা দুধ, BPA-মুক্ত ফিডার, পানির বোতল ও ফিডিং সেট: শিশু বিশেষজ্ঞদের পরামর্শে বাছাই করা, দ্রুত ডেলিভারিতে আপনার দরজায়।",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto max-w-2xl text-lg leading-relaxed text-[#5C5E78] sm:text-xl lg:mx-0"
                              }
                            }
                          },
                          {
                            "id": "sm-hero-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hero-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "নতুন পণ্য দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/shop",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6B6B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E05252] w-full sm:w-auto"
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
                                "id": "sm-hero-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "ক্যাটাগরি অনুযায়ী কিনুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/#categories",
                                  "target": "",
                                  "icon": "IconLayoutGrid",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#00C9A7] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#00C9A7] w-full sm:w-auto"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#00C9A7] group-hover:text-white"
                                  },
                                  "label": {
                                    "classes": "font-heading text-lg font-bold text-[#00C9A7] whitespace-nowrap group-hover:text-white"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-hero-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto grid w-full max-w-md grid-cols-3 gap-4 border-t border-gray-200/60 pt-6 lg:mx-0"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hero-stat-0",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-stat-0-v",
                                    "type": "text",
                                    "options": {
                                      "text": "৫০,০০০+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-extrabold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hero-stat-0-l",
                                    "type": "text",
                                    "options": {
                                      "text": "সন্তুষ্ট পরিবার",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#5C5E78]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sm-hero-stat-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-stat-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "১০০%",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-extrabold text-[#00C9A7]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hero-stat-1-l",
                                    "type": "text",
                                    "options": {
                                      "text": "আসল পণ্য",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#5C5E78]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sm-hero-stat-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-stat-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "৪.৯ ★",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block font-heading text-2xl font-extrabold text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hero-stat-2-l",
                                    "type": "text",
                                    "options": {
                                      "text": "মা-বাবার রেটিং",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-xs font-medium text-[#5C5E78]"
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
                        "id": "sm-hero-visual",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex justify-center lg:col-span-5"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-hero-visual-in",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative w-full max-w-md lg:max-w-none"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-hero-art",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E6FAF6] via-white to-[#FFF9EB] p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-art-img",
                                    "type": "image",
                                    "options": {
                                      "src": "/templates/shonamoni-hero.svg",
                                      "altText": "ফিডার, ফর্মুলা দুধের কৌটা ও ডায়াপারের প্যাকেট",
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
                                        "classes": "h-auto w-full rounded-3xl drop-shadow-md"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sm-hero-float-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -left-3 -top-6 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:-left-6"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-float-1-ic",
                                    "type": "text",
                                    "options": {
                                      "text": "🏆",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF9EB] text-xl"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hero-float-1-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sm-hero-float-1-k",
                                        "type": "text",
                                        "options": {
                                          "text": "মাসের সেরা",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block text-xs font-semibold uppercase text-gray-400"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sm-hero-float-1-v",
                                        "type": "text",
                                        "options": {
                                          "text": "প্রিমিয়াম প্যান্ট ডায়াপার",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-xs font-bold text-[#1D1E2C]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "sm-hero-float-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:-right-6"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-hero-float-2-ic",
                                    "type": "icon",
                                    "options": {
                                      "iconName": "IconShieldHeart",
                                      "size": 22,
                                      "label": ""
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6FAF6] text-[#00C9A7]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-hero-float-2-t",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sm-hero-float-2-k",
                                        "type": "text",
                                        "options": {
                                          "text": "১০০% BPA-মুক্ত",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "block font-heading text-sm font-bold text-[#1D1E2C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sm-hero-float-2-v",
                                        "type": "text",
                                        "options": {
                                          "text": "ফিডার ও পানির বোতল",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "text-[11px] font-medium text-gray-500"
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
            "id": "sm-ages",
            "type": "section",
            "options": {
              "anchor": "age-groups"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16"
              }
            },
            "children": [
              {
                "id": "sm-ages-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-ages-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-ages-head-k",
                        "type": "text",
                        "options": {
                          "text": "প্রতিটি ধাপে পাশে",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                          }
                        }
                      },
                      {
                        "id": "sm-ages-head-h",
                        "type": "heading",
                        "options": {
                          "text": "বয়স অনুযায়ী সঠিক পণ্য বেছে নিন",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "sm-ages-head-p",
                        "type": "text",
                        "options": {
                          "text": "ডায়াপারের সাইজ, ফর্মুলার স্টেজ আর খাবারের ধাপ: সোনামণির বয়স অনুযায়ী সাজানো।",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "text-sm text-gray-500 sm:text-base"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-ages-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-age-0-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center overflow-hidden rounded-3xl border-2 border-transparent bg-[#F7F9FC] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD166] hover:bg-[#FFF9EB]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-age-0-2-emoji",
                            "type": "text",
                            "options": {
                              "text": "👶",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD166]/20 text-3xl transition-transform group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "sm-age-0-2-range",
                            "type": "text",
                            "options": {
                              "text": "০ - ৬ মাস",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-2 inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-0-2-h",
                            "type": "heading",
                            "options": {
                              "text": "নবজাতক",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-bold text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-0-2-p",
                            "type": "text",
                            "options": {
                              "text": "নিউবর্ন ডায়াপার, ফর্মুলা ১ ও নরম ফিডার",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 text-xs text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sm-age-0-2-cta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-age-0-2-btn",
                                "type": "button",
                                "options": {
                                  "text": "পণ্য দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/age-0-6m",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex items-center gap-2 cursor-pointer"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-sm font-bold text-[#FF6B6B] group-hover:text-[#E05252]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-age-3-5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center overflow-hidden rounded-3xl border-2 border-transparent bg-[#F7F9FC] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B6B] hover:bg-[#FFF0F0]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-age-3-5-emoji",
                            "type": "text",
                            "options": {
                              "text": "🥄",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF6B6B]/20 text-3xl transition-transform group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "sm-age-3-5-range",
                            "type": "text",
                            "options": {
                              "text": "৬ - ১২ মাস",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-2 inline-block rounded-full bg-[#FF6B6B] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FFFFFF]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-3-5-h",
                            "type": "heading",
                            "options": {
                              "text": "প্রথম খাবারের সময়",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-bold text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-3-5-p",
                            "type": "text",
                            "options": {
                              "text": "ফর্মুলা ২, সিপি কাপ ও ফিডিং বাটি",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 text-xs text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sm-age-3-5-cta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-age-3-5-btn",
                                "type": "button",
                                "options": {
                                  "text": "পণ্য দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/age-6-12m",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex items-center gap-2 cursor-pointer"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-sm font-bold text-[#FF6B6B] group-hover:text-[#E05252]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-age-6-8",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center overflow-hidden rounded-3xl border-2 border-transparent bg-[#F7F9FC] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00C9A7] hover:bg-[#E6FAF6]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-age-6-8-emoji",
                            "type": "text",
                            "options": {
                              "text": "🥣",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00C9A7]/20 text-3xl transition-transform group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "sm-age-6-8-range",
                            "type": "text",
                            "options": {
                              "text": "১ - ২ বছর",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-2 inline-block rounded-full bg-[#00C9A7] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FFFFFF]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-6-8-h",
                            "type": "heading",
                            "options": {
                              "text": "হাঁটি হাঁটি পা পা",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-bold text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-6-8-p",
                            "type": "text",
                            "options": {
                              "text": "প্যান্ট ডায়াপার, গ্রোয়িং-আপ মিল্ক ও ফিডিং সেট",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 text-xs text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sm-age-6-8-cta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-age-6-8-btn",
                                "type": "button",
                                "options": {
                                  "text": "পণ্য দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/age-1-2y",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex items-center gap-2 cursor-pointer"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-sm font-bold text-[#FF6B6B] group-hover:text-[#E05252]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-age-9",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col items-center overflow-hidden rounded-3xl border-2 border-transparent bg-[#F7F9FC] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1D1E2C] hover:bg-[#1D1E2C0D]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-age-9-emoji",
                            "type": "text",
                            "options": {
                              "text": "🧃",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1D1E2C]/20 text-3xl transition-transform group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "sm-age-9-range",
                            "type": "text",
                            "options": {
                              "text": "২+ বছর",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mb-2 inline-block rounded-full bg-[#1D1E2C] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FFFFFF]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-9-h",
                            "type": "heading",
                            "options": {
                              "text": "বড় সোনামণি",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-xl font-bold text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-age-9-p",
                            "type": "text",
                            "options": {
                              "text": "পানির বোতল, লাঞ্চবক্স ও পটি ট্রেনিং",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-1 text-xs text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sm-age-9-cta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-age-9-btn",
                                "type": "button",
                                "options": {
                                  "text": "পণ্য দেখুন",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/age-2-plus",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex items-center gap-2 cursor-pointer"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                                  },
                                  "label": {
                                    "classes": "font-heading text-sm font-bold text-[#FF6B6B] group-hover:text-[#E05252]"
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
            "id": "sm-cats",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-16"
              }
            },
            "children": [
              {
                "id": "sm-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-start gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cats-k",
                            "type": "text",
                            "options": {
                              "text": "জনপ্রিয় ক্যাটাগরি",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block rounded-full bg-[#FFF0F0] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B6B]"
                              }
                            }
                          },
                          {
                            "id": "sm-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "সোনামণির প্রয়োজনীয় সব ক্যাটাগরি",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sm-cats-all",
                        "type": "button",
                        "options": {
                          "text": "সব ক্যাটাগরি",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#00C9A7] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#00C9A7] group-hover:text-[#00A387]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cats-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cats-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cats-slider-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E6FAF6] transition-transform group-hover:rotate-6"
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
                            "id": "sm-cats-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                              }
                            }
                          },
                          {
                            "id": "sm-cats-slider-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " টি পণ্য",
                              "singularSuffix": " টি পণ্য",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[11px] font-medium text-gray-400"
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
            "id": "sm-featured",
            "type": "section",
            "options": {
              "anchor": "featured"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16"
              }
            },
            "children": [
              {
                "id": "sm-featured-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-featured-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-featured-head-k",
                        "type": "text",
                        "options": {
                          "text": "সবচেয়ে বেশি বিক্রিত",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-featured-head-h",
                        "type": "heading",
                        "options": {
                          "text": "মা-বাবাদের পছন্দের সেরা পণ্য",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-featured-tabs",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "-mt-4 mb-10 flex flex-wrap items-center justify-center gap-2"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-featured-tab-all",
                        "type": "button",
                        "options": {
                          "text": "সব পণ্য",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center rounded-full bg-[#1D1E2C] px-5 py-2.5 cursor-pointer shadow-md"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-white"
                          }
                        }
                      },
                      {
                        "id": "sm-featured-tab-trend",
                        "type": "button",
                        "options": {
                          "text": "🔥 ট্রেন্ডিং",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/trending",
                          "target": "",
                          "icon": "",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center rounded-full bg-[#F7F9FC] px-5 py-2.5 cursor-pointer transition-all hover:bg-gray-200"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-semibold text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-featured-tab-stem",
                        "type": "button",
                        "options": {
                          "text": "🧷 ডায়াপার",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/diapers-wipes",
                          "target": "",
                          "icon": "",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center rounded-full bg-[#F7F9FC] px-5 py-2.5 cursor-pointer transition-all hover:bg-gray-200"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-semibold text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-featured-tab-eco",
                        "type": "button",
                        "options": {
                          "text": "🥛 ফর্মুলা দুধ",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/formula-milk",
                          "target": "",
                          "icon": "",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center rounded-full bg-[#F7F9FC] px-5 py-2.5 cursor-pointer transition-all hover:bg-gray-200"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-semibold text-[#1D1E2C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-featured-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-featured-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-featured-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-featured-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-featured-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-featured-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-featured-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-featured-slider-c-rate",
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
                                    "id": "sm-featured-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-featured-slider-c-ex",
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
                            "id": "sm-featured-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-featured-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-featured-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
                    "id": "sm-featured-more",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-10 flex justify-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-featured-more-btn",
                        "type": "button",
                        "options": {
                          "text": "সব পণ্য দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#00C9A7] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#00C9A7] "
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#00C9A7] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#00C9A7] whitespace-nowrap group-hover:text-white"
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
            "id": "sm-cat-stem",
            "type": "section",
            "options": {
              "anchor": "diaper-zone"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-stem-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-stem-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex items-end justify-between gap-4 border-b border-gray-200/70 pb-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-stem-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-stem-ic",
                            "type": "text",
                            "options": {
                              "text": "🧷",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6FAF6] text-2xl sm:h-14 sm:w-14 sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-stem-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-stem-h",
                                "type": "heading",
                                "options": {
                                  "text": "ডায়াপার ও ওয়াইপস",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1D1E2C] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-stem-p",
                                "type": "text",
                                "options": {
                                  "text": "নিউবর্ন থেকে XXL: বেল্ট ও প্যান্ট ডায়াপার, নরম ওয়াইপস, সারারাত শুকনো।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-gray-500 sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-cat-stem-all",
                        "type": "button",
                        "options": {
                          "text": "সব দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/diapers-wipes",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#00C9A7] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold whitespace-nowrap text-[#00C9A7] group-hover:text-[#00A387]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cat-stem-slider",
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
                                  "diapers-wipes"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-stem-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-stem-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-stem-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-stem-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-stem-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat-stem-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-stem-slider-c-rate",
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
                                    "id": "sm-cat-stem-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-stem-slider-c-ex",
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
                            "id": "sm-cat-stem-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-stem-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-stem-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-cat-eco",
            "type": "section",
            "options": {
              "anchor": "formula-milk"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-eco-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-eco-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex items-end justify-between gap-4 border-b border-gray-200/70 pb-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-eco-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-eco-ic",
                            "type": "text",
                            "options": {
                              "text": "🥛",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF9EB] text-2xl sm:h-14 sm:w-14 sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-eco-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-eco-h",
                                "type": "heading",
                                "options": {
                                  "text": "ফর্মুলা দুধ ও শিশুখাদ্য",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1D1E2C] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-eco-p",
                                "type": "text",
                                "options": {
                                  "text": "স্টেজ ১, ২, ৩ ফর্মুলা আর সেরেলাক: আসল আমদানি, মেয়াদ যাচাই করা।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-gray-500 sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-cat-eco-all",
                        "type": "button",
                        "options": {
                          "text": "সব দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/formula-milk",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#B45309] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold whitespace-nowrap text-[#B45309] group-hover:text-[#92400E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cat-eco-slider",
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
                                  "formula-milk"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-eco-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-eco-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-eco-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-eco-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-eco-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat-eco-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-eco-slider-c-rate",
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
                                    "id": "sm-cat-eco-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-eco-slider-c-ex",
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
                            "id": "sm-cat-eco-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-eco-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-eco-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-cat-arts",
            "type": "section",
            "options": {
              "anchor": "feeders-bottles"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-arts-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-arts-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex items-end justify-between gap-4 border-b border-gray-200/70 pb-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-arts-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-arts-ic",
                            "type": "text",
                            "options": {
                              "text": "🍼",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F0] text-2xl sm:h-14 sm:w-14 sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-arts-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-arts-h",
                                "type": "heading",
                                "options": {
                                  "text": "ফিডার ও পানির বোতল",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1D1E2C] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-arts-p",
                                "type": "text",
                                "options": {
                                  "text": "BPA-মুক্ত ফিডার, অ্যান্টি-কোলিক নিপল, সিপি কাপ ও স্ট্র বোতল।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-gray-500 sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-cat-arts-all",
                        "type": "button",
                        "options": {
                          "text": "সব দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/feeders-bottles",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold whitespace-nowrap text-[#FF6B6B] group-hover:text-[#E05252]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cat-arts-slider",
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
                                  "feeders-bottles"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-arts-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-arts-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-arts-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-arts-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-arts-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat-arts-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-arts-slider-c-rate",
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
                                    "id": "sm-cat-arts-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-arts-slider-c-ex",
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
                            "id": "sm-cat-arts-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-arts-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-arts-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-cat-outdoor",
            "type": "section",
            "options": {
              "anchor": "feeding-sets"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-outdoor-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-outdoor-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex items-end justify-between gap-4 border-b border-gray-200/70 pb-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-outdoor-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-outdoor-ic",
                            "type": "text",
                            "options": {
                              "text": "🥣",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6FAF6] text-2xl sm:h-14 sm:w-14 sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-outdoor-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-outdoor-h",
                                "type": "heading",
                                "options": {
                                  "text": "ফিডিং সেট ও বাটি",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1D1E2C] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-outdoor-p",
                                "type": "text",
                                "options": {
                                  "text": "সাকশন বাটি, সিলিকন চামচ, বিব ও প্লেট: প্রথম খাবার হোক আনন্দের।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-gray-500 sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-cat-outdoor-all",
                        "type": "button",
                        "options": {
                          "text": "সব দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/feeding-sets",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#00C9A7] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold whitespace-nowrap text-[#00C9A7] group-hover:text-[#00A387]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cat-outdoor-slider",
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
                                  "feeding-sets"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-outdoor-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-outdoor-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-outdoor-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-outdoor-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-outdoor-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat-outdoor-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-outdoor-slider-c-rate",
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
                                    "id": "sm-cat-outdoor-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-outdoor-slider-c-ex",
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
                            "id": "sm-cat-outdoor-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-outdoor-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-outdoor-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-cat-plush",
            "type": "section",
            "options": {
              "anchor": "bath-skincare"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12 lg:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-plush-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-plush-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex items-end justify-between gap-4 border-b border-gray-200/70 pb-4"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-plush-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 items-center gap-3 sm:gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-plush-ic",
                            "type": "text",
                            "options": {
                              "text": "🛁",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F0] text-2xl sm:h-14 sm:w-14 sm:text-3xl"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-plush-head-tt",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex min-w-0 flex-col gap-0.5"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-plush-h",
                                "type": "heading",
                                "options": {
                                  "text": "গোসল ও স্কিনকেয়ার",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-bold text-[#1D1E2C] sm:text-3xl"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-plush-p",
                                "type": "text",
                                "options": {
                                  "text": "মৃদু বেবি শ্যাম্পু, লোশন, র‍্যাশ ক্রিম ও নরম তোয়ালে।",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "hidden text-sm text-gray-500 sm:block"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "sm-cat-plush-all",
                        "type": "button",
                        "options": {
                          "text": "সব দেখুন",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/bath-skincare",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 items-center gap-2 cursor-pointer"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#FF6B6B] transition-transform group-hover:translate-x-1"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold whitespace-nowrap text-[#FF6B6B] group-hover:text-[#E05252]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-cat-plush-slider",
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
                                  "bath-skincare"
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-plush-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-plush-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-plush-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-plush-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-plush-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat-plush-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat-plush-slider-c-rate",
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
                                    "id": "sm-cat-plush-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat-plush-slider-c-ex",
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
                            "id": "sm-cat-plush-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat-plush-slider-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat-plush-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16"
              }
            },
            "children": [
              {
                "id": "sm-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-reviews-head-k",
                        "type": "text",
                        "options": {
                          "text": "৫০ হাজারের বেশি পরিবারের আস্থা",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-reviews-head-h",
                        "type": "heading",
                        "options": {
                          "text": "মা-বাবারা যা বলছেন",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-gray-100 !bg-white !opacity-100 !shadow-[0_10px_25px_-5px_rgba(29,30,44,0.15)] transition-colors hover:!bg-[#FF6B6B] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#FF6B6B] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-gray-300 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#FF6B6B]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "\"ডায়াপারগুলো একদম আসল, প্যাকেটে মেয়াদও ঠিক ছিল। আমার ৮ মাসের মেয়ের সারারাত কোনো র‍্যাশ হয়নি।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "সা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B6B33] font-heading font-bold text-[#FF6B6B]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "সাদিয়া ইসলাম",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • দুই সন্তানের মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
                        "id": "sm-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "\"ফর্মুলা দুধ এখানে বাজারের চেয়ে কম দামে পাই, আর সবসময় সিল করা। পরদিনই ঢাকায় ডেলিভারি পেয়েছি।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "তা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00C9A733] font-heading font-bold text-[#00C9A7]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "তানভীর আহমেদ",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • বাবা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
                        "id": "sm-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "\"অ্যান্টি-কোলিক ফিডারটা নেওয়ার পর থেকে বাবুর পেটে গ্যাসের সমস্যা অনেক কমেছে। প্যাকেজিংও খুব যত্নের।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "নু",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD16666] font-heading font-bold text-[#B45309]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "নুসরাত জাহান",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • নতুন মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
                        "id": "sm-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "\"সাকশন বাটি আর সিলিকন চামচের সেটটা দারুণ! ছেলে এখন নিজেই খেতে চেষ্টা করে, টেবিলও পরিষ্কার থাকে।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "রা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00C9A733] font-heading font-bold text-[#00C9A7]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "রাশেদ করিম",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • দুই সন্তানের বাবা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
                        "id": "sm-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "\"ভাগ্নির জন্য উপহার হিসেবে নিউবর্ন কম্বো পাঠিয়েছিলাম, সুন্দর গিফট র‍্যাপে সময়ের আগেই পৌঁছে গেছে।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "ফা",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B6B33] font-heading font-bold text-[#FF6B6B]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "ফারহানা হক",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • খালামণি",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
                        "id": "sm-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-[#F7F9FC] p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-widest text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "\"কোন বয়সে কোন স্টেজের ফর্মুলা লাগবে বুঝতে পারছিলাম না, কাস্টমার সার্ভিস ধৈর্য নিয়ে বুঝিয়ে দিয়েছে।\"",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm italic leading-relaxed text-gray-600"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-gray-200/60 pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "মে",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD16666] font-heading font-bold text-[#B45309]"
                                  }
                                }
                              },
                              {
                                "id": "sm-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "মেহজাবিন চৌধুরী",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "যাচাইকৃত ক্রেতা • এক সন্তানের মা",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-[11px] font-semibold text-[#00C9A7]"
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
            "id": "sm-promise",
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
                "id": "sm-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "১০০% আসল পণ্য",
                          "description": "সরাসরি পরিবেশক থেকে, মেয়াদ যাচাই করে পাঠানো",
                          "icon": "IconShield",
                          "iconSize": ""
                        },
                        {
                          "title": "দ্রুত ডেলিভারি",
                          "description": "ঢাকায় ২৪ ঘণ্টায়, সারাদেশে ২-৩ দিনে",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "সহজ রিটার্ন",
                          "description": "সিল না খোলা পণ্য ৭ দিনের মধ্যে ফেরত",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "ক্যাশ অন ডেলিভারি",
                          "description": "পণ্য হাতে পেয়ে টাকা দিন, বিকাশ ও নগদেও পেমেন্ট",
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
                        "classes": "font-heading text-base font-bold text-[#1D1E2C]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FAF6] text-[#00C9A7]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-promise-fb-ic",
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
                        "id": "sm-promise-fb-t",
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
                        "id": "sm-promise-fb-d",
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
        "title": "Shop",
        "type": "shop",
        "content": [
          {
            "id": "sm-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "সোনামণির সব প্রয়োজন এক জায়গায়",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "সব পণ্য",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "আমাদের সব ডায়াপার, ফর্মুলা দুধ, ফিডার ও ফিডিং সেট, নতুনগুলো আগে। কার্ডে ট্যাপ করে সাইজ, স্টেজ ও রিভিউ দেখুন, অথবা সরাসরি ব্যাগে যোগ করুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-shop-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-shop-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-shop-grid-c-rate",
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
                                    "id": "sm-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-shop-grid-c-ex",
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
                            "id": "sm-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
                        "id": "sm-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-shop-promise",
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
                "id": "sm-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "১০০% আসল পণ্য",
                          "description": "সরাসরি পরিবেশক থেকে, মেয়াদ যাচাই করে পাঠানো",
                          "icon": "IconShield",
                          "iconSize": ""
                        },
                        {
                          "title": "দ্রুত ডেলিভারি",
                          "description": "ঢাকায় ২৪ ঘণ্টায়, সারাদেশে ২-৩ দিনে",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "সহজ রিটার্ন",
                          "description": "সিল না খোলা পণ্য ৭ দিনের মধ্যে ফেরত",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "ক্যাশ অন ডেলিভারি",
                          "description": "পণ্য হাতে পেয়ে টাকা দিন, বিকাশ ও নগদেও পেমেন্ট",
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
                        "classes": "font-heading text-base font-bold text-[#1D1E2C]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FAF6] text-[#00C9A7]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-shop-promise-fb-ic",
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
                        "id": "sm-shop-promise-fb-t",
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
                        "id": "sm-shop-promise-fb-d",
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
            "id": "sm-pd",
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
                "id": "sm-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-pd-grid",
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
                        "id": "sm-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#E6FAF6] via-white to-[#FFF9EB] p-4 shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1D1E2C]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#1D1E2C]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#FF6B6B]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sm-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-pd-cats",
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
                                "classes": "rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7] hover:bg-[#00C9A7] hover:text-white"
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
                            "id": "sm-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-bold leading-tight text-[#1D1E2C] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "sm-pd-rate",
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
                                "classes": "font-heading font-bold text-[#1D1E2C]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "sm-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-price",
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
                                    "classes": "font-heading text-3xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "আজকের ছাড়"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#FF6B6B] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "sm-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5C5E78]"
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
                            "id": "sm-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-heading font-bold text-[#1D1E2C]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-heading text-sm text-[#1D1E2C] transition-colors hover:border-[#00C9A7] hover:bg-[#E6FAF6]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#00C9A7] !bg-[#E6FAF6] !text-[#00A387]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "sm-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "স্টক শেষ: শিগগিরই আসছে",
                              "inStockText": "স্টকে আছে, আজই পাঠানো হবে",
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
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#FF6B6B]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-heading text-sm font-bold text-[#00C9A7]"
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
                            "id": "sm-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "ব্যাগে যোগ করুন",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#1D1E2C]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F9FC]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-heading font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F7F9FC]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#FF6B6B] px-8 text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#E05252]"
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
                            "id": "sm-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "আসল পণ্য",
                                  "description": "মেয়াদ যাচাই করা",
                                  "icon": "IconShieldHeart",
                                  "iconSize": ""
                                },
                                {
                                  "title": "ফ্রি ডেলিভারি",
                                  "description": "১৫০০৳ এর বেশি অর্ডারে",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "৭ দিনে রিটার্ন",
                                  "description": "সিল না খোলা পণ্যে",
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
                                "classes": "font-heading text-base font-bold text-[#1D1E2C]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FAF6] text-[#00C9A7]"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-perks-ic",
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
                                "id": "sm-pd-perks-t",
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
                                "id": "sm-pd-perks-d",
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
                            "id": "sm-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-sku",
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
                                    "classes": "font-semibold text-[#1D1E2C]"
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
                                "id": "sm-pd-brands",
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
                                    "classes": "font-semibold text-[#1D1E2C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF6B6B]"
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
                                "id": "sm-pd-tags",
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
                                    "classes": "font-semibold text-[#1D1E2C]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#FF6B6B]"
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
            "id": "sm-pd-tabs-sec",
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
                "id": "sm-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "বিবরণ",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "ব্যবহার ও বয়স",
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F9FC] px-5 py-2.5 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#1D1E2C] !text-white shadow-md"
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
                            "id": "sm-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1D1E2C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1D1E2C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#FF6B6B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD166] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconShieldCheck",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "প্যাকেটে দেওয়া বয়স ও ওজন অনুযায়ী সাইজ বা স্টেজ বেছে নিন",
                                      "icon": ""
                                    },
                                    {
                                      "text": "ফিডার ও বোতল BPA-মুক্ত; প্রথম ব্যবহারের আগে ফুটিয়ে জীবাণুমুক্ত করুন",
                                      "icon": ""
                                    },
                                    {
                                      "text": "ফর্মুলা তৈরিতে কৌটার নির্দেশনা ও মাপ চামচ মেনে চলুন",
                                      "icon": ""
                                    },
                                    {
                                      "text": "খোলা কৌটা শুকনো ও ঠান্ডা জায়গায় রাখুন, ৪ সপ্তাহের মধ্যে শেষ করুন",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#00C9A7]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "১৫০০৳ এর বেশি অর্ডারে ফ্রি হোম ডেলিভারি",
                                      "icon": ""
                                    },
                                    {
                                      "text": "ঢাকায় ২৪ ঘণ্টায়, সারাদেশে ২-৩ দিনে",
                                      "icon": ""
                                    },
                                    {
                                      "text": "সিল না খোলা পণ্য ৭ দিনের মধ্যে ফেরত দিলে পুরো টাকা ফেরত",
                                      "icon": ""
                                    },
                                    {
                                      "text": "ক্যাশ অন ডেলিভারি, বিকাশ ও নগদে পেমেন্ট",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#00C9A7]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "sm-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "sm-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFF0F0]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sm-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "sm-pd-reviews-rate",
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
                                        "id": "sm-pd-reviews-co",
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
                                    "id": "sm-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "আপনার রেটিং",
                                      "commentLabel": "অন্য মা-বাবাদের আপনার অভিজ্ঞতা জানান",
                                      "placeholder": "",
                                      "submitLabel": "রিভিউ দিন",
                                      "loadingLabel": "অপেক্ষা করুন...",
                                      "loginRequiredText": "রিভিউ দিতে লগ ইন করুন।",
                                      "successText": "ধন্যবাদ! আপনার মতামত পেয়েছি।"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F7F9FC] px-4 py-3 text-sm text-[#1D1E2C] placeholder:text-gray-400 focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#FF6B6B] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E05252] disabled:opacity-50"
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
            "id": "sm-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-16"
              }
            },
            "children": [
              {
                "id": "sm-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "আরও দেখুন",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFF0F0] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B6B]"
                          }
                        }
                      },
                      {
                        "id": "sm-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "আপনার আরও পছন্দ হতে পারে",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-pd-rel-c-rate",
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
                                    "id": "sm-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-pd-rel-c-ex",
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
                            "id": "sm-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
            "id": "sm-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "সব ক্যাটাগরি",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFF0F0] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B6B]"
                      }
                    }
                  },
                  {
                    "id": "sm-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "সোনামণির যত্নের সব ক্যাটাগরি",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "ডায়াপার থেকে ফিডিং সেট, সোনামণির যত্নের সব কিছু। একটি ক্যাটাগরি বেছে নিন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#E6FAF6] transition-transform group-hover:rotate-6"
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
                            "id": "sm-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                              }
                            }
                          },
                          {
                            "id": "sm-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " টি পণ্য",
                              "singularSuffix": " টি পণ্য",
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
                        "id": "sm-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ক্যাটাগরি",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFF0F0] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B6B]"
                      }
                    }
                  },
                  {
                    "id": "sm-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sm-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " টি পণ্য",
                      "singularSuffix": " টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#00C9A7] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-cat1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-cat1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-cat1-grid-c-rate",
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
                                    "id": "sm-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-cat1-grid-c-ex",
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
                            "id": "sm-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
                        "id": "sm-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "দ্রুত খুঁজুন",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                      }
                    }
                  },
                  {
                    "id": "sm-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "ট্যাগ অনুযায়ী দেখুন",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "ট্যাগগুলো বয়স, প্রয়োজন ও অফার অনুযায়ী পণ্য সাজায়।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF6B6B]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF6B6B]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1D1E2C] group-hover:text-[#FF6B6B]"
                              }
                            }
                          },
                          {
                            "id": "sm-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F7F9FC] px-2 py-0.5 text-[10px] font-bold text-[#5C5E78]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "sm-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ট্যাগ",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                      }
                    }
                  },
                  {
                    "id": "sm-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sm-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " টি পণ্য",
                      "singularSuffix": " টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#00C9A7] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-tag1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-tag1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-tag1-grid-c-rate",
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
                                    "id": "sm-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-tag1-grid-c-ex",
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
                            "id": "sm-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
                        "id": "sm-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "বিশ্বস্ত ব্র্যান্ড",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "আমাদের ব্র্যান্ডসমূহ",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "দেশি-বিদেশি যেসব ব্র্যান্ডের আসল পণ্য আমরা রাখি।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F7F9FC] p-3"
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
                            "id": "sm-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-base font-bold text-[#1D1E2C] group-hover:text-[#FF6B6B]"
                              }
                            }
                          },
                          {
                            "id": "sm-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " টি পণ্য",
                              "singularSuffix": " টি পণ্য",
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
                        "id": "sm-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "ব্র্যান্ড",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "sm-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " টি পণ্য",
                      "singularSuffix": " টি পণ্য"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-heading text-xs font-bold text-[#00C9A7] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-brand1-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-brand1-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-brand1-grid-c-rate",
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
                                    "id": "sm-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-brand1-grid-c-ex",
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
                            "id": "sm-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
                        "id": "sm-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "শিশুযত্ন ও প্যারেন্টিং",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "সোনামণি ব্লগ",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "ফিডিং, ঘুম, ডায়াপারিং আর বেড়ে ওঠার প্রতিটি ধাপের টিপস।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF9EB]"
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
                            "id": "sm-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                                  }
                                }
                              },
                              {
                                "id": "sm-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-xl font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                  }
                                }
                              },
                              {
                                "id": "sm-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "পুরোটা পড়ুন",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-heading text-sm font-bold text-[#FF6B6B]"
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
                        "id": "sm-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:border-[#FF6B6B] hover:text-[#FF6B6B]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#FF6B6B] font-heading text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "sm-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-post-k",
                    "type": "text",
                    "options": {
                      "text": "ব্লগ থেকে",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold leading-tight text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#5C5E78]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-post-author",
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
                            "classes": "font-heading font-bold text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-post-dot",
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
                        "id": "sm-post-date",
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
                    "id": "sm-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
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
            "id": "sm-post-body",
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
                "id": "sm-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1D1E2C] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#1D1E2C] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#FF6B6B] [&_a]:underline [&_img]:my-6 [&_img]:rounded-3xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD166] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-16"
              }
            },
            "children": [
              {
                "id": "sm-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "আলোচনায় যোগ দিন",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1D1E2C]"
                      }
                    }
                  },
                  {
                    "id": "sm-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-3xl border border-gray-100 bg-[#F7F9FC] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#FFF0F0]"
                              }
                            }
                          },
                          {
                            "id": "sm-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                              }
                            }
                          },
                          {
                            "id": "sm-post-cmt-co",
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
                        "id": "sm-post-cmt-form",
                        "type": "commentsForm",
                        "options": {
                          "showRate": false,
                          "rateLabel": "আপনার রেটিং",
                          "commentLabel": "মন্তব্য লিখুন",
                          "placeholder": "",
                          "submitLabel": "মন্তব্য পাঠান",
                          "loadingLabel": "অপেক্ষা করুন...",
                          "loginRequiredText": "রিভিউ দিতে লগ ইন করুন।",
                          "successText": "ধন্যবাদ! আপনার মতামত পেয়েছি।"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-heading text-sm font-bold text-[#1D1E2C]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F7F9FC] px-4 py-3 text-sm text-[#1D1E2C] placeholder:text-gray-400 focus:border-[#00C9A7] focus:outline-none focus:ring-2 focus:ring-[#00C9A7]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#FF6B6B] px-6 py-3 font-heading font-bold text-white shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#E05252] disabled:opacity-50"
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
            "id": "sm-post-more",
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
                "id": "sm-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "ব্লগের আরও লেখা",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-bold text-[#1D1E2C]"
                      }
                    }
                  },
                  {
                    "id": "sm-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF9EB]"
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
                            "id": "sm-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                                  }
                                }
                              },
                              {
                                "id": "sm-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-base font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
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
            "id": "sm-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "sm-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "আবার স্বাগতম",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#00C9A7]"
                      }
                    }
                  },
                  {
                    "id": "sm-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "আমার অ্যাকাউন্ট",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-bold text-[#1D1E2C] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "sm-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "অর্ডার ট্র্যাক করুন, মাসিক ডায়াপার ও ফর্মুলা সাবস্ক্রিপশন সামলান, তথ্য আপডেট করুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "sm-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-12"
              }
            },
            "children": [
              {
                "id": "sm-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#1D1E2C] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-heading text-sm text-[#FFD166]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-bold text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#FF6B6B]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#FF6B6B]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#FF6B6B]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "sm-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "sm-acc-3",
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
                                "id": "sm-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B6B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E05252] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "sm-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(29,30,44,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B6B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E05252] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "sm-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "sm-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F7F9FC] px-5 py-2.5 font-heading text-sm font-semibold text-[#1D1E2C] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#1D1E2C] !text-white shadow-md"
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
                                "id": "sm-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "sm-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#FF6B6B] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sm-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sm-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#FF6B6B]/40 hover:bg-[#FF6B6B]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "sm-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6B6B]/10 text-[#FF6B6B]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF6B6B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E05252] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "sm-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(29,30,44,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#E6FAF6] text-[#00C9A7]"
                          }
                        }
                      },
                      {
                        "id": "sm-ty-k",
                        "type": "text",
                        "options": {
                          "text": "অর্ডার পেয়েছি",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFF0F0] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#FF6B6B]"
                          }
                        }
                      },
                      {
                        "id": "sm-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "ধন্যবাদ! আপনার অর্ডার সম্পন্ন হয়েছে 🎉",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "sm-ty-p",
                        "type": "text",
                        "options": {
                          "text": "আমরা অর্ডারটি প্রস্তুত করছি। শিগগিরই ফোনে বা SMS-এ নিশ্চিত করা হবে, আর আপনার অ্যাকাউন্ট থেকে অর্ডারটি ট্র্যাক করতে পারবেন।",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#5C5E78] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "sm-ty-steps",
                        "type": "list",
                        "options": {
                          "icon": "",
                          "iconSize": 18,
                          "tag": "ol",
                          "items": [
                            {
                              "text": "ফোনে অর্ডার নিশ্চিত করে মেয়াদ যাচাই করে প্যাক করি",
                              "icon": ""
                            },
                            {
                              "text": "পার্সেল রওনা হয়, ঢাকায় সাধারণত ২৪ ঘণ্টার মধ্যে পৌঁছায়",
                              "icon": ""
                            },
                            {
                              "text": "পণ্য বুঝে নিয়ে মূল্য দিন, আর সোনামণির হাসি শেয়ার করুন #ShonamoniBD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-3xl bg-[#F7F9FC] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-heading marker:font-bold marker:text-[#FF6B6B]"
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
                        "id": "sm-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6B6B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E05252] w-full sm:w-auto"
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
                            "id": "sm-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#00C9A7] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#00C9A7] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#00C9A7] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-heading text-lg font-bold text-[#00C9A7] whitespace-nowrap group-hover:text-white"
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
            "id": "sm-ty-promise",
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
                "id": "sm-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "১০০% আসল পণ্য",
                          "description": "সরাসরি পরিবেশক থেকে, মেয়াদ যাচাই করে পাঠানো",
                          "icon": "IconShield",
                          "iconSize": ""
                        },
                        {
                          "title": "দ্রুত ডেলিভারি",
                          "description": "ঢাকায় ২৪ ঘণ্টায়, সারাদেশে ২-৩ দিনে",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "সহজ রিটার্ন",
                          "description": "সিল না খোলা পণ্য ৭ দিনের মধ্যে ফেরত",
                          "icon": "IconArrowBackUp",
                          "iconSize": ""
                        },
                        {
                          "title": "ক্যাশ অন ডেলিভারি",
                          "description": "পণ্য হাতে পেয়ে টাকা দিন, বিকাশ ও নগদেও পেমেন্ট",
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
                        "classes": "font-heading text-base font-bold text-[#1D1E2C]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FAF6] text-[#00C9A7]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-ty-promise-fb-ic",
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
                        "id": "sm-ty-promise-fb-t",
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
                        "id": "sm-ty-promise-fb-d",
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
            "id": "sm-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF9EB] via-white to-[#F7F9FC] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "sm-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-black text-[#FF6B6B] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "sm-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF9EB] text-[#1D1E2C]"
                      }
                    }
                  },
                  {
                    "id": "sm-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "ওহো! পেজটি খুঁজে পাওয়া যায়নি",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "sm-nf-p",
                    "type": "text",
                    "options": {
                      "text": "লিংকটি ভুল হতে পারে বা পণ্যটি স্টকে নেই। হোমে ফিরে যান অথবা শপের সব পণ্য দেখুন।",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5C5E78] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "sm-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-nf-home",
                        "type": "button",
                        "options": {
                          "text": "হোমে ফিরে যান",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF6B6B] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(255,107,107,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#E05252] w-full sm:w-auto"
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
                        "id": "sm-nf-shop",
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
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#00C9A7] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#00C9A7] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#00C9A7] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-heading text-lg font-bold text-[#00C9A7] whitespace-nowrap group-hover:text-white"
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
            "id": "sm-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F7F9FC] py-16"
              }
            },
            "children": [
              {
                "id": "sm-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "sm-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "এখনো খুঁজছেন?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#FFD166] px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-[#1D1E2C]"
                          }
                        }
                      },
                      {
                        "id": "sm-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "এখন জনপ্রিয়",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-bold text-[#1D1E2C] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "sm-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "sm-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(29,30,44,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "sm-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-2xl bg-[#E6FAF6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "ছাড়"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B6B] shadow-sm backdrop-blur-sm"
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
                                "id": "sm-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-4 flex flex-col gap-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "sm-nf-grid-c-rate",
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
                                    "id": "sm-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-heading text-lg font-bold text-[#1D1E2C] transition-colors group-hover:text-[#FF6B6B]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "sm-nf-grid-c-ex",
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
                            "id": "sm-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "sm-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-xs text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl font-black text-[#1D1E2C]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#FF6B6B]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#FF6B6B] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "sm-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "যোগ করুন",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#E6FAF6] px-3.5 text-[#00C9A7] shadow-sm transition-colors hover:bg-[#00C9A7] hover:text-white"
                                  },
                                  "button-label": {
                                    "classes": "font-heading text-sm font-bold whitespace-nowrap"
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
