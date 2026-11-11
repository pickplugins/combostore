/**
 * Template: Upohar Gift Shop.
 *
 * A warm, modern gift shop (upohar is Bangla for "gift"): gifts for her, him,
 * kids and parents, hampers, personalised keepsakes and corporate gifting,
 * all wrapped free with a handwritten card. Like the other complete
 * templates here it carries all sixteen page types - Header, Footer, Home,
 * Shop, Product, the six taxonomy archives, Blog Archive, Blog Single,
 * Account, Thank you and 404 - so applying it replaces every page.
 *
 * GENERATED from WonderJoy/index.js: every page except Home keeps
 * WonderJoy's block structure (ids renamed wj- to uh-, palette remapped, copy
 * rewritten); the Header is restyled and Home is built fresh from the same
 * block types. It is plain data: edit freely.
 *
 * THE HEADER
 *
 * A blush promo bar, then the logo as a tilted white gift tag (a pointed-end
 * clip-path, a punched hole, a berry heart and the Upohar wordmark with a
 * handwritten line), the menu with gold underlines, search, account and a
 * green cart - all tied off underneath by a gold satin ribbon (uh-hdr-ribbon)
 * with a CSS bow at its centre (md and up).
 *
 * THE HERO
 *
 * "Find the perfect gift in three taps": a white card with three numbered
 * questions - who it's for, the occasion, the budget - each a row of chips
 * that link to the matching tag; beside it the wrapped gift stack
 * (public/templates/upohar-gifts.svg) on a blush disc and a dashed gold ring,
 * with a gift-tag "same-day delivery" note.
 *
 * DESIGN
 *
 *   bottle green  #0F5C4A  primary: buttons, cart, hovers      #0A4638 hover  #E1EFEA tint
 *   blush         #F4B9B2  secondary: promo bar, CTA           #E59A91 dark   #FCE8E5 tint
 *   ribbon gold   #E0B354  accent: ribbons, numbers, stars     #B98A2E dark   #FBF0D6 tint
 *   berry #B5174F (handwritten notes, hearts, sale)   plum ink #2B1B2E
 *   cream #FFF8F0 / #F7ECDF   muted #7A6870   line #EADDD2
 *
 * Fonts (template meta): Gloock (headings; one weight, so they carry
 * font-normal), Mulish (body) and Caveat via `font-['Caveat']` for the
 * handwritten notes above every section title.
 *
 * Product cards: a square photo, a berry ribbon-cut discount flag, the name,
 * one handwritten excerpt line (use the excerpt for who it suits, e.g.
 * "perfect for mum & sisters"), the price in Gloock and a round green
 * gift-icon add button that tilts on hover.
 *
 * HOME
 *
 *   Gift-finder hero - ribbon strip - occasions as gift tags (#occasions) -
 *   new arrivals - recipients as wrapped boxes whose ribbon cross slides off
 *   on hover (#recipients) - most-gifted (#bestsellers) - choose your wrap,
 *   four paper swatches and three steps (#gift-wrap) - gifts for her -
 *   budgets as price tags (#budget) - gifts for him - corporate gifting
 *   (#corporate) - hampers - personalised - reviews - gift guides (#journal) -
 *   FAQ (#faq) - occasion-reminder CTA (#reminders).
 *
 * FILL IN BEFORE GOING LIVE
 *
 *   - Category slugs: for-her, for-him, for-kids, hampers, personalised.
 *     Tag slugs: bestseller, the recipients for-her, for-him, for-kids,
 *     for-parents, for-couples, for-colleagues, the occasions birthday,
 *     anniversary, eid, wedding, thank-you, new-baby, get-well, graduation,
 *     and the budgets under-500, under-1000, under-2500, under-5000, luxe.
 *   - The wrap papers (kraft, blush dots, evergreen stripe, gold foil) should
 *     match what you actually offer at checkout.
 *   - Contact details, promo code HELLOGIFT, the 10% offer, same-day delivery
 *     by 2 pm, the corporate figures (500+ companies, 48 h, 64 districts),
 *     "30,000+ gift-givers" and the six reviews are sample copy.
 */

var template = [
  {
    "name": "Upohar Gift Shop",
    "description": "Warm, modern gift shop on cream with bottle green, blush, ribbon gold and berry; Gloock serif, Mulish and Caveat handwriting: a header with a gift-tag logo tied off by a satin ribbon and bow, a three-tap gift finder hero (who / occasion / budget) beside wrapped gifts, a ribbon strip, gift-tag occasions, new arrivals, recipient boxes whose ribbons slide off on hover, most-gifted, a choose-your-wrap band, him / her rows, price-tag budgets, corporate gifting, hampers, personalised, reviews, gift guides, FAQ and an occasion-reminder CTA. All 16 pages.",
    "thumbnail": "/templates/upohar.svg",
    "meta": {
      "fonts": [
        {
          "family": "Gloock",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Gloock&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Mulish",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        },
        {
          "family": "Caveat",
          "name": "",
          "src": "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap",
          "weight": "",
          "style": "",
          "display": "swap"
        }
      ],
      "typography": {
        "heading": "Gloock",
        "body": "Mulish"
      },
      "colors": {
        "primary": "#0F5C4A",
        "secondary": "#F4B9B2",
        "accent": "#E0B354",
        "background": "#FFF8F0",
        "foreground": "#2B1B2E",
        "muted": "#7A6870"
      }
    },
    "pages": [
      {
        "title": "Header",
        "type": "header",
        "content": [
          {
            "id": "uh-hdr",
            "type": "siteHeader",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "sticky top-0 z-40 w-full bg-[#FFF8F0]/95 backdrop-blur-md"
              }
            },
            "children": [
              {
                "id": "uh-hdr-promo",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-[#F4B9B2] px-4 py-2 text-center font-body text-xs font-bold text-[#2B1B2E] md:text-sm"
                  }
                },
                "children": [
                  {
                    "id": "uh-hdr-promo-msg",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-1.5"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-hdr-promo-txt",
                        "type": "text",
                        "options": {
                          "text": "Same-day delivery in Dhaka · Free gift wrap & card · 10% off your first gift with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        }
                      },
                      {
                        "id": "uh-hdr-promo-code",
                        "type": "text",
                        "options": {
                          "text": "HELLOGIFT",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "rounded-full bg-[#2B1B2E] px-2.5 py-0.5 font-body text-xs font-extrabold tracking-wider text-white"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-hdr-promo-btn",
                    "type": "button",
                    "options": {
                      "text": "Gift finder",
                      "linkTo": "custom",
                      "scheme": "",
                      "url": "/#hero",
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
                        "classes": "font-body text-xs font-extrabold text-[#0F5C4A] underline decoration-wavy underline-offset-4 hover:opacity-80"
                      }
                    }
                  }
                ]
              },
              {
                "id": "uh-hdr-bar",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-hdr-row",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-[80px] items-center justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-hdr-brand",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex shrink-0 rotate-[-3deg] items-center gap-2 bg-white py-2 pl-8 pr-5 shadow-[0_10px_20px_-12px_rgba(43,27,46,0.5)] transition-transform hover:rotate-0 [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-hdr-hole",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute left-[14px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#F7ECDF] ring-1 ring-[#2B1B2E]/20"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "uh-hdr-brand-mark",
                            "type": "text",
                            "options": {
                              "text": "♥",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-9 w-9 text-base items-center justify-center rounded-full bg-[#B5174F] leading-none text-white"
                              }
                            }
                          },
                          {
                            "id": "uh-hdr-brand-words",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-hdr-brand-logo",
                                "type": "logo",
                                "options": {
                                  "logoType": "text",
                                  "logoText": "Upohar",
                                  "src": "https://placehold.co/200x64?text=Upohar",
                                  "altText": "Upohar Gift Shop",
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
                                    "classes": "font-heading text-[28px] leading-none text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-hdr-brand-tag",
                                "type": "text",
                                "options": {
                                  "text": "gifts that say it for you",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "-mt-1 block font-['Caveat'] text-[15px] leading-none text-[#B5174F]"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "uh-hdr-menu",
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
                            "classes": "flex items-center gap-5 xl:gap-6"
                          },
                          "menu-item": {
                            "classes": ""
                          },
                          "sub-menu": {
                            "classes": "min-w-52 rounded-2xl border border-gray-100 bg-white py-2 shadow-lg"
                          },
                          "menu-link": {
                            "classes": "relative flex items-center whitespace-nowrap font-body text-sm font-bold text-[#2B1B2E] transition-colors hover:text-[#0F5C4A] after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-[#E0B354] after:transition-all after:content-[''] hover:after:w-full"
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
                            "id": "uh-hdr-menu-i1",
                            "type": "menuItem",
                            "options": {
                              "label": "Birthday",
                              "url": "/tags/birthday"
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
                            "id": "uh-hdr-menu-i2",
                            "type": "menuItem",
                            "options": {
                              "label": "Anniversary",
                              "url": "/tags/anniversary"
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
                            "id": "uh-hdr-menu-i3",
                            "type": "menuItem",
                            "options": {
                              "label": "For her",
                              "url": "/categories/for-her"
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
                            "id": "uh-hdr-menu-i4",
                            "type": "menuItem",
                            "options": {
                              "label": "For him",
                              "url": "/categories/for-him"
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
                            "id": "uh-hdr-menu-i5",
                            "type": "menuItem",
                            "options": {
                              "label": "Kids",
                              "url": "/categories/for-kids"
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
                            "id": "uh-hdr-menu-i6",
                            "type": "menuItem",
                            "options": {
                              "label": "Hampers",
                              "url": "/categories/hampers"
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
                            "id": "uh-hdr-menu-i7",
                            "type": "menuItem",
                            "options": {
                              "label": "Personalised",
                              "url": "/categories/personalised"
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
                            "id": "uh-hdr-menu-i8",
                            "type": "menuItem",
                            "options": {
                              "label": "Corporate",
                              "url": "/#corporate"
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
                        "id": "uh-hdr-search",
                        "type": "quickSearch",
                        "options": {
                          "placeholder": "Search gifts, occasions, names...",
                          "iconPosition": "",
                          "icon": "IconSearch"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "hidden w-60 rounded-full border-2 border-[#2B1B2E]/10 bg-white py-1 pl-1 pr-3 transition-all focus-within:border-[#0F5C4A] md:block lg:hidden xl:block xl:w-60"
                          },
                          "input-wrapper": {
                            "classes": "flex items-center gap-2"
                          },
                          "input-search": {
                            "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B1B2E] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                          },
                          "icon": {
                            "classes": "flex items-center text-[#7A6870]"
                          },
                          "filter-select": {
                            "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15"
                          },
                          "result-title": {
                            "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0F5C4A]"
                          },
                          "result-price": {
                            "classes": "font-semibold text-[#0F5C4A]"
                          },
                          "add-button": {
                            "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0F5C4A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A4638]"
                          }
                        }
                      },
                      {
                        "id": "uh-hdr-actions",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-center gap-2"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-hdr-account",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#2B1B2E] shadow-sm transition-colors hover:bg-[#FCE8E5]"
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
                            "id": "uh-hdr-cart",
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
                                "classes": "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-colors hover:bg-[#B5174F]"
                              },
                              "trigger-badge": {
                                "classes": "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#0F5C4A] px-1 text-[10px] font-bold text-white"
                              },
                              "header": {
                                "classes": "flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-[#FFF8F0] px-5 py-4"
                              },
                              "title": {
                                "classes": "flex items-center gap-2 font-body text-xl font-bold text-[#2B1B2E]"
                              },
                              "title-icon": {
                                "classes": "text-[#0F5C4A]"
                              },
                              "count-badge": {
                                "classes": "rounded-full bg-[#0F5C4A] px-2 py-0.5 text-xs font-bold text-white"
                              },
                              "trigger": {
                                "classes": "flex items-center gap-2 rounded-lg bg-[#0F5C4A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0A4638]"
                              },
                              "close-button": {
                                "classes": "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/30"
                              },
                              "coupon-code-input": {
                                "classes": "w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15"
                              },
                              "coupon-apply": {
                                "classes": "inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#0F5C4A] px-4 py-2 text-sm font-medium text-[#0F5C4A] transition-colors hover:bg-[#0F5C4A] hover:text-white disabled:opacity-60"
                              },
                              "checkout-button": {
                                "classes": "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F5C4A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4638] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                              }
                            }
                          },
                          {
                            "id": "uh-hdr-mobile",
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
                                "classes": "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#2B1B2E] shadow-sm"
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
                                "classes": "absolute right-4 top-4 cursor-pointer rounded-full bg-[#FFF8F0] p-2 text-[#2B1B2E] transition-colors hover:bg-[#0F5C4A] hover:text-white"
                              },
                              "popover-content": {
                                "classes": "flex flex-col gap-6 p-6 pt-16"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-hdr-m-brand",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "group flex shrink-0 items-center gap-2"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-hdr-m-brand-mark",
                                    "type": "text",
                                    "options": {
                                      "text": "♥",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex h-9 w-9 text-base items-center justify-center rounded-full bg-[#B5174F] leading-none text-white"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-hdr-m-brand-words",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-col"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-hdr-m-brand-logo",
                                        "type": "logo",
                                        "options": {
                                          "logoType": "text",
                                          "logoText": "Upohar",
                                          "src": "https://placehold.co/200x64?text=Upohar",
                                          "altText": "Upohar Gift Shop",
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
                                            "classes": "font-heading text-[28px] leading-none text-[#2B1B2E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-hdr-m-brand-tag",
                                        "type": "text",
                                        "options": {
                                          "text": "gifts that say it for you",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "-mt-1 block font-['Caveat'] text-[15px] leading-none text-[#B5174F]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "uh-hdr-m-search",
                                "type": "quickSearch",
                                "options": {
                                  "placeholder": "Search gifts...",
                                  "iconPosition": "",
                                  "icon": "IconSearch"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-full border border-gray-200 bg-[#FFF8F0] py-1.5 pl-1 pr-3 transition-all focus-within:border-[#2B1B2E] focus-within:ring-2 focus-within:ring-[#2B1B2E]/20 w-full"
                                  },
                                  "input-wrapper": {
                                    "classes": "flex items-center gap-2"
                                  },
                                  "input-search": {
                                    "classes": "w-full min-w-0 flex-1 bg-transparent px-3 py-1 text-sm text-[#2B1B2E] placeholder:text-gray-400 focus:outline-none focus-visible:!outline-none"
                                  },
                                  "icon": {
                                    "classes": "flex items-center text-[#7A6870]"
                                  },
                                  "filter-select": {
                                    "classes": "min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15"
                                  },
                                  "result-title": {
                                    "classes": "line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#0F5C4A]"
                                  },
                                  "result-price": {
                                    "classes": "font-semibold text-[#0F5C4A]"
                                  },
                                  "add-button": {
                                    "classes": "inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#0F5C4A] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0A4638]"
                                  }
                                }
                              },
                              {
                                "id": "uh-hdr-m-menu",
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
                                    "classes": "flex items-center gap-1.5 border-b border-dashed border-[#EADDD2] py-3.5 font-heading text-xl text-[#2B1B2E] transition-colors hover:text-[#0F5C4A]"
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
                                    "id": "uh-hdr-m-menu-i1",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Birthday",
                                      "url": "/tags/birthday"
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
                                    "id": "uh-hdr-m-menu-i2",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Anniversary",
                                      "url": "/tags/anniversary"
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
                                    "id": "uh-hdr-m-menu-i3",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "For her",
                                      "url": "/categories/for-her"
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
                                    "id": "uh-hdr-m-menu-i4",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "For him",
                                      "url": "/categories/for-him"
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
                                    "id": "uh-hdr-m-menu-i5",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Kids",
                                      "url": "/categories/for-kids"
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
                                    "id": "uh-hdr-m-menu-i6",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Hampers",
                                      "url": "/categories/hampers"
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
                                    "id": "uh-hdr-m-menu-i7",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Personalised",
                                      "url": "/categories/personalised"
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
                                    "id": "uh-hdr-m-menu-i8",
                                    "type": "menuItem",
                                    "options": {
                                      "label": "Corporate",
                                      "url": "/#corporate"
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
                "id": "uh-hdr-ribbon",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "relative h-2.5 w-full bg-[linear-gradient(180deg,#B98A2E_0_2px,#E0B354_2px_calc(100%-2px),#B98A2E_calc(100%-2px))]"
                  }
                },
                "children": [
                  {
                    "id": "uh-hdr-bow",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-hdr-bow-l",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "h-5 w-7 -mr-1 rotate-[-12deg] rounded-[50%_10%_10%_50%] border-2 border-[#B98A2E] bg-[#E0B354]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "uh-hdr-bow-k",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative z-10 h-4 w-4 rounded-[5px] border-2 border-[#B98A2E] bg-[#E0B354]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "uh-hdr-bow-r",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "h-5 w-7 -ml-1 rotate-[12deg] rounded-[10%_50%_50%_10%] border-2 border-[#B98A2E] bg-[#E0B354]"
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
        ],
        "meta": ""
      },
      {
        "title": "Footer",
        "type": "footer",
        "content": [
          {
            "id": "uh-ftr",
            "type": "siteFooter",
            "options": {},
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2B1B2E] pb-12 pt-16 text-white"
              }
            },
            "children": [
              {
                "id": "uh-ftr-news-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16"
                  }
                },
                "children": [
                  {
                    "id": "uh-ftr-news",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[30px] bg-[#F4B9B2] bg-[radial-gradient(circle,rgba(255,255,255,0.45)_3px,transparent_3.5px)] bg-[length:22px_22px] p-8 sm:p-12 lg:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-ftr-news-txt",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ftr-news-k",
                            "type": "text",
                            "options": {
                              "text": "never forget again",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "inline-block font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-ftr-news-h",
                            "type": "heading",
                            "options": {
                              "text": "Occasion reminders, a week before",
                              "tag": "h3"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-3xl text-[#2B1B2E] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "uh-ftr-news-p",
                            "type": "text",
                            "options": {
                              "text": "Save birthdays and anniversaries and get gift ideas in time, plus 10% off your first order.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-md text-sm font-semibold text-[#2B1B2E]/75"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-ftr-news-btn",
                        "type": "button",
                        "options": {
                          "text": "Set reminders",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/register",
                          "target": "",
                          "icon": "IconBell",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0F5C4A] px-7 py-3.5 transition-colors hover:bg-[#0A4638]"
                          },
                          "icon": {
                            "classes": "flex items-center text-white"
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
                "id": "uh-ftr-cols-wrap",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-12"
                  }
                },
                "children": [
                  {
                    "id": "uh-ftr-grid",
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
                        "id": "uh-ftr-gi-brand",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-4 lg:col-span-2"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ftr-brand",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "group flex shrink-0 items-center gap-2"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-ftr-brand-mark",
                                "type": "text",
                                "options": {
                                  "text": "♥",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-9 w-9 text-base items-center justify-center rounded-full bg-[#B5174F] leading-none text-white"
                                  }
                                }
                              },
                              {
                                "id": "uh-ftr-brand-words",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-ftr-brand-logo",
                                    "type": "logo",
                                    "options": {
                                      "logoType": "text",
                                      "logoText": "Upohar",
                                      "src": "https://placehold.co/200x64?text=Upohar",
                                      "altText": "Upohar Gift Shop",
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
                                        "classes": "font-heading text-[28px] leading-none text-[#FFF8F0]"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "uh-ftr-about",
                            "type": "text",
                            "options": {
                              "text": "Hand-picked gifts, hampers and personalised keepsakes, wrapped free with a handwritten card and delivered same day in Dhaka and across Bangladesh.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-sm text-sm leading-relaxed text-gray-400"
                              }
                            }
                          },
                          {
                            "id": "uh-ftr-social",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex gap-3 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-ftr-fb",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5C4A]"
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
                                "id": "uh-ftr-ig",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5C4A]"
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
                                "id": "uh-ftr-yt",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5C4A]"
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
                                "id": "uh-ftr-pin",
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
                                    "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0F5C4A]"
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
                        "id": "uh-ftr-gi-shop",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ftr-ll-shop",
                            "type": "linkList",
                            "options": {
                              "headerText": "Shop",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Gifts for Her",
                                  "icon": "",
                                  "slug": "/categories/for-her"
                                },
                                {
                                  "text": "Gifts for Him",
                                  "icon": "",
                                  "slug": "/categories/for-him"
                                },
                                {
                                  "text": "Kids",
                                  "icon": "",
                                  "slug": "/categories/for-kids"
                                },
                                {
                                  "text": "Hampers & Boxes",
                                  "icon": "",
                                  "slug": "/categories/hampers"
                                },
                                {
                                  "text": "Personalised",
                                  "icon": "",
                                  "slug": "/categories/personalised"
                                },
                                {
                                  "text": "Corporate Gifting",
                                  "icon": "",
                                  "slug": "/#corporate"
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
                                "classes": "transition-colors hover:text-[#E0B354]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E0B354]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-ftr-gi-care",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ftr-ll-care",
                            "type": "linkList",
                            "options": {
                              "headerText": "Customer Care",
                              "tag": "ul",
                              "icon": "",
                              "iconSize": 16,
                              "items": [
                                {
                                  "text": "Track Your Gift",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "My Account",
                                  "icon": "",
                                  "slug": "/account"
                                },
                                {
                                  "text": "Gift Wrapping",
                                  "icon": "",
                                  "slug": "/#gift-wrap"
                                },
                                {
                                  "text": "Delivery & FAQ",
                                  "icon": "",
                                  "slug": "/#faq"
                                },
                                {
                                  "text": "Gift Guides",
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
                                "classes": "transition-colors hover:text-[#E0B354]"
                              },
                              "icon": {
                                "classes": ""
                              },
                              "text": {
                                "classes": "text-sm font-medium text-gray-400 hover:text-[#E0B354]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-ftr-gi-contact",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ftr-contact-h",
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
                            "id": "uh-ftr-address",
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
                                "value": "Every day, 9am - 10pm",
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
                                "classes": "flex items-center gap-2 transition-colors hover:text-[#E0B354]"
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
                                "classes": "shrink-0 text-[#0F5C4A]"
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
                "id": "uh-ftr-bottom",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-400 sm:flex-row"
                  }
                },
                "children": [
                  {
                    "id": "uh-ftr-copy",
                    "type": "text",
                    "options": {
                      "text": "© 2026 Upohar Gift Shop. All rights reserved. Wrapped with love.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": ""
                      }
                    }
                  },
                  {
                    "id": "uh-ftr-pay",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex gap-4 text-gray-400"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-ftr-pay-txt",
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
            "id": "uh-hero",
            "type": "section",
            "options": {
              "anchor": "hero"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#FFF8F0] bg-[radial-gradient(circle_at_85%_20%,#FCE8E5,transparent_45%),radial-gradient(circle_at_5%_90%,#FBF0D6,transparent_40%)] pb-16 pt-10 lg:pb-24 lg:pt-14"
              }
            },
            "children": [
              {
                "id": "uh-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-hero-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-hero-copy",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex flex-col gap-6 lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-hero-k",
                            "type": "text",
                            "options": {
                              "text": "wrapped with love, delivered with a smile",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-hero-h1",
                            "type": "heading",
                            "options": {
                              "text": "Find the perfect gift in three taps.",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-5xl leading-[1.02] text-[#2B1B2E] sm:text-6xl xl:text-7xl"
                              }
                            }
                          },
                          {
                            "id": "uh-hero-p",
                            "type": "text",
                            "options": {
                              "text": "Hand-picked gifts, hampers and personalised keepsakes, gift-wrapped free with a handwritten card and delivered same day in Dhaka.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-lg text-lg leading-relaxed text-[#7A6870]"
                              }
                            }
                          },
                          {
                            "id": "uh-finder",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-4 rounded-[28px] bg-white p-5 shadow-[0_24px_50px_-30px_rgba(43,27,46,0.35)] sm:p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-find-1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2.5 "
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-find-1-q",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-1-n",
                                        "type": "text",
                                        "options": {
                                          "text": "1",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E0B354] font-body text-xs font-extrabold text-[#2B1B2E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Who is it for?",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "uh-find-1-opts",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-1-o1",
                                        "type": "button",
                                        "options": {
                                          "text": "Her",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-her",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-o2",
                                        "type": "button",
                                        "options": {
                                          "text": "Him",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-him",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-o3",
                                        "type": "button",
                                        "options": {
                                          "text": "Kids",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-kids",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-o4",
                                        "type": "button",
                                        "options": {
                                          "text": "Parents",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-parents",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-o5",
                                        "type": "button",
                                        "options": {
                                          "text": "Couple",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-couples",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-1-o6",
                                        "type": "button",
                                        "options": {
                                          "text": "Colleague",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/for-colleagues",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "uh-find-2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2.5 border-t border-dashed border-[#EADDD2] pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-find-2-q",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-2-n",
                                        "type": "text",
                                        "options": {
                                          "text": "2",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E0B354] font-body text-xs font-extrabold text-[#2B1B2E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-2-t",
                                        "type": "text",
                                        "options": {
                                          "text": "What’s the occasion?",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "uh-find-2-opts",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-2-o1",
                                        "type": "button",
                                        "options": {
                                          "text": "Birthday",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/birthday",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-2-o2",
                                        "type": "button",
                                        "options": {
                                          "text": "Anniversary",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/anniversary",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-2-o3",
                                        "type": "button",
                                        "options": {
                                          "text": "Eid",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/eid",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-2-o4",
                                        "type": "button",
                                        "options": {
                                          "text": "Wedding",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/wedding",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-2-o5",
                                        "type": "button",
                                        "options": {
                                          "text": "Thank you",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/thank-you",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "uh-find-3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-2.5 border-t border-dashed border-[#EADDD2] pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-find-3-q",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex items-center gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-3-n",
                                        "type": "text",
                                        "options": {
                                          "text": "3",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "flex h-6 w-6 items-center justify-center rounded-full bg-[#E0B354] font-body text-xs font-extrabold text-[#2B1B2E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-3-t",
                                        "type": "text",
                                        "options": {
                                          "text": "Your budget?",
                                          "tag": "span"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "id": "uh-find-3-opts",
                                    "type": "container",
                                    "options": {},
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "flex flex-wrap gap-2"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-find-3-o1",
                                        "type": "button",
                                        "options": {
                                          "text": "Under ৳1,000",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/under-1000",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-3-o2",
                                        "type": "button",
                                        "options": {
                                          "text": "৳1,000–2,500",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/under-2500",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-3-o3",
                                        "type": "button",
                                        "options": {
                                          "text": "৳2,500–5,000",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/under-5000",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-find-3-o4",
                                        "type": "button",
                                        "options": {
                                          "text": "Luxe",
                                          "linkTo": "custom",
                                          "scheme": "",
                                          "url": "/tags/luxe",
                                          "target": "",
                                          "icon": "",
                                          "iconSize": 18
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "group inline-flex cursor-pointer items-center rounded-full border-2 border-[#2B1B2E]/10 bg-white px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A] hover:bg-[#0F5C4A]"
                                          },
                                          "icon": {
                                            "classes": "hidden"
                                          },
                                          "label": {
                                            "classes": "font-body text-sm font-bold whitespace-nowrap text-[#2B1B2E] group-hover:text-white"
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
                        "id": "uh-hero-art",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative lg:col-span-6"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-hero-disc",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-[8%] rounded-full bg-[#FCE8E5]"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "uh-hero-ring",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "pointer-events-none absolute inset-[3%] rounded-full border-2 border-dashed border-[#E0B354]/50"
                              }
                            },
                            "children": []
                          },
                          {
                            "id": "uh-hero-img",
                            "type": "image",
                            "options": {
                              "src": "/templates/upohar-gifts.svg",
                              "altText": "A stack of wrapped gift boxes in green, blush and gold with satin ribbons and a gift tag",
                              "link": "/shop",
                              "newTab": false
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative mx-auto w-full max-w-[540px]"
                              },
                              "link": {
                                "classes": "block"
                              },
                              "img": {
                                "classes": "h-auto w-full transition-transform duration-700 hover:-rotate-2 hover:scale-[1.02]"
                              }
                            }
                          },
                          {
                            "id": "uh-hero-note",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "absolute bottom-6 left-0 flex rotate-[-4deg] items-center gap-3 bg-white py-3 pl-7 pr-5 shadow-[0_18px_30px_-18px_rgba(43,27,46,0.45)] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] sm:left-4"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-hero-note-ic",
                                "type": "icon",
                                "options": {
                                  "iconName": "IconTruckDelivery",
                                  "size": 22,
                                  "label": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-10 w-10 items-center justify-center rounded-full bg-[#E1EFEA] text-[#0F5C4A]"
                                  }
                                }
                              },
                              {
                                "id": "uh-hero-note-t",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-hero-note-a",
                                    "type": "text",
                                    "options": {
                                      "text": "Same-day delivery",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-hero-note-b",
                                    "type": "text",
                                    "options": {
                                      "text": "order by 2 pm in Dhaka",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
            "id": "uh-strip",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#0F5C4A] py-4 before:absolute before:inset-x-0 before:top-1 before:h-0.5 before:bg-[#E0B354] before:content-[''] after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:bg-[#E0B354] after:content-['']"
              }
            },
            "children": [
              {
                "id": "uh-strip-row",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "flex w-max items-center gap-8 whitespace-nowrap px-4"
                  }
                },
                "children": [
                  {
                    "id": "uh-strip-0",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-1",
                    "type": "text",
                    "options": {
                      "text": "Handwritten card  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#E0B354]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-2",
                    "type": "text",
                    "options": {
                      "text": "Same-day delivery in Dhaka  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-3",
                    "type": "text",
                    "options": {
                      "text": "No price tags inside  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-4",
                    "type": "text",
                    "options": {
                      "text": "Surprise delivery  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#E0B354]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-5",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-6",
                    "type": "text",
                    "options": {
                      "text": "Free gift wrap  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-7",
                    "type": "text",
                    "options": {
                      "text": "Handwritten card  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#E0B354]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-8",
                    "type": "text",
                    "options": {
                      "text": "Same-day delivery in Dhaka  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-9",
                    "type": "text",
                    "options": {
                      "text": "No price tags inside  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-10",
                    "type": "text",
                    "options": {
                      "text": "Surprise delivery  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#E0B354]"
                      }
                    }
                  },
                  {
                    "id": "uh-strip-11",
                    "type": "text",
                    "options": {
                      "text": "Cash on delivery  ♥",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-body text-sm font-bold uppercase tracking-[0.14em] text-[#FFF8F0]"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-occ",
            "type": "section",
            "options": {
              "anchor": "occasions"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-occ-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-occ-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-occ-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-occ-label",
                            "type": "text",
                            "options": {
                              "text": "what are we celebrating?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-occ-h",
                            "type": "heading",
                            "options": {
                              "text": "Shop by occasion",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-occ-all",
                        "type": "button",
                        "options": {
                          "text": "All occasions",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-occ-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-occ-1",
                        "type": "button",
                        "options": {
                          "text": "Birthday",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/birthday",
                          "target": "",
                          "icon": "IconCake",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#FCE8E5] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-2",
                        "type": "button",
                        "options": {
                          "text": "Anniversary",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/anniversary",
                          "target": "",
                          "icon": "IconHeart",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#F9E1E8] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-3",
                        "type": "button",
                        "options": {
                          "text": "Eid",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/eid",
                          "target": "",
                          "icon": "IconMoon",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#E1EFEA] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-4",
                        "type": "button",
                        "options": {
                          "text": "Wedding",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/wedding",
                          "target": "",
                          "icon": "IconDiamond",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#FBF0D6] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-5",
                        "type": "button",
                        "options": {
                          "text": "New baby",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/new-baby",
                          "target": "",
                          "icon": "IconBabyCarriage",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#E6EEF8] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-6",
                        "type": "button",
                        "options": {
                          "text": "Thank you",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/thank-you",
                          "target": "",
                          "icon": "IconHeartHandshake",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#FCE8E5] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-7",
                        "type": "button",
                        "options": {
                          "text": "Get well",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/get-well",
                          "target": "",
                          "icon": "IconPlant2",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#E1EFEA] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
                          }
                        }
                      },
                      {
                        "id": "uh-occ-8",
                        "type": "button",
                        "options": {
                          "text": "Graduation",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/graduation",
                          "target": "",
                          "icon": "IconSchool",
                          "iconSize": 22
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative flex cursor-pointer items-center gap-3 bg-[#FBF0D6] py-5 pl-9 pr-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[22px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:content-['']"
                          },
                          "icon": {
                            "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0F5C4A] transition-transform duration-300 group-hover:rotate-12"
                          },
                          "label": {
                            "classes": "font-heading font-normal text-xl text-[#2B1B2E] transition-colors group-hover:text-white sm:text-2xl"
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
            "id": "uh-row-new-arrivals",
            "type": "section",
            "options": {
              "anchor": "new-arrivals"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-row-new-arrivals-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-row-new-arrivals-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-row-new-arrivals-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-row-new-arrivals-label",
                            "type": "text",
                            "options": {
                              "text": "freshly wrapped",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-new-arrivals-h",
                            "type": "heading",
                            "options": {
                              "text": "New arrivals",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-new-arrivals-sub",
                            "type": "text",
                            "options": {
                              "text": "Just landed in the gift room.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-row-new-arrivals-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-row-new-arrivals-slider",
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "uh-row-new-arrivals-slider-loop",
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
                            "id": "uh-row-new-arrivals-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-new-arrivals-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-new-arrivals-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-row-new-arrivals-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-row-new-arrivals-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-new-arrivals-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-row-new-arrivals-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-row-new-arrivals-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-row-new-arrivals-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-new-arrivals-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-row-new-arrivals-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-cats",
            "type": "section",
            "options": {
              "anchor": "recipients"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-cats-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-cats-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-cats-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cats-label",
                            "type": "text",
                            "options": {
                              "text": "go on, unwrap one",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-cats-h",
                            "type": "heading",
                            "options": {
                              "text": "Gifts for everyone",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-cats-sub",
                            "type": "text",
                            "options": {
                              "text": "Hover a box to peek inside.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-cats-all",
                        "type": "button",
                        "options": {
                          "text": "All categories",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-cats-grid",
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
                        "classes": "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex flex-col items-center gap-3 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-cats-grid-loop",
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
                            "classes": "group relative flex flex-col items-center gap-3 text-center"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cats-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "relative block w-full overflow-hidden rounded-[24px] bg-[#F7ECDF] before:pointer-events-none before:absolute before:inset-y-0 before:left-1/2 before:z-10 before:w-5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,#B98A2E_0_2px,#E0B354_2px_calc(100%-2px),#B98A2E_calc(100%-2px))] before:shadow-md before:transition-all before:duration-500 before:content-[''] group-hover:before:-translate-y-full group-hover:before:opacity-0 after:pointer-events-none after:absolute after:inset-x-0 after:top-1/2 after:z-10 after:h-5 after:-translate-y-1/2 after:bg-[linear-gradient(180deg,#B98A2E_0_2px,#E0B354_2px_calc(100%-2px),#B98A2E_calc(100%-2px))] after:shadow-md after:transition-all after:duration-500 after:content-[''] group-hover:after:translate-x-full group-hover:after:opacity-0"
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
                            "id": "uh-cats-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-2xl text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                              }
                            }
                          },
                          {
                            "id": "uh-cats-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " gift ideas",
                              "singularSuffix": " gift idea",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "-mt-2 font-['Caveat'] text-lg text-[#B5174F]"
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
            "id": "uh-best",
            "type": "section",
            "options": {
              "anchor": "bestsellers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-best-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-best-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-best-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-best-label",
                            "type": "text",
                            "options": {
                              "text": "the ones that get the “wow”",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-best-h",
                            "type": "heading",
                            "options": {
                              "text": "Most-gifted",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-best-all",
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
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-best-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-best-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-best-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-best-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-best-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-best-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-best-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-best-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-best-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-best-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-best-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-best-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-best-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-wrap",
            "type": "section",
            "options": {
              "anchor": "gift-wrap"
            },
            "cssSelectors": {
              "*": {
                "classes": "relative w-full overflow-hidden bg-[#2B1B2E] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-wrap-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-wrap-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-wrap-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-wrap-label",
                            "type": "text",
                            "options": {
                              "text": "on the house",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#E0B354]"
                              }
                            }
                          },
                          {
                            "id": "uh-wrap-h",
                            "type": "heading",
                            "options": {
                              "text": "Choose your wrap",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#FFF8F0]"
                              }
                            }
                          },
                          {
                            "id": "uh-wrap-sub",
                            "type": "text",
                            "options": {
                              "text": "Every order is gift-wrapped free. Pick your paper at checkout.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-white/65"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "uh-wrap-grid",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "grid grid-cols-2 gap-4 lg:grid-cols-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-wrap-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-wrap-1-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[220px] rounded-[20px] bg-[#C9A27A] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.05)_0_1px,transparent_1px_6px)] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-wrap-1-v",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#0F5C4A]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-1-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#0F5C4A]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-1-knot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-[#0F5C4A] shadow-md ring-2 ring-white/30"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "uh-wrap-1-t",
                            "type": "text",
                            "options": {
                              "text": "Classic kraft",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#FFF8F0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-wrap-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-wrap-2-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[220px] rounded-[20px] bg-[#F4B9B2] bg-[radial-gradient(circle,rgba(255,255,255,0.7)_3px,transparent_3.5px)] bg-[length:18px_18px] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-wrap-2-v",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#0F5C4A]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-2-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#0F5C4A]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-2-knot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-[#0F5C4A] shadow-md ring-2 ring-white/30"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "uh-wrap-2-t",
                            "type": "text",
                            "options": {
                              "text": "Blush dots",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#FFF8F0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-wrap-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-wrap-3-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[220px] rounded-[20px] bg-[#0F5C4A] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.12)_0_8px,transparent_8px_16px)] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-wrap-3-v",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#E0B354]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-3-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#E0B354]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-3-knot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-[#E0B354] shadow-md ring-2 ring-white/30"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "uh-wrap-3-t",
                            "type": "text",
                            "options": {
                              "text": "Evergreen stripe",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#FFF8F0]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-wrap-4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "group flex flex-col items-center gap-3"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-wrap-4-box",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "relative aspect-square w-full max-w-[220px] rounded-[20px] bg-[linear-gradient(135deg,#F3D27E,#E0B354_45%,#B98A2E_70%,#F3D27E)] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-wrap-4-v",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#B5174F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-4-h",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#B5174F]"
                                  }
                                },
                                "children": []
                              },
                              {
                                "id": "uh-wrap-4-knot",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-[#B5174F] shadow-md ring-2 ring-white/30"
                                  }
                                },
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "uh-wrap-4-t",
                            "type": "text",
                            "options": {
                              "text": "Gold foil",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#FFF8F0]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "uh-steps",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-step-1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-step-1-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconGift",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0B354] text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-step-1-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-step-1-h",
                                "type": "heading",
                                "options": {
                                  "text": "1. Pick a gift",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-extrabold text-[#FFF8F0]"
                                  }
                                }
                              },
                              {
                                "id": "uh-step-1-p",
                                "type": "text",
                                "options": {
                                  "text": "Or let the three-tap finder pick for you.",
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
                        "id": "uh-step-2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-step-2-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconPencil",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0B354] text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-step-2-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-step-2-h",
                                "type": "heading",
                                "options": {
                                  "text": "2. Wrap & write",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-extrabold text-[#FFF8F0]"
                                  }
                                }
                              },
                              {
                                "id": "uh-step-2-p",
                                "type": "text",
                                "options": {
                                  "text": "Choose your paper, we hand-write your note.",
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
                        "id": "uh-step-3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-step-3-ic",
                            "type": "icon",
                            "options": {
                              "iconName": "IconTruckDelivery",
                              "size": 22,
                              "label": ""
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0B354] text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-step-3-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-step-3-h",
                                "type": "heading",
                                "options": {
                                  "text": "3. We deliver the smile",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-base font-extrabold text-[#FFF8F0]"
                                  }
                                }
                              },
                              {
                                "id": "uh-step-3-p",
                                "type": "text",
                                "options": {
                                  "text": "Same day in Dhaka, with no price tags inside.",
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
          },
          {
            "id": "uh-row-for-her",
            "type": "section",
            "options": {
              "anchor": "for-her"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-row-for-her-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-row-for-her-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-row-for-her-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-row-for-her-label",
                            "type": "text",
                            "options": {
                              "text": "for the women you love",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-for-her-h",
                            "type": "heading",
                            "options": {
                              "text": "Gifts for her",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-for-her-sub",
                            "type": "text",
                            "options": {
                              "text": "Jewellery, skincare sets, flowers and keepsakes.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-row-for-her-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/for-her",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-row-for-her-slider",
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
                                  "for-her"
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "uh-row-for-her-slider-loop",
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
                            "id": "uh-row-for-her-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-for-her-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-for-her-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-row-for-her-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-row-for-her-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-for-her-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-row-for-her-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-row-for-her-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-row-for-her-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-for-her-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-row-for-her-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-budget",
            "type": "section",
            "options": {
              "anchor": "budget"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FBF0D6] py-14 lg:py-16"
              }
            },
            "children": [
              {
                "id": "uh-budget-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
                  }
                },
                "children": [
                  {
                    "id": "uh-budget-t",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-1 text-center lg:items-start lg:text-left"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-budget-k",
                        "type": "text",
                        "options": {
                          "text": "it’s the thought that counts",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                          }
                        }
                      },
                      {
                        "id": "uh-budget-h",
                        "type": "heading",
                        "options": {
                          "text": "Gifts by budget",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading font-normal text-4xl text-[#2B1B2E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-budget-tags",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap justify-center gap-3"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-bud-1",
                        "type": "button",
                        "options": {
                          "text": "Under ৳500",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/under-500",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative inline-flex cursor-pointer items-center bg-white py-3 pl-9 pr-6 shadow-[0_10px_20px_-14px_rgba(43,27,46,0.5)] transition-all duration-300 hover:-rotate-3 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[20px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#FBF0D6] before:content-['']"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "uh-bud-2",
                        "type": "button",
                        "options": {
                          "text": "Under ৳1,000",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/under-1000",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative inline-flex cursor-pointer items-center bg-white py-3 pl-9 pr-6 shadow-[0_10px_20px_-14px_rgba(43,27,46,0.5)] transition-all duration-300 hover:-rotate-3 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[20px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#FBF0D6] before:content-['']"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "uh-bud-3",
                        "type": "button",
                        "options": {
                          "text": "Under ৳2,500",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/under-2500",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative inline-flex cursor-pointer items-center bg-white py-3 pl-9 pr-6 shadow-[0_10px_20px_-14px_rgba(43,27,46,0.5)] transition-all duration-300 hover:-rotate-3 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[20px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#FBF0D6] before:content-['']"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "uh-bud-4",
                        "type": "button",
                        "options": {
                          "text": "Under ৳5,000",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/under-5000",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative inline-flex cursor-pointer items-center bg-white py-3 pl-9 pr-6 shadow-[0_10px_20px_-14px_rgba(43,27,46,0.5)] transition-all duration-300 hover:-rotate-3 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[20px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#FBF0D6] before:content-['']"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
                          }
                        }
                      },
                      {
                        "id": "uh-bud-5",
                        "type": "button",
                        "options": {
                          "text": "Luxe gifts",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/tags/luxe",
                          "target": "",
                          "icon": "",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group relative inline-flex cursor-pointer items-center bg-white py-3 pl-9 pr-6 shadow-[0_10px_20px_-14px_rgba(43,27,46,0.5)] transition-all duration-300 hover:-rotate-3 hover:bg-[#0F5C4A] [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] before:absolute before:left-[20px] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-[#FBF0D6] before:content-['']"
                          },
                          "icon": {
                            "classes": "hidden"
                          },
                          "label": {
                            "classes": "font-body text-base font-extrabold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
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
            "id": "uh-row-for-him",
            "type": "section",
            "options": {
              "anchor": "for-him"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-row-for-him-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-row-for-him-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-row-for-him-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-row-for-him-label",
                            "type": "text",
                            "options": {
                              "text": "for the men who say they want nothing",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-for-him-h",
                            "type": "heading",
                            "options": {
                              "text": "Gifts for him",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-for-him-sub",
                            "type": "text",
                            "options": {
                              "text": "Wallets, watches, grooming kits and gadgets.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-row-for-him-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/for-him",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-row-for-him-slider",
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
                                  "for-him"
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "uh-row-for-him-slider-loop",
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
                            "id": "uh-row-for-him-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-for-him-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-for-him-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-row-for-him-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-row-for-him-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-for-him-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-row-for-him-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-row-for-him-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-row-for-him-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-for-him-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-row-for-him-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-corp",
            "type": "section",
            "options": {
              "anchor": "corporate"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-corp-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-corp-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#0F5C4A] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-corp-rib-v",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-y-0 right-6 hidden w-6 lg:block bg-[linear-gradient(90deg,#B98A2E_0_2px,#E0B354_2px_calc(100%-2px),#B98A2E_calc(100%-2px))]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "uh-corp-rib-h",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute inset-x-0 top-8 hidden h-6 lg:block bg-[linear-gradient(180deg,#B98A2E_0_2px,#E0B354_2px_calc(100%-2px),#B98A2E_calc(100%-2px))]"
                          }
                        },
                        "children": []
                      },
                      {
                        "id": "uh-corp-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-4 lg:col-span-7"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-corp-k",
                            "type": "text",
                            "options": {
                              "text": "for teams, clients & events",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#E0B354]"
                              }
                            }
                          },
                          {
                            "id": "uh-corp-h",
                            "type": "heading",
                            "options": {
                              "text": "Corporate gifting, beautifully handled.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] text-white sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "uh-corp-p",
                            "type": "text",
                            "options": {
                              "text": "Eid hampers, welcome kits and client gifts with your logo, packed and delivered to 10 or 1,000 addresses. One invoice, one contact.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-white/75"
                              }
                            }
                          },
                          {
                            "id": "uh-corp-stats",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap gap-6 pt-2"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-corp-s1",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-corp-s1-v",
                                    "type": "text",
                                    "options": {
                                      "text": "500+",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-3xl text-[#E0B354]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-corp-s1-k",
                                    "type": "text",
                                    "options": {
                                      "text": "companies served",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "uh-corp-s2",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-corp-s2-v",
                                    "type": "text",
                                    "options": {
                                      "text": "48 h",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-3xl text-[#E0B354]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-corp-s2-k",
                                    "type": "text",
                                    "options": {
                                      "text": "bulk turnaround",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-wider text-white/60"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "uh-corp-s3",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-corp-s3-v",
                                    "type": "text",
                                    "options": {
                                      "text": "64",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-heading font-normal text-3xl text-[#E0B354]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-corp-s3-k",
                                    "type": "text",
                                    "options": {
                                      "text": "districts delivered",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-xs font-semibold uppercase tracking-wider text-white/60"
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
                        "id": "uh-corp-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-5 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-corp-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Get a corporate quote",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/#faq",
                              "target": "",
                              "icon": "IconBriefcase",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E0B354] px-7 py-3.5 transition-colors hover:bg-white"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2B1B2E]"
                              },
                              "label": {
                                "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                              }
                            }
                          },
                          {
                            "id": "uh-corp-btn-2",
                            "type": "button",
                            "options": {
                              "text": "Browse hampers",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/categories/hampers",
                              "target": "",
                              "icon": "",
                              "iconSize": 18
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 transition-colors hover:bg-white/10"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0"
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
              }
            ]
          },
          {
            "id": "uh-row-hampers",
            "type": "section",
            "options": {
              "anchor": "hampers"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-row-hampers-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-row-hampers-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-row-hampers-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-row-hampers-label",
                            "type": "text",
                            "options": {
                              "text": "a little bit of everything",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-hampers-h",
                            "type": "heading",
                            "options": {
                              "text": "Hampers & gift boxes",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-hampers-sub",
                            "type": "text",
                            "options": {
                              "text": "Chocolates, tea, treats and keepsakes, beautifully boxed.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-row-hampers-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/hampers",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-row-hampers-slider",
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
                                  "hampers"
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "uh-row-hampers-slider-loop",
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
                            "id": "uh-row-hampers-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-hampers-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-hampers-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-row-hampers-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-row-hampers-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-hampers-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-row-hampers-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-row-hampers-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-row-hampers-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-hampers-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-row-hampers-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-row-personalised",
            "type": "section",
            "options": {
              "anchor": "personalised"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-white py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-row-personalised-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-row-personalised-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-row-personalised-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-row-personalised-label",
                            "type": "text",
                            "options": {
                              "text": "made just for them",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-personalised-h",
                            "type": "heading",
                            "options": {
                              "text": "Personalised gifts",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-row-personalised-sub",
                            "type": "text",
                            "options": {
                              "text": "Names, dates and photos printed, engraved or embroidered.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-row-personalised-all",
                        "type": "button",
                        "options": {
                          "text": "See all",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/categories/personalised",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-row-personalised-slider",
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
                                  "personalised"
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
                        "classes": "relative"
                      },
                      "arrows-wrap": {
                        "classes": ""
                      },
                      "arrow-item": {
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "id": "uh-row-personalised-slider-loop",
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
                            "id": "uh-row-personalised-slider-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-personalised-slider-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-personalised-slider-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-row-personalised-slider-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-row-personalised-slider-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-row-personalised-slider-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-row-personalised-slider-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-row-personalised-slider-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-row-personalised-slider-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-row-personalised-slider-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-row-personalised-slider-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-reviews",
            "type": "section",
            "options": {
              "anchor": "reviews"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-reviews-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-reviews-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap flex-col items-center text-center gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-reviews-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 items-center"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-reviews-label",
                            "type": "text",
                            "options": {
                              "text": "notes from happy receivers",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-reviews-h",
                            "type": "heading",
                            "options": {
                              "text": "Smiles delivered",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-reviews-sub",
                            "type": "text",
                            "options": {
                              "text": "Rated 4.9 by 30,000+ gift-givers.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-2 text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "uh-reviews-slider",
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
                        "classes": "!h-11 !w-11 !rounded-full !bg-white !opacity-100 !shadow-md transition-colors hover:!bg-[#0F5C4A] [&>svg]:!h-3.5 [&>svg]:!w-3.5 [&>svg]:!fill-[#2B1B2E] hover:[&>svg]:!fill-white disabled:!opacity-0"
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
                        "classes": "!m-0 !h-2 !w-2 !rounded-full !bg-[#2B1B2E]/20 !opacity-100 !transform-none transition-all [&.is-active]:!w-7 [&.is-active]:!bg-[#0F5C4A]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-review-r1",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r1-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r1-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r1-q",
                                "type": "text",
                                "options": {
                                  "text": "“Ordered at noon from Sylhet, my sister in Dhaka had it by evening. She cried at the handwritten card.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r1-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r1-ini",
                                "type": "text",
                                "options": {
                                  "text": "SA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E5] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r1-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r1-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Sharmin Akter",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r1-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Birthday surprise",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
                        "id": "uh-review-r2",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r2-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r2-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r2-q",
                                "type": "text",
                                "options": {
                                  "text": "“The three-tap finder picked a gift my wife actually loved. The gold foil wrap looked expensive.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r2-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r2-ini",
                                "type": "text",
                                "options": {
                                  "text": "RA",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E1EFEA] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r2-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r2-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Rafsan Ahmed",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r2-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Anniversary",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
                        "id": "uh-review-r3",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r3-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r3-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r3-q",
                                "type": "text",
                                "options": {
                                  "text": "“Sent hampers to six relatives in different districts from one order. Every one arrived on time.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r3-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r3-ini",
                                "type": "text",
                                "options": {
                                  "text": "NH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBF0D6] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r3-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r3-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Nadia Hossain",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r3-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Eid hamper",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
                        "id": "uh-review-r4",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r4-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r4-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r4-q",
                                "type": "text",
                                "options": {
                                  "text": "“Two hundred welcome kits with our logo, packed perfectly and delivered in two days.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r4-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r4-ini",
                                "type": "text",
                                "options": {
                                  "text": "TC",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F9E1E8] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r4-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r4-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Tamim Chowdhury",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r4-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Corporate gifting",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
                        "id": "uh-review-r5",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r5-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r5-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r5-q",
                                "type": "text",
                                "options": {
                                  "text": "“The personalised baby blanket with her name embroidered is now a family favourite.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r5-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r5-ini",
                                "type": "text",
                                "options": {
                                  "text": "LK",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6EEF8] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r5-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r5-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Lubna Karim",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r5-r",
                                    "type": "text",
                                    "options": {
                                      "text": "New baby",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
                        "id": "uh-review-r6",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex h-full flex-col justify-between rounded-[26px] bg-white p-8 shadow-[0_18px_36px_-28px_rgba(43,27,46,0.45)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-16 before:-translate-x-1/2 before:rotate-[-3deg] before:rounded-sm before:bg-[#E0B354]/70 before:content-['']"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-review-r6-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r6-stars",
                                "type": "text",
                                "options": {
                                  "text": "★★★★★",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "text-sm tracking-[0.25em] text-[#E0B354]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r6-q",
                                "type": "text",
                                "options": {
                                  "text": "“No price tag inside, beautiful box, and a note written exactly how I typed it. Thoughtful service.”",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-lg font-semibold leading-snug text-[#2B1B2E]"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-review-r6-who",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "mt-6 flex items-center gap-3 border-t border-dashed border-[#EADDD2] pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-review-r6-ini",
                                "type": "text",
                                "options": {
                                  "text": "IH",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCE8E5] font-heading font-normal text-lg text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-review-r6-name",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-review-r6-n",
                                    "type": "heading",
                                    "options": {
                                      "text": "Imran Haque",
                                      "tag": "h4"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-body text-sm font-extrabold text-[#2B1B2E]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-review-r6-r",
                                    "type": "text",
                                    "options": {
                                      "text": "Thank you gift",
                                      "tag": "span"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "font-['Caveat'] text-base leading-none text-[#B5174F]"
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
            "id": "uh-journal",
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
                "id": "uh-journal-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-journal-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-journal-head-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex max-w-2xl flex-col gap-1 "
                          }
                        },
                        "children": [
                          {
                            "id": "uh-journal-label",
                            "type": "text",
                            "options": {
                              "text": "stuck for ideas?",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-journal-h",
                            "type": "heading",
                            "options": {
                              "text": "Gift guides",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-journal-all",
                        "type": "button",
                        "options": {
                          "text": "All guides",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/blog",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 16
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[#2B1B2E]/10 bg-white px-5 py-2.5 transition-colors hover:border-[#0F5C4A]"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#0F5C4A] transition-transform group-hover:translate-x-0.5"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E] whitespace-nowrap"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-journal-grid",
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
                        "id": "uh-journal-loop",
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
                            "id": "uh-journal-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden rounded-[26px] bg-[#F7ECDF]"
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
                            "id": "uh-journal-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 pt-5"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-journal-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Caveat'] text-lg leading-none text-[#B5174F]"
                                  }
                                }
                              },
                              {
                                "id": "uh-journal-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-heading text-2xl leading-tight text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                  }
                                }
                              },
                              {
                                "id": "uh-journal-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 18,
                                  "readMoreText": "Read the guide",
                                  "readMoreIcon": "IconArrowRight",
                                  "readMoreIconSize": 14
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-1 flex-col justify-between gap-4 text-sm text-[#7A6870]"
                                  },
                                  "excerpt": {
                                    "classes": "line-clamp-2"
                                  },
                                  "read-more": {
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#0F5C4A]"
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
            "id": "uh-faq",
            "type": "section",
            "options": {
              "anchor": "faq"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16 lg:py-24"
              }
            },
            "children": [
              {
                "id": "uh-faq-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12"
                  }
                },
                "children": [
                  {
                    "id": "uh-faq-side",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "lg:col-span-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-faq-head",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "mb-10 flex flex-wrap items-end justify-between gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-head-t",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex max-w-2xl flex-col gap-1 "
                              }
                            },
                            "children": [
                              {
                                "id": "uh-faq-label",
                                "type": "text",
                                "options": {
                                  "text": "questions?",
                                  "tag": "span"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                                  }
                                }
                              },
                              {
                                "id": "uh-faq-h",
                                "type": "heading",
                                "options": {
                                  "text": "Good to know",
                                  "tag": "h2"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-heading font-normal text-4xl leading-[1.05] sm:text-5xl text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-faq-sub",
                                "type": "text",
                                "options": {
                                  "text": "Wrapping, surprises, delivery and corporate orders.",
                                  "tag": "p"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "mt-2 text-base text-[#7A6870]"
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
                    "id": "uh-faq-acc",
                    "type": "accordion",
                    "options": {
                      "items": [
                        {
                          "label": "Is gift wrapping really free?",
                          "classes": ""
                        },
                        {
                          "label": "Can I send it as a surprise?",
                          "classes": ""
                        },
                        {
                          "label": "How does same-day delivery work?",
                          "classes": ""
                        },
                        {
                          "label": "Can I choose a delivery date?",
                          "classes": ""
                        },
                        {
                          "label": "Do you do corporate orders?",
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
                        "classes": "flex cursor-pointer items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-5 font-body text-base font-bold text-[#2B1B2E] transition-colors hover:bg-[#FCE8E5]"
                      },
                      "accordion-header-open": {
                        "classes": "!bg-[#0F5C4A] !text-white"
                      },
                      "header-label": {
                        "classes": ""
                      },
                      "header-icon": {
                        "classes": "flex shrink-0 text-[#B98A2E]"
                      },
                      "accordion-content": {
                        "classes": "px-6 pb-2 pt-4"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-faq-i1",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-i1-a",
                            "type": "text",
                            "options": {
                              "text": "Yes. Every order is wrapped in your choice of paper with a ribbon and a handwritten card, at no extra cost.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-faq-i2",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-i2-a",
                            "type": "text",
                            "options": {
                              "text": "Of course. We never put a price tag or invoice in the parcel, and the rider will call the receiver only if you allow it.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-faq-i3",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-i3-a",
                            "type": "text",
                            "options": {
                              "text": "Order by 2 pm for same-day delivery inside Dhaka. Elsewhere in Bangladesh it takes 1-3 days.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-faq-i4",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-i4-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, pick any date at checkout, perfect for birthdays and anniversaries planned ahead.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-faq-i5",
                        "type": "accordionItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-faq-i5-a",
                            "type": "text",
                            "options": {
                              "text": "Yes, from 10 to 1,000+ gifts with your logo and a single invoice. Message us for a quote.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-[15px] leading-relaxed text-[#7A6870]"
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
            "id": "uh-cta",
            "type": "section",
            "options": {
              "anchor": "reminders"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] pb-16 lg:pb-24"
              }
            },
            "children": [
              {
                "id": "uh-cta-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-cta-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] bg-[#F4B9B2] bg-[radial-gradient(circle,rgba(255,255,255,0.45)_3px,transparent_3.5px)] bg-[length:22px_22px] p-8 sm:p-12 lg:grid-cols-12 lg:p-16"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-cta-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconCalendarHeart",
                          "size": 200,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "pointer-events-none absolute -bottom-10 right-6 flex -rotate-12 text-[#2B1B2E]/10"
                          }
                        }
                      },
                      {
                        "id": "uh-cta-t",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-col gap-3 rounded-[24px] bg-white/80 p-6 backdrop-blur lg:col-span-8"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cta-k",
                            "type": "text",
                            "options": {
                              "text": "never forget again",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                              }
                            }
                          },
                          {
                            "id": "uh-cta-h",
                            "type": "heading",
                            "options": {
                              "text": "Occasion reminders, a week before.",
                              "tag": "h2"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading font-normal text-4xl leading-[1.05] text-[#2B1B2E] sm:text-5xl"
                              }
                            }
                          },
                          {
                            "id": "uh-cta-p",
                            "type": "text",
                            "options": {
                              "text": "Save birthdays and anniversaries to your free account and we’ll remind you with gift ideas, plus 10% off your first order.",
                              "tag": "p"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "max-w-xl text-base text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-cta-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "relative flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cta-btn-1",
                            "type": "button",
                            "options": {
                              "text": "Set my reminders",
                              "linkTo": "custom",
                              "scheme": "",
                              "url": "/register",
                              "target": "",
                              "icon": "IconBell",
                              "iconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0F5C4A] px-7 py-3.5 transition-colors hover:bg-[#0A4638]"
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
            "id": "uh-shop-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-shop-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-shop-hero-k",
                    "type": "text",
                    "options": {
                      "text": "the whole gift room",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-shop-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Gifts",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-shop-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every gift, hamper and keepsake, newest first. All wrapped free with a handwritten card.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-shop-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-shop-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-shop-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-shop-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-shop-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-shop-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-shop-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-shop-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-shop-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-shop-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-shop-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-shop-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-shop-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-shop-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-shop-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
                        "id": "uh-shop-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-shop-promise",
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
                "id": "uh-shop-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-shop-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free gift wrap",
                          "description": "With a handwritten card",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Same-day delivery",
                          "description": "Order by 2 pm in Dhaka",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "No price tags",
                          "description": "Surprise-safe parcels",
                          "icon": "IconEyeOff",
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
                        "classes": "font-heading text-xl text-[#2B1B2E]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FCE8E5] text-[#0F5C4A]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-shop-promise-fb-ic",
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
                        "id": "uh-shop-promise-fb-t",
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
                        "id": "uh-shop-promise-fb-d",
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
            "id": "uh-pd",
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
                "id": "uh-pd-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-pd-grid",
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
                        "id": "uh-pd-gi-media",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "min-w-0 lg:sticky lg:top-28 lg:self-start"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-pd-gallery",
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
                                "classes": "rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-[#FCE8E5] via-white to-[#FFF8F0] p-4 shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                              },
                              "items": {
                                "classes": ""
                              },
                              "item": {
                                "classes": "overflow-hidden rounded-[26px] bg-white [&_img]:aspect-square [&_img]:object-contain"
                              },
                              "image": {
                                "classes": ""
                              },
                              "arrows": {
                                "classes": ""
                              },
                              "prev": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B1B2E]!"
                              },
                              "next": {
                                "classes": "bg-white! opacity-100! size-10! rounded-full! shadow-md [&>svg]:fill-[#2B1B2E]!"
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
                                "classes": "overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#0F5C4A]"
                              },
                              "thumbnail-image": {
                                "classes": "aspect-square w-full object-cover"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-pd-gi-info",
                        "type": "gridItem",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex min-w-0 flex-col gap-4"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-pd-cats",
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
                                "classes": "rounded-full bg-[#FCE8E5] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B1B2E] hover:bg-[#2B1B2E] hover:text-white"
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
                            "id": "uh-pd-title",
                            "type": "postTitle",
                            "options": {
                              "linkTo": "",
                              "tag": "h1"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-heading text-3xl font-normal leading-tight text-[#2B1B2E] sm:text-4xl"
                              }
                            }
                          },
                          {
                            "id": "uh-pd-rate",
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
                                "classes": "font-body font-bold text-[#2B1B2E]"
                              },
                              "total-reviews": {
                                "classes": "text-xs font-semibold text-gray-500"
                              }
                            }
                          },
                          {
                            "id": "uh-pd-price-row",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-center gap-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-price",
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
                                    "classes": "font-heading text-3xl font-normal text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "text-base text-gray-400 line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-2"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-3xl font-normal text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-3xl font-normal text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-pd-off",
                                "type": "productDiscount",
                                "options": {
                                  "label": "OFF"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center gap-1 rounded-full bg-[#0F5C4A] px-3 py-1 text-xs font-extrabold uppercase text-white"
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
                            "id": "uh-pd-excerpt",
                            "type": "postExcerpt",
                            "options": {
                              "maxWord": 40,
                              "readMoreText": "",
                              "readMoreIcon": "",
                              "readMoreIconSize": 16
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "text-sm leading-relaxed text-[#7A6870]"
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
                            "id": "uh-pd-vars",
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
                                "classes": "flex flex-col gap-2 font-body font-bold text-[#2B1B2E]"
                              },
                              "attr-items-wrap": {
                                "classes": "flex flex-wrap gap-2"
                              },
                              "variation-item": {
                                "classes": "cursor-pointer rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 font-body text-sm text-[#2B1B2E] transition-colors hover:border-[#2B1B2E] hover:bg-[#FCE8E5]"
                              },
                              "variation-selected": {
                                "classes": "!border-[#2B1B2E] !bg-[#FCE8E5] !text-[#402A44]"
                              },
                              "variation-disabled": {
                                "classes": "cursor-not-allowed opacity-40 line-through"
                              }
                            }
                          },
                          {
                            "id": "uh-pd-stock",
                            "type": "productStockStatus",
                            "options": {
                              "label": "",
                              "labelIcon": "",
                              "outOfStockText": "Sold out · see similar gifts below",
                              "inStockText": "In stock · same-day delivery in Dhaka",
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
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#0F5C4A]"
                              },
                              "out-of-stock-label": {
                                "classes": ""
                              },
                              "out-of-stock-icon": {
                                "classes": ""
                              },
                              "in-stock": {
                                "classes": "flex items-center gap-1 font-body text-sm font-bold text-[#2B1B2E]"
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
                            "id": "uh-pd-add",
                            "type": "addToCart",
                            "options": {
                              "buttonText": "Add to Gift Bag",
                              "hideQuantity": false,
                              "hideButton": false,
                              "icon": "IconGift",
                              "iconSize": 20
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-wrap items-stretch gap-3"
                              },
                              "quantity-wrapper": {
                                "classes": "flex h-14 items-center justify-between gap-1 rounded-2xl border-2 border-gray-200 bg-white px-3 text-[#2B1B2E]"
                              },
                              "quantity-decrease": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8F0]"
                              },
                              "quantity-input": {
                                "classes": "!w-12 !border-0 bg-transparent text-center font-body font-bold !shadow-none focus:outline-none"
                              },
                              "quantity-increase": {
                                "classes": "flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl hover:bg-[#FFF8F0]"
                              },
                              "button-wrapper": {
                                "classes": "flex h-14 flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#0F5C4A] px-8 text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:bg-[#0A4638]"
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
                            "id": "uh-pd-perks",
                            "type": "featurebox",
                            "options": {
                              "tag": "div",
                              "icon": "",
                              "iconSize": "",
                              "items": [
                                {
                                  "title": "Free gift wrap",
                                  "description": "And a card",
                                  "icon": "IconGift",
                                  "iconSize": ""
                                },
                                {
                                  "title": "Same-day",
                                  "description": "In Dhaka",
                                  "icon": "IconTruckDelivery",
                                  "iconSize": ""
                                },
                                {
                                  "title": "No price tags",
                                  "description": "Surprise-safe",
                                  "icon": "IconEyeOff",
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
                                "classes": "font-body text-base font-bold text-[#2B1B2E]"
                              },
                              "description": {
                                "classes": "text-xs text-gray-500"
                              },
                              "icon": {
                                "classes": "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCE8E5] text-[#2B1B2E]"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-perks-ic",
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
                                "id": "uh-pd-perks-t",
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
                                "id": "uh-pd-perks-d",
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
                            "id": "uh-pd-meta",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-sku",
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
                                    "classes": "font-semibold text-[#2B1B2E]"
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
                                "id": "uh-pd-brands",
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
                                    "classes": "font-semibold text-[#2B1B2E]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0F5C4A]"
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
                                "id": "uh-pd-tags",
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
                                    "classes": "font-semibold text-[#2B1B2E]"
                                  },
                                  "items": {
                                    "classes": "flex flex-wrap gap-1"
                                  },
                                  "item": {
                                    "classes": "hover:text-[#0F5C4A]"
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
            "id": "uh-pd-tabs-sec",
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
                "id": "uh-pd-tabs-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-pd-tabs-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,46,0.06)] sm:p-10"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-pd-tabs",
                        "type": "tabs",
                        "options": {
                          "orientation": "",
                          "tabsItems": [
                            {
                              "label": "About this gift",
                              "icon": "IconFileDescription"
                            },
                            {
                              "label": "Wrap & card",
                              "icon": "IconGift"
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
                            "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8F0] px-5 py-2.5 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:bg-gray-200"
                          },
                          "nav-item-active": {
                            "classes": "!bg-[#2B1B2E] !text-white shadow-md"
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
                            "id": "uh-pd-tab-desc",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-content",
                                "type": "postContent",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2B1B2E] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2B1B2E] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#0F5C4A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[26px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E0B354] [&_blockquote]:pl-4 [&_blockquote]:italic"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-pd-tab-safe",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-safe-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconGift",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Choose kraft, blush dots, evergreen stripe or gold foil wrap at checkout",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Type your message in the order note; we hand-write it on the card",
                                      "icon": ""
                                    },
                                    {
                                      "text": "No price tag or invoice goes inside the parcel",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Personalised items: add the name or date in the order note",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B1B2E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-pd-tab-ship",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-ship-list",
                                "type": "list",
                                "options": {
                                  "icon": "IconCircleCheckFilled",
                                  "iconSize": 18,
                                  "tag": "ul",
                                  "items": [
                                    {
                                      "text": "Order by 2 pm for same-day delivery inside Dhaka",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Outside Dhaka: 1-3 days nationwide",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Pick a delivery date at checkout for planned surprises",
                                      "icon": ""
                                    },
                                    {
                                      "text": "Damaged on arrival? We replace it free",
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
                                    "classes": "mt-0.5 flex shrink-0 text-[#2B1B2E]"
                                  },
                                  "text": {
                                    "classes": ""
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "id": "uh-pd-tab-rev",
                            "type": "tabsItem",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": ""
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-reviews",
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
                                    "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[26px] border border-gray-100 bg-[#FFF8F0] p-5"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-pd-reviews-loop",
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
                                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[26px] border border-gray-100 bg-[#FFF8F0] p-5"
                                      }
                                    },
                                    "children": [
                                      {
                                        "id": "uh-pd-reviews-av",
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
                                            "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E1EFEA]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-pd-reviews-au",
                                        "type": "commentAuthor",
                                        "options": {
                                          "label": "",
                                          "tag": "div"
                                        },
                                        "cssSelectors": {
                                          "*": {
                                            "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                                          }
                                        }
                                      },
                                      {
                                        "id": "uh-pd-reviews-rate",
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
                                        "id": "uh-pd-reviews-co",
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
                                    "id": "uh-pd-reviews-form",
                                    "type": "commentsForm",
                                    "options": {
                                      "showRate": true,
                                      "rateLabel": "Your rating",
                                      "commentLabel": "How did they react when they opened it?",
                                      "placeholder": "",
                                      "submitLabel": "Post review",
                                      "loadingLabel": "Please wait.",
                                      "loginRequiredText": "Please log in to leave a review.",
                                      "successText": "Thank you! Your review has been received."
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,46,0.06)] lg:sticky lg:top-28"
                                      },
                                      "label": {
                                        "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                                      },
                                      "textarea": {
                                        "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8F0] px-4 py-3 text-sm text-[#2B1B2E] placeholder:text-gray-400 focus:border-[#2B1B2E] focus:outline-none focus:ring-2 focus:ring-[#2B1B2E]/20"
                                      },
                                      "submit": {
                                        "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0F5C4A] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A4638] disabled:opacity-50"
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
            "id": "uh-pd-related",
            "type": "section",
            "options": {
              "anchor": "related"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16"
              }
            },
            "children": [
              {
                "id": "uh-pd-related-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-pd-related-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-10 flex flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-pd-related-k",
                        "type": "text",
                        "options": {
                          "text": "pairs beautifully with",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E1EFEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5C4A]"
                          }
                        }
                      },
                      {
                        "id": "uh-pd-related-h",
                        "type": "heading",
                        "options": {
                          "text": "You Might Also Like",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B1B2E]"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-pd-related-grid",
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
                        "id": "uh-pd-related-loop",
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
                            "id": "uh-pd-rel-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-rel-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-pd-rel-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-pd-rel-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-pd-rel-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-pd-rel-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-pd-rel-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-pd-rel-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-pd-rel-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-pd-rel-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-pd-rel-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
            "id": "uh-cat-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-cat-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-cat-hero-k",
                    "type": "text",
                    "options": {
                      "text": "gifts for everyone",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-cat-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "All Categories",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-cat-hero-p",
                    "type": "text",
                    "options": {
                      "text": "For her, for him, kids, parents, hampers, personalised and corporate gifts.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-cat-grid-sec",
            "type": "section",
            "options": {
              "anchor": "categories"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-cat-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-cat-grid",
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
                        "classes": "group flex flex-col items-center gap-1 rounded-[26px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-cat-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-1 rounded-[26px] border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cat-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "mx-auto mb-3 h-16 w-16 overflow-hidden rounded-2xl bg-[#FCE8E5] transition-transform"
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
                            "id": "uh-cat-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h4",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                              }
                            }
                          },
                          {
                            "id": "uh-cat-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " gift ideas",
                              "singularSuffix": " gift idea",
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
                        "id": "uh-cat-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-cat1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-cat1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-cat1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Category",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-cat1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-cat1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "uh-cat1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " gift ideas",
                      "singularSuffix": " gift idea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B1B2E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-cat1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-cat1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-cat1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-cat1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-cat1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-cat1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-cat1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-cat1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-cat1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-cat1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-cat1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-cat1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-cat1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-cat1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-cat1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
                        "id": "uh-cat1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-tag-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-tag-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-tag-hero-k",
                    "type": "text",
                    "options": {
                      "text": "find it fast",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-tag-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Browse by Tag",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-tag-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Tags group gifts by occasion and budget: birthdays, anniversaries, Eid, under ৳1,000 and more.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-tag-grid-sec",
            "type": "section",
            "options": {
              "anchor": "tags"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-tag-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-tag-grid",
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
                        "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-tag-grid-loop",
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
                            "classes": "group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0F5C4A]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-tag-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B1B2E] group-hover:text-[#0F5C4A]"
                              }
                            }
                          },
                          {
                            "id": "uh-tag-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": "",
                              "singularSuffix": "",
                              "tag": "span"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "rounded-full bg-[#FFF8F0] px-2 py-0.5 text-[10px] font-bold text-[#7A6870]"
                              }
                            }
                          }
                        ]
                      },
                      {
                        "id": "uh-tag-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-tag1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-tag1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-tag1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Tag",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-tag1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-tag1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "uh-tag1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " gift ideas",
                      "singularSuffix": " gift idea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B1B2E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-tag1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-tag1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-tag1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-tag1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-tag1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-tag1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-tag1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-tag1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-tag1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-tag1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-tag1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-tag1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-tag1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-tag1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-tag1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
                        "id": "uh-tag1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-brand-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-brand-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-brand-hero-k",
                    "type": "text",
                    "options": {
                      "text": "makers we love",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-brand-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Our Brands",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-brand-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Every maker and brand in the gift room.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-brand-grid-sec",
            "type": "section",
            "options": {
              "anchor": "brands"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-brand-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-brand-grid",
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
                        "classes": "group flex flex-col items-center gap-3 rounded-[26px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-brand-grid-loop",
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
                            "classes": "group flex flex-col items-center gap-3 rounded-[26px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-brand-grid-thumb",
                            "type": "termThumbnail",
                            "options": {
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "flex h-20 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#FFF8F0] p-3"
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
                            "id": "uh-brand-grid-title",
                            "type": "termTitle",
                            "options": {
                              "tag": "h3",
                              "linkTo": "termUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-base font-bold text-[#2B1B2E] group-hover:text-[#0F5C4A]"
                              }
                            }
                          },
                          {
                            "id": "uh-brand-grid-count",
                            "type": "termCount",
                            "options": {
                              "label": "",
                              "suffix": " gift ideas",
                              "singularSuffix": " gift idea",
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
                        "id": "uh-brand-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-brand1-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-brand1-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-brand1-hero-k",
                    "type": "text",
                    "options": {
                      "text": "Brand",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-brand1-hero-title",
                    "type": "archiveTitle",
                    "options": {
                      "tag": "h1",
                      "prefix": "%term_name%"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-brand1-hero-desc",
                    "type": "archiveDescription",
                    "options": {
                      "maxWord": 40
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      },
                      "paragraph": {
                        "classes": "mt-2 first:mt-0"
                      }
                    }
                  },
                  {
                    "id": "uh-brand1-hero-count",
                    "type": "archiveCount",
                    "options": {
                      "prefix": "",
                      "suffix": " gift ideas",
                      "singularSuffix": " gift idea"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-flex items-center rounded-full bg-white px-4 py-1.5 font-body text-xs font-bold text-[#2B1B2E] shadow-sm"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-brand1-grid-sec",
            "type": "section",
            "options": {
              "anchor": "products"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-brand1-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-brand1-grid",
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
                        "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                      },
                      "loop-item": {
                        "classes": "group relative flex h-full flex-col justify-between"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-brand1-grid-loop",
                        "type": "postLoop",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          },
                          "loop-items": {
                            "classes": "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 xl:grid-cols-4"
                          },
                          "loop-item": {
                            "classes": "group relative flex h-full flex-col justify-between"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-brand1-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-brand1-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-brand1-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-brand1-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-brand1-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-brand1-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-brand1-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-brand1-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-brand1-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-brand1-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-brand1-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
                        "id": "uh-brand1-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-blog-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-blog-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-blog-hero-k",
                    "type": "text",
                    "options": {
                      "text": "stuck for ideas?",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-blog-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "Gift Guides",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-blog-hero-p",
                    "type": "text",
                    "options": {
                      "text": "What to give for every age, occasion and budget, plus wrapping and card-writing tips.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-blog-grid-sec",
            "type": "section",
            "options": {
              "anchor": "posts"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-blog-grid-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-blog-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-blog-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-blog-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8F0]"
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
                            "id": "uh-blog-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-6"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-blog-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-blog-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-xl font-bold text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                  }
                                }
                              },
                              {
                                "id": "uh-blog-grid-ex",
                                "type": "postExcerpt",
                                "options": {
                                  "maxWord": 22,
                                  "readMoreText": "Read the guide",
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
                                    "classes": "group/rm flex items-center gap-1.5 font-body text-sm font-bold text-[#0F5C4A]"
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
                        "id": "uh-blog-grid-pg",
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
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "next": {
                            "classes": "rounded-full border border-gray-200 bg-white px-4 py-2 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A] disabled:cursor-not-allowed disabled:opacity-40"
                          },
                          "previous-icon": {
                            "classes": ""
                          },
                          "next-icon": {
                            "classes": ""
                          },
                          "pagination-item": {
                            "classes": "flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:border-[#0F5C4A] hover:text-[#0F5C4A]"
                          },
                          "pagination-item-active": {
                            "classes": "flex size-10 items-center justify-center rounded-full bg-[#0F5C4A] font-body text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)]"
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
            "id": "uh-post-head",
            "type": "section",
            "options": {
              "anchor": "post"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-post-head-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-post-k",
                    "type": "text",
                    "options": {
                      "text": "gift guides",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "inline-block rounded-full bg-[#FCE8E5] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B1B2E]"
                      }
                    }
                  },
                  {
                    "id": "uh-post-title",
                    "type": "postTitle",
                    "options": {
                      "linkTo": "",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal leading-tight text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-post-meta",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-wrap items-center justify-center gap-3 text-sm text-[#7A6870]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-post-author",
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
                            "classes": "font-body font-bold text-[#2B1B2E]"
                          }
                        }
                      },
                      {
                        "id": "uh-post-dot",
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
                        "id": "uh-post-date",
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
                    "id": "uh-post-thumb",
                    "type": "postThumbnail",
                    "options": {
                      "linkTo": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mt-4 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
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
            "id": "uh-post-body",
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
                "id": "uh-post-body-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-post-content",
                    "type": "postContent",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-3xl text-base leading-relaxed text-gray-600 [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:text-[#2B1B2E] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#2B1B2E] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-normal [&_a]:text-[#0F5C4A] [&_a]:underline [&_img]:my-6 [&_img]:rounded-[26px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#E0B354] [&_blockquote]:pl-4 [&_blockquote]:italic"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-post-comments",
            "type": "section",
            "options": {
              "anchor": "comments"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16"
              }
            },
            "children": [
              {
                "id": "uh-post-comments-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-post-comments-h",
                    "type": "heading",
                    "options": {
                      "text": "Join the Conversation",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2B1B2E]"
                      }
                    }
                  },
                  {
                    "id": "uh-post-cmt",
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
                        "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[26px] border border-gray-100 bg-[#FFF8F0] p-5"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-post-cmt-loop",
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
                            "classes": "grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 rounded-[26px] border border-gray-100 bg-[#FFF8F0] p-5"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-post-cmt-av",
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
                                "classes": "h-12 w-12 rounded-full object-cover ring-2 ring-[#E1EFEA]"
                              }
                            }
                          },
                          {
                            "id": "uh-post-cmt-au",
                            "type": "commentAuthor",
                            "options": {
                              "label": "",
                              "tag": "div"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                              }
                            }
                          },
                          {
                            "id": "uh-post-cmt-co",
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
                        "id": "uh-post-cmt-form",
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
                            "classes": "rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,46,0.06)] lg:sticky lg:top-28"
                          },
                          "label": {
                            "classes": "font-body text-sm font-bold text-[#2B1B2E]"
                          },
                          "textarea": {
                            "classes": "h-32 w-full rounded-2xl border border-gray-200 bg-[#FFF8F0] px-4 py-3 text-sm text-[#2B1B2E] placeholder:text-gray-400 focus:border-[#2B1B2E] focus:outline-none focus:ring-2 focus:ring-[#2B1B2E]/20"
                          },
                          "submit": {
                            "classes": "inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#0F5C4A] px-6 py-3 font-body font-bold text-white shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#0A4638] disabled:opacity-50"
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
            "id": "uh-post-more",
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
                "id": "uh-post-more-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-post-more-h",
                    "type": "heading",
                    "options": {
                      "text": "More Gift Guides",
                      "tag": "h2"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "mb-8 font-heading text-3xl font-normal text-[#2B1B2E]"
                      }
                    }
                  },
                  {
                    "id": "uh-post-more-grid",
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
                        "classes": "group flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-post-more-grid-loop",
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
                            "classes": "group flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(43,27,46,0.06)]"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-post-more-grid-thumb",
                            "type": "postThumbnail",
                            "options": {
                              "linkTo": "postUrl"
                            },
                            "cssSelectors": {
                              "*": {
                                "classes": "block overflow-hidden bg-[#FFF8F0]"
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
                            "id": "uh-post-more-grid-body",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-1 flex-col gap-2 p-4"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-post-more-grid-date",
                                "type": "postDate",
                                "options": {
                                  "dateFormat": "MMM DD, YYYY",
                                  "linkTo": ""
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "font-body text-xs font-bold uppercase tracking-wider text-[#2B1B2E]"
                                  }
                                }
                              },
                              {
                                "id": "uh-post-more-grid-title",
                                "type": "postTitle",
                                "options": {
                                  "linkTo": "postUrl",
                                  "tag": "h3"
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "line-clamp-2 font-body text-base font-bold text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
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
            "id": "uh-acc-hero",
            "type": "section",
            "options": {
              "anchor": ""
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] bg-[radial-gradient(circle_at_90%_10%,#FCE8E5,transparent_40%)] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-acc-hero-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3 text-center"
                  }
                },
                "children": [
                  {
                    "id": "uh-acc-hero-k",
                    "type": "text",
                    "options": {
                      "text": "welcome back!",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-['Caveat'] text-2xl text-[#B5174F]"
                      }
                    }
                  },
                  {
                    "id": "uh-acc-hero-h",
                    "type": "heading",
                    "options": {
                      "text": "My Account",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-4xl font-normal text-[#2B1B2E] sm:text-5xl"
                      }
                    }
                  },
                  {
                    "id": "uh-acc-hero-p",
                    "type": "text",
                    "options": {
                      "text": "Track your gifts, save occasion reminders and keep your details up to date.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "max-w-2xl text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": "uh-acc-sec",
            "type": "section",
            "options": {
              "anchor": "account"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-12"
              }
            },
            "children": [
              {
                "id": "uh-acc-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-acc-1",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "w-full"
                      },
                      "welcome": {
                        "classes": "mb-8 flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#2B1B2E] p-6 text-white sm:flex-row sm:items-center sm:p-8"
                      },
                      "welcome-greeting": {
                        "classes": "font-body text-sm text-[#E0B354]"
                      },
                      "welcome-name": {
                        "classes": "font-heading text-2xl font-normal text-white"
                      },
                      "welcome-email": {
                        "classes": "text-sm text-gray-300"
                      },
                      "logout-button": {
                        "classes": "rounded-2xl bg-white/10 px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-[#0F5C4A]"
                      },
                      "avatar": {
                        "classes": "h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#0F5C4A]/10 ring-2 ring-white"
                      },
                      "avatar-initial": {
                        "classes": "flex h-full w-full items-center justify-center text-xl font-semibold text-[#0F5C4A]"
                      }
                    },
                    "type": "customerAccount",
                    "children": [
                      {
                        "id": "uh-acc-2",
                        "type": "customerAccountNotLogged",
                        "options": [],
                        "cssSelectors": {
                          "*": {
                            "classes": ""
                          }
                        },
                        "children": [
                          {
                            "id": "uh-acc-3",
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
                                "id": "uh-acc-4",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,46,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-5",
                                    "type": "register",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F5C4A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4638] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                      }
                                    }
                                  }
                                ],
                                "options": []
                              },
                              {
                                "id": "uh-acc-6",
                                "type": "gridItem",
                                "cssSelectors": {
                                  "*": {
                                    "classes": "rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_30px_rgba(43,27,46,0.06)] sm:p-8"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-7",
                                    "type": "login",
                                    "options": {
                                      "hideTitle": false
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15"
                                      },
                                      "submit-button": {
                                        "classes": "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F5C4A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4638] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                        "id": "uh-acc-8",
                        "type": "customerAccountLogged",
                        "options": [],
                        "children": [
                          {
                            "id": "uh-acc-9",
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
                                "classes": "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF8F0] px-5 py-2.5 font-body text-sm font-semibold text-[#2B1B2E] transition-colors hover:bg-gray-200"
                              },
                              "nav-item-active": {
                                "classes": "!bg-[#2B1B2E] !text-white shadow-md"
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
                                "id": "uh-acc-10",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-11",
                                    "type": "customerOrders",
                                    "options": [],
                                    "children": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "order-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5C4A]/10 text-[#0F5C4A]"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "id": "uh-acc-12",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-13",
                                    "type": "customerProfile",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "map-link": {
                                        "classes": "text-sm font-medium text-[#0F5C4A] hover:underline"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "uh-acc-14",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-15",
                                    "type": "customerSubscriptions",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "subscription-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5C4A]/10 text-[#0F5C4A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "uh-acc-16",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-17",
                                    "type": "customerTickets",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "contact-link": {
                                        "classes": "flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#0F5C4A]/40 hover:bg-[#0F5C4A]/5"
                                      },
                                      "contact-icon": {
                                        "classes": "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F5C4A]/10 text-[#0F5C4A]"
                                      }
                                    },
                                    "children": []
                                  }
                                ]
                              },
                              {
                                "id": "uh-acc-18",
                                "type": "tabsItem",
                                "options": [],
                                "cssSelectors": {
                                  "*": {
                                    "classes": ""
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-acc-19",
                                    "type": "customerProfileEdit",
                                    "options": [],
                                    "cssSelectors": {
                                      "*": {
                                        "classes": ""
                                      },
                                      "card-icon": {
                                        "classes": "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F5C4A]/10 text-[#0F5C4A]"
                                      },
                                      "field-input": {
                                        "classes": "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#0F5C4A] focus:outline-none focus:ring-2 focus:ring-[#0F5C4A]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                                      },
                                      "save-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F5C4A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0A4638] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                                      },
                                      "secondary-button": {
                                        "classes": "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C4A]/30 disabled:cursor-not-allowed disabled:opacity-50"
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
            "id": "uh-ty",
            "type": "section",
            "options": {
              "anchor": "thank-you"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-ty-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-ty-card",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex flex-col items-center gap-5 rounded-[2.5rem] border border-gray-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(43,27,46,0.06)] sm:p-12"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-ty-ic",
                        "type": "icon",
                        "options": {
                          "iconName": "IconConfetti",
                          "size": 40,
                          "label": ""
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "flex h-20 w-20 items-center justify-center rounded-full bg-[#FCE8E5] text-[#2B1B2E]"
                          }
                        }
                      },
                      {
                        "id": "uh-ty-k",
                        "type": "text",
                        "options": {
                          "text": "Order Received",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E1EFEA] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#0F5C4A]"
                          }
                        }
                      },
                      {
                        "id": "uh-ty-h",
                        "type": "heading",
                        "options": {
                          "text": "Yay! Your Gift Is Being Wrapped",
                          "tag": "h1"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B1B2E] sm:text-4xl"
                          }
                        }
                      },
                      {
                        "id": "uh-ty-p",
                        "type": "text",
                        "options": {
                          "text": "We’re wrapping it with care and writing your card. A confirmation is on its way, and you can follow the order from your account.",
                          "tag": "p"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "max-w-xl text-sm leading-relaxed text-[#7A6870] sm:text-base"
                          }
                        }
                      },
                      {
                        "id": "uh-ty-steps",
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
                              "text": "Your gift is wrapped and your card hand-written",
                              "icon": ""
                            },
                            {
                              "text": "Delivered on your chosen day, with no price tag inside",
                              "icon": ""
                            }
                          ]
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "mx-auto flex w-full max-w-md list-decimal flex-col gap-3 rounded-[26px] bg-[#FFF8F0] p-6 pl-10 text-left text-sm text-gray-600"
                          },
                          "li": {
                            "classes": "pl-1 marker:font-body marker:font-bold marker:text-[#0F5C4A]"
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
                        "id": "uh-ty-btns",
                        "type": "container",
                        "options": {},
                        "cssSelectors": {
                          "*": {
                            "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                          }
                        },
                        "children": [
                          {
                            "id": "uh-ty-shop",
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
                                "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F5C4A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A4638] w-full sm:w-auto"
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
                            "id": "uh-ty-orders",
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
                                "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B1B2E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B1B2E] w-full sm:w-auto"
                              },
                              "icon": {
                                "classes": "flex items-center shrink-0 text-[#2B1B2E] group-hover:text-white"
                              },
                              "label": {
                                "classes": "font-body text-lg font-bold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
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
            "id": "uh-ty-promise",
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
                "id": "uh-ty-promise-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-ty-promise-fb",
                    "type": "featurebox",
                    "options": {
                      "tag": "div",
                      "icon": "",
                      "iconSize": "",
                      "items": [
                        {
                          "title": "Free gift wrap",
                          "description": "With a handwritten card",
                          "icon": "IconGift",
                          "iconSize": ""
                        },
                        {
                          "title": "Same-day delivery",
                          "description": "Order by 2 pm in Dhaka",
                          "icon": "IconTruckDelivery",
                          "iconSize": ""
                        },
                        {
                          "title": "No price tags",
                          "description": "Surprise-safe parcels",
                          "icon": "IconEyeOff",
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
                        "classes": "font-heading text-xl text-[#2B1B2E]"
                      },
                      "description": {
                        "classes": "text-xs text-gray-500"
                      },
                      "icon": {
                        "classes": "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FCE8E5] text-[#0F5C4A]"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-ty-promise-fb-ic",
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
                        "id": "uh-ty-promise-fb-t",
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
                        "id": "uh-ty-promise-fb-d",
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
            "id": "uh-nf",
            "type": "section",
            "options": {
              "anchor": "not-found"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0] py-14 sm:py-16"
              }
            },
            "children": [
              {
                "id": "uh-nf-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto flex w-full max-w-2xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-nf-code",
                    "type": "text",
                    "options": {
                      "text": "404",
                      "tag": "span"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-8xl font-normal text-[#0F5C4A] sm:text-9xl"
                      }
                    }
                  },
                  {
                    "id": "uh-nf-ic",
                    "type": "icon",
                    "options": {
                      "iconName": "IconMoodSearch",
                      "size": 36,
                      "label": ""
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8F0] text-[#2B1B2E]"
                      }
                    }
                  },
                  {
                    "id": "uh-nf-h",
                    "type": "heading",
                    "options": {
                      "text": "Oops! This Page Got Unwrapped",
                      "tag": "h1"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "font-heading text-3xl font-normal text-[#2B1B2E] sm:text-4xl"
                      }
                    }
                  },
                  {
                    "id": "uh-nf-p",
                    "type": "text",
                    "options": {
                      "text": "The link may be broken or the gift may have sold out. Head back home or try the gift finder.",
                      "tag": "p"
                    },
                    "cssSelectors": {
                      "*": {
                        "classes": "text-sm text-[#7A6870] sm:text-base"
                      }
                    }
                  },
                  {
                    "id": "uh-nf-btns",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "flex w-full flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-nf-home",
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
                            "classes": "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F5C4A] px-8 py-4 cursor-pointer shadow-[0_10px_25px_-5px_rgba(15,92,74,0.2),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-[#0A4638] w-full sm:w-auto"
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
                        "id": "uh-nf-shop",
                        "type": "button",
                        "options": {
                          "text": "Shop All Gifts",
                          "linkTo": "custom",
                          "scheme": "",
                          "url": "/shop",
                          "target": "",
                          "icon": "IconArrowRight",
                          "iconSize": 18
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2B1B2E] bg-white px-7 py-4 cursor-pointer shadow-sm transition-all hover:-translate-y-1 hover:bg-[#2B1B2E] w-full sm:w-auto"
                          },
                          "icon": {
                            "classes": "flex items-center shrink-0 text-[#2B1B2E] group-hover:text-white"
                          },
                          "label": {
                            "classes": "font-body text-lg font-bold text-[#2B1B2E] whitespace-nowrap group-hover:text-white"
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
            "id": "uh-nf-popular",
            "type": "section",
            "options": {
              "anchor": "popular"
            },
            "cssSelectors": {
              "*": {
                "classes": "w-full bg-[#FFF8F0] py-16"
              }
            },
            "children": [
              {
                "id": "uh-nf-popular-in",
                "type": "container",
                "options": {},
                "cssSelectors": {
                  "*": {
                    "classes": "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                  }
                },
                "children": [
                  {
                    "id": "uh-nf-popular-head",
                    "type": "container",
                    "options": {},
                    "cssSelectors": {
                      "*": {
                        "classes": "mx-auto mb-12 flex max-w-2xl flex-col items-center gap-2 text-center"
                      }
                    },
                    "children": [
                      {
                        "id": "uh-nf-popular-head-k",
                        "type": "text",
                        "options": {
                          "text": "Still Looking?",
                          "tag": "span"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "inline-block rounded-full bg-[#E0B354] px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#2B1B2E]"
                          }
                        }
                      },
                      {
                        "id": "uh-nf-popular-head-h",
                        "type": "heading",
                        "options": {
                          "text": "Popular Right Now",
                          "tag": "h2"
                        },
                        "cssSelectors": {
                          "*": {
                            "classes": "font-heading text-3xl font-normal text-[#2B1B2E] sm:text-4xl"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "id": "uh-nf-grid",
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
                        "id": "uh-nf-grid-loop",
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
                            "id": "uh-nf-grid-c-top",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex flex-col"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-nf-grid-c-media",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "relative"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-nf-grid-c-thumb",
                                    "type": "postThumbnail",
                                    "options": {
                                      "linkTo": "postUrl"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "relative block overflow-hidden rounded-[24px] bg-[#F7ECDF]"
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
                                    "id": "uh-nf-grid-c-off",
                                    "type": "productDiscount",
                                    "options": {
                                      "label": "OFF"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "pointer-events-none absolute left-0 top-4 z-[3] flex items-center gap-1 bg-[#B5174F] py-1 pl-3 pr-2.5 font-body text-[11px] font-extrabold uppercase text-white [clip-path:polygon(0_0,100%_0,calc(100%-8px)_50%,100%_100%,0_100%)]"
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
                                "id": "uh-nf-grid-c-info",
                                "type": "container",
                                "options": {},
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex flex-col gap-0.5 px-1 pt-4"
                                  }
                                },
                                "children": [
                                  {
                                    "id": "uh-nf-grid-c-rate",
                                    "type": "productRatings",
                                    "options": {
                                      "hideIfEmpty": true
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "order-last flex items-center gap-1 text-[11px]"
                                      },
                                      "star-rate": {
                                        "classes": "flex items-center gap-0.5 text-[#E0B354]"
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
                                    "id": "uh-nf-grid-c-title",
                                    "type": "postTitle",
                                    "options": {
                                      "linkTo": "postUrl",
                                      "tag": "h3"
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-2 font-body text-[15px] font-bold leading-snug text-[#2B1B2E] transition-colors group-hover:text-[#0F5C4A]"
                                      }
                                    }
                                  },
                                  {
                                    "id": "uh-nf-grid-c-ex",
                                    "type": "postExcerpt",
                                    "options": {
                                      "maxWord": 6,
                                      "readMoreText": "",
                                      "readMoreIcon": "",
                                      "readMoreIconSize": 16
                                    },
                                    "cssSelectors": {
                                      "*": {
                                        "classes": "line-clamp-1 font-['Caveat'] text-lg leading-tight text-[#B5174F]"
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
                            "id": "uh-nf-grid-c-foot",
                            "type": "container",
                            "options": {},
                            "cssSelectors": {
                              "*": {
                                "classes": "flex items-center justify-between gap-2 px-1 pt-3"
                              }
                            },
                            "children": [
                              {
                                "id": "uh-nf-grid-c-price",
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
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "simple-price-regular": {
                                    "classes": "font-body text-xs text-[#7A6870] line-through"
                                  },
                                  "variable-price-wrap": {
                                    "classes": "flex items-baseline gap-1"
                                  },
                                  "variable-price-min": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "variable-price-max": {
                                    "classes": "font-heading text-xl text-[#2B1B2E]"
                                  },
                                  "price-separator": {
                                    "classes": "text-gray-400"
                                  },
                                  "pwyw-price": {
                                    "classes": "text-2xl text-[#0F5C4A]"
                                  },
                                  "pwyw-edit": {
                                    "classes": "text-xl text-[#0F5C4A] cursor-pointer"
                                  }
                                }
                              },
                              {
                                "id": "uh-nf-grid-c-add",
                                "type": "addToCart",
                                "options": {
                                  "buttonText": "Add to bag",
                                  "hideQuantity": true,
                                  "hideButton": false,
                                  "icon": "IconGift",
                                  "iconSize": 18
                                },
                                "cssSelectors": {
                                  "*": {
                                    "classes": "flex items-center"
                                  },
                                  "button-wrapper": {
                                    "classes": "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0F5C4A] text-white transition-all hover:rotate-12 hover:bg-[#B5174F]"
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
