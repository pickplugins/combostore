/**
 * Template: Voltix Gadgets.
 *
 * A clean, techy electronics and gadget store: smartphones, audio,
 * wearables, gaming gear and power accessories. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy.js: every page except Home keeps WonderJoy's block
 * structure (ids renamed wj- to vx-, palette remapped, copy rewritten). Home
 * is built fresh from the same block types. Product cards everywhere show
 * the product image contained on a light grey well (gadget photos on white
 * blend in via mix-blend-multiply), a volt "% OFF" tag in mono, a two-line
 * title, the price in Geist with the struck price in mono, and a blue Add
 * button. It is plain data: edit freely.
 *
 * DESIGN
 *
 *   blue      #2563FF  primary buttons, links, hover rings   #1D4ED8 hover  #E8EEFF tint
 *   graphite  #0B0D10  text, dark bento card, trust bar, spotlight, CTA   #2A2F36 hover  #EEF0F3 tint
 *   volt      #C6FF3D  tags, discount flags, timer digits, accents on dark   #D8FF7A
 *   page      #F3F4F6  cool grey bands with a dot grid   line #E3E5E9   muted #5B6270
 *
 * Fonts (template meta): Geist for headings and body (semibold, tight
 * tracking at display sizes), Geist Mono via `font-['Geist_Mono']` for
 * section indexes ("04 / Smartphones"), tags, prices struck through, specs
 * and the promo bar. The dot grid is
 * `bg-[radial-gradient(circle,rgba(...)_1px,transparent_1px)] bg-[length:22px_22px]`.
 *
 * HOME
 *
 *   Bento hero: a graphite card with headline and gadget art
 *   (public/templates/voltix-hero.svg) beside audio, wearables and gaming
 *   tiles - graphite trust bar (warranty, authentic, express, replacement) -
 *   01 category tiles (#categories) - 02 deals of the day with countdown
 *   (#deals) - 03 spotlight with a spec sheet
 *   (public/templates/voltix-spotlight.svg, #spotlight) - 04 smartphones,
 *   05 audio rows - 06 stats bento + "ask a human" support card (#why-us) -
 *   07 wearables, 08 accessories rows - 09 brands - 10 reviews - 11 tech
 *   talk (#journal) - 12 FAQ (#faq) - Voltix Insider CTA to /register.
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: smartphones, audio, wearables, accessories, gaming.
 *     Tag slug: deals. Brand logos come from product_brand term thumbnails.
 *   - The deals countdown (08:24:51) is static text.
 *   - The spotlight specs describe a generic headphone: point it at a real
 *     product and update the numbers, or replace the section.
 *   - "Chat with us" links to # : set your WhatsApp link. Contact details,
 *     promo code VOLT500, the ৳500 offer, stats (50K+, 120+, 4.8) and the six
 *     reviews are sample copy.
 *   - Warranty, 7-day replacement, COD box-check and delivery times: check
 *     they match the shop's actual policy.
 */

var template = [
  {
    "name": "Voltix Gadgets",
    "description": "Clean, techy electronics and gadget store in graphite, electric blue and volt lime with Geist and Geist Mono: bento-grid hero, warranty trust bar, category tiles, deals of the day with countdown, a spec-sheet product spotlight, phone / audio / wearables / accessories rows, stats bento, brands, reviews, tech blog, FAQ and a members CTA. All 16 pages.",
    "thumbnail": "/templates/voltix.svg",
    "meta": {
      "fonts": [
        {
          "family": "Geist",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Geist Mono",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Geist",
        "body": "Geist"
      },
      "colors": {
        "primary": "#2563FF",
        "secondary": "#0B0D10",
        "accent": "#C6FF3D",
        "background": "#F3F4F6",
        "foreground": "#0B0D10",
        "muted": "#5B6270"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "vx-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full border-b border-[#E3E5E9] bg-white/85 backdrop-blur-xl"
              }
            },
            "children": [
              {
                "id": "vx-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#0B0D10] px-4 py-2 text-center font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-white/75"
                  }
                },
                "children": [
                  {
                    "id": "vx-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Official warranty · Cash on delivery · Express 24h Dhaka · Code",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "vx-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "VOLT500",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-md bg-[#C6FF3D] px-2 py-0.5 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Today’s deals",
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
                        "classes": "font-['Geist_Mono'] text-[11px] uppercase text-[#C6FF3D] underline underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "vx-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-20 items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex shrink-0 items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "V",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex h-11 w-11 text-xl items-center justify-center rounded-xl bg-[#2563FF] font-['Geist_Mono'] font-medium leading-none text-white shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)] after:absolute after:-right-1 after:-top-1 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-white after:bg-[#C6FF3D] after:content-['']"
                              }
                            }
                          },
                          {
                            "id": "vx-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "voltix",
                                  "src": "https://placehold.co/200x64?text=Voltix",
                                  "altText": "Voltix",
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
                                    "classes": "font-heading text-2xl font-bold tracking-tight text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "Gadget store",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-0.5 block font-['Geist_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#5B6270]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "vx-hdr-menu",
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
                            "classes": "flex items-center gap-1.5 whitespace-nowrap font-body text-sm font-medium text-[#5B6270] transition-colors hover:text-[#0B0D10]"
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
                            "id": "vx-hdr-mi-1",
                            "type": "menuItem",
                            "options": {
                              "label": "Phones",
                              "url": "/categories/smartphones"
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
                            "id": "vx-hdr-mi-2",
                            "type": "menuItem",
                            "options": {
                              "label": "Audio",
                              "url": "/categories/audio"
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
                            "id": "vx-hdr-mi-3",
                            "type": "menuItem",
                            "options": {
                              "label": "Wearables",
                              "url": "/categories/wearables"
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
                            "id": "vx-hdr-mi-4",
                            "type": "menuItem",
                            "options": {
                              "label": "Accessories",
                              "url": "/categories/accessories"
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
                            "id": "vx-hdr-mi-5",
                            "type": "menuItem",
                            "options": {
                              "label": "Deals",
                              "url": "/#deals",
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
                                "classes": "!text-[#2563FF] font-bold"
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
                        "id": "vx-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search phones, earbuds, chargers...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full border border-gray-200 bg-[#F3F4F6] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#0B0D10] focus-within:ring-2 focus-within:ring-[#0B0D10]/20 ml-4 hidden max-w-xs flex-1 md:block xl:max-w-sm"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#0B0D10] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#5B6270]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2563FF]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#2563FF]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2563FF] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                          }
                        }
                      },
                      {
                        "id": "vx-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-hdr-account",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F3F4F6] text-[#0B0D10] transition-colors hover:bg-[#E8EEFF] hover:text-[#2563FF]"
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
                            "id": "vx-hdr-cart",
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
                                "classes": "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0B0D10] text-white shadow-[0_10px_25px_-5px_rgba(0,201,167,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#2A2F36]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#2563FF] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#F3F4F6] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#0B0D10]"
                              },
                              "title-icon": {
                                "classes": "text-[#2563FF]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#2563FF] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#2563FF] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1D4ED8]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#2563FF] px-4 py-2 text-sm font-medium text-[#2563FF] transition-colors hover:bg-[#2563FF] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563FF] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "vx-hdr-mobile",
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
                                "classes": "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F3F4F6] text-[#0B0D10]"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#F3F4F6] p-2 text-[#0B0D10] transition-colors hover:bg-[#2563FF] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "V",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative flex h-10 w-10 text-lg items-center justify-center rounded-xl bg-[#2563FF] font-['Geist_Mono'] font-medium leading-none text-white shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)] after:absolute after:-right-1 after:-top-1 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-white after:bg-[#C6FF3D] after:content-['']"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "vx-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "voltix",
                                          "src": "https://placehold.co/200x64?text=Voltix",
                                          "altText": "Voltix",
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
                                            "classes": "font-heading text-2xl font-bold tracking-tight text-[#0B0D10]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "vx-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "Gadget store",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#0B0D10]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "vx-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search gadgets...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#F3F4F6] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#0B0D10] focus-within:ring-2 focus-within:ring-[#0B0D10]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#0B0D10] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#5B6270]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#2563FF]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#2563FF]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#2563FF] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                                  }
                                }
                              },
                              {
                                "id": "vx-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-gray-50 py-2.5 font-body font-medium text-[#0B0D10] transition-colors hover:text-[#2563FF]"
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
                                    "id": "vx-hdr-mm-1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Phones",
                                      "url": "/categories/smartphones"
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
                                    "id": "vx-hdr-mm-2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Audio",
                                      "url": "/categories/audio"
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
                                    "id": "vx-hdr-mm-3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Wearables",
                                      "url": "/categories/wearables"
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
                                    "id": "vx-hdr-mm-4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Accessories",
                                      "url": "/categories/accessories"
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
                                    "id": "vx-hdr-mm-5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Deals",
                                      "url": "/#deals",
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
                                        "classes": "!text-[#2563FF] font-bold"
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
            "id": "vx-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0B0D10] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "vx-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "vx-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-[#2563FF] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "// Voltix Insider",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Launch alerts & members-only prices",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-2xl font-semibold tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "vx-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Free account, ৳500 off your first order over ৳5,000, and flash-deal alerts before anyone else.",
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
                        "id": "vx-ftr-news-btn",
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
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0B0D10] px-6 py-3.5 transition-colors hover:bg-[#2A2F36]"
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
                "id": "vx-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "vx-ftr-grid",
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
                        "id": "vx-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "V",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative flex h-10 w-10 text-lg items-center justify-center rounded-xl bg-[#2563FF] font-['Geist_Mono'] font-medium leading-none text-white shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)] after:absolute after:-right-1 after:-top-1 after:h-3 after:w-3 after:rounded-full after:border-2 after:border-white after:bg-[#C6FF3D] after:content-['']"
                                  }
                                }
                              },
                              {
                                "id": "vx-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "voltix",
                                      "src": "https://placehold.co/200x64?text=Voltix",
                                      "altText": "Voltix",
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
                                        "classes": "font-heading text-2xl font-bold tracking-tight text-[#0B0D10]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "vx-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Genuine gadgets with official warranty: phones, audio, wearables and accessories from the brands you trust, delivered fast across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "vx-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563FF]"
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
                                "id": "vx-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563FF]"
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
                                "id": "vx-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563FF]"
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
                                "id": "vx-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563FF]"
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
                        "id": "vx-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Smartphones",
                                  "icon": "",
                                  "slug": "/categories/smartphones"
                                },
                                {
                                  "text": "Audio",
                                  "icon": "",
                                  "slug": "/categories/audio"
                                },
                                {
                                  "text": "Wearables",
                                  "icon": "",
                                  "slug": "/categories/wearables"
                                },
                                {
                                  "text": "Power & Accessories",
                                  "icon": "",
                                  "slug": "/categories/accessories"
                                },
                                {
                                  "text": "Gaming",
                                  "icon": "",
                                  "slug": "/categories/gaming"
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
                                "classes": "transition-colors hover:text-[#C6FF3D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#C6FF3D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ftr-ll-care",
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
                                  "text": "Warranty & Replacement",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Delivery Info",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Tech Talk",
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
                                "classes": "transition-colors hover:text-[#C6FF3D]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#C6FF3D]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ftr-contact-h",
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
                            "id": "vx-ftr-address",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#C6FF3D]"
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
                                "classes": "shrink-0 text-[#2563FF]"
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
                "id": "vx-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "vx-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Voltix. All rights reserved. Genuine gadgets, honest prices.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "vx-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-ftr-pay-txt",
                        "type": "text",
                        "options": {
                          "text": "COD · bKash · Nagad · Visa · Mastercard",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider"
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
            "id": "vx-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] pb-10 pt-6 lg:pb-14 lg:pt-8"
              }
            },
            "children": [
              {
                "id": "vx-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-bento",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-bento-main",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl bg-[#0B0D10] p-7 sm:p-10 md:col-span-2 md:row-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-bento-main-dots",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:22px_22px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "vx-bento-main-glow",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#2563FF] opacity-50 blur-[110px]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "vx-bento-main-copy",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-10 flex flex-col items-start gap-5"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-bento-main-k",
                                "type": "text",
                                "options": {
                                  "text": "// New arrivals",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-hero-h1",
                                "type": "heading",
                                "options": {
                                  "text": "Next-gen gadgets. Honest prices.",
                                  "tag": "h1"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl"
                                  }
                                }
                              },
                              {
                                "id": "vx-hero-p",
                                "type": "text",
                                "options": {
                                  "text": "Phones, audio, wearables and smart accessories from the brands you trust, with official warranty, fast delivery and cash on delivery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-md text-base leading-relaxed text-white/65"
                                  }
                                }
                              },
                              {
                                "id": "vx-hero-btns",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-wrap gap-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-hero-btn-1",
                                    "type": "button",
                                    "options": {
                                      "text": "Shop new arrivals",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/shop",
                                      "target": "",
                                      "icon": "IconArrowRight",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563FF] px-6 py-3.5 transition-colors hover:bg-[#1D4ED8]"
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
                                    "id": "vx-hero-btn-2",
                                    "type": "button",
                                    "options": {
                                      "text": "Today’s deals",
                                      "linkTo": "custom",
                                      "scheme": "",
                                      "url": "/#deals",
                                      "target": "",
                                      "icon": "IconBolt",
                                      "iconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 transition-colors hover:bg-white/10"
                                      },
                                      "icon": {
                                        "classes": "flex items-center shrink-0 text-[#C6FF3D]"
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
                            "id": "vx-bento-main-art",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative z-0 -mb-10 -mr-10 mt-4 self-end sm:-mb-12 sm:-mr-12"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-hero-img",
                                "type": "image",
                                "options": {
                                  "src": "/templates/voltix-hero.svg",
                                  "altText": "A smartphone, wireless earbuds in their case and a smartwatch",
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
                                    "classes": "h-auto w-[300px] max-w-full sm:w-[380px]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "vx-bento-audio",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#2563FF]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-bento-audio-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconHeadphones",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-6 flex opacity-90 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 text-white/25"
                              }
                            }
                          },
                          {
                            "id": "vx-bento-audio-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-bento-audio-k",
                                "type": "text",
                                "options": {
                                  "text": "Audio",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-white"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-audio-h",
                                "type": "heading",
                                "options": {
                                  "text": "Earbuds from ৳1,490",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-white"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-audio-p",
                                "type": "text",
                                "options": {
                                  "text": "ANC, spatial audio, all-day battery.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[14rem] text-sm text-white/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-bento-audio-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/audio",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex cursor-pointer items-center gap-1.5 self-start"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-white underline underline-offset-4"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-bento-watch",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 bg-[#C6FF3D]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-bento-watch-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDeviceWatch",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-6 flex opacity-90 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 text-[#0B0D10]/15"
                              }
                            }
                          },
                          {
                            "id": "vx-bento-watch-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-bento-watch-k",
                                "type": "text",
                                "options": {
                                  "text": "Wearables",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-watch-h",
                                "type": "heading",
                                "options": {
                                  "text": "Smartwatches & bands",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-2xl font-semibold tracking-tight text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-watch-p",
                                "type": "text",
                                "options": {
                                  "text": "Track sleep, steps and SpO2.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-[14rem] text-sm text-[#0B0D10]/70"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-bento-watch-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/wearables",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex cursor-pointer items-center gap-1.5 self-start"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B0D10]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#0B0D10] underline underline-offset-4"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-bento-game",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 bg-white md:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-bento-game-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconDeviceGamepad2",
                              "size": 120,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute -bottom-6 -right-6 flex opacity-90 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 text-[#2563FF]/15"
                              }
                            }
                          },
                          {
                            "id": "vx-bento-game-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-bento-game-k",
                                "type": "text",
                                "options": {
                                  "text": "Gaming week",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#E8EEFF] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-game-h",
                                "type": "heading",
                                "options": {
                                  "text": "Controllers, headsets & gear up to 30% off",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-sm font-heading text-2xl font-semibold tracking-tight text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-bento-game-p",
                                "type": "text",
                                "options": {
                                  "text": "Low-latency, RGB, pro-grade. Level up your setup.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xs text-sm text-[#5B6270]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-bento-game-btn",
                            "type": "button",
                            "options": {
                              "text": "Shop now",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/gaming",
                              "target": "",
                              "icon": "IconArrowUpRight",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative inline-flex cursor-pointer items-center gap-1.5 self-start"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2563FF]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-[#2563FF] underline underline-offset-4"
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
            "id": "vx-trust",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#0B0D10] py-6"
              }
            },
            "children": [
              {
                "id": "vx-trust-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-trust-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Official warranty",
                          "description": "Brand-backed, on every device",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "100% authentic",
                          "description": "Sourced from authorised distributors",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Express delivery",
                          "description": "24h Dhaka · 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day replacement",
                          "description": "For manufacturing faults",
                          "icon": "IconRefresh",
                          "iconSize": ""
                        }
                      ]
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "grid grid-cols-[auto_1fr] items-center gap-x-3 text-left"
                      },
                      "title": {
                        "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-wider text-white"
                      },
                      "description": {
                        "classes": "text-xs text-white/55"
                      },
                      "icon": {
                        "classes": "row-span-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#C6FF3D]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-trust-fb-ic",
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
                        "id": "vx-trust-fb-t",
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
                        "id": "vx-trust-fb-d",
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
            "id": "vx-cats",
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
                "id": "vx-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cats-idx",
                            "type": "text",
                            "options": {
                              "text": "01 / Categories",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Shop by category",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-cats-sub",
                            "type": "text",
                            "options": {
                              "text": "Everything from flagship phones to the cable you forgot.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-cats-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-cats-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col gap-3 rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-cats-grid-loop",
                        "type": "termsLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col gap-3 rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "w-full overflow-hidden rounded-xl bg-[#F3F4F6]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                              }
                            }
                          },
                          {
                            "id": "vx-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "px-1 font-body text-sm font-semibold text-[#0B0D10] group-hover:text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " products",
                              "singularSuffix": " product",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-2 px-1 font-['Geist_Mono'] text-[11px] text-[#5B6270]"
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
            "id": "vx-deals",
            "type": "section",
            "options": {
              "anchor": "deals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-deals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-deals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-deals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-deals-idx",
                            "type": "text",
                            "options": {
                              "text": "02 / Deals of the day",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-deals-h",
                            "type": "heading",
                            "options": {
                              "text": "Today’s best prices",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-deals-timer",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 flex items-start gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-deals-bolt",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconBolt",
                                  "size": 18,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-lg bg-[#C6FF3D] text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-deals-t-hh",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-deals-t-hh-v",
                                    "type": "text",
                                    "options": {
                                      "text": "08",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#0B0D10] px-2 font-['Geist_Mono'] text-base font-medium tabular-nums text-[#C6FF3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-deals-t-hh-l",
                                    "type": "text",
                                    "options": {
                                      "text": "hrs",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 font-['Geist_Mono'] text-[9px] uppercase tracking-wider text-[#5B6270]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-deals-t-mm",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-deals-t-mm-v",
                                    "type": "text",
                                    "options": {
                                      "text": "24",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#0B0D10] px-2 font-['Geist_Mono'] text-base font-medium tabular-nums text-[#C6FF3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-deals-t-mm-l",
                                    "type": "text",
                                    "options": {
                                      "text": "min",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 font-['Geist_Mono'] text-[9px] uppercase tracking-wider text-[#5B6270]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-deals-t-ss",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col items-center"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-deals-t-ss-v",
                                    "type": "text",
                                    "options": {
                                      "text": "51",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#0B0D10] px-2 font-['Geist_Mono'] text-base font-medium tabular-nums text-[#C6FF3D]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-deals-t-ss-l",
                                    "type": "text",
                                    "options": {
                                      "text": "sec",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "mt-1 font-['Geist_Mono'] text-[9px] uppercase tracking-wider text-[#5B6270]"
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
                        "id": "vx-deals-all",
                        "type": "button",
                        "options": {
                          "text": "All deals",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/deals",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-deals-slider",
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
                                "taxonomy": "product_tag",
                                "field": "slug",
                                "terms": [
                                  "deals"
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
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          },
                          "1279": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-deals-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-deals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-deals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-deals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-deals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-deals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-deals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-deals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-deals-slider-c-ex",
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
                            "id": "vx-deals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-deals-slider-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-deals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-spot",
            "type": "section",
            "options": {
              "anchor": "spotlight"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-spot-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-spot-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-[#0B0D10] p-7 sm:p-12 lg:grid-cols-2 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-spot-dots",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:22px_22px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "vx-spot-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2563FF] opacity-40 blur-[110px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "vx-spot-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex justify-center"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-spot-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/voltix-spotlight.svg",
                              "altText": "Over-ear wireless headphones",
                              "link": "/categories/audio",
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
                                "classes": "h-auto w-full max-w-sm"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-spot-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 flex flex-col gap-5"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-spot-k",
                            "type": "text",
                            "options": {
                              "text": "03 / Spotlight",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#C6FF3D]"
                              }
                            }
                          },
                          {
                            "id": "vx-spot-h",
                            "type": "heading",
                            "options": {
                              "text": "Silence the city. Keep the bass.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "vx-spot-p",
                            "type": "text",
                            "options": {
                              "text": "Our pick of the month: over-ear wireless headphones with hybrid noise cancelling and a battery that outlasts your week.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-base leading-relaxed text-white/65"
                              }
                            }
                          },
                          {
                            "id": "vx-spot-specs",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-spot-spec-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-4 border-b border-white/10 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-spot-spec-1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Noise cancelling",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-spot-spec-1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Hybrid ANC",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-right font-body text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-spot-spec-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-4 border-b border-white/10 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-spot-spec-2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Battery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-spot-spec-2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "Up to 60 hours",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-right font-body text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-spot-spec-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-4 border-b border-white/10 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-spot-spec-3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Charging",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-spot-spec-3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "USB-C fast charge",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-right font-body text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-spot-spec-4",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-4 border-b border-white/10 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-spot-spec-4-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Bluetooth",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-spot-spec-4-v",
                                    "type": "text",
                                    "options": {
                                      "text": "5.3 · multipoint",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-right font-body text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-spot-spec-5",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center justify-between gap-4 border-b border-white/10 py-3"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-spot-spec-5-k",
                                    "type": "text",
                                    "options": {
                                      "text": "Warranty",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white/50"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-spot-spec-5-v",
                                    "type": "text",
                                    "options": {
                                      "text": "1 year official",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-right font-body text-sm font-semibold text-white"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "vx-spot-btns",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-spot-btn-1",
                                "type": "button",
                                "options": {
                                  "text": "Shop headphones",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/audio",
                                  "target": "",
                                  "icon": "IconArrowRight",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563FF] px-6 py-3.5 transition-colors hover:bg-[#1D4ED8]"
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
                                "id": "vx-spot-btn-2",
                                "type": "button",
                                "options": {
                                  "text": "Compare audio",
                                  "linkTo": "custom",
                                  "scheme": "",
                                  "url": "/categories/audio",
                                  "target": "",
                                  "icon": "",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 transition-colors hover:bg-white/10"
                                  },
                                  "icon": {
                                    "classes": "flex items-center shrink-0"
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
            ]
          },
          {
            "id": "vx-row-smartphones",
            "type": "section",
            "options": {
              "anchor": "smartphones"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-row-smartphones-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-row-smartphones-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-smartphones-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-smartphones-idx",
                            "type": "text",
                            "options": {
                              "text": "04 / Smartphones",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-smartphones-h",
                            "type": "heading",
                            "options": {
                              "text": "Smartphones",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-smartphones-sub",
                            "type": "text",
                            "options": {
                              "text": "Flagships, mid-rangers and budget heroes, all with official warranty.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-row-smartphones-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/smartphones",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-row-smartphones-slider",
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
                                  "smartphones"
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
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          },
                          "1279": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-smartphones-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-smartphones-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-smartphones-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-smartphones-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-smartphones-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-row-smartphones-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-smartphones-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-row-smartphones-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-smartphones-slider-c-ex",
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
                            "id": "vx-row-smartphones-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-smartphones-slider-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-row-smartphones-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-row-audio",
            "type": "section",
            "options": {
              "anchor": "audio"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-row-audio-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-row-audio-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-audio-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-audio-idx",
                            "type": "text",
                            "options": {
                              "text": "05 / Audio",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-audio-h",
                            "type": "heading",
                            "options": {
                              "text": "Audio",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-audio-sub",
                            "type": "text",
                            "options": {
                              "text": "Earbuds, headphones and speakers that sound as good as they look.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-row-audio-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/audio",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-row-audio-slider",
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
                                  "audio"
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
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          },
                          "1279": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-audio-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-audio-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-audio-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-audio-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-audio-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-row-audio-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-audio-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-row-audio-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-audio-slider-c-ex",
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
                            "id": "vx-row-audio-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-audio-slider-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-row-audio-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-why",
            "type": "section",
            "options": {
              "anchor": "why-us"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-why-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-why-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-why-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-idx",
                            "type": "text",
                            "options": {
                              "text": "06 / Why Voltix",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-why-h",
                            "type": "heading",
                            "options": {
                              "text": "Built on trust, not hype",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-why-sub",
                            "type": "text",
                            "options": {
                              "text": "Real products, real warranty and real people who know tech, available when you need them.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "vx-why-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-why-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-3xl p-6 bg-[#0B0D10]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-1-v",
                            "type": "text",
                            "options": {
                              "text": "50K+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold tracking-tight text-white"
                              }
                            }
                          },
                          {
                            "id": "vx-why-1-l",
                            "type": "text",
                            "options": {
                              "text": "Orders delivered",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white opacity-70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-why-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-3xl p-6 bg-[#2563FF]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-2-v",
                            "type": "text",
                            "options": {
                              "text": "120+",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold tracking-tight text-white"
                              }
                            }
                          },
                          {
                            "id": "vx-why-2-l",
                            "type": "text",
                            "options": {
                              "text": "Brands",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-white opacity-70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-why-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-3xl p-6 bg-[#C6FF3D]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-3-v",
                            "type": "text",
                            "options": {
                              "text": "4.8★",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold tracking-tight text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-why-3-l",
                            "type": "text",
                            "options": {
                              "text": "Customer rating",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-[#0B0D10] opacity-70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-why-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col justify-between gap-6 rounded-3xl p-6 bg-white"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-4-v",
                            "type": "text",
                            "options": {
                              "text": "24h",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-5xl font-semibold tracking-tight text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-why-4-l",
                            "type": "text",
                            "options": {
                              "text": "Dhaka delivery",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs uppercase tracking-wider text-[#0B0D10] opacity-70"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-why-support",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "col-span-2 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#E3E5E9] bg-white p-6 sm:flex-row sm:items-center lg:col-span-4"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-why-support-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center gap-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-why-support-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconHeadset",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8EEFF] text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-why-support-tt",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-why-support-h",
                                    "type": "heading",
                                    "options": {
                                      "text": "Not sure what to buy? Ask a human.",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-lg font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-why-support-p",
                                    "type": "text",
                                    "options": {
                                      "text": "Our tech team helps you compare specs and pick the right device, every day 10am - 10pm.",
                                      "tag": "p"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "text-sm text-[#5B6270]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "vx-why-support-btn",
                            "type": "button",
                            "options": {
                              "text": "Chat with us",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "#",
                              "target": "",
                              "icon": "IconBrandWhatsapp",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0B0D10] px-6 py-3.5 transition-colors hover:bg-[#2A2F36]"
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
          },
          {
            "id": "vx-row-wearables",
            "type": "section",
            "options": {
              "anchor": "wearables"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-row-wearables-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-row-wearables-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-wearables-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-wearables-idx",
                            "type": "text",
                            "options": {
                              "text": "07 / Wearables",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-wearables-h",
                            "type": "heading",
                            "options": {
                              "text": "Wearables",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-wearables-sub",
                            "type": "text",
                            "options": {
                              "text": "Smartwatches and fitness bands for every wrist and budget.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-row-wearables-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/wearables",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-row-wearables-slider",
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
                                  "wearables"
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
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          },
                          "1279": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-wearables-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-wearables-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-wearables-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-wearables-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-wearables-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-row-wearables-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-wearables-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-row-wearables-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-wearables-slider-c-ex",
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
                            "id": "vx-row-wearables-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-wearables-slider-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-row-wearables-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-row-accessories",
            "type": "section",
            "options": {
              "anchor": "accessories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-row-accessories-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-row-accessories-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-accessories-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-accessories-idx",
                            "type": "text",
                            "options": {
                              "text": "08 / Accessories",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-accessories-h",
                            "type": "heading",
                            "options": {
                              "text": "Power & accessories",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-row-accessories-sub",
                            "type": "text",
                            "options": {
                              "text": "Chargers, power banks, cables and cases. The essentials, done right.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-row-accessories-all",
                        "type": "button",
                        "options": {
                          "text": "View all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/accessories",
                          "target": "",
                          "icon": "IconArrowUpRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-row-accessories-slider",
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
                                  "accessories"
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
                            "gap": "0.625rem",
                            "arrows": false
                          },
                          "767": {
                            "perPage": 2,
                            "arrows": false
                          },
                          "1023": {
                            "perPage": 3
                          },
                          "1279": {
                            "perPage": 4
                          }
                        }
                      }
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "relative [&_.splide__track]:!-mx-1 [&_.splide__track]:!px-1 [&_.splide__track]:!pb-6 [&_.splide__track]:!pt-1"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
                      },
                      "arrow-prev": {
                        "classes": "!-left-3 lg:!-left-5"
                      },
                      "arrow-next": {
                        "classes": "!-right-3 lg:!-right-5"
                      },
                      "pagination": {
                        "classes": ""
                      },
                      "page-item": {
                        "classes": ""
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-row-accessories-slider-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-row-accessories-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-accessories-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-accessories-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-accessories-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-row-accessories-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-row-accessories-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-row-accessories-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-row-accessories-slider-c-ex",
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
                            "id": "vx-row-accessories-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-row-accessories-slider-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-row-accessories-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-brandsec",
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
                "id": "vx-brandsec-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-brandsec-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-brandsec-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-brandsec-idx",
                            "type": "text",
                            "options": {
                              "text": "09 / Brands",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-brandsec-h",
                            "type": "heading",
                            "options": {
                              "text": "Official brands",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-brandsec-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-brands-slider",
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
                        "perPage": 7,
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
                            "perPage": 5
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#E3E5E9] bg-white p-4 text-center transition-colors hover:border-[#2563FF]/50"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-brands-slider-loop",
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
                            "classes": "group flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#E3E5E9] bg-white p-4 text-center transition-colors hover:border-[#2563FF]/50"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-brands-slider-thumb",
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
                                "classes": "max-h-10 w-auto max-w-full object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                              }
                            }
                          },
                          {
                            "id": "vx-brands-slider-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#5B6270]"
                              }
                            }
                          },
                          {
                            "id": "vx-brands-slider-count",
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
          },
          {
            "id": "vx-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-reviews-idx",
                            "type": "text",
                            "options": {
                              "text": "10 / Reviews",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "What customers say",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.8 out of 5 from thousands of verified orders.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "vx-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !border !border-[#E3E5E9] !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#2563FF] hover:!border-[#2563FF] [&>svg]:!h-4 [&>svg]:!w-4 [&>svg]:!fill-[#0B0D10] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-1.5 !w-1.5 !rounded-full !bg-[#0B0D10]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-6 [&.is-active]:!bg-[#2563FF]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Phone arrived sealed with the official warranty card, a day after ordering. Price was lower than the brand store too.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "AH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Arif Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Smartphone",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
                        "id": "vx-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“The support team helped me choose between two earbuds over chat. Picked the right one, the ANC is brilliant.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "NR",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadia Rahman",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Earbuds",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
                        "id": "vx-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Cash on delivery and I could check the box before paying. Genuine product, quick delivery. Will order again.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "SK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sajid Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Smartwatch",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
                        "id": "vx-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Got a fast charger and power bank combo on the daily deal. Both work perfectly and charge my laptop too.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tania Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Power bank",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
                        "id": "vx-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“Mic is clear, sound is huge. Packaging was solid and the delivery guy called before arriving. Smooth.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "RI",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rafiq Islam",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Gaming headset",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
                        "id": "vx-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E9] bg-white p-6"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.2em] text-amber-400"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“A dead pixel on day two and they replaced it within the week, no arguments. That is why I buy here.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base leading-relaxed text-[#0B0D10]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#E3E5E9] pt-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "MC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0D10] font-['Geist_Mono'] text-sm text-[#C6FF3D]"
                                  }
                                }
                              },
                              {
                                "id": "vx-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Mitu Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-semibold text-[#0B0D10]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Verified · Tablet",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
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
            "id": "vx-journal",
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
                "id": "vx-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-journal-idx",
                            "type": "text",
                            "options": {
                              "text": "11 / Tech talk",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Reviews, guides & comparisons",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-journal-sub",
                            "type": "text",
                            "options": {
                              "text": "Honest takes to help you buy smarter.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-journal-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#E3E5E9] bg-white hover:border-[#0B0D10] px-4 py-2 transition-colors"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0B0D10]"
                          },
                          "label": {
                            "classes": "font-body text-sm font-semibold whitespace-nowrap text-[#0B0D10]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-journal-grid",
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
                        "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      },
                      "loop-item": {
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white transition-all hover:-translate-y-1 hover:border-[#2563FF]/40"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-journal-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                          },
                          "loop-item": {
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white transition-all hover:-translate-y-1 hover:border-[#2563FF]/40"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#F3F4F6]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "image": {
                                "classes": "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              }
                            }
                          },
                          {
                            "id": "vx-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-5"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Geist_Mono'] text-[11px] uppercase tracking-wider text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-lg font-semibold leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read article",
                                  "readMoreIcon": "IconArrowUpRight",
                                  "readMoreIconSize": 15
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#5B6270]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1 font-body text-sm font-semibold text-[#0B0D10]"
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
            "id": "vx-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "vx-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-8 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-faq-idx",
                                "type": "text",
                                "options": {
                                  "text": "12 / FAQ",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-widest text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Questions, answered",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Still stuck? Our tech team replies within minutes on WhatsApp.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-xl text-base text-[#5B6270]"
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
                    "id": "vx-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Are your products genuine, with official warranty?",
                          "classes": ""
                        },
                        {
                          "label": "Can I check the product before paying?",
                          "classes": ""
                        },
                        {
                          "label": "What if my device is faulty?",
                          "classes": ""
                        },
                        {
                          "label": "How fast is delivery?",
                          "classes": ""
                        },
                        {
                          "label": "Which payment methods do you accept?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-[#E3E5E9] bg-white px-5 py-4 font-body text-base font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF]/50"
                      },
                      "accordion-header-open": {
                        "classes": "!rounded-b-none !border-b-0 !border-[#2563FF]/50 text-[#2563FF]"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#2563FF]"
                      },
                      "accordion-content": {
                        "classes": "-mt-3 rounded-b-xl border border-t-0 border-[#2563FF]/50 bg-white px-5 pb-5 pt-1"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Every device comes from the brand or its authorised distributor, sealed, with the official warranty card or e-warranty. Warranty length is listed on each product page.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "With cash on delivery you can check the sealed box and accessories in front of the courier before paying. For hygiene reasons, opened earbuds cannot be returned unless faulty.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Report a manufacturing fault within 7 days of delivery and we replace it. After that, the brand warranty covers repairs at the authorised service centre; we help you with the claim.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Inside Dhaka usually within 24 hours, 48-72 hours to the rest of Bangladesh. You get an SMS with tracking as soon as it ships.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Cash on delivery, bKash, Nagad, and Visa / Mastercard. Instalment options, where offered, are shown at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
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
            "id": "vx-cta",
            "type": "section",
            "options": {
              "anchor": "join"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-14 lg:py-20"
              }
            },
            "children": [
              {
                "id": "vx-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-[#0B0D10] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-cta-dots",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:22px_22px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "vx-cta-glow",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C6FF3D] opacity-20 blur-[100px]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "vx-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex max-w-xl flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cta-k",
                            "type": "text",
                            "options": {
                              "text": "// Voltix Insider",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Get launch alerts and members-only prices.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "vx-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Create a free account for ৳500 off your first order over ৳5,000, early access to launches and flash-deal alerts.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-base text-white/65"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Create free account",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconUserPlus",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563FF] px-6 py-3.5 transition-colors hover:bg-[#1D4ED8]"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-white"
                              },
                              "label": {
                                "classes": "font-body text-sm font-semibold text-white whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "vx-cta-btn-2",
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
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 transition-colors hover:bg-white/10"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
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
            "id": "vx-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// All products",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Shop All Gadgets",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every phone, earbud, watch and accessory we carry, newest first. Open any product for full specs and warranty details.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-shop-grid-c-ex",
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
                            "id": "vx-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-shop-grid-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
                        "id": "vx-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-shop-promise",
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
                "id": "vx-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Official warranty",
                          "description": "Brand-backed, on every device",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "100% authentic",
                          "description": "From authorised distributors",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Express delivery",
                          "description": "24h Dhaka · 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day replacement",
                          "description": "For manufacturing faults",
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
                        "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-wider text-[#0B0D10]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EEFF] text-[#2563FF]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-shop-promise-fb-ic",
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
                        "id": "vx-shop-promise-fb-t",
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
                        "id": "vx-shop-promise-fb-d",
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
            "id": "vx-pd",
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
                "id": "vx-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-pd-grid",
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
                        "id": "vx-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-pd-gallery",
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
                                "classes": "rounded-3xl border-4 border-white bg-gradient-to-tr from-[#EEF0F3] via-white to-[#FFFFFF] p-4 shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
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
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B0D10]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#0B0D10]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#2563FF]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-pd-cats",
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
                                "classes": "rounded-full bg-[#EEF0F3] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B0D10] hover:bg-[#0B0D10] hover:text-white"
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
                            "id": "vx-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-semibold leading-tight text-[#0B0D10] sm:text-4xl tracking-tight"
                              }
                            }
                          },
                          {
                            "id": "vx-pd-rate",
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
                                "classes": "font-body font-bold text-[#0B0D10]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "vx-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-price",
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
                                    "classes": "font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#2563FF] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "vx-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#5B6270]"
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
                            "id": "vx-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#0B0D10]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#0B0D10] transition-colors hover:border-[#0B0D10] hover:bg-[#EEF0F3]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#0B0D10] !bg-[#EEF0F3] !text-[#2A2F36]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "vx-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Out of stock · notify me when back",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2563FF]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0B0D10]"
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
                            "id": "vx-pd-add",
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
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#0B0D10]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F3F4F6]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#F3F4F6]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#2563FF] px-8 text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
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
                            "id": "vx-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Official warranty",
                                  "description": "Brand-backed",
                                  "icon": "IconCertificate",
                                  "iconSize": ""
                                },
                                {
                                  "title": "7-day replacement",
                                  "description": "Manufacturing faults",
                                  "icon": "IconRefresh",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Cash on delivery",
                                  "description": "Check, then pay",
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
                                "classes": "font-body text-base font-bold text-[#0B0D10]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0F3] text-[#0B0D10]"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-perks-ic",
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
                                "id": "vx-pd-perks-t",
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
                                "id": "vx-pd-perks-d",
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
                            "id": "vx-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-sku",
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
                                    "classes": "font-semibold text-[#0B0D10]"
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
                                "id": "vx-pd-brands",
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
                                    "classes": "font-semibold text-[#0B0D10]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2563FF]"
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
                                "id": "vx-pd-tags",
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
                                    "classes": "font-semibold text-[#0B0D10]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#2563FF]"
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
            "id": "vx-pd-tabs-sec",
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
                "id": "vx-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,13,16,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "Overview",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Warranty & Box",
                              "icon": "IconCertificate"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3F4F6] px-5 py-2.5 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#0B0D10] !text-white shadow-md"
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
                            "id": "vx-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#0B0D10] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#0B0D10] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#2563FF] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#C6FF3D] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCertificate",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Full specifications and what is in the box are listed in the overview",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Official brand warranty; length shown in the product details",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Keep the box, invoice and warranty card for any claim",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Faulty on arrival? Report within 7 days for a replacement",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B0D10]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-ship-list",
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
                                      "text": "Cash on delivery: check the sealed box before paying",
                                      "icon": ""
                                    },
                                    {
                                      "text": "7-day replacement for manufacturing faults",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#0B0D10]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "vx-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "vx-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E8EEFF]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "vx-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#0B0D10]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "vx-pd-reviews-rate",
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
                                        "id": "vx-pd-reviews-co",
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
                                    "id": "vx-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How is it performing for you?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thanks! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,13,16,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#0B0D10]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F3F4F6] px-4 py-3 text-sm text-[#0B0D10] placeholder:text-gray-400 focus:border-[#0B0D10] focus:outline-none focus:ring-2 focus:ring-[#0B0D10]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2563FF] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1D4ED8] disabled:opacity-50"
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
            "id": "vx-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-16"
              }
            },
            "children": [
              {
                "id": "vx-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "// You might also need",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E8EEFF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2563FF]"
                          }
                        }
                      },
                      {
                        "id": "vx-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "Compatible & Similar",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-pd-related-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-pd-related-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-pd-rel-c-ex",
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
                            "id": "vx-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-pd-rel-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
            "id": "vx-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// Browse",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Phones, audio, wearables, gaming and accessories. Pick a category to start.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#EEF0F3] transition-transform"
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
                            "id": "vx-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-cat-grid-count",
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
                        "id": "vx-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "vx-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B0D10] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-cat1-grid-c-ex",
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
                            "id": "vx-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-cat1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
                        "id": "vx-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// Find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group gadgets by feature and deal: wireless, fast charging, gaming, deals and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563FF]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2563FF]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#0B0D10] group-hover:text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-bold text-[#5B6270]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "vx-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "vx-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B0D10] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-tag1-grid-c-ex",
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
                            "id": "vx-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-tag1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
                        "id": "vx-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// Official brands",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every brand we carry, sourced from authorised distributors.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F3F4F6] p-3"
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
                            "id": "vx-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#0B0D10] group-hover:text-[#2563FF]"
                              }
                            }
                          },
                          {
                            "id": "vx-brand-grid-count",
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
                        "id": "vx-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "vx-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " products",
                      "singularSuffix": " product"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#0B0D10] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-brand1-grid-c-ex",
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
                            "id": "vx-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-brand1-grid-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
                        "id": "vx-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// Tech talk",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Reviews & Guides",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Honest reviews, buying guides and comparisons to help you buy smarter.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-blog-grid-thumb",
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
                            "id": "vx-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                  }
                                }
                              },
                              {
                                "id": "vx-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read article",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#2563FF]"
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
                        "id": "vx-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:border-[#2563FF] hover:text-[#2563FF]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#2563FF] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "vx-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F4F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-post-k",
                    "type": "text",
                    "options": {
                      "text": "// Tech talk",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#EEF0F3] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B0D10]"
                      }
                    }
                  },
                  {
                    "id": "vx-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-semibold leading-tight text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#5B6270]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-post-author",
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
                            "classes": "font-body font-bold text-[#0B0D10]"
                          }
                        }
                      },
                      {
                        "id": "vx-post-dot",
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
                        "id": "vx-post-date",
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
                    "id": "vx-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
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
            "id": "vx-post-body",
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
                "id": "vx-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-[#0B0D10] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#0B0D10] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-semibold [&_a]:text-[#2563FF] [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#C6FF3D] [&_blockquote]:pl-4 [&_blockquote]:italic tracking-tight"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-16"
              }
            },
            "children": [
              {
                "id": "vx-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-2xl border border-gray-100 bg-[#F3F4F6] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E8EEFF]"
                              }
                            }
                          },
                          {
                            "id": "vx-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#0B0D10]"
                              }
                            }
                          },
                          {
                            "id": "vx-post-cmt-co",
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
                        "id": "vx-post-cmt-form",
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
                            "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,13,16,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#0B0D10]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#F3F4F6] px-4 py-3 text-sm text-[#0B0D10] placeholder:text-gray-400 focus:border-[#0B0D10] focus:outline-none focus:ring-2 focus:ring-[#0B0D10]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#2563FF] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#1D4ED8] disabled:opacity-50"
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
            "id": "vx-post-more",
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
                "id": "vx-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More From Tech Talk",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-semibold text-[#0B0D10] tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,13,16,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-post-more-grid-thumb",
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
                            "id": "vx-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#0B0D10]"
                                  }
                                }
                              },
                              {
                                "id": "vx-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
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
            "id": "vx-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full border-b border-[#E3E5E9] bg-[#F3F4F6] bg-[radial-gradient(circle,rgba(11,13,16,0.09)_1px,transparent_1px)] bg-[length:22px_22px] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "vx-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "// Welcome back",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center gap-1.5 rounded-md bg-[#0B0D10] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium uppercase tracking-wider text-[#C6FF3D]"
                      }
                    }
                  },
                  {
                    "id": "vx-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-semibold text-[#0B0D10] sm:text-5xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track orders, manage warranty claims and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "vx-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-12"
              }
            },
            "children": [
              {
                "id": "vx-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0B0D10] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#C6FF3D]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-semibold text-white tracking-tight"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#2563FF]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#2563FF]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#2563FF]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "vx-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "vx-acc-3",
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
                                "id": "vx-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,13,16,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563FF] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "vx-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(11,13,16,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563FF] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "vx-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "vx-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#F3F4F6] px-5 py-2.5 font-body text-sm font-semibold text-[#0B0D10] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#0B0D10] !text-white shadow-md"
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
                                "id": "vx-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/10 text-[#2563FF]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "vx-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#2563FF] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "vx-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/10 text-[#2563FF]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "vx-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#2563FF]/40 hover:bg-[#2563FF]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/10 text-[#2563FF]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "vx-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2563FF]/10 text-[#2563FF]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#2563FF] focus:outline-none focus:ring-2 focus:ring-[#2563FF]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563FF] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "vx-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F4F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(11,13,16,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF0F3] text-[#0B0D10]"
                          }
                        }
                      },
                      {
                        "id": "vx-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E8EEFF] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2563FF]"
                          }
                        }
                      },
                      {
                        "id": "vx-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Order Confirmed. Thank You!",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#0B0D10] sm:text-4xl tracking-tight"
                          }
                        }
                      },
                      {
                        "id": "vx-ty-p",
                        "type": "text",
                        "options": {
                          "text": "A confirmation is on its way, and you can track your order from your account at any time.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#5B6270] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "vx-ty-steps",
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
                              "text": "Your device is checked, sealed and packed with its warranty card",
                              "icon": ""
                            },
                            {
                              "text": "Delivered in 24h inside Dhaka, 48-72h elsewhere: check the box before paying if you chose COD",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-2xl bg-[#F3F4F6] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#2563FF]"
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
                        "id": "vx-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563FF] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1D4ED8] w-full sm:w-auto"
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
                            "id": "vx-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B0D10] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B0D10] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#0B0D10] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#0B0D10] whitespace-nowrap group-hover:text-white"
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
            "id": "vx-ty-promise",
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
                "id": "vx-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Official warranty",
                          "description": "Brand-backed, on every device",
                          "icon": "IconCertificate",
                          "iconSize": ""
                        },
                        {
                          "title": "100% authentic",
                          "description": "From authorised distributors",
                          "icon": "IconShieldCheck",
                          "iconSize": ""
                        },
                        {
                          "title": "Express delivery",
                          "description": "24h Dhaka · 48-72h nationwide",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "7-day replacement",
                          "description": "For manufacturing faults",
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
                        "classes": "font-['Geist_Mono'] text-xs font-medium uppercase tracking-wider text-[#0B0D10]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EEFF] text-[#2563FF]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-ty-promise-fb-ic",
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
                        "id": "vx-ty-promise-fb-t",
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
                        "id": "vx-ty-promise-fb-d",
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
            "id": "vx-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFFFFF] via-white to-[#F3F4F6] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "vx-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-semibold text-[#2563FF] sm:text-9xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFFFFF] text-[#0B0D10]"
                      }
                    }
                  },
                  {
                    "id": "vx-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Error 404: Page Not Found",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-semibold text-[#0B0D10] sm:text-4xl tracking-tight"
                      }
                    }
                  },
                  {
                    "id": "vx-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the product may no longer be available. Head back home or browse all gadgets.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#5B6270] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "vx-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563FF] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(37,99,255,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#1D4ED8] w-full sm:w-auto"
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
                        "id": "vx-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Gadgets",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0B0D10] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#0B0D10] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0B0D10] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#0B0D10] whitespace-nowrap group-hover:text-white"
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
            "id": "vx-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#F3F4F6] py-16"
              }
            },
            "children": [
              {
                "id": "vx-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "vx-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#C6FF3D] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0B0D10]"
                          }
                        }
                      },
                      {
                        "id": "vx-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-semibold text-[#0B0D10] sm:text-4xl tracking-tight"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "vx-nf-grid",
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
                        "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                      }
                    },
                    "children": [
                      {
                        "id": "vx-nf-grid-loop",
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
                            "classes": "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E5E9] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563FF]/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,255,0.35)]"
                          }
                        },
                        "children": [
                          {
                            "id": "vx-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "block overflow-hidden rounded-xl bg-[#F3F4F6]"
                                      },
                                      "link": {
                                        "classes": "block"
                                      },
                                      "image": {
                                        "classes": "aspect-square w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-2.5 top-2.5 z-[2] flex items-center gap-1 rounded-md bg-[#C6FF3D] px-2 py-1 font-['Geist_Mono'] text-[11px] font-medium text-[#0B0D10]"
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
                                "id": "vx-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-3 flex flex-col gap-1.5 px-1"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "vx-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-1 font-['Geist_Mono'] text-[11px]"
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
                                    "id": "vx-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 min-h-[2.6em] font-body text-sm font-medium leading-snug text-[#0B0D10] transition-colors group-hover:text-[#2563FF]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "vx-nf-grid-c-ex",
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
                            "id": "vx-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-3 flex items-end justify-between gap-2 border-t border-dashed border-[#E3E5E9] px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "vx-nf-grid-c-price",
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
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-['Geist_Mono'] text-[11px] text-[#5B6270] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-lg font-semibold tracking-tight text-[#0B0D10]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#2563FF]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#2563FF] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "vx-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconShoppingCartPlus",
                                  "iconSize": 16
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#2563FF] px-3.5 text-white transition-colors hover:bg-[#1D4ED8]"
                                  },
                                  "button-label": {
                                    "classes": "font-body text-sm font-semibold whitespace-nowrap"
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
